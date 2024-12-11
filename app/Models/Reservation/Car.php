<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    public function reservationCounters()
{
    return $this->belongsToMany(ReservationCounter::class, 'reservation_counter_cars', 'car_id', 'reservation_counter_id');
}
}
