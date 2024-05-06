<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reservation\ReservationEmployeeResource;
use App\Models\Reservation\ReservationEmployeeBreak;
use App\Models\Reservation\ReservationEmployeeDayOff;
use Illuminate\Http\Request;

class ReservationDayOffBreakController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationEmployeeDayOff = ReservationEmployeeDayOff::query()
            ->with('company')->with('user')->where('user_id',auth()->user()->id);
        $reservationEmployeeBreak = ReservationEmployeeBreak::query()
            ->with('company')->with('user')->where('user_id',auth()->user()->id)->get();
        if ($request->q) {
            $reservationEmployeeDayOff->where('name', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservationEmployeeDayOff->orderBy($request->field, $request->direction);
        }
        $reservationEmployeeDayOff = (ReservationEmployeeResource::collection($reservationEmployeeDayOff->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Reservation/Profile/MyDayOffBreak', ['reservationEmployeeDayOff' => $reservationEmployeeDayOff,'reservationEmployeeBreak' => $reservationEmployeeBreak]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required',
            'reason' => 'required',
        ]);
        $date  = date("d/m/Y", strtotime($request->date));
        $dayOff = ReservationEmployeeDayOff::create(['date'=> $date,'user_id'=>auth()->user()->id,'reason'=> $request->reason, 'reservation_company_id'=>$request->reservation_company_id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Jadwal libur berhasil disimpan, menunggu konfirmasi owner',
        ]);
    }
    public function store_break(Request $request)
    {
        $validated = $request->validate([
            'start' => 'required',
            'end' => 'required',
        ]);
        $start  = date("H:i", strtotime($request->start));
        $end  = date("H:i", strtotime($request->end));
        $break = ReservationEmployeeBreak::updateOrCreate(['user_id' => auth()->user()->id],['start'=> $start,'end'=> $end,'user_id'=>auth()->user()->id, 'reservation_company_id'=>$request->reservation_company_id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Jadwal istirahat berhasil disimpan',
        ]);
    }
}
