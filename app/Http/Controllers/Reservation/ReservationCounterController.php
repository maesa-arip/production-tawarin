<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reservation\ReservationCounterRequest;
use App\Http\Resources\Reservation\ReservationCounterResource;
use App\Models\Auth\JoinAs;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationTeam;
use App\Models\ReservationOnOff;
use App\Models\TemporaryFile;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class ReservationCounterController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationCounters = ReservationCounter::query()
            ->with('team')
            ->with('media')
            ->with('company')
            ->where('user_id', auth()->user()->id);
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
        return inertia('Reservation/Counter/Basic/Index', ['reservationCounters' => $reservationCounters]);
    }
    public function create()
    {
        $joinas = JoinAs::get();
        $onOff = ReservationOnOff::select('id','value','name')->get();
        return inertia('Reservation/Counter/Basic/Create',['onOff'=>$onOff]);
    }

    public function store(ReservationCounterRequest $request)
    {
        $reservationCompany = ReservationCompany::where('user_id',auth()->user()->id)->pluck('id');
        $atrributes = ([
            'reservation_company_id' => $reservationCompany[0],
            'user_id' => auth()->user()->id,
            'name' => $name = $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'code' => (Str::random(6)),
            'price_user' => $price_user = $request->price_user,
            'price' => ceil($price_user * 105/100),
            'bhp' =>  $request->bhp,
            'jasa' =>  $request->jasa,
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

    public function show(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter)
    {
        $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)
        ->withAvg('ratings','star_rating')->withCount('ratings')->withCount('customers')->with('teamdetail')
        ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', 'reservation_teams.id')
        ->leftJoin('media', function ($join) {
            $join->on('media.model_id', '=', 'reservation_team_details.user_id')
                ->where('media.model_type', '=', 'App\Models\User');
        })
        ->addSelect('media.file_name','media.id as media_id')
        ->orderBy('ratings_avg_star_rating','DESC')->get();
        
        $currentDate = Carbon::now(); // Get the current date and time
        $endDate = $currentDate->copy()->addDays($reservationCounter->period); // Add 30 days to the current date
        return inertia('Reservation/Counter/Basic/Show', ['reservationCompany'=> $reservationCompany,'team'=>$team,'reservationCounter'=> $reservationCounter, 'endDate' => $endDate->toDateString()]);
    }


    public function edit(ReservationCounter $reservationCounter)
    {
        $media = $reservationCounter->getMedia('reservationcounter');
        return inertia('Reservation/Counter/Basic/Edit', [
            'reservationCounter' => $reservationCounter,
            'media' => $media,
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
            'price' => ceil($price_user * 105/100),
            'description' =>  $request->description,
            'bhp' =>  $request->bhp,
            'jasa' =>  $request->jasa,
            'percent_owner' =>  $request->percent_owner,
            'percent_employe' => $request->percent_employe,
            'deposit' => $request->deposit,
            'service_duration' => $request->service_duration,
            'period' => $request->period,
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
        $plan = Plan::findOrfail($id);
        $plan->delete();
        return redirect('plans')->with([
            'type' => 'success',
            'message' => 'Perencanaan berhasil dihapus',
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
        return inertia('Reservation/Public/Counter/List', ['reservations' => $reservations,'reservation_categories' => $reservation_categories]);
    }
    public function settingteam(ReservationCounter $reservationCounter, ReservationTeam $reservationTeam)
    {
        // dd($reservationCounter);
        $reservationCounter = ReservationCounter::with('team.joincounter')
        ->where('reservation_counters.id',$reservationCounter->id)
        ->first();
        // $team = ReservationCounter::leftjoin('reservation_teams','reservation_teams.reservation_counter_id','reservation_counters.id')
        // ->where('reservation_counters.id',$reservationCounter->id)
        // ->select('reservation_counters.*','reservation_teams.name as teamName','reservation_teams.slug as teamSlug')
        // ->first();
        // ReservationTeam::where('reservation_counter_id', $reservationCounter->id)->get();
        return inertia('Reservation/Counter/Basic/SettingTeam', ['reservationTeam'=> $reservationTeam,'reservationCounter'=> $reservationCounter]);
    }
}
