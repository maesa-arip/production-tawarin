<?php

namespace App\Models\Reservation;

use App\Models\ReservationTeamDetail;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ReservationTeam extends Model implements Wallet, Confirmable
{
    use HasFactory,HasWallet,HasWallets,CanConfirm,SoftDeletes;
    protected $guarded = [];
    public function counter()
    {
        return $this->belongsTo(ReservationCounter::class,'reservation_counter_id');
    }
    public function teamdetail()
    {
        return $this->hasMany(ReservationTeamDetail::class);
    }
    public function customers()
    {
        return $this->hasMany(ReservationCustomer::class);
    }
    public function joincounter()
    {
        return $this->hasMany(ReservationJoinCounter::class);
    }
    /**
     * Get all of the comments for the ReservationTeam
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ratings()
    {
        return $this->hasMany(ReservationRating::class);
    }
}
