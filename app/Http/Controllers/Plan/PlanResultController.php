<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanResult;
use App\Models\TemporaryFile;
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
        //1 
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
            // dd(${"temporaryFolder" . $plan_detail->slug});
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
        // for ($i=0; $i < count($plan_details); $i++) { 
        //     echo $plan_details[$i];
        // }
        // $planresult1 = PlanResult::create([
        //     'plan_detail_id' => 1,
        //     'description' => $request->gambar_arsitektur,
        // ]);
        // $temporaryFoldergambar_arsitektur = Session::get('foldergambar_arsitektur');
        // $namefilegambar_arsitektur = Session::get('filenamegambar_arsitektur');
        // for ($i = 0; $i < count($temporaryFoldergambar_arsitektur); $i++) {
        //     $temporary = TemporaryFile::where('folder', $temporaryFoldergambar_arsitektur[$i])->where('filename', $namefilegambar_arsitektur[$i])->first();
        //     if ($temporary) {
        //         $planresult1->addMedia(storage_path('app/public/files/tmp/' . $temporaryFoldergambar_arsitektur[$i] . '/' . $namefilegambar_arsitektur[$i]))
        //             ->toMediaCollection('gambar_arsitektur');
        //         $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
        //         if (File::exists($path)) {
        //             Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
        //             File::delete($path);
        //             rmdir(storage_path('app/files/tmp/' . $temporary->folder));
        //             $temporary->delete();
        //         }
        //     }
        // }
        // Session::remove('foldergambar_arsitektur');
        // Session::remove('filenamegambar_arsitektur');
        //1 End
    }
    public function ShowResult()
    {
        return Inertia('Plans/Tahapan/Owner/Result/ShowResult');
    }
}
