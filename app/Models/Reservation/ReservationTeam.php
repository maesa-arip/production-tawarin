<?php

namespace App\Models\Reservation;

use App\Models\ReservationTeamDetail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeam extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function counter()
    {
        return $this->belongsTo(ReservationCounter::class,'reservation_counter_id');
    }
    public function teamdetail()
    {
        return $this->hasMany(ReservationTeamDetail::class);
    }
    public function joincounter()
    {
        return $this->hasMany(ReservationJoinCounter::class);
    }
}
