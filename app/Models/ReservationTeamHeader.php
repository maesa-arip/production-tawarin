<?php

namespace App\Models;

use App\Models\Reservation\ReservationTeamHeaderDetail;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamHeader extends Model implements Wallet,Confirmable
{
    use HasFactory, HasWallet,HasWallets,CanConfirm;
    protected $fillable = ['name','reservation_company_id'];

    /**
     * Get all of the comments for the ReservationTeamHeader
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function details()
    {
        return $this->hasMany(ReservationTeamHeaderDetail::class, 'reservation_team_header_id');
    }
    
}
