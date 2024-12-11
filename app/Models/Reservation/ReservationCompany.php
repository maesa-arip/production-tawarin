<?php

namespace App\Models\Reservation;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ReservationCompany extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function reservation_category()
    {
        return $this->belongsTo(ReservationCategory::class);
    }
    public function reservation_car_category()
    {
        return $this->belongsTo(ReservationCarCategory::class);
    }
    public function reservationcategory()
    {
        return $this->belongsTo(ReservationCategory::class,'reservation_category_id');
    }
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    /**
     * Get all of the comments for the ReservationCompany
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function counter()
    {
        return $this->hasMany(ReservationCounter::class);
    }
    public function resolveRouteBinding($value, $field = null)
    {
        // Assuming 'slug' is the field you want to use for binding
        return $this->where('slug', $value)->firstOrFail();
    }
    public function employees()
    {
        return $this->hasMany(ReservationEmployee::class);
    }
}
