<?php

namespace App\Models;

use App\Models\Reservation\ReservationTeam;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamDetail extends Model
{
    use HasFactory;
    protected $guarded = [];


    // public function team()
    // {
    //     return $this->belongsToMany(ReservationTeam::class, 'role_user_table', 'user_id', 'role_id');
    // }
    /**
     * Get the user associated with the ReservationTeamDetail
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
