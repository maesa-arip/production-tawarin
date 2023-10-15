<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeam extends Model
{
    use HasFactory;
    public function counter()
    {
        return $this->belongsTo(ReservationCounter::class);
    }
}
