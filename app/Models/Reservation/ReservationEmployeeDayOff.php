<?php

namespace App\Models\Reservation;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationEmployeeDayOff extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function company()
    {
        return $this->belongsTo(ReservationCompany::class, 'reservation_company_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
