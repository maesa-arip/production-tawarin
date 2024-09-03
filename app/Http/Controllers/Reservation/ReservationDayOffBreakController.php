<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\Reservation\ReservationEmployeeResource;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeBreak;
use App\Models\Reservation\ReservationEmployeeDayOff;
use Illuminate\Http\Request;

class ReservationDayOffBreakController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $reservationEmployeeDayOff = ReservationEmployeeDayOff::query()
            ->with('company')->with('user')->where('user_id', auth()->user()->id);
        $reservationEmployeeBreak = ReservationEmployeeBreak::query()
            ->with('company')->with('user')->where('user_id', auth()->user()->id)->get();
        $reservationEmployee = ReservationEmployee::query()
            ->with('company')->with('user')->where('user_id', auth()->user()->id)->first();
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
        return inertia('Reservation/Profile/MyDayOffBreak', ['reservationEmployeeDayOff' => $reservationEmployeeDayOff, 'reservationEmployeeBreak' => $reservationEmployeeBreak, 'reservationEmployee' => $reservationEmployee]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required',
            'reason' => 'required',
        ]);
        $date  = date("d/m/Y", strtotime($request->date));
        $dayOff = ReservationEmployeeDayOff::create(['date' => $date, 'user_id' => auth()->user()->id, 'reason' => $request->reason, 'reservation_company_id' => $request->reservation_company_id]);
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

        // Create DateTime objects for start and end
        $startTime = new \DateTime($start);
        $endTime = new \DateTime($end);

        // Calculate the difference
        $interval = $startTime->diff($endTime);

        // Format the difference as hours and minutes
        $hours = $interval->h;
        $minutes = $interval->i;

        if ($interval->h > 1 || ($interval->h == 1 && $interval->i > 0)) {
            // return back()->withErrors([
            //     'time_error' => 'The break time cannot be more than 1 hour.',
            // ])->withInput();
            $difference = $interval->format('%H:%I'); // or "%H hours and %I minutes"
            
        return back()->with([
            'type' => 'error',
            'message' => 'Istirahat tidak boleh lebih dari 1 jam',
        ]);
            // dd('lebih 1 jam - ' . $difference);
        } else {
            $difference = $interval->format('%H:%I'); // or "%H hours and %I minutes"
            $break = ReservationEmployeeBreak::updateOrCreate(['user_id' => auth()->user()->id], ['start' => $start, 'end' => $end, 'user_id' => auth()->user()->id, 'reservation_company_id' => $request->reservation_company_id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Jadwal istirahat berhasil disimpan',
        ]);
        }
        // Optional: Format the difference as a string


        
    }
    public function cancel_dayoff(Request $request, $id)
    {
        // dd($id);
        // $validated = $request->validate([
        //     'reason' => 'required',
        //     // 'end' => 'required',
        // ]);
        // $start  = date("H:i", strtotime($request->start));
        // $end  = date("H:i", strtotime($request->end));
        ReservationEmployeeDayOff::where('id', $id)
            ->update(['batal' => 1]);
        // $break = ReservationEmployeeBreak::update(['batal' => 1]);
        return back()->with([
            'type' => 'success',
            'message' => 'Batalkan Libur Berhasil',
        ]);
    }
}
