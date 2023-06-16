<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\ProjectRequest;
use App\Http\Resources\Project\ProjectCategoryResource;
use App\Models\Project\Project;
use App\Models\Project\ProjectCategory;
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
    public function index()
    {
        
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
            'desa' => $request->desa,
            'alamat' => $request->alamat,
            'maps' => $request->maps,
        ]);
        $project = Project::create($atrribute_projects);

        $temporaryFolderdenahlokasi = Session::get('folderdenahlokasiukuran');
        $namefiledenahlokasi = Session::get('filenamedenahlokasiukuran');
        if ($temporaryFolderdenahlokasi) {
            for ($i = 0; $i < count($temporaryFolderdenahlokasi); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderdenahlokasi[$i])->where('filename', $namefiledenahlokasi[$i])->first();
                if ($temporary) {
                    $project->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderdenahlokasi[$i] . '/' . $namefiledenahlokasi[$i]))
                        ->toMediaCollection('denahlokasiukuran');
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
        Session::remove('folderdenahlokasiukuran');
        Session::remove('filenamedenahlokasiukuran');

        $temporaryFolderkondisisaatini = Session::get('folderkondisisaatini');
        $namefilekondisisaatini = Session::get('filenamekondisisaatini');
        
        if ($temporaryFolderkondisisaatini) {
            for ($i = 0; $i < count($temporaryFolderkondisisaatini); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderkondisisaatini[$i])->where('filename', $namefilekondisisaatini[$i])->first();
                if ($temporary) {
                    $project->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderkondisisaatini[$i] . '/' . $namefilekondisisaatini[$i]))
                        ->toMediaCollection('kondisisaatini');
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
        Session::remove('folderkondisisaatini');
        Session::remove('filenamekondisisaatini');

        return redirect('projects')->with([
            'type' => 'success',
            'message' => 'Proyek berhasil dibuat',
        ]);
    }
}
