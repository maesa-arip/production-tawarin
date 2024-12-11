<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCarQuestion extends Model
{
    use HasFactory;

    protected $fillable = ['reservation_company_id','question'];
}
