<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Http\Resources\Reservation\ReservationEmployeeResource;
use App\Models\Reservation\ReservationBreakTimeSetting;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeDayOff;
use App\Models\Reservation\ReservationJoinCounter;
use App\Models\Reservation\ReservationTeam;
use App\Models\Reservation\ReservationTeamDetail;
use App\Models\Reservation\ReservationTeamHeaderDetail;
use App\Models\ReservationTeamHeader;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ReservationEmployeeController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationEmployees = ReservationEmployee::query()
            ->leftJoin('reservation_team_details', 'reservation_employees.user_id', '=', 'reservation_team_details.user_id')
            ->leftJoin('reservation_teams', 'reservation_team_details.reservation_team_id', '=', 'reservation_teams.id')
            ->leftJoin('reservation_counters', 'reservation_teams.reservation_counter_id', '=', 'reservation_counters.id')
            ->leftJoin('reservation_companies', 'reservation_counters.reservation_company_id', '=', 'reservation_companies.id')
            ->leftJoin('users', 'reservation_employees.user_id', '=', 'users.id')
            ->leftJoin('media', function ($join) {
                $join->on('media.model_id', '=', 'reservation_employees.user_id')
                    ->where('media.model_type', '=', 'App\\Models\\User');
            })
            ->leftJoin('model_has_roles', function ($join) {
                $join->on('model_has_roles.model_id', '=', 'reservation_employees.user_id')
                    ->where('model_has_roles.role_id', '=', '13');
            })
            ->select(
                'reservation_employees.id as employee_record_id',
                'reservation_companies.id as company_id',
                'reservation_employees.approved',
                'reservation_employees.created_at',
                'reservation_employees.user_id as team_detail_user_id',
                'users.name',
                'users.email',
                'users.phone',
                'media.id as media_id',
                'model_has_roles.model_type as model_has_roles_model_type',
                'media.file_name',
            )
            ->where('reservation_employees.reservation_company_id', auth()->user()->company->id)
            ->distinct();
        // dd($reservationEmployees);

        if ($request->q) {
            $reservationEmployees->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservationEmployees->orderBy($request->field, $request->direction);
        }
        $reservationEmployees = (ReservationEmployeeResource::collection($reservationEmployees->fastPaginate($request->load)->withQueryString())
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
        return inertia('Reservation/Profile/MyEmployee', ['reservationEmployees' => $reservationEmployees]);
    }
    public function index_team(Request $request)
    {
        $team = ReservationTeamHeader::with('details')->with('details.user')->where('reservation_company_id', auth()->user()->company->id);

        // $team = ReservationTeam::query()->leftjoin('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
        // ->leftjoin('reservation_car_categories', 'reservation_car_categories.id', 'reservation_counters.reservation_car_category_id')
        // ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
        // ->where('reservation_companies.id', auth()->user()->company->id)->with('teamdetail')->with('teamdetail.user')->select('reservation_teams.*','reservation_counters.name as counterName','reservation_car_categories.name as counterCategoryName')->orderBy('reservation_teams.name','ASC');
        if ($request->q) {
            $team->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $team->orderBy($request->field, $request->direction);
        }
        $team = (
            ArrayResource::collection($team->fastPaginate($request->load)->withQueryString())
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
        $employees = ReservationEmployee::where('reservation_company_id', auth()->user()->company->id)->with('user')->get();
        $counters = ReservationCounter::where('reservation_company_id', auth()->user()->company->id)->with('category')->get();
        return inertia('Reservation/Company/Team/Index', ['team' => $team, 'employees' => $employees, 'counters' => $counters]);
    }
    public function index_team_layanan(Request $request)
    {
        $teams = ReservationTeam::query()->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
        ->leftjoin('reservation_car_categories', 'reservation_car_categories.id', 'reservation_counters.reservation_car_category_id')
        ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
        ->where('reservation_companies.id', auth()->user()->company->id)->with('teamdetail')->with('teamdetail.user')->select('reservation_teams.*','reservation_counters.name as counterName','reservation_car_categories.name as counterCategoryName')->orderBy('reservation_teams.name','ASC');
        // dd($team->get());
        if ($request->q) {
            $teams->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $teams->orderBy($request->field, $request->direction);
        }
        $team = (
            ArrayResource::collection($teams->fastPaginate($request->load)->withQueryString())
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
        
        $teamheader = ReservationTeamHeader::with('details')->with('details.user')->where('reservation_company_id', auth()->user()->company->id)->get();
        
        $counters = ReservationCounter::where('reservation_company_id', auth()->user()->company->id)->with('category')->get();
        return inertia('Reservation/Company/TeamLayanan/Index', ['team' => $team, 'teamheader' => $teamheader, 'counters' => $counters]);
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required',
        ]);
        $user = User::where('email', $validated['email'])->orWhere('username',  $validated['email'])->orWhere('phone',  $validated['email'])->first();
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $exist = ReservationEmployee::where('user_id', $user->id)->where('reservation_company_id', $company->id)->first();
        if ($exist) {
            return back()->with([
                'type' => 'error',
                'message' => 'Anda sudah memiliki kontak dengan karyawan tersebut',
            ]);
        }
        if ($user->id == auth()->user()->id) {
            return back()->with([
                'type' => 'error',
                'message' => 'Tidak bisa menambah diri sendiri sebagai karyawan',
            ]);
        }
        // dd($user);
        if (!$user) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal tambah kotak, user dengan email/username/no telp tersebut tidak ditemukan',
            ]);
        }
        $employee = ReservationEmployee::create(['user_id' => $user->id, 'reservation_company_id' => $company->id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Karyawan berhasil diundang, menunggu konfirmasi',
        ]);
    }
    public function store_team(Request $request)
    {
        // dd($request);
        $request->validate([
            'name' => ['required', 'string'],
            'employees' => ['array'],
            'counters' => ['array'],
            'leader' => ['required'],
        ]);
        $counters = $request->input('counters');
        $employees = $request->input('employees');

        $reservationTeamHeader = ReservationTeamHeader::create([
            'name' => $request->input('name'),
            'reservation_company_id' => auth()->user()->company->id,
        ]);
        foreach ($employees as $employee) {
            $reservationTeamHeaderDetail = ReservationTeamHeaderDetail::create([
                'reservation_team_header_id' => $reservationTeamHeader->id,
                'user_id' => $employee,
                'leader' => $employee == $request->input('leader') ? 1 :0,
            ]);
        }
        if (!empty($request->input('employees')) && !empty($request->input('counters'))) {
            foreach ($counters as $counter) {
                $validated['slug'] = str($request->input('name'))->slug() . '-' . Str::lower(Str::random(6));
                $validated['code'] = Str::random(6);

                $reservationTeam = ReservationTeam::create([
                    'name' => $request->input('name'),
                    'reservation_counter_id' => $counter,
                    'slug' => $validated['slug'],
                    'code' => $validated['code'],
                    'is_team' => 1,
                ]);
                foreach ($employees as $employee) {
                    $reservationTeamDetail = ReservationTeamDetail::create([
                        'reservation_team_id' => $reservationTeam->id,
                        'user_id' => $employee,
                        'leader' => $employee == $request->input('leader') ? 1 :0,
                    ]);
                }
                
            }
        }


        return back()->with([
            'type' => 'success',
            'message' => 'Tim berhasil dibuat',
        ]);
    }
    public function store_team_layanan(Request $request)
    {
        // dd($request);
        $request->validate([
            'name' => ['required', 'string'],
            'teamheader' => ['array'],
            'counters' => ['array'],
            'leader' => ['required'],
        ]);
        $counters = $request->input('counters');
        $teamheader = $request->input('teamheader');

        $reservationTeamHeader = ReservationTeamHeader::create([
            'name' => $request->input('name'),
            'reservation_company_id' => auth()->user()->company->id,
        ]);
        foreach ($teamheader as $employee) {
            $reservationTeamHeaderDetail = ReservationTeamHeaderDetail::create([
                'reservation_team_header_id' => $reservationTeamHeader->id,
                'user_id' => $employee,
                'leader' => $employee == $request->input('leader') ? 1 :0,
            ]);
        }
        if (!empty($request->input('teamheader')) && !empty($request->input('counters'))) {
            foreach ($counters as $counter) {
                $validated['slug'] = str($request->input('name'))->slug() . '-' . Str::lower(Str::random(6));
                $validated['code'] = Str::random(6);

                $reservationTeam = ReservationTeam::create([
                    'name' => $request->input('name'),
                    'reservation_counter_id' => $counter,
                    'slug' => $validated['slug'],
                    'code' => $validated['code'],
                    'is_team' => 1,
                ]);
                foreach ($teamheader as $employee) {
                    $reservationTeamDetail = ReservationTeamDetail::create([
                        'reservation_team_id' => $reservationTeam->id,
                        'user_id' => $employee,
                        'leader' => $employee == $request->input('leader') ? 1 :0,
                    ]);
                }
                
            }
        }


        return back()->with([
            'type' => 'success',
            'message' => 'Tim berhasil dibuat',
        ]);
    }
    public function makecashier(Request $request,  $id)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => ['required', 'email','unique:users,email,'. optional($user)->id],
        // ]);
        // $user->update($validated);
        // dd($id,$user);

        $user = User::findOrFail($id);
        // dd($user);
        $user->roles()->attach([0 => 13]);
        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil setting kasir',
        ]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function acceptinvitation($id)
    {
        $data = ReservationEmployee::findOrfail($id);
        $userId = User::where('email', $data->email)->pluck('id')->first();
        // dd($data);
        // ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        $data->update(['approved' => 1]);
        return redirect(route('reservation.myteaminvitations'))->with([
            'type' => 'success',
            'message' => 'Undangan Telah diterima',
        ]);
    }
    public function acceptdayoff($id)
    {
        $data = ReservationEmployeeDayOff::findOrfail($id);
        // $userId = User::where('email', $data->email)->pluck('id')->first();
        // ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        $data->update(['approved' => 1]);
        return redirect(route('reservation.myemployeerequestoff'))->with([
            'type' => 'success',
            'message' => 'Libur Telah diterima',
        ]);
    }
    public function declinedayoff(Request $request, $id)
    {
        // dd($request->all());
        $validated = $request->validate([
            'reason' => 'required',
        ]);
        $data = ReservationEmployeeDayOff::findOrfail($id);
        // $userId = User::where('email', $data->email)->pluck('id')->first();
        // ReservationTeamDetail::create(['reservation_team_id' => $data->reservation_team_id, 'user_id' => $userId, 'leader' => 1]);
        $data->update(['decline' => 1, 'decline_reason' => $validated['reason']]);
        return redirect(route('reservation.myemployeerequestoff'))->with([
            'type' => 'success',
            'message' => 'Libur berhasil ditolak',
        ]);
    }

    public function selectemployee(Request $request, $id, $slug)
    {
        // dd($slug);
        $data = ReservationEmployee::findOrfail($id);
        $user = User::where('id', $data->user_id)->first();
        $validated['slug'] = str($user->name)->slug() . '-' . Str::lower(Str::random(6));
        $validated['code'] = Str::random(6);
        $reservation_counter_id = ReservationCounter::where('slug', $slug)->first();
        $validated['reservation_counter_id'] = $reservation_counter_id->id;
        // dd("works");
        $reservationTeam = ReservationTeam::create(['reservation_counter_id' => $reservation_counter_id->id, 'name' => $user->name, 'slug' => $validated['slug'], 'code' => $validated['code']]);
        $reservationCounter = ReservationJoinCounter::updateOrCreate(['email' => $user->email, 'reservation_team_id' => $reservationTeam->id, 'approved' => 1], ['reservation_team_id' => $reservationTeam->id, 'email' => $user->email, 'approved' => 1]);
        ReservationTeamDetail::create(['reservation_team_id' => $reservationTeam->id, 'user_id' => $user->id, 'leader' => 1]);
        // $data->update(['approved' => 1]);
        return back()->with([
            'type' => 'success',
            'message' => 'Pekerja telah dipilih',
        ]);
    }
}
