<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationRating extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function reservation_team()
    {
        return $this->belongsTo(ReservationTeam::class);
    }
}
