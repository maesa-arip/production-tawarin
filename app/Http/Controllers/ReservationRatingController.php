<?php

namespace App\Http\Controllers;

use App\Models\Reservation\ReservationRating;
use Illuminate\Http\Request;

class ReservationRatingController extends Controller
{
    public function getallemployeerating($user_id)
    {
        $employeerating = ReservationRating::where('user_id', $user_id)->paginate(5);
        // return inertia('Reservation/Counter/Basic/Show', ['employeerating' => $employeerating]);
        // return redirect()->back()->with([
        //     'employeerating' => $employeerating
        // ]);
    return response()->json($employeerating); // Return as JSON
    }
}
