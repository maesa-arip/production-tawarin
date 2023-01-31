<?php

namespace App\Http\Controllers;

use App\Models\Plan\PlanRevisionResult;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PlanRevisionResultController extends Controller
{
    public function StoreRevisionResult($planrevisionresult, Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string|max:255',
        ]);
        $attribute = ([
            'plan_revision_id' => $planrevisionresult,
            'description' => $request->description,
        ]);
        $planrevisionresult = PlanRevisionResult::create($attribute);
        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');
        for ($i = 0; $i < count($temporaryFolder); $i++) {
            $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
            if ($temporary) {
                $planrevisionresult->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
                    ->toMediaCollection('revisionresult');
                $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                if (File::exists($path)) {
                    Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                    File::delete($path);
                    rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                    $temporary->delete();
                }
            }
        }
        Session::remove('folder');
        Session::remove('filename');
        
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Revisi sudah terkirim',
        ]);
        
        
    }
}
