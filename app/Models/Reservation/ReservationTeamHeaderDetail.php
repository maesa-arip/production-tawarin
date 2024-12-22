<?php

namespace App\Models\Reservation;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamHeaderDetail extends Model
{
    use HasFactory;
    protected $fillable =['reservation_team_header_id','user_id','leader'];

    /**
     * Get the user that owns the ReservationTeamHeaderDetail
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
