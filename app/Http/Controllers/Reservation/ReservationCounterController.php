<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reservation\ReservationCounterRequest;
use App\Http\Resources\Reservation\ReservationCounterResource;
use App\Models\Auth\JoinAs;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationTeam;
use App\Models\ReservationOnOff;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ReservationCounterController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationCounters = ReservationCounter::query()
            ->with('team')
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
            'percent_owner' =>  $request->percent_owner,
            'percent_employe' => $request->percent_employe,
            // 'open_at' => $request->open_at,
            // 'close_at' => $request->close_at,
            'service_duration' => $request->service_duration,
            'set_dayoff' => 0,
            'period' => $request->period,
            'need_image_reservation' => $request->need_image_reservation,
            'need_image_before_after' => 0,
            'is_active' => 1,
        ]);   
        // dd($atrributes);
            $reservationCounter = ReservationCounter::create($atrributes);
            return redirect('reservationCounters')->with([
                'type' => 'success',
                'message' => 'Pelayanan berhasil disimpan',
            ]);
    }

    public function show(ReservationCompany $reservationCompany, ReservationCounter $reservationCounter)
    {
        $team = ReservationTeam::where('reservation_counter_id', $reservationCounter->id)->get();
        $currentDate = Carbon::now(); // Get the current date and time
        $endDate = $currentDate->copy()->addDays($reservationCounter->period); // Add 30 days to the current date
        return inertia('Reservation/Counter/Basic/Show', ['reservationCompany'=> $reservationCompany,'team'=>$team,'reservationCounter'=> $reservationCounter, 'endDate' => $endDate->toDateString()]);
    }


    public function edit(Plan $plan)
    {
        $plan_details = $plan->with('plan_details')
            ->select('plan_details.plan_master_id as id', 'plan_details.description', 'plan_masters.name', 'plan_masters.slug')
            ->join('plan_details', 'plans.id', '=', 'plan_details.plan_id')
            ->join('plan_masters', 'plan_details.plan_master_id', '=', 'plan_masters.id')
            ->where('plan_id', $plan->id)
            ->get();
        $plan_rooms = $plan->with('plan_rooms')
            ->select('plan_rooms.plan_master_room_id as id', 'plan_rooms.name as elsename', 'plan_rooms.count', 'plan_master_rooms.name', 'plan_master_rooms.slug')
            ->join('plan_rooms', 'plans.id', '=', 'plan_rooms.plan_id')
            ->join('plan_master_rooms', 'plan_rooms.plan_master_room_id', '=', 'plan_master_rooms.id')
            ->where('plan_id', $plan->id)
            ->get();
        $plan_categories = PlanCategory::get();
        $plan_master_rooms = PlanMasterRoom::get();
        $plan_master_checkboxs = PlanMaster::where('type', 'checkbox')->get();
        $plan_master_texts = PlanMaster::where('type', 'text')->get();
        $media = $plan->getMedia('contohgambar');
        // dd($media);
        return inertia('Plans/Basic/Edit', [
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
            'plan_categories' => $plan_categories,
            'plan_master_rooms' => PlanMasterRoomResource::collection($plan_master_rooms),
            'plan' => $plan,
            'media' => $media,
            'plan_rooms' => $plan_rooms,
            'plan_details' => $plan_details,
        ]);
    }

    public function update(Request $request, Plan $plan)
    {
        dd("update");
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
