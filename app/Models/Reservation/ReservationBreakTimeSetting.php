<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationBreakTimeSetting extends Model
{
    use HasFactory;
    protected $fillable = ['reservation_company_id','break_time'];
}
