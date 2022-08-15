<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanRequest;
use App\Http\Resources\Plan\PlanMasterResource;
use App\Http\Resources\Plan\PlanResource;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanCategory;
use App\Models\Plan\PlanMaster;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->when($request->plan_category,fn($q,$v)=>$q->whereBelongsTo(PlanCategory::where('slug',$v)->first()))
            ->select('id','anggaran_proyek','slug','name','plan_category_id')
            ->fastPaginate(12)
            ->withQueryString();
        return inertia('Plans/Basic/Index',[
            'plans' => PlanResource::collection($plans),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $plan_master_checkboxs = PlanMaster::where('type','checkbox')->get();
        $plan_master_texts = PlanMaster::where('type','text')->get();
        return inertia('Plans/Basic/Create',[
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlanRequest $request)
    {
        $atrributes = $request->toArray();
        dd($atrributes);
        Plan::create($atrributes);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was created',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Plan $plan)
    {
        return Inertia('Plans/Basic/Show',[
            'plan' =>PlanSingleResource::make($plan->load('plan_category'))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function list(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->when($request->plan_category,fn($q,$v)=>$q->whereBelongsTo(PlanCategory::where('slug',$v)->first()))
            ->select('id','anggaran_proyek','slug','name','plan_category_id')
            ->fastPaginate(12)
            ->withQueryString();
        return inertia('Plans/Public/List',[
            'plans' => PlanResource::collection($plans),
        ]);
    }
}
