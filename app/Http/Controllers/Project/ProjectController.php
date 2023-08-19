<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\ProjectRequest;
use App\Http\Resources\Project\ProjectCategoryResource;
use App\Http\Resources\Project\ProjectResource;
use App\Http\Resources\Project\ProjectSingleResource;
use App\Models\Project\Project;
use App\Models\Project\ProjectCategory;
use App\Models\Project\ProjectDetail;
use App\Models\Project\ProjectMaster;
use App\Models\Project\ProjectPayment;
use App\Models\TemporaryFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function choose()
    {
        return inertia('Project/Basic/Choose');
    }
    public $loadDefault = 15;
    public function index(Request $request)
    {
        $projects = Project::query()
            ->with('project_category')
            ->with('owner')
            ->with('winner')
            ->with('project_bids')
            ->when($request->project_category, fn ($q, $v) => $q->whereBelongsTo(ProjectCategory::where('slug', $v)->first()))
            ->where('user_id', auth()->user()->id)
            ->doesntHave('projectReject')
            ->with('media')
            ->select('id', 'anggaran_proyek',  'jangka_waktu_pelaksanaan', 'user_id', 'slug', 'is_approved',  'name', 'project_category_id', 'created_at')
            ->withCount(['project_bids'])
            ->withSum('project_bids', 'is_approved');
        if ($request->q) {
            $projects->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $projects->orderBy($request->field, $request->direction);
        }
        $projects = (ProjectResource::collection($projects->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 15,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        $projectRejectCount = Project::query()
            ->where('user_id', auth()->user()->id)
            ->has('projectReject')->count();
        return inertia('Project/Basic/Index', ['projects' => $projects, 'projectRejectCount' => $projectRejectCount]);
    }
    public function create()
    {
        $project_categories = ProjectCategory::get();
        $project_payments = ProjectPayment::get();
        $project_masters = ProjectMaster::get();
        return inertia('Project/Basic/Create', [
            'project_categories' => ProjectCategoryResource::collection($project_categories),
            'project_payments' => ($project_payments),
            'project_masters' => ($project_masters),
        ]);
    }
    private function saveImage($project, $temporaryFolder, $nameFile, $mediaCollection)
    {
        if (!is_null($temporaryFolder) && !is_null($nameFile)) {
            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $nameFile[$i])->first();
                if ($temporary) {
                    $project->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $nameFile[$i]))
                        ->toMediaCollection($mediaCollection);
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
    }
    private function saveImage2($projectDetail, $temporaryFolder, $nameFile, $mediaCollection)
    {
        if (!is_null($temporaryFolder) && !is_null($nameFile)) {
            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $nameFile[$i])->first();
                if ($temporary) {
                    $projectDetail->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $nameFile[$i]))
                        ->toMediaCollection($mediaCollection);
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
    }
    public function store(ProjectRequest $request)
    {

        $atrribute_projects = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Proyek ' . $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'project_category_id' => $request->project_category_id,
            'project_payment_id' => $request->project_payment_id,
            'jangka_waktu_penawaran' => $request->jangka_waktu_penawaran,
            'jangka_waktu_pelaksanaan' => $request->jangka_waktu_pelaksanaan,
            'jaminan_pemeliharaan' => $request->jaminan_pemeliharaan,
            'masa_waktu_pemeliharaan' => $request->masa_waktu_pemeliharaan,
            'anggaran_proyek' => $request->anggaran_proyek,
            'jaminan_pelaksanaan' => $request->jaminan_pelaksanaan,
            'lat' => $request->lat,
            'lng' => $request->lng,
        ]);
        // $projectMasters = ProjectMaster::get();
        // foreach ($projectMasters as $projectMaster) {
        //     if ($request->has($projectMaster->slug)) {
        //         $projectDetail = ProjectDetail::create([
        //             'project_id' => 1,
        //             'project_master_id' => $projectMaster->id,
        //             'description' => $request[$projectMaster->slug],
        //         ]);
        //         // Save image based on slug

        //     }
        //     $this->saveImage2($projectDetail, Session::get('folder' . $projectMaster->slug), Session::get('filename' . $projectMaster->slug), $projectMaster->slug);
        //     Session::forget(['folder' . $projectMaster->slug, 'filename' . $projectMaster->slug]);
        // }

        DB::beginTransaction();
        try {
            $project = Project::create($atrribute_projects);
            $this->saveImage($project, Session::get('folderdenahlokasiukuran'), Session::get('filenamedenahlokasiukuran'), 'denahlokasiukuran');
            Session::forget(['folderdenahlokasiukuran', 'filenamedenahlokasiukuran']);

            $this->saveImage($project, Session::get('folderkondisisaatini'), Session::get('filenamekondisisaatini'), 'kondisisaatini');
            Session::forget(['folderkondisisaatini', 'filenamekondisisaatini']);

            $projectMasters = ProjectMaster::get();
            foreach ($projectMasters as $projectMaster) {
                if ($request->has($projectMaster->slug)) {
                    $projectDetail = ProjectDetail::create([
                        'project_id' => $project->id,
                        'project_master_id' => $projectMaster->id,
                        'description' => $request[$projectMaster->slug],
                    ]);
                    // Save image based on slug
                    $this->saveImage($projectDetail, Session::get('folder' . $projectMaster->slug), Session::get('filename' . $projectMaster->slug), $projectMaster->slug);
                    Session::forget(['folder' . $projectMaster->slug, 'filename' . $projectMaster->slug]);
                }
            }
            DB::commit();
            return redirect('projects')->with([
                'type' => 'success',
                'message' => 'Proyek berhasil dibuat',
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return redirect('projects')->with([
                'type' => 'error',
                'message' => 'Proyek gagal dibuat',
            ]);
        }
    }

    public function show(Project $project)
    {
        $projectWithSum = $project->with('project_bids')->where('id', $project->id)->withSum('project_bids', 'is_approved')->first();
        $media = $project->getMedia('contohgambar');
        $denahlokasiukuran = $project->getMedia('denahlokasiukuran');
        $kondisisaatini = $project->getMedia('kondisisaatini');
        $persentase = 1;

        return Inertia('Project/Basic/Show', [
            'project' => ProjectSingleResource::make($project->load('project_category')),
            'media' => ($media),
            'denahlokasiukuran' => ($denahlokasiukuran),
            'kondisisaatini' => ($kondisisaatini),
            'projectWithSum' => $projectWithSum,
            'persentase' => ($persentase),
        ]);
    }
    public function list(Request $request)
    {
        $projects = project::query()
            ->with('project_category')
            ->with('winner')
            ->with('owner')
            ->with('media')
            ->where('is_approved', 1)
            ->when($request->project_category, fn ($q, $v) => $q->whereBelongsTo(ProjectCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek', 'jangka_waktu_pelaksanaan', 'jangka_waktu_penawaran', 'user_id', 'slug', 'name', 'is_approved', 'project_category_id', 'created_at')
            ->withCount(['project_bids'])
            ->withSum('project_bids', 'is_approved');
        if ($request->q) {
            $projects->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $projects->orderBy($request->field, $request->direction);
        }
        $projects = (ProjectResource::collection($projects->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        return inertia('Project/Public/List', ['projects' => $projects]);
    }
}
