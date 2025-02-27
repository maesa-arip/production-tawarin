<?php

namespace App\Models\Reservation;

use App\Models\User;
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
    /**
     * Get all of the comments for the ReservationTeamDetail
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
}
