<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PlanResult extends Model implements HasMedia
{
    protected $fillable = ['plan_detail_id', 'description'];
    use HasFactory, InteractsWithMedia;
    public function plan_detail()
    {
        return $this->belongsTo(PlanDetail::class);
    }
}
