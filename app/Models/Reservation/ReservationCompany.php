<?php

namespace App\Models\Reservation;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCompany extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function reservation_category()
    {
        return $this->belongsTo(ReservationCategory::class);
    }
    public function reservationcategory()
    {
        return $this->belongsTo(ReservationCategory::class,'reservation_category_id');
    }
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
