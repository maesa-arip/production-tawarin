<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reservation\ReservationEmployeeResource;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeDayOff;
use App\Models\Reservation\ReservationJoinCounter;
use App\Models\Reservation\ReservationTeam;
use App\Models\Reservation\ReservationTeamDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ReservationEmployeeController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        // $reservationEmployees = ReservationEmployee::query()
        //     ->join('users','users.id','reservation_employees.user_id')
        //     ->leftjoin('reservation_team_details', 'reservation_team_details.user_id','users.id')
        //     ->leftjoin('reservation_teams', 'reservation_teams.id','reservation_team_details.reservation_team_id')
        //     ->leftjoin('reservation_customers', function ($join) {
        //         $join->on('reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        //             ->where('reservation_customers.selesai_customer', '=', 1);
        //     })
        //     ->leftjoin('reservation_ratings', 'reservation_ratings.reservation_team_id', 'reservation_teams.id')
        //     ->leftJoin('media', function ($join) {
        //         $join->on('media.model_id', '=', 'reservation_employees.user_id')
        //             ->where('media.model_type', '=', 'App\Models\User');
        //     })
        //     ->select(
        //         'reservation_employees.id',
        //         'reservation_employees.approved',
        //         'reservation_employees.created_at',
        //         'reservation_team_details.user_id',
        //         'users.name',
        //         'users.email',
        //         'users.phone',
        //         'media.file_name',
        //         'media.id as media_id',
        //         DB::raw('AVG(reservation_ratings.star_rating) as average_rating'),
        //         DB::raw('COUNT(reservation_ratings.status) as count_rating'),
        //         DB::raw('COUNT(reservation_customers.selesai_customer) as count_customer'),
        //     )
        //     ->groupBy('reservation_employees.id','users.name','users.email','users.phone','reservation_employees.created_at','reservation_employees.approved','file_name','media_id','user_id');

        // $reservationEmployees = ReservationEmployee::with('company')->with('company.counter')->with('company.counter.team')->get();
        $reservationEmployees = ReservationEmployee::query()
            ->leftJoin('reservation_team_details as rtd', 'reservation_employees.user_id', '=', 'rtd.user_id')
            ->leftJoin('reservation_teams as rt', 'rtd.reservation_team_id', '=', 'rt.id')
            ->leftJoin('reservation_counters as rco', 'rt.reservation_counter_id', '=', 'rco.id')
            ->leftJoin('reservation_customers as rc', function ($join) {
                $join->on('rt.id', '=', 'rc.reservation_team_id')
                     ->where('rc.selesai_customer', '=', 1);
            })
            ->leftJoin('reservation_ratings as rr', 'rt.id', '=', 'rr.reservation_team_id')
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
                'reservation_employees.approved',
                'reservation_employees.created_at',
                'rtd.user_id as team_detail_user_id',
                'users.name',
                'users.email',
                'users.phone',
                'media.id as media_id',
                'model_has_roles.model_type as model_has_roles_model_type',
                'media.file_name',
                DB::raw('AVG(rr.star_rating) as average_rating'),
                DB::raw('COUNT(DISTINCT rc.id) as count_customer'),
                DB::raw('COUNT(DISTINCT rr.id) as count_rating')
            )
            ->groupBy('reservation_employees.id', 'reservation_employees.user_id', 'reservation_employees.approved', 'reservation_employees.created_at', 'rtd.user_id', 'users.name', 'users.email', 'users.phone', 'media.id','model_has_roles.model_type', 'media.file_name');
    //     $reservationEmployees = ReservationEmployee::query()
    // ->leftJoin('reservation_team_details as rtd', 'reservation_employees.user_id', '=', 'rtd.user_id')
    // ->leftJoin('users', 'reservation_employees.user_id', '=', 'users.id')
    // ->leftJoin('media', function ($join) {
    //     $join->on('media.model_id', '=', 'reservation_employees.user_id')
    //          ->where('media.model_type', '=', 'App\\Models\\User');
    // })
    // ->leftJoinSub(
    //     DB::table('reservation_teams as rt')
    //         ->leftJoin('reservation_ratings as rr', 'rt.id', '=', 'rr.reservation_team_id')
    //         ->select('rt.id as team_id', DB::raw('AVG(rr.star_rating) as average_rating'), DB::raw('COUNT(DISTINCT rr.id) as count_rating'))
    //         ->groupBy('rt.id'),
    //     'ratings_subquery', 'ratings_subquery.team_id', '=', 'rtd.reservation_team_id'
    // )
    // ->leftJoinSub(
    //     DB::table('reservation_teams as rt')
    //         ->leftJoin('reservation_customers as rc', function ($join) {
    //             $join->on('rt.id', '=', 'rc.reservation_team_id')
    //                  ->where('rc.selesai_customer', '=', 1);
    //         })
    //         ->select('rt.id as team_id', DB::raw('COUNT(DISTINCT rc.id) as count_customer'))
    //         ->groupBy('rt.id'),
    //     'customers_subquery', 'customers_subquery.team_id', '=', 'rtd.reservation_team_id'
    // )
    // ->select(
    //     'reservation_employees.id as employee_record_id',
    //     'reservation_employees.approved',
    //     'reservation_employees.created_at',
    //     'users.name',
    //     'users.email',
    //     'users.phone',
    //     'media.id as media_id',
    //     'media.file_name',
    //     'ratings_subquery.average_rating',
    //     'ratings_subquery.count_rating',
    //     'customers_subquery.count_customer'
    // )
    // ->groupBy('reservation_employees.id', 'reservation_employees.user_id', 'reservation_employees.approved', 'reservation_employees.created_at', 'users.name', 'users.email', 'users.phone', 'media.id', 'media.file_name')
    // ;

        // dd($employees);
                // dd($reservationEmployees);
        if ($request->q) {
            $reservationEmployees->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservationEmployees->orderBy($request->field, $request->direction);
        }
        $reservationEmployees = (ReservationEmployeeResource::collection($reservationEmployees->latest()->fastPaginate($request->load)->withQueryString())
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
        $data->update(['decline' => 1,'decline_reason'=>$validated['reason']]);
        return redirect(route('reservation.myemployeerequestoff'))->with([
            'type' => 'success',
            'message' => 'Libur berhasil ditolak',
        ]);
    }

    public function selectemployee(Request $request, $id, $slug)
    {
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
