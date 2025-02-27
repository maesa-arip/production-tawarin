<?php

namespace App\Models\Reservation;

use App\Models\ReservationTeamHeader;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ReservationCounter extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['reservation_company_id','user_id','name','slug','code','description','jumlahlayanandiskon','open_at','close_at','service_duration','reservation_car_category_id','price','price_user','bhp','jasa','bonus_khusus','percent_owner','percent_employe','deposit','set_dayoff','period','need_image_reservation','need_image_before_after','is_active'];
    public function resolveRouteBinding($value, $field = null)
    {
        // Assuming 'slug' is the field you want to use for binding
        return $this->where('slug', $value)->firstOrFail();
    }
    public function team()
    {
        return $this->hasMany(ReservationTeam::class);
    }
    public function teams()
    {
        return $this->belongsToMany(ReservationTeamHeader::class, 'reservation_counter_team');
    }
    public function category()
    {
        return $this->belongsTo(ReservationCarCategory::class,'reservation_car_category_id');
    }
    /**
     * Get the user that owns the ReservationCounter
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(ReservationCompany::class, 'reservation_company_id');
    }

    // public function cars()
    // {
    //     return $this->hasMany(ReservationCounterCar::class,'reservation_counter_id');
    // }
    public function cars()
{
    return $this->belongsToMany(Car::class, 'reservation_counter_cars', 'reservation_counter_id', 'car_id');
}
}
