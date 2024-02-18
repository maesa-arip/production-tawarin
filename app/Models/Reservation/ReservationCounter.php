<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ReservationCounter extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['reservation_company_id','user_id','name','slug','code','description','jumlahlayanandiskon','open_at','close_at','service_duration','price','price_user','percent_owner','percent_employe','set_dayoff','period','need_image_reservation','need_image_before_after','is_active'];
    public function resolveRouteBinding($value, $field = null)
    {
        // Assuming 'slug' is the field you want to use for binding
        return $this->where('slug', $value)->firstOrFail();
    }
    public function team()
    {
        return $this->hasMany(ReservationTeam::class);
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
}
