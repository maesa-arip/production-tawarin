<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanRequest;
use App\Http\Resources\Plan\PlanCategoryResource;
use App\Http\Resources\Plan\PlanMasterResource;
use App\Http\Resources\Plan\PlanResource;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanCategory;
use App\Models\User;
use App\Models\Plan\PlanDetail;
use App\Models\Plan\PlanMaster;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PlanController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->where('user_id',auth()->user()->id)
            ->select('id', 'anggaran_proyek','dari_anggaran','sampai_anggaran','user_id', 'slug','jumlah_revisi', 'name', 'plan_category_id','created_at');
            if ($request->q) {
                $plans->where('name','like','%'.$request->q.'%')
                ->orWhere('slug','like','%'.$request->q.'%')
                ->orWhere('jumlah_revisi','like','%'.$request->q.'%')
                ->orWhere('anggaran_proyek','like','%'.$request->q.'%')
                ;
            }
            if ($request->has(['field','direction'])) {
                $plans->orderBy($request->field,$request->direction);
            }
            $plans = (
                PlanResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
            )->additional([
                'attributes' => [
                    'total' => Plan::count(),
                    'per_page' =>10,
                ],
                'filtered' => [
                    'load' => $request->load ?? $this->loadDefault,
                    'q' => $request->q ?? '',
                    'page' => $request->page ?? 1,
                    'field' => $request->field ?? '',
                    'direction' => $request->direction ?? '',
                ]
            ]);
            return inertia('Plans/Basic/Index',['plans'=>$plans]);
    }

    public function create()
    {
        $plan_categories = PlanCategory::get();
        $plan_master_checkboxs = PlanMaster::where('type', 'checkbox')->get();
        $plan_master_texts = PlanMaster::where('type', 'text')->get();
        return inertia('Plans/Basic/Create', [
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
            'plan_categories' => PlanCategoryResource::collection($plan_categories),
        ]);
    }

    public function store(PlanRequest $request)
    {
        $atrribute_plans = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Perencanaan ' . $request->name,
            'slug' => str($name)->slug(),
            'jangka_waktu_penawaran' => $request->jangka_waktu_penawaran,
            'jangka_waktu_pelaksanaan' => $request->jangka_waktu_pelaksanaan,
            'jumlah_revisi' => $request->jumlah_revisi,
            'luas_bangunan' => $request->luas_bangunan,
            'acuan_anggaran' => $request->acuan_anggaran,
            'anggaran_proyek' => $request->anggaran_proyek,
            'dari_anggaran' => $request->dari_anggaran,
            'sampai_anggaran' => $request->sampai_anggaran,
            'plan_category_id' => $request->plan_category_id,
        ]);
        // dd($atrribute_plans);
        // dd($request->cover);
        $plan = Plan::create($atrribute_plans);

        // foreach ($request->input('planCover', []) as $file) {
        //     $plan->addMedia(storage_path('tmp/uploads/' . $file))->toMediaCollection('gambardesain');
        // }

        // $temporaryFile = TemporaryFile::where('folder',auth()->user()->id)->orderBy('id','desc')->first();
        // // dd($temporaryFile);
        
        // if($temporaryFile) {
        // $plan->addMedia(storage_path('app/public/files/tmp/'. auth()->user()->id .'/'.$temporaryFile->filename))
        // ->toMediaCollection('planCover');
        // // rmdir(storage_path('app/public/files/tmp/'. auth()->user()->id));
        // File::deletedirectory(storage_path('app/public/files/tmp/'. auth()->user()->id));
        // $temporaryFile->delete();
        // }

        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');

        $temporary = TemporaryFile::where('folder', $temporaryFolder)->where('filename', $namefile)->first();

        if ($temporary) { //if exist

            $plan->addMedia(storage_path('app/public/files/tmp/'. $temporaryFolder .'/'.$temporary->filename))
            ->toMediaCollection('planCover');
                //hapus file and folder temporary
                $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                if (File::exists($path)) {
                    Storage::move('files/tmp/'.$temporary->folder.'/'.$temporary->filename, 'files/'.$temporary->folder.'/'.$temporary->filename);
                    File::delete($path);
                    rmdir(storage_path('app/files/tmp/' . $temporary->folder));

                    //delete record in temporary table
                    $temporary->delete();

                    
                }

        }

        // return response()->json(['status' => false, 'message' => 'Data Gagal']);
        //Plan Details
            if($request->has('gambar_arsitektur')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 1,
                ]);
            }
            if($request->has('gambar_3d_interior')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 2,
                ]);
            }
            if($request->has('gambar_3d_exterior')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 3,
                ]);
            }
            if($request->has('animasi_3d')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 4,
                ]);
            }
            if($request->has('gambar_struktur')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 5,
                ]);
            }
            if($request->has('gambar_mep')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 6,
                ]);
            }
            if($request->has('rab_dan_spesifikasi_teknis')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 7,
                ]);
            }
            if($request->has('time_schedule_dan_bobot_pembayaran')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 8,
                ]);
            }
            if($request->has('lainnya')) {
                PlanDetail::create([
                    'plan_id' => $plan->id,
                    'plan_master_id' => 9,
                    'description' => $request->lainnya,
                ]);
            }
        //End Plan Details
        return redirect('plans')->with([
            'type' => 'success',
            'message' => 'Plans was created',
        ]);
    }

    public function show(Plan $plan)
    {
        $media = $plan->getMedia('planCover');
        return Inertia('Plans/Basic/Show', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'media' => ($media),
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
    public function list(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            // ->where('is_approved',1) 
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek','dari_anggaran','sampai_anggaran','user_id', 'slug','jumlah_revisi', 'name', 'is_approved','plan_category_id','created_at');
            if ($request->q) {
                $plans->where('name','like','%'.$request->q.'%')
                ->orWhere('slug','like','%'.$request->q.'%')
                ->orWhere('jumlah_revisi','like','%'.$request->q.'%')
                ->orWhere('anggaran_proyek','like','%'.$request->q.'%')
                ;
            }
            if ($request->has(['field','direction'])) {
                $plans->orderBy($request->field,$request->direction);
            }
            $plans = (
                PlanResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
            )->additional([
                'attributes' => [
                    // 'total' => Plan::count(),
                    'per_page' =>10,
                ],
                'filtered' => [
                    'load' => $request->load ?? $this->loadDefault,
                    'q' => $request->q ?? '',
                    'page' => $request->page ?? 1,
                    'field' => $request->field ?? '',
                    'direction' => $request->direction ?? '',
    
                ]
            ]);
            return inertia('Plans/Public/List',['plans'=>$plans]);
    }
}
