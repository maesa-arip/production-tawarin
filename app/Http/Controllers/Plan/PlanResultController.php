<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanMaster;
use App\Models\Plan\PlanResult;
use App\Models\Plan\PlanRevision;
use App\Models\Plan\PlanRevisionResult;
use App\Models\TemporaryFile;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PlanResultController extends Controller
{
    public function UploadResult(Plan $plan)
    {
        // $plan_details = $plan->plan_details;
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')->where('plans.id', $plan->id)
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug')
            ->get();
        return Inertia('Plans/Tahapan/Konsultan/Result/UploadResult', [
            'plan_details' => $plan_details,
            'plan' => $plan,
        ]);
    }
    public function StoreUploadResult(Plan $plan, Request $request)
    {
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')->where('plans.id', $plan->id)
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug', 'plan_details.id')
            ->get();

        foreach ($plan_details as $plan_detail) {
            $slug = $plan_detail->slug;
            ${"plan_detail" . $plan_detail->id} = PlanResult::create([
                'plan_detail_id' => $plan_detail->id,
                'description' => $request->$slug,
            ]);
            ${"temporaryFolder" . $plan_detail->slug} = Session::get("folder{$plan_detail->slug}");
            ${"namefile" . $plan_detail->slug} = Session::get("filename{$plan_detail->slug}");
            for ($i = 0; $i < count(${"temporaryFolder" . $plan_detail->slug}); $i++) {
                $temporary = TemporaryFile::where('folder', ${"temporaryFolder" . $plan_detail->slug}[$i])->where('filename', ${"namefile" . $plan_detail->slug}[$i])->first();
                if ($temporary) {
                    ${"plan_detail" . $plan_detail->id}->addMedia(storage_path('app/public/files/tmp/' . ${"temporaryFolder" . $plan_detail->slug}[$i] . '/' . ${"namefile" . $plan_detail->slug}[$i]))
                        ->toMediaCollection($plan_detail->slug);
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
            Session::remove("folder{$plan_detail->slug}");
            Session::remove("filename{$plan_detail->slug}");
        }
        return redirect('bidplan/tahapan/' . $plan->slug)->with([
            'type' => 'success',
            'message' => 'Hasil berhasil di upload',
        ]);
    }
    public function ShowResult(Plan $plan)
    {
        $dataplan = [];
        $plan_master = PlanMaster::select('name','slug')->get();
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')->where('plans.id', $plan->id)
            ->join('plan_results', 'plan_results.plan_detail_id', 'plan_details.id')
            ->leftjoin('plan_revisions', 'plan_revisions.plan_result_id', 'plan_results.id')
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug', 'plan_details.id', 'plans.jumlah_revisi','plan_revisions.id as revision_id','plan_results.is_finish', 'plan_results.id as result_id')
            ->addSelect(['jumlah_pengajuan_revisi' => function (Builder $builder) {
                $builder->from('plan_revisions')->selectRaw('count(*) as jumlah_pengajuan_revisi')->whereColumn('plan_results.id', 'plan_revisions.plan_result_id');
            }])
            ->get();
            $plan_revisions = PlanRevision::has('plan_revision_result')
            ->join('plan_results', 'plan_results.id', 'plan_revisions.plan_result_id')
            ->join('plan_details', 'plan_details.id', 'plan_results.plan_detail_id')
            ->join('plans', 'plans.id','plan_details.plan_id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')->where('plans.id', $plan->id)
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug','plan_revisions.description', 'plan_revisions.id as revision_id','plan_details.id', 'plans.jumlah_revisi','plan_results.is_finish', 'plan_results.id as result_id')
                ->addSelect(['jumlah_pengajuan_revisi' => function (Builder $builder) {
                    $builder->from('plan_revisions')->selectRaw('count(*) as jumlah_pengajuan_revisi')->whereColumn('plan_results.id', 'plan_revisions.plan_result_id');
                }])
            ->get();
        foreach ($plan_details as $plan_detail) {
            $plan_result = PlanResult::where('plan_detail_id', $plan_detail->id)->first();
            $dataplan[$plan_detail->slug] = $plan_result->getMedia($plan_detail->slug);
        }
        foreach ($plan_revisions as $plan_revision) {
            $plan_revision_result = PlanRevisionResult::where('plan_revision_id', $plan_revision->revision_id)->first();
            // dd($plan_revision_result);
            $datadescriptionrevisionresult[$plan_revision->revision_id] = $plan_revision_result->description;
            $datarevisionresult[$plan_revision->revision_id] = $plan_revision_result->getMedia('revisionresult');
        }
        return Inertia('Plans/Tahapan/Owner/Result/ShowResult', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'dataplan' => $dataplan,
            'plan_master' => $plan_master,
            'plan_details' => $plan_details,
            'plan_revisions' => $plan_revisions,
            'datarevisionresult' => $datarevisionresult,
            'datadescriptionrevisionresult' => $datadescriptionrevisionresult,
        ]);
    }
    public function FinishResult(PlanResult $planresult)
    {
        $planresult->update(['is_finish' => 1]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
    
}
