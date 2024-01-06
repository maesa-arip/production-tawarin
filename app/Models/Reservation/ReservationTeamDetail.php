<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamDetail extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function team()
    {
        return $this->belongsTo(ReservationTeam::class);
    }
}
