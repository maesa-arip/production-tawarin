<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationRatingDetail extends Model
{
    use HasFactory;
    protected $fillable = ['reservation_rating_id','reservation_rating_category_id','star_rating'];
}
