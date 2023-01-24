<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Models\Plan\PlanRevision;
use Illuminate\Http\Request;

class PlanRevisionController extends Controller
{
    public function StoreRevision(PlanRevision $planrevision)
    {
        dd($planrevision);
    }
}
