<?php

namespace App\Models\Reservation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationCarAnswer extends Model
{
    use HasFactory;
    protected $fillable = ['reservation_customer_id','reservation_car_question_id','description','approved','decline','pekerja_comment','customer_comment','request_approved'];

    /**
     * Get the user that owns the ReservationCarAnswer
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(ReservationCustomer::class, 'reservation_customer_id');
    }
    /**
     * Get the user that owns the ReservationCarAnswer
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function question()
    {
        return $this->belongsTo(ReservationCarQuestion::class, 'reservation_car_question_id');
    }
}
