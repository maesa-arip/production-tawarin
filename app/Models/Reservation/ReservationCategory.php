<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCategory extends Model
{
    use HasFactory;
    public function reservations()
    {
        return $this->hasMany(ReservationCompany::class);
    }
}
