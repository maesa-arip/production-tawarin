<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PlanPortofolio extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function plan_category()
    {
        return $this->belongsTo(PlanCategory::class);
    }
    public function plancategory()
    {
        return $this->belongsTo(PlanCategory::class,'plan_category_id');
    }
}
