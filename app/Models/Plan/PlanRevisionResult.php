<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanRevisionResult extends Model
{
    use HasFactory;
    public function plan_revision()
    {
        return $this->belongsTo(PlanRevision::class);
    }
}
