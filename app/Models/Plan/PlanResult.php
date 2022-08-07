<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanResult extends Model
{
    use HasFactory;
    public function plan_detail()
    {
        return $this->belongsTo(PlanDetail::class);
    }
}
