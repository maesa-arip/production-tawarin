<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanMaster;
use App\Models\Plan\PlanResult;
use App\Models\Plan\PlanRevision;
use Illuminate\Contracts\Database\Query\Builder;
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
    public function ShowRevision(Plan $plan)
    {
        $dataplan = [];
        $plan_master = PlanMaster::select('name','slug')->get();
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')->where('plans.id', $plan->id)
            ->join('plan_results', 'plan_results.plan_detail_id', 'plan_details.id')
            ->leftjoin('plan_revisions','plan_revisions.plan_result_id','plan_results.id')
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug','plan_revisions.description', 'plan_revisions.id as revision_id','plan_details.id', 'plans.jumlah_revisi','plan_results.is_finish', 'plan_results.id as result_id')
            ->addSelect(['jumlah_pengajuan_revisi' => function (Builder $builder) {
                $builder->from('plan_revisions')->selectRaw('count(*) as jumlah_pengajuan_revisi')->whereColumn('plan_results.id', 'plan_revisions.plan_result_id');
            }])
            ->get();
            
        foreach ($plan_details as $plan_detail) {
            $plan_result = PlanResult::where('plan_detail_id', $plan_detail->id)->first();
            $dataplan[$plan_detail->slug] = $plan_result->getMedia($plan_detail->slug);
        }
        return Inertia('Plans/Tahapan/Konsultan/Revisi/ShowRevisi', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'dataplan' => $dataplan,
            'plan_master' => $plan_master,
            'plan_details' => $plan_details,
        ]);
    }
}
