<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationRatingCategory extends Model
{
    use HasFactory;
    protected $fillable = ['reservation_company_id','name'];
}
