<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanDetail extends Model
{
    use HasFactory;
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
    public function plan_master()
    {
        return $this->belongsTo(PlanMaster::class);
    }
    public function plan_result()
    {
        return $this->hasMany(PlanResult::class);
    }
    public function plan_revision()
    {
        return $this->hasMany(PlanRevision::class);
    }
}
