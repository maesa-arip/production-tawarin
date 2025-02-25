<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCounterTeam extends Model
{
    use HasFactory;
    protected $table ='reservation_counter_team';
    protected $guarded = [];
}
