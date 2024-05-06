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
        $reservationEmployees = ReservationEmployee::query()
            ->join('users','users.id','reservation_employees.user_id')->leftjoin('reservation_team_details', 'reservation_team_details.user_id','users.id')->leftjoin('reservation_teams', 'reservation_teams.id','reservation_team_details.reservation_team_id')
            ->leftjoin('reservation_customers', function ($join) {
                $join->on('reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
                    ->where('reservation_customers.selesai_customer', '=', 1);
            })
            ->leftjoin('reservation_ratings', 'reservation_ratings.reservation_team_id', 'reservation_teams.id')
            ->select(
                'reservation_employees.id',
                'reservation_employees.approved',
                'reservation_employees.created_at',
                'users.name',
                'users.email',
                'users.phone',
                DB::raw('AVG(reservation_ratings.star_rating) as average_rating'),
                DB::raw('COUNT(reservation_ratings.star_rating) as count_rating'),
                DB::raw('COUNT(reservation_customers.selesai_customer) as count_customer'),
            )
            ->groupBy('reservation_employees.id','users.name','users.email','users.phone','reservation_employees.created_at','reservation_employees.approved');
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
        $company = ReservationCompany::where('user_id',auth()->user()->id)->first();
        $exist = ReservationEmployee::where('user_id',$user->id)->where('reservation_company_id',$company->id)->first();
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
        $employee = ReservationEmployee::create(['user_id'=> $user->id, 'reservation_company_id'=>$company->id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Karyawan berhasil diundang, menunggu konfirmasi',
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

    public function selectemployee(Request $request ,$id,$slug)
    {
        $data = ReservationEmployee::findOrfail($id);
        $user = User::where('id', $data->user_id)->first();
        $validated['slug'] = str($user->name)->slug() . '-' . Str::lower(Str::random(6));
        $validated['code'] = Str::random(6);
        $reservation_counter_id = ReservationCounter::where('slug', $slug)->first();
        $validated['reservation_counter_id'] = $reservation_counter_id->id;
        // dd("works");
        $reservationTeam = ReservationTeam::create(['reservation_counter_id' => $reservation_counter_id->id, 'name' => $user->name, 'slug' => $validated['slug'], 'code' => $validated['code']]);
        $reservationCounter = ReservationJoinCounter::updateOrCreate(['email' => $user->email, 'reservation_team_id' => $reservationTeam->id,'approved'=>1], ['reservation_team_id' => $reservationTeam->id, 'email' => $user->email,'approved'=>1]);
        ReservationTeamDetail::create(['reservation_team_id' => $reservationTeam->id, 'user_id' => $user->id, 'leader' => 1]);
        // $data->update(['approved' => 1]);
        return back()->with([
            'type' => 'success',
            'message' => 'Pekerja telah dipilih',
        ]);
    }
}
