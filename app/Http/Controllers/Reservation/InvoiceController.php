<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Models\Reservation\ReservationCustomer;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function ereceipt ($code)
    {
        // dd($code);

        $invoice = ReservationCustomer::with('team')->with('user')->with('team.counter')->with('team.counter.company')->with('team.counter.company.owner')->where('code',$code)->where('selesai_customer',1)->first();
       
        // dd($invoice);
        return inertia('Reservation/Public/Ereceipt',['invoice'=>$invoice]);
    }
}
