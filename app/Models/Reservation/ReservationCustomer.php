<?php

namespace App\Models\Reservation;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;

class ReservationCustomer extends Model implements Wallet, Confirmable
{
    use HasFactory,HasWallet, HasWallets, CanConfirm;
    protected $guarded =[];
    /**
     * Get the user that owns the ReservationCustomer
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function team()
    {
        return $this->belongsTo(ReservationTeam::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    /**
     * Get all of the comments for the ReservationCustomer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function answers()
    {
        return $this->hasMany(ReservationCarAnswer::class);
    }
}
