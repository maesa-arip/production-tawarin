<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCounterCar extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function counter()
    {
        return $this->belongsTo(ReservationCounter::class,'reservation_counter_id');
    }
}
