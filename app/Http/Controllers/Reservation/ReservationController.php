<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyProfileUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\ArrayResource;
use App\Http\Resources\Reservation\ReservationCounterCarResource;
use App\Http\Resources\Reservation\ReservationCounterResource;
use App\Http\Resources\Reservation\ReservationResource;
use App\Models\Auth\JoinAs;
use App\Models\Reservation\DaftarCounter;
use App\Models\Reservation\ReservationBreakTimeSetting;
use App\Models\Reservation\ReservationCarAnswer;
use App\Models\Reservation\ReservationCategory;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationCounterCar;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationDaftarCounter;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeDayOff;
use App\Models\Reservation\ReservationJoinCounter;
use App\Models\Reservation\ReservationRating;
use App\Models\Reservation\ReservationRatingCategory;
use App\Models\Reservation\ReservationRatingDetail;
use App\Models\Reservation\ReservationTeam;
use App\Models\Reservation\ReservationTeamDetail;
use App\Models\TemporaryFile;
use App\Models\Tip;
use App\Models\User;
use App\Notifications\Reservation\ReservationAcceptComplaintNotification;
use App\Notifications\Reservation\ReservationDeclineComplaintNotification;
use App\Notifications\Reservation\ReservationNotification;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Bavix\Wallet\External\Dto\Extra;
use Bavix\Wallet\External\Dto\Option;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    public function edit(Request $request)
    {
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $reservation_categories = ReservationCategory::get();
        $media = $company?->getMedia('reservationcompany');
        return Inertia::render('Reservation/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'reservation_categories' => $reservation_categories,
            'company' => $company,
            'media' => $media,
        ]);
    }

    public function update(CompanyProfileUpdateRequest $request)
    {
        $atrributes = ([
            'name' => $name = $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'lat' => $request->lat,
            'lng' => $request->lng,
            'open_at' => $request->open_at,
            'close_at' => $request->close_at,
            'formattedAddress' => $request->formattedAddress,
            'is_approved' => 1,
            'user_id' => auth()->user()->id,
            'reservation_category_id' => $request->reservation_category_id,
        ]);
        $reservationCompany = ReservationCompany::updateOrCreate(['user_id' => auth()->user()->id], $atrributes);
        $temporaryFolderCompany = Session::get('foldercompany');
        $namefilecounter = Session::get('filenamecompany');
        if ($temporaryFolderCompany) {
            for ($i = 0; $i < count($temporaryFolderCompany); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderCompany[$i])->where('filename', $namefilecounter[$i])->first();
                if ($temporary) {
                    $reservationCompany->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderCompany[$i] . '/' . $namefilecounter[$i]))
                        ->toMediaCollection('reservationcompany');
                    $path = storage_path() . '/app/public/files/tmp/' . $temporary->folder;
                    if (File::exists($path)) {
                        File::delete($path);
                        rmdir(storage_path('app/public/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
        Session::remove('foldercompany');
        Session::remove('filenamecompany');

        return Redirect::route('reservationprofile.edit')->with([
            'type' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
    public $loadDefault = 10;
    public function show(ReservationCompany $reservationCompany, Request $request)
    {
        $reservation_categories = ReservationCategory::get();
        if ($reservationCompany->reservationcategory->name == 'Cuci Mobil') {
            $reservations = ReservationCounter::join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
                ->join('reservation_car_categories', 'reservation_car_categories.id', 'reservation_counters.reservation_car_category_id')
                ->join('reservation_counter_cars', 'reservation_counter_cars.reservation_counter_id', 'reservation_counters.id')
                ->join('cars', 'cars.id', 'reservation_counter_cars.car_id')
                ->join('reservation_categories', 'reservation_categories.id', 'reservation_companies.reservation_category_id')
                ->select('reservation_companies.name as company_name', 'reservation_companies.slug as company_slug', 'reservation_counters.name as counter_name', 'reservation_counters.slug as counter_slug', 'reservation_categories.name as category_name', 'cars.name as car_name', 'reservation_counters.description', 'reservation_counters.price', 'reservation_counters.service_duration', 'reservation_car_categories.name as category_counter_name')
                ->where('reservation_counters.is_active', '1')
                ->orderBy('cars.name', 'ASC');
            if ($request->q) {
                $reservations->where('cars.name', 'like', '%' . $request->q . '%');
            }
            $reservations = (ArrayResource::collection($reservations->fastPaginate($request->load)->withQueryString())
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
            return inertia('Reservation/Company/Public/ListCar', ['reservations' => $reservations, 'reservationCompany' => $reservationCompany, 'reservation_categories' => $reservation_categories]);
        };

        if ($reservationCompany->reservationcategory->name == 'Barber Shop') {
            $reservations = ReservationCounter::query()
                ->with('company')
                ->with('cars')
                ->with('category')
                ->where('reservation_counters.is_active', 1)
                ->where('reservation_company_id', $reservationCompany->id)
                // ->when($request->reservation_category, fn ($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
                ->select('*');

            if ($request->q) {
                $reservations->where('name', 'like', '%' . $request->q . '%')
                    ->orWhere('slug', 'like', '%' . $request->q . '%')
                    ->orWhere('formattedAddress', 'like', '%' . $request->q . '%')
                    ->orWhere('reservation_category_id', 'like', '%' . $request->q . '%');
            }
            if ($request->has(['field', 'direction'])) {
                $reservations->orderBy($request->field, $request->direction);
            }
            $reservations = (ReservationCounterResource::collection($reservations->latest()->fastPaginate($request->load)->withQueryString())
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
            return inertia('Reservation/Company/Public/List', ['reservations' => $reservations, 'reservationCompany' => $reservationCompany, 'reservation_categories' => $reservation_categories]);
        };
    }
    public function change(ReservationCompany $reservationCompany, $id, Request $request)
    {
        // dd($reservationCompany);
        $reservation_categories = ReservationCategory::get();
        $reservations = ReservationCounter::query()
            ->with('company')
            ->where('reservation_counters.is_active', 1)
            ->where('reservation_company_id', $reservationCompany->id)
            // ->when($request->reservation_category, fn ($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
            ->select('*');
        if ($request->q) {
            $reservations->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('formattedAddress', 'like', '%' . $request->q . '%')
                ->orWhere('reservation_category_id', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservations->orderBy($request->field, $request->direction);
        }
        $reservations = (ReservationCounterResource::collection($reservations->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Reservation/Company/Change/List', ['reservations' => $reservations, 'reservationCompany' => $reservationCompany, 'reservation_categories' => $reservation_categories, 'idExist' => $id]);
    }


    public function list(Request $request)
    {
        // dd($reservationCompany->slug);
        $reservation_categories = ReservationCategory::get();
        $reservations = ReservationCompany::query()
            ->with('reservation_category')
            ->with('media')
            ->with('reservationcategory')
            ->where('is_approved', 1)
            ->when($request->reservation_category, fn($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
            ->select('id', 'name', 'formattedAddress', 'is_approved', 'reservation_category_id', 'slug', 'reservation_companies.created_at')
            ->addSelect([
                // Key is the alias, value is the sub-select
                'reviews_count' => ReservationRating::query()
                    ->join('reservation_teams', 'reservation_teams.id', 'reservation_ratings.reservation_team_id')
                    ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
                    ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
                    // You can use eloquent methods here
                    // ->select('reservation_teams.id')
                    ->selectRaw('COUNT(*)')
                    ->whereColumn('reservation_company_id', 'reservation_companies.id')
                // ->count()
                // ->latest()
                // ->take(1)
            ])
            ->addSelect([
                // Key is the alias, value is the sub-select
                'average_rating' => ReservationRating::query()
                    ->join('reservation_teams', 'reservation_teams.id', 'reservation_ratings.reservation_team_id')
                    ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
                    ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
                    // You can use eloquent methods here
                    // ->select('reservation_teams.id')
                    ->selectRaw('AVG(star_rating)')
                    ->whereColumn('reservation_company_id', 'reservation_companies.id')
                // ->count()
                // ->latest()
                // ->take(1)
            ]);
        // dd($reservations);
        if ($request->q) {
            $reservations->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('formattedAddress', 'like', '%' . $request->q . '%')
                ->orWhere('reservation_category_id', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservations->orderBy($request->field, $request->direction);
        }
        $reservations = (ReservationResource::collection($reservations->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Reservation/Public/List', ['reservations' => $reservations, 'reservation_categories' => $reservation_categories]);
    }

    public function store(Request $request)
    {


        $date = Carbon::parse(strtotime($request->date));
        $atrributes = ([
            'reservation_team_id' => $request->reservation_team_id,
            'user_id' => auth()->user()->id,
            'date' =>  $date->format('Y-m-d'),
            'time' =>  $request->time,
            'code' =>  Str::random(8),
        ]);
        // dd($date,$atrributes);
        $harga = ReservationTeam::join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')->where('reservation_teams.id', $request->reservation_team_id)->pluck('price')->first();
        $reservationTeam = ReservationTeam::join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')->where('reservation_teams.id', $request->reservation_team_id)->first();
        // dd($reservationTeam);
        $pelanggan = User::find(auth()->user()->id);
        if ($pelanggan->balance < $harga) {
            return redirect()->back()->with([
                'type_simple' => 'error_saldo_kurang',
                'message_simple' => 'Reservasi gagal, saldo tidak mencukupi',
            ]);
        }
        $check = ReservationCustomer::where('selesai_team', 0)->where('reservation_team_id', $request->reservation_team_id)->where('date', date("Y-m-d", strtotime($request->date)))->where('time', $request->time)->where('user_id', '<>', auth()->user()->id)->first();
        if (!$check) {
            $reservation = ReservationCustomer::updateOrCreate(['user_id' => $request->user_id, 'date' => date("Y-m-d", strtotime($request->date)), 'time' => $request->time, 'reservation_team_id' => $request->reservation_team_id], $atrributes);
            $reservationRecently = ReservationCustomer::where('reservation_customers.id', $reservation->id)
                ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
                ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
                ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
                ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->first();
            if ($reservation->wasRecentlyCreated) {
                $reservation->createWallet(
                    [
                        'name' => 'Default Wallet',
                        'slug' => 'default',
                    ]
                );

                $data = $request->all();
                // Extract question-answer pairs
                $answers = collect($data)->filter(function ($value, $key) {
                    return is_numeric($key); // Only keep numeric keys
                });
                if ($answers) {
                    foreach ($answers as $questionId => $description) {
                        ReservationCarAnswer::create([
                            'reservation_customer_id' => $reservation->id,
                            'reservation_car_question_id' => $questionId,
                            'description' => $description,
                        ]);
                    }
                }

                $user = User::find(auth()->user()->id);
                $user->transfer($reservation, $harga, new Extra(
                    deposit: ['message' => 'Pembayaran untuk ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang masuk'],
                    withdraw: new Option(meta: ['message' => 'Pembayaran untuk ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang keluar'], confirmed: true)
                ));
                //Email
                $reservationTeamDetail = ReservationTeamDetail::where('reservation_team_id', $request->reservation_team_id)->first();
                // $pekerja = User::find($reservationTeamDetail->user_id);
                // $pekerja->notify(new ReservationNotification($reservation, $user, $reservationTeam));
                Cache::forget('notifications_count');
                return redirect('myreservations')->with([
                    'type' => 'success',
                    'message' => 'Reservasi berhasil disimpan',
                ]);
            } else {
                return redirect('myreservations')->with([
                    'type' => 'success',
                    'message' => 'Reservasi sudah ada sebelumnya, silakan periksa menu Reservasi Saya',
                ]);
            }
        } else {
            return back()->with([
                'type' => 'error',
                'message' => 'Reservasi untuk waktu tersebut sudah lebih dulu di booking orang lain, silakan pilih jam atau team lainnya',
            ]);
        }
    }
    public function storechange(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter, $id, Request $request)
    {
        $hargaSebelumnya = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->pluck('price')->first();
        // dd($hargaSebelumnya);
        // dd($id,$reservationCompany,$reservationCounter);

        $date = Carbon::parse(strtotime($request->date));
        $atrributes = ([
            'reservation_team_id' => $request->reservation_team_id,
            'user_id' => auth()->user()->id,
            'date' =>  $date->format('Y-m-d'),
            'time' =>  $request->time,
            'code' =>  Str::random(8),
        ]);
        $harga = ReservationTeam::join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')->where('reservation_teams.id', $request->reservation_team_id)->pluck('price')->first();
        $hargaSebelumnya = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->pluck('price')->first();
        $selisihHarga = $harga - $hargaSebelumnya;
        $reservationTeam = ReservationTeam::join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')->where('reservation_teams.id', $request->reservation_team_id)->first();
        // dd($reservationTeam);
        $pelanggan = User::find(auth()->user()->id);

        if ($pelanggan->balance < $selisihHarga) {
            return redirect()->back()->with([
                'type_simple' => 'error_saldo_kurang',
                'message_simple' => 'Reservasi gagal, saldo tidak mencukupi',
            ]);
        }
        $check = ReservationCustomer::where('selesai_team', 0)->where('reservation_team_id', $request->reservation_team_id)->where('date', date("Y-m-d", strtotime($request->date)))->where('time', $request->time)->where('user_id', '<>', auth()->user()->id)->first();
        if (!$check) {
            $reservationUpdate = ReservationCustomer::where('id', $id)->update(['date' => $date->format('Y-m-d'), 'time' => $request->time, 'reservation_team_id' => $request->reservation_team_id]);
            $reservation = ReservationCustomer::findOrFail($id);
            $reservationRecently = ReservationCustomer::where('reservation_customers.id', $id)
                ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
                ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
                ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
                ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->first();
            //    dd($reservationRecently->balance);
            // dd($selisihHarga > 0,$selisihHarga < 0, $selisihHarga, $reservation->balance);
            $user = User::find(auth()->user()->id);
            // Price Baru > dari Price Lama
            if ($selisihHarga > 0) {
                // dd("lebih besar");
                $user->transfer($reservation, $selisihHarga, new Extra(
                    deposit: ['message' => 'Pembayaran untuk kekurangan ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang masuk'],
                    withdraw: new Option(meta: ['message' => 'Pembayaran untuk kekurangan ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang keluar'], confirmed: true)
                ));
            }
            // Price Baru < dari Price Lama
            if ($selisihHarga < 0) {
                // dd("lebih kecil");
                $reservation->transfer($user, abs($selisihHarga), new Extra(
                    deposit: ['message' => 'Pengembalian untuk kelebihan ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang masuk'],
                    withdraw: new Option(meta: ['message' => 'Pengembalian untuk kelebihan ' . $reservationRecently->companyName . ' Layanan ' . $reservationRecently->counterName, 'type' => 'uang keluar'], confirmed: true)
                ));
            }

            //Email
            $reservationTeamDetail = ReservationTeamDetail::where('reservation_team_id', $request->reservation_team_id)->first();
            // $pekerja = User::find($reservationTeamDetail->user_id);
            // $pekerja->notify(new ReservationNotification($reservation, $user, $reservationTeam));
            Cache::forget('notifications_count');
            return redirect('myreservations')->with([
                'type' => 'success',
                'message' => 'Reservasi berhasil disimpan',
            ]);
        } else {
            return back()->with([
                'type' => 'error',
                'message' => 'Reservasi untuk waktu tersebut sudah lebih dulu di booking orang lain, silakan pilih jam atau team lainnya',
            ]);
        }
    }

    public function myreservations(Request $request)
    {
        $tips = Tip::get();
        $myReservations = ReservationCustomer::with('answers')->with('answers.question')->where('reservation_customers.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->leftjoin('reservation_car_categories', 'reservation_car_categories.id', 'reservation_counters.reservation_car_category_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_car_categories.name as counterCategoryName', 'reservation_companies.name as companyName', 'reservation_companies.slug as companySlug', 'reservation_counters.jumlahlayanandiskon')->orderBy('reservation_customers.created_at', 'DESC')
            ->get();
        // dd($myReservations);
        $ratingCategories = ReservationRatingCategory::where('reservation_company_id', 6)->get();
        return Inertia::render('Reservation/Profile/MyReservation', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'myReservations' => $myReservations,
            'ratingCategories' => $ratingCategories,
            'tips' => $tips,
        ]);
    }
    public function mycustomers(Request $request)
    {
        $myCustomers = ReservationCustomer::with('user')->with('answers')->with('answers.question')->where('reservation_team_details.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->leftjoin('reservation_car_categories', 'reservation_car_categories.id', 'reservation_counters.reservation_car_category_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_car_categories.name as counterCategoryName', 'reservation_companies.name as companyName', 'reservation_team_details.leader')->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyCustomer', [
            'myCustomers' => $myCustomers,
        ]);
    }
    public function mycompanycustomers(Request $request)
    {
        $myCustomers = ReservationCustomer::where('reservation_companies.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('users', 'users.id', 'reservation_customers.user_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName', 'users.name as customerName')->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyCompanyCustomer', [
            'myCustomers' => $myCustomers,
        ]);
    }
    public function mycompanycomplaintcustomers(Request $request)
    {
        $myCustomers = ReservationCustomer::where('reservation_companies.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('users', 'users.id', 'reservation_customers.user_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName', 'users.name as customerName')
            ->where('reservation_customers.complaint', 1)
            ->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyCompanyComplaintCustomer', [
            'myCustomers' => $myCustomers,
        ]);
    }
    public function myemployees(Request $request)
    {
        $myEmployees = ReservationEmployee::with('user')->get();
        return Inertia::render('Reservation/Profile/MyEmployee', [
            'myEmployees' => $myEmployees,
        ]);
        // $myEmployees = ReservationEmployee::join('users','users.id','reservation_employees.user_id')
        // ->join('reservation_team_details', 'reservation_team_details.user_id','users.id')
        // ->join('reservation_teams', 'reservation_teams.id','reservation_team_details.reservation_team_id')
        // ->join('reservation_companies', 'reservation_companies.id','reservation_employee.reservation_company_id')
        // ->leftjoin('reservation_join_counters','reservation_join_counters.reservation_team_id','reservation_teams.id')
        // ->where('reservation_companies.user_id',auth()->user()->id)->get();
    }
    public function mycounters(Request $request)
    {
        $myCounters = ReservationCounter::leftjoin('reservation_teams', 'reservation_teams.reservation_counter_id', 'reservation_counters.id')
            ->leftjoin('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->leftjoin('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_counters.*', 'reservation_teams.name as teamName', 'reservation_companies.name as companyName')
            ->where('reservation_team_details.id', auth()->user()->id)
            ->orderBy('reservation_counters.created_at', 'DESC')
            ->get();
        // $counterWaitings = ReservationCounter::join('reservation_daftar_counters', 'reservation_daftar_counters.code', 'reservation_counters.code')
        //     ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
        //     ->select('reservation_counters.*', 'reservation_teams.name as teamName', 'reservation_companies.name as companyName')
        //     ->where('reservation_team_details.id', auth()->user()->id)
        //     ->orderBy('reservation_counters.created_at', 'DESC')
        //     ->get();
        return Inertia::render('Reservation/Profile/MyCounter', [
            'myCounters' => $myCounters,
        ]);
    }
    public function myteaminvitations(Request $request)
    {
        // $myInvitations = ReservationJoinCounter::with('team')->with('team.counter')->with('team.counter.company')->where('email', auth()->user()->email)->orderBy('reservation_join_counters.created_at', 'DESC')->get();
        $myInvitations = ReservationEmployee::with('company')->where('user_id', auth()->user()->id)->get();
        // dd( $myInvitations);
        return Inertia::render('Reservation/Profile/MyEmployeeInvitation', [
            'myInvitations' => $myInvitations,
        ]);
    }
    public function myemployeerequestoff(Request $request)
    {
        // $myInvitations = ReservationJoinCounter::with('team')->with('team.counter')->with('team.counter.company')->where('email', auth()->user()->email)->orderBy('reservation_join_counters.created_at', 'DESC')->get();
        // $myEmployeeRequestOff = ReservationEmployeeDayOff::with('company')->where('company.user_id',auth()->user()->id)->get();

        // $myEmployeeRequestOff = ReservationEmployeeDayOff::with('company', function ($query) {
        //     return $query->where('user_id', auth()->user()->id);
        // })->get();
        $myEmployeeRequestOff = ReservationEmployeeDayOff::with('user')->with(["company" => function ($q) {
            $q->where('user_id', auth()->user()->id);
        }])
            // ->orderByRaw("STR_TO_DATE(date, '%Y-%m-%d') ASC")
            // ->orderBy(DB::raw("DATE_FORMAT(date,'%d-%M-%Y')"), 'ASC')
            ->select('*', DB::raw("STR_TO_DATE(date, '%d/%m/%Y') as date_cast"))
            ->orderBy('date_cast', 'DESC')
            ->get();
        // dd( $myEmployeeRequestOff);
        return Inertia::render('Reservation/Profile/MyEmployeeRequestOff', [
            'myEmployeeRequestOff' => $myEmployeeRequestOff,
        ]);
    }
    public function myemployeebreaksetting(Request $request)
    {
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $myEmployeeBreakSetting = ReservationBreakTimeSetting::where('reservation_company_id', $company->id)->first();
        // $myEmployeeRequestOff = ReservationEmployeeDayOff::with('user')->with(["company" => function ($q) {
        //     $q->where('user_id', auth()->user()->id);
        // }])
        //     ->select('*', DB::raw("STR_TO_DATE(date, '%d/%m/%Y') as date_cast"))
        //     ->orderBy('date_cast', 'DESC')
        //     ->get();
        return inertia('Reservation/Profile/MyEmployeeBreakSetting', [
            'myEmployeeBreakSetting' => $myEmployeeBreakSetting,
        ]);
    }
    public function storesetbreaktime(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'break_time' => 'required',
        ]);
        // dd("test");

        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        // $data = ReservationEmployeeDayOff::findOrfail($company->id);
        // dd($company);

        $reservationBreak = ReservationBreakTimeSetting::updateOrCreate(['reservation_company_id' => $company->id], ['break_time' => $request->break_time]);
        // $userId = User::where('email', $data->email)->pluck('id')->first();
        // ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        // $data->update(['approved' => 1]);
        return redirect(route('reservation.myemployeebreaksetting'))->with([
            'type' => 'success',
            'message' => 'Berhasil Atur Jam Libur',
        ]);
    }
    public function daftarcounter(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required',
        ]);
        $validated['user_id'] = auth()->user()->id;
        $counter = ReservationCounter::where('code', $validated['code'])->first();
        if (!$counter) {
            return back()->with([
                'type' => 'error',
                'message' => 'Daftar Gagal, tidak ditemukan counter dengan kode tersebut',
            ]);
        }
        ReservationDaftarCounter::updateOrCreate(['code' => $request->code, 'user_id' => auth()->user()->id], $validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Daftar Counter berhasil disimpan',
        ]);
    }
    public function maketeam(Request $request, $slug)
    {
        // dd($slug);
        $validated = $request->validate([
            'name' => 'required',
        ]);
        $validated['slug'] = str($request->name)->slug() . '-' . Str::lower(Str::random(6));
        $validated['code'] = Str::random(6);
        $reservation_counter_id = ReservationCounter::where('slug', $slug)->first();
        $validated['reservation_counter_id'] = $reservation_counter_id->id;
        // dd($reservation_counter_id->id);
        // dd($validated);
        ReservationTeam::create($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Team berhasil disimpan',
        ]);
    }
    public function joincounter(Request $request, $slug)
    {
        $validated = $request->validate([
            'email' => 'required',
        ]);

        $user = User::where('email', $validated['email'])->first();
        if (!$user) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal undang user, user dengan email tersebut tidak ditemukan',
            ]);
        }
        $name = User::where('email', $request->email)->first();
        $validated['slug'] = str($name->name)->slug() . '-' . Str::lower(Str::random(6));
        $validated['code'] = Str::random(6);
        $reservation_counter_id = ReservationCounter::where('slug', $slug)->first();
        $validated['reservation_counter_id'] = $reservation_counter_id->id;
        $reservationTeam = ReservationTeam::create(['reservation_counter_id' => $reservation_counter_id->id, 'name' => $name->name, 'slug' => $validated['slug'], 'code' => $validated['code']]);
        $reservationCounter = ReservationJoinCounter::updateOrCreate(['email' => $request->email, 'reservation_team_id' => $reservationTeam->id], ['reservation_team_id' => $reservationTeam->id, 'email' => $request->email]);
        return back()->with([
            'type' => 'success',
            'message' => 'Undang user berhasil disimpan',
        ]);
    }
    public function startservice($id)
    {
        $reservationCustomer = ReservationCustomer::findOrfail($id);
        $reservationCustomer->update(['dikerjakan' => 1]);
        return redirect(route('reservation.mycustomers'))->with([
            'type' => 'success',
            'message' => 'Pelayanan berhasil dimulai',
        ]);
    }
    public function finishservice($id)
    {
        $reservationCustomer = ReservationCustomer::findOrfail($id);
        $reservationCustomer->update(['selesai_team' => 1]);
        return redirect(route('reservation.mycustomers'))->with([
            'type' => 'success',
            'message' => 'Pelayanan berhasil diselesaikan',
        ]);
    }
    public function acceptinvitation($id)
    {
        $data = ReservationJoinCounter::findOrfail($id);
        $userId = User::where('email', $data->email)->pluck('id')->first();
        // dd($data, $userId);
        ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        $data->update(['approved' => 1]);
        return redirect(route('reservation.myteaminvitations'))->with([
            'type' => 'success',
            'message' => 'Undangan Telah diterima',
        ]);
    }
    public function finishcustomer(Request $request, $id)
    {

        

        $reservationCustomer1 = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_companies.user_id as pemilik', 'reservation_team_details.user_id as team', 'reservation_counters.price', 'reservation_counters.price_user', 'reservation_counters.jasa', 'reservation_counters.percent_owner', 'percent_employe', 'deposit', 'reservation_companies.name as CompanyName', 'reservation_counters.name as CounterName', 'reservation_companies.slug as CompanySlug', 'reservation_counters.slug as CounterSlug', 'reservation_counters.jumlahlayanandiskon', 'reservation_companies.id as IDCompany')
            ->where('reservation_customers.id', $id)
            ->first();

        // Step 1: Get the last reservation_customer ID where ambil_bonus = 1
        $lastBonusId = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->where('reservation_customers.user_id', auth()->user()->id)
            ->where('reservation_counters.slug', $reservationCustomer1->CounterSlug)
            ->where('selesai_customer', 1)
            ->where('ambil_bonus', 1)
            ->latest('id') // Get the latest record where ambil_bonus = 1
            ->value('reservation_customers.id');

        $lastBonusId = $lastBonusId ? $lastBonusId : 1;
        // dd($lastBonusId);
        // Step 2: Count the records that come after the identified ID
        $reservationCustomer2 = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_companies.user_id as pemilik', 'reservation_team_details.user_id as team', 'reservation_counters.price', 'reservation_counters.price_user', 'reservation_counters.jasa', 'reservation_counters.percent_owner', 'percent_employe', 'deposit', 'reservation_companies.name as CompanyName', 'reservation_counters.name as CounterName', 'reservation_companies.slug as CompanySlug', 'reservation_counters.slug as CounterSlug')
            ->where('reservation_customers.user_id', auth()->user()->id)
            ->where('reservation_counters.slug', $reservationCustomer1->CounterSlug)
            ->where('selesai_customer', 1)
            ->where('reservation_customers.id', '>', $lastBonusId)
            ->count();

        $tip = Tip::find($request->tip);
        $reservationCustomer = ReservationCustomer::findOrfail($id);

        $reservationCounter = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_companies.user_id as pemilik', 'reservation_team_details.user_id as team', 'reservation_counters.price', 'reservation_counters.price_user', 'reservation_counters.jasa', 'reservation_counters.percent_owner', 'percent_employe', 'deposit', 'reservation_companies.name as CompanyName', 'reservation_counters.name as CounterName')
            ->where('reservation_customers.id', $id)
            ->first();

        $pemilik = User::find($reservationCounter->pemilik);
        $team = User::find($reservationCounter->team);
        $tawarin = User::find(1);
        $customer = User::find(auth()->user()->id);
        $cekReferal = User::where('referral', $customer->from_referral)->first();
        $referal = $cekReferal ? User::where('referral', $customer->from_referral)->first() : User::find(1);
        $walletBonusReferral = $referal->getWallet('bonus');
        if (!$walletBonusReferral) {
            $walletBonusReferral = $referal->createWallet(['name' => 'Bonus Wallet', 'slug' => 'bonus']);
        };
        $tfTempTawarin = $reservationCounter->price - $reservationCounter->price_user;
        $tfBahan = $reservationCounter->bhp;
        $tfPemilik = $reservationCounter->percent_owner / 100 * $reservationCounter->jasa;
        $tfReferral = (5 / 100 * $tfTempTawarin);
        $tfTawarin = $tfTempTawarin - $tfReferral;
        $tfTeam = $reservationCounter->percent_employe / 100 * $reservationCounter->jasa;
        if ($reservationCounter->deposit > 0) {
            $tfDeposit = ($reservationCounter->deposit) / 100 * ($reservationCounter->percent_employe / 100 * $reservationCounter->jasa);
        }
        $checkPegawai = ReservationEmployee::where('user_id', auth()->user()->id)->where('reservation_company_id', $reservationCustomer1->IDCompany);



        $cekTeam = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_team_details.user_id', 'reservation_counters.reservation_company_id')
            ->where('reservation_customers.id', $id)
            ->get();
        // dd($cekTeam);
        $reservationCompany = ReservationCompany::find($cekTeam[0]->reservation_company_id);
        if ($reservationCompany->reservationcategory->name == 'Cuci Mobil') {
            // Tidak ada layanan gratis
            if ($reservationCustomer1->jumlahlayanandiskon === 0) {
                // Tidak ada diskon
                // dd("Tidak ada diskon");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);

                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        foreach ($cekTeam as $teamd) {
                            $teamdetail = User::find($teamd->user_id);
                            $customer->transfer($teamdetail, $tip->tip / count($cekTeam), new Extra(
                                deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                                withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $teamdetail->name, 'type' => 'tip'], confirmed: true)
                            ));
                        }
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($pemilik, $tfPemilik, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    foreach ($cekTeam as $teamd) {
                        $teamdetail = User::find($teamd->user_id);
                        $reservationCustomer->transfer($teamdetail, $tfTeam / count($cekTeam), new Extra(
                            deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                            withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                        ));
                    }

                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    if ($tfBahan > 0) {
                        $reservationCustomer->transfer($pemilik, $tfBahan, new Extra(
                            deposit: ['message' => 'Bahan ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'],
                            withdraw: new Option(meta: ['message' => 'Uang Bahan ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'], confirmed: true)
                        ));
                    }

                    if ($reservationCounter->deposit > 0) {
                        if ($pemilik->hasWallet('deposit')) {
                            $depositpemilik = $pemilik->getWallet('deposit');
                        } else {
                            $depositpemilik = $pemilik->createWallet([
                                'name' => 'deposit',
                                'slug' => 'deposit',
                            ]);
                        }
                        $team->transfer($depositpemilik, $tfDeposit, new Extra(
                            deposit: ['message' => 'Deposit dari ' . $team->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'deposit'],
                            withdraw: new Option(meta: ['message' => 'Simpan Deposit ke Saldo Deposit untuk Layanan ' . $reservationCounter->CounterName . ' atas nama pelanggan ' . $customer->name, 'type' => 'deposit'], confirmed: true)
                        ));
                    }
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        // dd($rating->id);
                        if ($rating->wasRecentlyCreated) {
                            $data = $request->all();
                            // Extract question-answer pairs
                            $answers = collect($data)->filter(function ($value, $key) {
                                return is_numeric($key); // Only keep numeric keys
                            });
                            if ($answers) {
                                foreach ($answers as $questionId => $description) {
                                    ReservationRatingDetail::create([
                                        'reservation_rating_id' => $rating->id,
                                        'reservation_rating_category_id' => $questionId,
                                        'star_rating' => $description,
                                    ]);
                                }
                            }
                        }
                        
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            // Pas dengan layanan gratis dan bukan pegawai
            if ($reservationCustomer2 + 1 === $reservationCustomer1->jumlahlayanandiskon && !$checkPegawai) {
                // Ambil Bonus
                // dd("ambil bonus");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    $reservationCustomer->update(['ambil_bonus' => 1]);
                    if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                        $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($customer, $reservationCounter->price_user, new Extra(
                        deposit: ['message' => 'Cashback dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'cashback'],
                        withdraw: new Option(meta: ['message' => 'Cashback ke ' . $pemilik->name, 'type' => 'cashback'], confirmed: true)
                    ));
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan, cashback sudah masuk, silakan cek saldo anda',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            // Pas dengan layanan gratis dan pegawai
            if ($reservationCustomer2 + 1 === $reservationCustomer1->jumlahlayanandiskon && $checkPegawai) {
                // Ambil Bonus
                // dd("ambil bonus");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    // $reservationCustomer->update(['ambil_bonus' => 1]);
                    // if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                    //     $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    // }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($customer, $reservationCounter->price_user, new Extra(
                        deposit: ['message' => 'Cashback dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'cashback'],
                        withdraw: new Option(meta: ['message' => 'Cashback ke ' . $pemilik->name, 'type' => 'cashback'], confirmed: true)
                    ));
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan, cashback sudah masuk, silakan cek saldo anda',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            //Masih kurang dari layanan gratis
            if ($reservationCustomer2 + 1 < $reservationCustomer1->jumlahlayanandiskon) {
                // Layanan Biasa
                // dd("layanan biasa");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                        $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($pemilik, $tfPemilik, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($team, $tfTeam, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    if ($tfBahan > 0) {
                        $reservationCustomer->transfer($pemilik, $tfBahan, new Extra(
                            deposit: ['message' => 'Bahan ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'],
                            withdraw: new Option(meta: ['message' => 'Uang Bahan ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'], confirmed: true)
                        ));
                    }

                    if ($reservationCounter->deposit > 0) {
                        if ($pemilik->hasWallet('deposit')) {
                            $depositpemilik = $pemilik->getWallet('deposit');
                        } else {
                            $depositpemilik = $pemilik->createWallet([
                                'name' => 'deposit',
                                'slug' => 'deposit',
                            ]);
                        }
                        $team->transfer($depositpemilik, $tfDeposit, new Extra(
                            deposit: ['message' => 'Deposit dari ' . $team->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'deposit'],
                            withdraw: new Option(meta: ['message' => 'Simpan Deposit ke Saldo Deposit untuk Layanan ' . $reservationCounter->CounterName . ' atas nama pelanggan ' . $customer->name, 'type' => 'deposit'], confirmed: true)
                        ));
                    }
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
        }

        if ($reservationCompany->reservationcategory->name == 'Barber Shop') {

            // Tidak ada layanan gratis
            if ($reservationCustomer1->jumlahlayanandiskon === 0) {
                // Tidak ada diskon
                // dd("Tidak ada diskon");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);

                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($pemilik, $tfPemilik, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($team, $tfTeam, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    if ($tfBahan > 0) {
                        $reservationCustomer->transfer($pemilik, $tfBahan, new Extra(
                            deposit: ['message' => 'Bahan ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'],
                            withdraw: new Option(meta: ['message' => 'Uang Bahan ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'], confirmed: true)
                        ));
                    }

                    if ($reservationCounter->deposit > 0) {
                        if ($pemilik->hasWallet('deposit')) {
                            $depositpemilik = $pemilik->getWallet('deposit');
                        } else {
                            $depositpemilik = $pemilik->createWallet([
                                'name' => 'deposit',
                                'slug' => 'deposit',
                            ]);
                        }
                        $team->transfer($depositpemilik, $tfDeposit, new Extra(
                            deposit: ['message' => 'Deposit dari ' . $team->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'deposit'],
                            withdraw: new Option(meta: ['message' => 'Simpan Deposit ke Saldo Deposit untuk Layanan ' . $reservationCounter->CounterName . ' atas nama pelanggan ' . $customer->name, 'type' => 'deposit'], confirmed: true)
                        ));
                    }
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            // Pas dengan layanan gratis dan bukan pegawai
            if ($reservationCustomer2 + 1 === $reservationCustomer1->jumlahlayanandiskon && !$checkPegawai) {
                // Ambil Bonus
                // dd("ambil bonus");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    $reservationCustomer->update(['ambil_bonus' => 1]);
                    if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                        $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($customer, $reservationCounter->price_user, new Extra(
                        deposit: ['message' => 'Cashback dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'cashback'],
                        withdraw: new Option(meta: ['message' => 'Cashback ke ' . $pemilik->name, 'type' => 'cashback'], confirmed: true)
                    ));
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan, cashback sudah masuk, silakan cek saldo anda',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            // Pas dengan layanan gratis dan pegawai
            if ($reservationCustomer2 + 1 === $reservationCustomer1->jumlahlayanandiskon && $checkPegawai) {
                // Ambil Bonus
                // dd("ambil bonus");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    // $reservationCustomer->update(['ambil_bonus' => 1]);
                    // if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                    //     $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    // }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($customer, $reservationCounter->price_user, new Extra(
                        deposit: ['message' => 'Cashback dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'cashback'],
                        withdraw: new Option(meta: ['message' => 'Cashback ke ' . $pemilik->name, 'type' => 'cashback'], confirmed: true)
                    ));
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan, cashback sudah masuk, silakan cek saldo anda',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
            //Masih kurang dari layanan gratis
            if ($reservationCustomer2 + 1 < $reservationCustomer1->jumlahlayanandiskon) {
                // Layanan Biasa
                // dd("layanan biasa");
                DB::beginTransaction();
                try {
                    $reservationCustomer->update(['selesai_customer' => 1]);
                    if ($reservationCustomer1->jumlahlayanandiskon > 0) {
                        $reservationCustomer->update(['layanan_ke' => $reservationCustomer2 + 1]);
                    }
                    if ($tip) {
                        $userTipFrom = auth()->user()->name;
                        $customer->transfer($team, $tip->tip, new Extra(
                            deposit: ['message' => 'Tip dari ' . $userTipFrom, 'type' => 'tip'],
                            withdraw: new Option(meta: ['message' => 'Uang Tip untuk ' . $team->name, 'type' => 'tip'], confirmed: true)
                        ));
                    }
                    $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
                        deposit: ['message' => 'Fee dari ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'],
                        withdraw: new Option(meta: ['message' => 'Uang Fee ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'fee'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($pemilik, $tfPemilik, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($team, $tfTeam, new Extra(
                        deposit: ['message' => 'Bagi Hasil dari ' . $pemilik->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'uang masuk'],
                        withdraw: new Option(meta: ['message' => 'Bagi Hasil ke ' . $pemilik->name, 'type' => 'uang keluar'], confirmed: true)
                    ));
                    $reservationCustomer->transfer($walletBonusReferral, $tfReferral, new Extra(
                        deposit: ['message' => 'Referal dari ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'],
                        withdraw: new Option(meta: ['message' => 'Referal ke ' . $customer->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'referral'], confirmed: true)
                    ));
                    if ($tfBahan > 0) {
                        $reservationCustomer->transfer($pemilik, $tfBahan, new Extra(
                            deposit: ['message' => 'Bahan ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'],
                            withdraw: new Option(meta: ['message' => 'Uang Bahan ke ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'bhp'], confirmed: true)
                        ));
                    }

                    if ($reservationCounter->deposit > 0) {
                        if ($pemilik->hasWallet('deposit')) {
                            $depositpemilik = $pemilik->getWallet('deposit');
                        } else {
                            $depositpemilik = $pemilik->createWallet([
                                'name' => 'deposit',
                                'slug' => 'deposit',
                            ]);
                        }
                        $team->transfer($depositpemilik, $tfDeposit, new Extra(
                            deposit: ['message' => 'Deposit dari ' . $team->name . ' untuk ' . $reservationCounter->CompanyName . ' Layanan ' . $reservationCounter->CounterName, 'type' => 'deposit'],
                            withdraw: new Option(meta: ['message' => 'Simpan Deposit ke Saldo Deposit untuk Layanan ' . $reservationCounter->CounterName . ' atas nama pelanggan ' . $customer->name, 'type' => 'deposit'], confirmed: true)
                        ));
                    }
                    $atrribute = ([
                        'reservation_team_id' => $reservationCustomer->reservation_team_id,
                        'user_id' => $team->id,
                        'comments' => $request->comments,
                        'star_rating' => $request->rating,
                    ]);
                    if ($request->rating) {
                        $rating = ReservationRating::create($atrribute);
                        $data = $request->all();
                        // Extract question-answer pairs
                        $ratingDetails = collect($data)->filter(function ($value, $key) {
                            return is_numeric($key); // Only keep numeric keys
                        });
                        if ($ratingDetails) {
                            foreach ($ratingDetails as $ratingId => $star_rating) {
                                ReservationRatingDetail::create([
                                    'reservation_rating_id' => $rating->id,
                                    'reservation_rating_category_id' => $ratingId,
                                    'star_rating' => $star_rating,
                                ]);
                            }
                        }
                    }
                    DB::commit();
                    return redirect('myreservations')->with([
                        'type' => 'success',
                        'message' => 'Konfirmasi pelayanan berhasil diselesaikan',
                    ]);
                } catch (\Exception $e) {
                    DB::rollback();
                    return redirect('myreservations')->with([
                        'type' => 'error',
                        'message' => 'Konfirmasi pelayanan gagal, silakan coba kembali',
                    ]);
                }
            }
        }
    }
    public function cancelreservation(Request $request, $id)
    {
        $validated = $request->validate([
            'reason' => 'required',
        ]);
        $reservationCustomer = ReservationCustomer::findOrfail($id);
        // dd($reservationCustomer);
        // $reservationCustomer->transfer($customer, $balance); 
        $reservation = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->first();
        // dd($reservation);
        $balance = $reservationCustomer->balance;
        $customer = User::findOrfail($reservationCustomer->user_id);
        // dd($customer);
        // $reservationCustomer->transfer($customer, $balance, new Extra(
        //     deposit: ['message' => 'Pengembalian untuk Layanan ', 'type' => 'refund_cancel_layanan'],
        //     withdraw: new Option(meta: ['message' => 'Pengembalian untuk Layanan ', 'type' => 'refund_cancel_layanan'], confirmed: true)
        // ));

        $reservationCustomer->transfer($customer, $balance, new Extra(
            deposit: ['message' => 'Pengembalian dana dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName, 'type' => 'refund_cancel_layanan'],
            withdraw: new Option(meta: ['message' => 'Pengembalian dana dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName, 'type' => 'refund_cancel_layanan'], confirmed: true)
        ));

        $reservation->update(['batal_customer' => 1, 'alasan_batal_customer' => $validated['reason']]);
        return redirect(route('reservation.myreservations'))->with([
            'type' => 'success',
            'message' => 'Pelayanan berhasil dibatalkan',
        ]);
    }
    public function complaintreservation(Request $request, $id)
    {
        $validated = $request->validate([
            'complaint_reason' => 'required',
        ]);
        $reservationCustomer = ReservationCustomer::findOrfail($id);
        // dd($reservationCustomer);
        $reservation = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->first();
        $balance = $reservationCustomer->balance;
        $customer = User::findOrfail($reservationCustomer->user_id);

        $reservationCustomer->transfer($customer, $balance, new Extra(
            deposit: ['message' => 'Pengembalian dana dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName, 'type' => 'refund_cancel_layanan'],
            withdraw: new Option(meta: ['message' => 'Pengembalian dana dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName, 'type' => 'refund_cancel_layanan'], confirmed: true)
        ));
        $reservationCustomer->update(['complaint' => 1, 'complaint_reason' => $validated['complaint_reason']]);

        return redirect(route('reservation.myreservations'))->with([
            'type' => 'success',
            'message' => 'Komplain berhasil dikirim',
        ]);
    }
    public function nopunishment(Request $request, $id)
    {


        $validated = $request->validate([
            'complaint_decline_reason' => 'required',
        ]);
        $reservationCustomer = ReservationCustomer::findOrfail($id);

        $barber = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', 'reservation_teams.id')
            ->join('users', 'users.id', 'reservation_team_details.user_id')
            ->select('users.*')->first();
        $reservationCustomer->update(['punishment' => 2, 'complaint_decline_reason' => $validated['complaint_decline_reason']]);
        $reservation = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->join('users', 'users.id', 'reservation_customers.user_id')
            ->select('users.*', 'reservation_companies.name as companyName', 'reservation_counters.name as counterName', 'reservation_customers.date', 'reservation_customers.time', 'reservation_customers.complaint_reason', 'reservation_customers.complaint_decline_reason')->first();
        $user = User::findOrfail($barber->id);
        $customer = User::findOrfail($reservation->id);



        $customer->notify(new ReservationDeclineComplaintNotification($reservation, $user));

        Cache::forget('notifications_count');

        return redirect(route('reservation.mycompanycomplaintcustomers'))->with([
            'type' => 'success',
            'message' => 'Berhasil',
        ]);
    }
    public function punishmentreservation(Request $request, $id)
    {
        $validated = $request->validate([
            'punishment_comment' => 'required',
        ]);
        $reservationCustomer = ReservationCustomer::findOrfail($id);

        $barber = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_team_details.reservation_team_id', 'reservation_teams.id')
            ->join('users', 'users.id', 'reservation_team_details.user_id')
            ->select('users.*')->first();
        $reservation = ReservationCustomer::where('reservation_customers.id', $id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->join('users', 'users.id', 'reservation_customers.user_id')
            ->select('users.*', 'reservation_companies.name as companyName', 'reservation_counters.name as counterName', 'reservation_customers.date', 'reservation_customers.time', 'reservation_customers.complaint_reason')->first();
        $user = User::findOrfail($barber->id);
        $customer = User::findOrfail($reservation->id);
        $balance = 5000;

        $user->transfer($customer, $balance, new Extra(
            deposit: ['message' => 'Kompensasi dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName . ' dengan keterangan ' . $validated['punishment_comment'], 'type' => 'punishment_cancelation'],
            withdraw: new Option(meta: ['message' => 'Punishment dana dari ' . $reservation->companyName . ' untuk Layanan ' . $reservation->counterName . ' dengan keterangan ' . $validated['punishment_comment'], 'type' => 'punishment_cancelation'], confirmed: true)
        ));
        $reservationCustomer->update(['punishment' => 1, 'punishment_comment' => $validated['punishment_comment']]);

        $customer->notify(new ReservationAcceptComplaintNotification($reservation, $user));

        Cache::forget('notifications_count');
        return redirect(route('reservation.mycompanycomplaintcustomers'))->with([
            'type' => 'success',
            'message' => 'Punishment berhasil diberikan',
        ]);
    }

    public function updatejoinas(Request $request, $id)
    {
        // dd($request->all());
        $user = User::findOrfail($id);
        $user->update(['join_as_id' => $request->join_as_id]);
        return redirect(route('dashboard'))->with([
            'type' => 'success',
            'message' => 'Role berhasil dipilih, menunggu konfirmasi admin',
        ]);
    }
}
