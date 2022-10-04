<?php

namespace App\Http\Controllers;

use App\Http\Resources\Plan\PlanMasterResource;
use App\Models\Plan\PlanCategory;
use App\Models\Plan\PlanMaster;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function homefunding()
    {
        return inertia('HomeFunding');
    }
    public function form()
    {
        return inertia('Example/Form');
    }
    public function funding()
    {
        $plan_categories = PlanCategory::get();
        return inertia('Example/Funding',[
            'plan_categories' => PlanMasterResource::collection($plan_categories),]);
    }
    public function descriptionlist()
    {
        return inertia('Example/DescriptionList');
    }
}
