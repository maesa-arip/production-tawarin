<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PlanBid extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['user_id','plan_id','bid_price','bid_price_user','description','is_approved'];

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
    public function konsultan()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
