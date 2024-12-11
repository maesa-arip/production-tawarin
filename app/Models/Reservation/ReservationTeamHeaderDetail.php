<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamHeaderDetail extends Model
{
    use HasFactory;
    protected $fillable =['reservation_team_header_id','user_id','leader'];
}
