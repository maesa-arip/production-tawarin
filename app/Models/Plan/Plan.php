<?php

namespace App\Models\Plan;

use App\Models\User;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Plan extends Model implements HasMedia, Wallet, Confirmable
{
    use HasFactory,InteractsWithMedia,SoftDeletes,HasWallet, HasWallets, CanConfirm;

    protected $guarded =[];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function plan_bids()
    {
        return $this->hasMany(PlanBid::class);
        // return $this->hasMany(PlanBid::class)->where('user_id', auth()->user()->id);
    }
    public function plan_bid()
    {
        // return $this->hasMany(PlanBid::class);
        return $this->hasOne(PlanBid::class)->where('user_id', auth()->user()->id);
    }
    
    public function plan_category()
    {
        return $this->belongsTo(PlanCategory::class);
    }
    public function plancategory()
    {
        return $this->belongsTo(PlanCategory::class,'plan_category_id');
    }
    public function plan_details()
    {
        return $this->hasMany(PlanDetail::class);
    }
    public function plan_rooms()
    {
        return $this->hasMany(PlanRoom::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function plan_result()
    {
        return $this->hasManyThrough(PlanResult::class,PlanDetail::class);
    }
    // public function plan_revision()
    // {
    //     return $this->hasManyThrough(PlanRevision::class,PlanDetail::class);
    // }
    public function planReject()
    {
        return $this->hasOne(PlanReject::class);
    }
    public function contract()
    {
        return $this->hasOne(PlanContract::class);
    }

    public function winner()
    {
        return $this->hasOne(PlanBid::class)
        ->where('is_approved', 1)->join('users','users.id','user_id');
    }
}
