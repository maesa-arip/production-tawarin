<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanMaster extends Model
{
    use HasFactory;
    public function plan_detail()
    {
        return $this->hasMany(PlanDetail::class);
    }
}
