<?php

namespace App\Models\Plan;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function plan_bid()
    {
        return $this->hasMany(PlanBid::class);
    }
    public function plan_category()
    {
        return $this->belongsTo(PlanCategory::class);
    }
    public function plancategory()
    {
        return $this->belongsTo(PlanCategory::class,'plan_category_id');
    }
    public function plan_detail()
    {
        return $this->hasMany(PlanDetail::class);
    }
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function plan_result()
    {
        return $this->hasManyThrough(PlanResult::class,PlanDetail::class);
    }
    public function plan_revision()
    {
        return $this->hasManyThrough(PlanRevision::class,PlanDetail::class);
    }
}
