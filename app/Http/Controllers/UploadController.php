<?php

namespace App\Http\Controllers;

use App\Models\Plan\Plan;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;

class UploadController extends Controller
{
    public function filepond()
    {
        return inertia('Uploads/Filepond');
    }
    public function dropzone()
    {
        return inertia('Uploads/Dropzone');
    }
    public function store(Request $request)
    {
        if ($request->hasFile('document')) {
            $file = $request->file('document');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folder', $folder); //save session  folder
            // folder = [item1, item2, item3];
            Session::push('filename', $filename); //save session filename
            return 'Success';
            //return $filename;
        }

        // Upload Hasil
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug', 'plan_details.id')
            ->get();
        foreach ($plan_details as $plan_detail) {
            if ($request->hasFile($plan_detail->slug)) {
                $file = $request->file($plan_detail->slug);
                ${"filename" . $plan_detail->slug} = hexdec(uniqid()) . '.' . $file->extension();
                ${"folder" . $plan_detail->slug} = uniqid() . '-' . now()->timestamp;
                $file->storeAs('public/files/tmp/' . ${"folder" . $plan_detail->slug}, ${"filename" . $plan_detail->slug});
                TemporaryFile::create([
                    'folder' => ${"folder" . $plan_detail->slug},
                    'filename' => ${"filename" . $plan_detail->slug}
                ]);
                Session::push('folder'. $plan_detail->slug."'", ${"folder" . $plan_detail->slug});
                Session::push('filename'. $plan_detail->slug."'", ${"filename" . $plan_detail->slug});
            }
        }
        //End Upload Hasil

        return '';
    }
    public function storedropzone()
    {
        return "works";
    }
    public function destroy(Request $request)
    {
        //check data from temporaryImage
        $db = TemporaryFile::where('filename', $request->filename)->first();
        if ($db) {
            $path = storage_path() . '/app/files/tmp/' . $db->folder . '/' . $db->filename;
            if (File::exists($path)) {
                File::delete($path);
                rmdir(storage_path('app/files/tmp/' . $db->folder));

                //delete record in table temporaryImage
                TemporaryFile::where([
                    'folder' =>  $db->folder,
                    'filename' => $db->filename
                ])->delete();
                return 'deleted';
            } else {
                return 'not found';
            }
        }
    }
}
