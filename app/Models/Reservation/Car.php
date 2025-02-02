<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Car extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['name','merk','standar_kategori','reservation_company_id'];

    public function reservationCounters()
{
    return $this->belongsToMany(ReservationCounter::class, 'reservation_counter_cars', 'car_id', 'reservation_counter_id');
}
/**
 * Get the user that owns the Car
 *
 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
 */
public function company()
{
    return $this->belongsTo(ReservationCompany::class);
}

}
