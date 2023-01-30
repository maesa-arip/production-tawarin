<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Models\Plan\PlanRevision;
use Illuminate\Http\Request;

class PlanRevisionController extends Controller
{
    public function StoreRevision($planrevision, Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string|max:255',
        ]);
        $attribute = ([
            'plan_result_id' => $planrevision,
            'description' => $request->description,
        ]);
        $planrevision = PlanRevision::create($attribute);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Revisi sudah terkirim',
        ]);
    }
}
