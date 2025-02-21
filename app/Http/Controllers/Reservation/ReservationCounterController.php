<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reservation\ReservationCounterRequest;
use App\Http\Resources\Reservation\ReservationCounterResource;
use App\Models\Auth\JoinAs;
use App\Models\Reservation\Car;
use App\Models\Reservation\ReservationCarCategory;
use App\Models\Reservation\ReservationCarQuestion;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeBreak;
use App\Models\Reservation\ReservationEmployeeDayOff;
use App\Models\Reservation\ReservationTeam;
use App\Models\ReservationOnOff;
use App\Models\TemporaryFile;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class ReservationCounterController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationCompany = ReservationCompany::where('user_id', auth()->user()->id)->first();
        if ($reservationCompany->reservation_category_id == 2) {
            $reservationCounters = ReservationCounter::query()
                ->with('team', 'media', 'cars', 'company', 'category')
                ->whereHas('category')
                ->where('user_id', auth()->user()->id);
        }
        if ($reservationCompany->reservation_category_id == 1) {
            $reservationCounters = ReservationCounter::query()
                ->with('team', 'media', 'cars', 'company', 'category')
                // ->whereHas('category')
                ->where('user_id', auth()->user()->id);
        }

        if ($request->q) {
            $reservationCounters->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservationCounters->orderBy($request->field, $request->direction);
        }
        $reservationCounters = (ReservationCounterResource::collection($reservationCounters->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 15,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        $cars = Car::where('reservation_company_id', 0)->orWhere('reservation_company_id', auth()->user()->company->id)->get();
        $reservationCarCategories = ReservationCarCategory::where('reservation_company_id', auth()->user()->company->id)->get();
        $reservationCompany = ReservationCompany::where('id', auth()->user()->company->id)->first();
        return inertia('Reservation/Counter/Basic/Index', ['reservationCounters' => $reservationCounters, 'cars' => $cars, 'reservationCarCategories' => $reservationCarCategories, 'reservationCompany' => $reservationCompany]);
    }
    public function create()
    {
        $joinas = JoinAs::get();
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $reservationCarCategories = ReservationCarCategory::where('reservation_company_id', auth()->user()->company->id)->get();
        $onOff = ReservationOnOff::select('id', 'value', 'name')->get();
        return inertia('Reservation/Counter/Basic/Create', ['onOff' => $onOff, 'reservationCarCategories' => $reservationCarCategories, 'company' => $company]);
    }

    public function store(ReservationCounterRequest $request)
    {
        // dd($request->all());
        // $reservationCompany = ReservationCompany::where('user_id', auth()->user()->id)->pluck('id');
        $reservationCompany = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $atrributes = ([
            'reservation_company_id' => $reservationCompany->id,
            'user_id' => auth()->user()->id,
            'name' => $name = $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'code' => (Str::random(6)),
            'price_user' => $price_user = $request->price_user,
            'price' => ceil($price_user * 105 / 100),
            'bhp' =>  $request->bhp,
            'jasa' =>  $request->jasa,
            'bonus_khusus' =>  $request->bonus_khusus,
            'description' =>  $request->description,
            'percent_owner' =>  $request->percent_owner,
            'percent_employe' => $request->percent_employe,
            'deposit' => $request->deposit,
            'jumlahlayanandiskon' => $request->jumlahlayanandiskon,
            // 'close_at' => $request->close_at,
            'service_duration' => $request->service_duration,
            'set_dayoff' => 0,
            'period' => $request->period,
            'need_image_reservation' => 0,
            'need_image_before_after' => 0,
            'need_team' => 0,
            'is_active' => 1,
            'reservation_car_category_id' => $request->reservation_car_category_id,
        ]);
        // dd($atrributes);
        $reservationCounter = ReservationCounter::create($atrributes);
        $temporaryFolderCounter = Session::get('foldercounter');
        $namefilecounter = Session::get('filenamecounter');
        if ($temporaryFolderCounter) {
            for ($i = 0; $i < count($temporaryFolderCounter); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderCounter[$i])->where('filename', $namefilecounter[$i])->first();
                if ($temporary) {
                    $reservationCounter->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderCounter[$i] . '/' . $namefilecounter[$i]))
                        ->toMediaCollection('reservationcounter');
                    $path = storage_path() . '/app/public/files/tmp/' . $temporary->folder;
                    if (File::exists($path)) {
                        File::delete($path);
                        rmdir(storage_path('app/public/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
        Session::remove('foldercounter');
        Session::remove('filenamecounter');

        return redirect('reservationCounters')->with([
            'type' => 'success',
            'message' => 'Pelayanan berhasil disimpan',
        ]);
    }

    public function update_set_cars(Request $request, $id)
    {
        // dd($request->all());
        $reservationCounter = ReservationCounter::findOrFail($request->id);
        // dd($reservationCounter);
        $cek = $reservationCounter->cars()->sync($request->cars);
        // dd($cek);
        return redirect('reservationCounters')->with([
            'type' => 'success',
            'message' => 'Kendaraan berhasil di atur',
        ]);
        // dd($reservationCounter);
        // foreach ($request->cars as $key => $value) {
        //     # code...
        // }
        // dd($request,$id);
    }

    public function show(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter)
    {
        // $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)
        //     ->withAvg('ratings', 'star_rating')->withCount('ratings')
        //     ->withCount('customers')->with('teamdetail')
        //     ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', 'reservation_teams.id')
        //     ->leftJoin('media', function ($join) {
        //         $join->on('media.model_id', '=', 'reservation_team_details.user_id')
        //             ->where('media.model_type', '=', 'App\Models\User');
        //     })
        //     ->addSelect('media.file_name', 'media.id as media_id','reservation_team_details.user_id')
        //     ->orderBy('ratings_avg_star_rating', 'DESC')->get();

        $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)
            ->withCount('customers')
            ->with('teamdetail')
            ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', '=', 'reservation_teams.id')
            ->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_team_details.user_id')
                    ->where('media.model_type', '=', 'App\Models\User');
            })
            ->leftJoin('reservation_ratings', 'reservation_ratings.user_id', '=', 'reservation_team_details.user_id')
            ->select('reservation_teams.*', 'media.file_name', 'media.id as media_id', 'reservation_team_details.user_id')
            ->selectRaw('COUNT(reservation_ratings.id) as ratings_count')
            ->selectRaw('AVG(reservation_ratings.star_rating) as ratings_avg_star_rating')
            ->groupBy('reservation_teams.id', 'media.file_name', 'media.id', 'reservation_team_details.user_id')
            ->orderBy('ratings_avg_star_rating', 'DESC')
            ->get();
        // dd($team);
        // $rating = 


        //     dd($team);
        $offDay = ReservationEmployeeDayOff::where('reservation_company_id', $reservationCompany->id)->where('approved', 1)->where('batal', 0)->get();
        $workBreak = ReservationEmployeeBreak::where('reservation_company_id', $reservationCompany->id)->get();
        // dd($workBreak);
        $currentDate = Carbon::now(); // Get the current date and time
        $endDate = $currentDate->copy()->addDays($reservationCounter->period);
        return inertia('Reservation/Counter/Basic/Show', ['reservationCompany' => $reservationCompany, 'team' => $team, 'offDay' => $offDay, 'workBreak' => $workBreak, 'reservationCounter' => $reservationCounter, 'endDate' => $endDate->toDateString()]);
    }

    public function show_car(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter, Car $car)
    {
        // dd("test");
        $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)
            ->withCount('customers')
            ->with('teamdetail')
            ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', '=', 'reservation_teams.id')
            ->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_team_details.user_id')
                    ->where('media.model_type', '=', 'App\Models\User');
            })
            ->leftJoin('reservation_ratings', 'reservation_ratings.user_id', '=', 'reservation_team_details.user_id')
            ->select('reservation_teams.*', 'media.file_name', 'media.id as media_id')
            ->selectRaw('COUNT(reservation_ratings.id) as ratings_count')
            ->selectRaw('AVG(reservation_ratings.star_rating) as ratings_avg_star_rating')

            ->groupBy('reservation_teams.id', 'media.file_name', 'media.id')
            ->orderBy('ratings_avg_star_rating', 'DESC')
            // ->distinct()
            ->get();
        // dd($team);
        $offDay = ReservationEmployeeDayOff::where('reservation_company_id', $reservationCompany->id)->where('approved', 1)->where('batal', 0)->get();
        $workBreak = ReservationEmployeeBreak::where('reservation_company_id', $reservationCompany->id)->get();
        $currentDate = Carbon::now(); // Get the current date and time
        $endDate = $currentDate->copy()->addDays($reservationCounter->period);
        $question = ReservationCarQuestion::where('reservation_company_id', $reservationCompany->id)->get();
        return inertia('Reservation/Counter/Basic/Show', ['reservationCompany' => $reservationCompany, 'team' => $team, 'offDay' => $offDay, 'workBreak' => $workBreak, 'reservationCounter' => $reservationCounter, 'question' => $question, 'endDate' => $endDate->toDateString()]);
    }

    public function change(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter, $id)
    {
        $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)
            ->withAvg('ratings', 'star_rating')->withCount('ratings')->withCount('customers')->with('teamdetail')
            ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', 'reservation_teams.id')
            ->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_team_details.user_id')
                    ->where('media.model_type', '=', 'App\Models\User');
            })
            ->addSelect('media.file_name', 'media.id as media_id', 'reservation_team_details.user_id')
            ->orderBy('ratings_avg_star_rating', 'DESC')->get();


        // dd($team);
        $offDay = ReservationEmployeeDayOff::where('reservation_company_id', $reservationCompany->id)->where('approved', 1)->where('batal', 0)->get();
        $workBreak = ReservationEmployeeBreak::where('reservation_company_id', $reservationCompany->id)->get();
        // dd($workBreak);
        $currentDate = Carbon::now(); // Get the current date and time
        $endDate = $currentDate->copy()->addDays($reservationCounter->period);
        return inertia('Reservation/Counter/Change/Show', ['reservationCompany' => $reservationCompany, 'idExist' => $id, 'team' => $team, 'offDay' => $offDay, 'workBreak' => $workBreak, 'reservationCounter' => $reservationCounter, 'endDate' => $endDate->toDateString()]);
    }


    public function edit(ReservationCounter $reservationCounter)
    {
        $media = $reservationCounter->getMedia('reservationcounter');
        $reservationCarCategories = ReservationCarCategory::where('reservation_company_id', auth()->user()->company->id)->get();
        // dd($reservationCounter);
        return inertia('Reservation/Counter/Basic/Edit', [
            'reservationCounter' => $reservationCounter,
            'media' => $media,
            'reservationCarCategories' => $reservationCarCategories,
        ]);
    }

    public function update(ReservationCounterRequest $request, ReservationCounter $reservationCounter)
    {
        // dd($reservationCounter);
        $atrributes = ([
            'name' => $name = $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'code' => (Str::random(6)),
            'price_user' => $price_user = $request->price_user,
            'price' => ceil($price_user * 105 / 100),
            'description' =>  $request->description,
            'bhp' =>  $request->bhp,
            'jasa' =>  $request->jasa,
            'bonus_khusus' =>  $request->bonus_khusus,
            'percent_owner' =>  $request->percent_owner,
            'percent_employe' => $request->percent_employe,
            'deposit' => $request->deposit,
            'service_duration' => $request->service_duration,
            'period' => $request->period,
            'reservation_car_category_id' => $request->reservation_car_category_id,
        ]);

        $reservationCounter->update($atrributes);
        $temporaryFolderCounter = Session::get('foldercounter');
        $namefilecounter = Session::get('filenamecounter');
        if ($temporaryFolderCounter) {
            for ($i = 0; $i < count($temporaryFolderCounter); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderCounter[$i])->where('filename', $namefilecounter[$i])->first();
                if ($temporary) {
                    $reservationCounter->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderCounter[$i] . '/' . $namefilecounter[$i]))
                        ->toMediaCollection('reservationcounter');
                    $path = storage_path() . '/app/public/files/tmp/' . $temporary->folder;
                    if (File::exists($path)) {
                        File::delete($path);
                        rmdir(storage_path('app/public/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
        Session::remove('foldercounter');
        Session::remove('filenamecounter');
        return redirect('reservationCounters')->with([
            'type' => 'success',
            'message' => 'Pelayanan berhasil diubah',
        ]);
    }

    public function destroy($id)
    {
        ReservationCounter::where('id', $id)
            ->update(['is_active' => 0]);
        return redirect('reservationCounters')->with([
            'type' => 'success',
            'message' => 'Layanan berhasil di nonaktifkan',
        ]);
    }

    public function active($id)
    {
        ReservationCounter::where('id', $id)
            ->update(['is_active' => 1]);
        return redirect('reservationCounters')->with([
            'type' => 'success',
            'message' => 'Layanan berhasil di aktifkan kembali',
        ]);
    }

    public function list(Request $request)
    {
        $reservation_categories = ReservationCategory::get();
        $reservationCounters = ReservationCounter::query()
            ->with('reservation_company')
            ->where('is_approved', 1)
            // ->when($request->reservation_category, fn ($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
            ->select('*');
        if ($request->q) {
            $reservationCounters->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('formattedAddress', 'like', '%' . $request->q . '%')
                ->orWhere('reservation_category_id', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservationCounters->orderBy($request->field, $request->direction);
        }
        $reservations = (ReservationCounterResource::collection($reservationCounters->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        return inertia('Reservation/Public/Counter/List', ['reservations' => $reservations, 'reservation_categories' => $reservation_categories]);
    }
    public function settingteam(ReservationCounter $reservationCounter, ReservationTeam $reservationTeam)
    {
        if (auth()->user()->company->reservationcategory->name == 'Cuci Mobil') {
            $employees = ReservationEmployee::with('user')->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_employees.user_id')
                    ->where('media.model_type', '=', 'App\Models\User');
            })
                ->addSelect('reservation_employees.id', 'media.file_name', 'media.id as media_id', 'reservation_employees.user_id')->where('reservation_company_id', $reservationCounter->reservation_company_id)->get();
            $reservationCounter = ReservationCounter::with('team.joincounter')
                ->where('reservation_counters.id', $reservationCounter->id)
                ->first();
            return inertia('Reservation/Counter/Basic/SettingTeamCar', ['reservationTeam' => $reservationTeam, 'reservationCounter' => $reservationCounter, 'employees' => $employees]);
        }

        if (auth()->user()->company->reservationcategory->name == 'Barber Shop') {
            $employees = ReservationEmployee::with('user')->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_employees.user_id')
                    ->where('media.model_type', '=', 'App\Models\User');
            })
                ->addSelect('reservation_employees.id', 'media.file_name', 'media.id as media_id', 'reservation_employees.user_id')->where('reservation_company_id', $reservationCounter->reservation_company_id)->get();
            $reservationCounter = ReservationCounter::with('team.joincounter')
                ->where('reservation_counters.id', $reservationCounter->id)
                ->first();
            return inertia('Reservation/Counter/Basic/SettingTeam', ['reservationTeam' => $reservationTeam, 'reservationCounter' => $reservationCounter, 'employees' => $employees]);
        }
    }
}
