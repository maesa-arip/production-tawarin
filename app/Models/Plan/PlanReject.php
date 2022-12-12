<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanReject extends Model
{
    protected $fillable=['plan_id','description'];
    use HasFactory;
    public function plan()
    {
        $this->belongsTo(Plan::class);
    }
}
