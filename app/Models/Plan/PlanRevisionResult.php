<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PlanRevisionResult extends Model implements HasMedia
{
    use HasFactory,InteractsWithMedia;
    protected $fillable = ['description','plan_revision_id'];
    public function plan_revision()
    {
        return $this->belongsTo(PlanRevision::class);
    }
}
