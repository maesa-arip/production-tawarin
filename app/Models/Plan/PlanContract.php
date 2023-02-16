<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanContract extends Model
{
    protected $fillable =['plan_id','tempat','tanggal'];
    use HasFactory;
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
}
