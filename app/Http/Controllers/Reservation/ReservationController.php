<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyProfileUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\Reservation\ReservationCounterResource;
use App\Http\Resources\Reservation\ReservationResource;
use App\Models\Auth\JoinAs;
use App\Models\Reservation\DaftarCounter;
use App\Models\Reservation\ReservationCategory;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationDaftarCounter;
use App\Models\Reservation\ReservationJoinCounter;
use App\Models\Reservation\ReservationRating;
use App\Models\Reservation\ReservationTeam;
use App\Models\Reservation\ReservationTeamDetail;
use App\Models\TemporaryFile;
use App\Models\Tip;
use App\Models\User;
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

class ReservationController extends Controller
{
    public function edit(Request $request)
    {
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $reservation_categories = ReservationCategory::get();
        $media = $company->getMedia('reservationcompany');
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
        return inertia('Reservation/Company/Public/List', ['reservations' => $reservations, 'reservationCompany' => $reservationCompany, 'reservation_categories' => $reservation_categories]);
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
            ->when($request->reservation_category, fn ($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
            ->select('id', 'name', 'formattedAddress', 'is_approved', 'reservation_category_id', 'slug', 'created_at');
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
        // dd(strtotime($request->date));
        // dd($request->segment(3));
        // dd(Carbon::isoFormat('Y-m-d', ($request->date)));
        $date = Carbon::parse(strtotime($request->date));
        // dd($date);
        $atrributes = ([
            'reservation_team_id' => $request->reservation_team_id,
            'user_id' => auth()->user()->id,
            'date' =>  $date->format('Y-m-d'),
            'time' =>  $request->time,
            'code' =>  Str::random(8),
        ]);
        // dd($atrributes);
        $harga = ReservationTeam::join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')->where('reservation_teams.id', $request->reservation_team_id)->pluck('price');
        $pelanggan = User::find(auth()->user()->id);
        if ($pelanggan->balance < $harga[0]) {
            return redirect()->back()->with([
                'type' => 'error',
                'message' => 'Reservasi gagal, saldo tidak mencukupi',
            ]);
        }
        $check = ReservationCustomer::where('selesai_team', 0)->where('reservation_team_id', $request->reservation_team_id)->where('date', date("Y-m-d", strtotime($request->date)))->where('time', $request->time)->where('user_id', '<>', auth()->user()->id)->first();
        // $checkLayananKe = 
        if (!$check) {
            $reservationCounter = ReservationCustomer::updateOrCreate(['user_id' => $request->user_id, 'date' => date("Y-m-d", strtotime($request->date)), 'time' => $request->time, 'reservation_team_id' => $request->reservation_team_id], $atrributes);
            if ($reservationCounter->wasRecentlyCreated) {
                $reservationCounter->createWallet(
                    [
                        'name' => 'Default Wallet',
                        'slug' => 'default',
                    ]
                );
                $user = User::find(auth()->user()->id);
                // $user->transfer($reservationCounter, $harga[0]);
                $user->transfer($reservationCounter, $harga[0], new Extra(
                    deposit: ['message' => 'Pembayaran untuk '.$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName ,'type'=>'uang masuk'],
                    withdraw: new Option(meta: ['message' => 'Pembayaran untuk '.$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type' => 'uang keluar'], confirmed: true)
                ));
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

    public function myreservations(Request $request)
    {
        $tips = Tip::get();
        $myReservations = ReservationCustomer::where('reservation_customers.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyReservation', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'myReservations' => $myReservations,
            'tips' => $tips,
        ]);
    }
    public function mycustomers(Request $request)
    {
        $myCustomers = ReservationCustomer::where('reservation_team_details.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyCustomer', [
            'myCustomers' => $myCustomers,
        ]);
    }
    public function mycompanycustomers(Request $request)
    {
        $myCustomers = ReservationCustomer::where('reservation_companies.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_customers.*', 'reservation_teams.name', 'reservation_counters.name as counterName', 'reservation_companies.name as companyName')->orderBy('reservation_customers.created_at', 'DESC')->get();
        return Inertia::render('Reservation/Profile/MyCompanyCustomer', [
            'myCustomers' => $myCustomers,
        ]);
    }
    public function mycounters(Request $request)
    {
        $myCounters = ReservationCounter::join('reservation_teams', 'reservation_teams.reservation_counter_id', 'reservation_counters.id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_counters.*', 'reservation_teams.name as teamName', 'reservation_companies.name as companyName')
            ->where('reservation_team_details.id', auth()->user()->id)
            ->orderBy('reservation_counters.created_at', 'DESC')
            ->get();
        $counterWaitings = ReservationCounter::join('reservation_daftar_counters', 'reservation_daftar_counters.code', 'reservation_counters.code')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_counters.*', 'reservation_teams.name as teamName', 'reservation_companies.name as companyName')
            ->where('reservation_team_details.id', auth()->user()->id)
            ->orderBy('reservation_counters.created_at', 'DESC')
            ->get();
        return Inertia::render('Reservation/Profile/MyCounter', [
            'myCounters' => $myCounters,
        ]);
    }
    public function myteaminvitations(Request $request)
    {
        $myInvitations = ReservationJoinCounter::with('team')->with('team.counter')->with('team.counter.company')->where('email', auth()->user()->email)->orderBy('reservation_join_counters.created_at', 'DESC')->get();
        // dd($myInvitations);
        return Inertia::render('Reservation/Profile/MyTeamInvitation', [
            'myInvitations' => $myInvitations,
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
        ReservationTeam::create($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Team berhasil disimpan',
        ]);
    }
    public function joincounter(Request $request, $slug)
    {
        // dd($slug);
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
        ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        $data->update(['approved' => 1]);
        return redirect(route('reservation.myteaminvitations'))->with([
            'type' => 'success',
            'message' => 'Undangan Telah diterima',
        ]);
    }
    public function finishcustomer(Request $request, $id)
    {
        // dd($request->all());
        $layananKe = ReservationCustomer::where('user_id',auth()->user()->id)->where('selesai_customer',1)->count();
        // dd($layananKe);
        $tip = Tip::find($request->tip);
        // dd($tip->tip);
        $reservationCustomer = ReservationCustomer::findOrfail($id);
        $atrribute = ([
            'reservation_team_id' => $reservationCustomer->reservation_team_id,
            'comments' => $request->comments,
            'star_rating' => $request->rating,

        ]);

        // dd($atrribute);
        

        if ($request->rating) {
            $rating = ReservationRating::create($atrribute);
        }
        // dd($reservationCustomer->reservation_team_id);
        $reservationCounter = ReservationCustomer::join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->select('reservation_companies.user_id as pemilik', 'reservation_team_details.user_id as team', 'reservation_counters.price', 'reservation_counters.price_user', 'reservation_counters.percent_owner', 'percent_employe','reservation_companies.name as CompanyName','reservation_counters.name as CounterName')
            ->where('reservation_customers.id', $id)
            ->first();
        // dd($reservationCounter);
        $reservationCustomer->update(['selesai_customer' => 1]);
        $reservationCustomer->update(['layanan_ke' => $layananKe+1]);
        $pemilik = User::find($reservationCounter->pemilik);
        $team = User::find($reservationCounter->team);
        $tawarin = User::find(1);
        $customer = User::find(auth()->user()->id);
        $referal = User::where('referral', $customer->from_referral)->first();

        $tfTempTawarin = $reservationCounter->price - $reservationCounter->price_user;
        $tfPemilik = $reservationCounter->percent_owner / 100 * $reservationCounter->price_user;
        $tfTeam = $reservationCounter->percent_employe / 100 * $reservationCounter->price_user;
        $tfReferral = (5 / 100 * $tfTempTawarin);
        $tfTawarin = $tfTempTawarin - $tfReferral;

        if ($tip) {
            // $customer->transfer($team, $tip->tip);
            $userTipFrom = auth()->user()->name;
            $customer->transfer($team, $tip->tip, new Extra(
                deposit: ['message' => 'Tip dari '.$userTipFrom,'type'=>'uang masuk'],
                withdraw: new Option(meta: ['message' => 'Uang Tip untuk '.$team->name,'type' => 'uang keluar'], confirmed: true)
            ));
        }
        // dd($tfPemilik,$tfTeam,$tfReferral,$tfTawarin);

        // $reservationCustomer->transfer($tawarin, $tfTawarin);
        // $reservationCustomer->transfer($pemilik, $tfPemilik);
        // $reservationCustomer->transfer($team, $tfTeam);
        // $reservationCustomer->transfer($referal, $tfReferral);

        $reservationCustomer->transfer($tawarin, $tfTawarin, new Extra(
            deposit: ['message' => 'Fee dari '.$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName ,'type'=>'uang masuk'],
            withdraw: new Option(meta: ['message' => 'Uang Fee ke '.$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type' => 'uang keluar'], confirmed: true)
        ));
        $reservationCustomer->transfer($pemilik, $tfPemilik, new Extra(
            deposit: ['message' => 'Pembayaran dari '.$pemilik->name .' untuk ' .$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type'=>'uang masuk'],
            withdraw: new Option(meta: ['message' => 'Pembayaran ke '.$pemilik->name,'type' => 'uang keluar'], confirmed: true)
        ));
        $reservationCustomer->transfer($team, $tfTeam, new Extra(
            deposit: ['message' => 'Pembayaran dari '.$pemilik->name .' untuk ' .$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type'=>'uang masuk'],
            withdraw: new Option(meta: ['message' => 'Pembayaran ke '.$pemilik->name,'type' => 'uang keluar'], confirmed: true)
        ));
        $reservationCustomer->transfer($referal, $tfReferral, new Extra(
            deposit: ['message' => 'Referal dari '.$customer->name .' untuk ' .$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type'=>'uang masuk'],
            withdraw: new Option(meta: ['message' => 'Referal ke '.$customer->name .' untuk ' .$reservationCounter->CompanyName . ' Layanan ' .$reservationCounter->CounterName,'type' => 'uang keluar'], confirmed: true)
        ));
        
        
        return redirect('myreservations')->with([
            'type' => 'success',
            'message' => 'Konfirmasi pelayanan berhasil diselesaikan',
        ]);
    }
    public function updatejoinas(Request $request,$id)
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