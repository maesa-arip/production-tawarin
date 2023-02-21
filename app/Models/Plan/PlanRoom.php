<?php

namespace App\Models\Plan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanRoom extends Model
{
    use HasFactory;
    protected $fillable = ['plan_id','plan_master_room_id','name','count'];
}
