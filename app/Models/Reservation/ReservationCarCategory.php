<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCarCategory extends Model
{
    use HasFactory;
    protected $fillable = ['reservation_company_id','name'];
    /**
     * Get the user that owns the ReservationCarCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function counter()
    {
        return $this->belongsTo(ReservationCounter::class);
    }
}
