<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanRevision extends Model
{
    use HasFactory;
    public function plan_detail()
    {
        return $this->belongsTo(PlanDetail::class);
    }
    public function plan_revision_result()
    {
        return $this->hasMany(PlanRevisionResult::class);
    }
}
