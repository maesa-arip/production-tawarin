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
            Session::push('folder', $folder);
            Session::push('filename', $filename);
            return 'Success';
        }

        // Upload Hasil
        // $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
        //     ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')
        //     ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug', 'plan_details.id')
        //     ->get();

        // foreach ($plan_details as $plan_detail) {
        //     if ($request->hasFile($plan_detail->slug)) {
        //         $file = $request->file($plan_detail->slug);
        //         ${"folder" . $plan_detail->slug} = uniqid() . '-' . now()->timestamp;
        //         ${"filename" . $plan_detail->slug} = hexdec(uniqid()) . '.' . $file->extension();
        //         $file->storeAs('public/files/tmp/' . ${"folder" . $plan_detail->slug}, ${"filename" . $plan_detail->slug});
        //         TemporaryFile::create([
        //             'folder' => ${"folder" . $plan_detail->slug},
        //             'filename' => ${"filename" . $plan_detail->slug}
        //         ]);
        //         Session::push("folder" . $plan_detail->slug, ${"folder" . $plan_detail->slug});
        //         Session::push("filename" . $plan_detail->slug, ${"filename" . $plan_detail->slug});
        //     }
        // }

        if ($request->hasFile('gambar_arsitektur')) {
            $file = $request->file('gambar_arsitektur');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldergambar_arsitektur', $folder);
            Session::push('filenamegambar_arsitektur', $filename);
        }
        if ($request->hasFile('gambar_3d_interior')) {
            $file = $request->file('gambar_3d_interior');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldergambar_3d_interior', $folder);
            Session::push('filenamegambar_3d_interior', $filename);
        }
        if ($request->hasFile('gambar_3d_exterior')) {
            $file = $request->file('gambar_3d_exterior');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldergambar_3d_exterior', $folder);
            Session::push('filenamegambar_3d_exterior', $filename);
        }
        if ($request->hasFile('animasi_3d')) {
            $file = $request->file('animasi_3d');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderanimasi_3d', $folder);
            Session::push('filenameanimasi_3d', $filename);
        }
        if ($request->hasFile('gambar_struktur')) {
            $file = $request->file('gambar_struktur');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldergambar_struktur', $folder);
            Session::push('filenamegambar_struktur', $filename);
        }
        if ($request->hasFile('gambar_mep')) {
            $file = $request->file('gambar_mep');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldergambar_mep', $folder);
            Session::push('filenamegambar_mep', $filename);
        }
        if ($request->hasFile('rab_dan_spesifikasi_teknis')) {
            $file = $request->file('rab_dan_spesifikasi_teknis');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderrab_dan_spesifikasi_teknis', $folder);
            Session::push('filenamerab_dan_spesifikasi_teknis', $filename);
        }
        if ($request->hasFile('time_schedule_dan_bobot_pembayaran')) {
            $file = $request->file('time_schedule_dan_bobot_pembayaran');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldertime_schedule_dan_bobot_pembayaran', $folder);
            Session::push('filenametime_schedule_dan_bobot_pembayaran', $filename);
        }
        if ($request->hasFile('lainnya')) {
            $file = $request->file('lainnya');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderlainnya', $folder);
            Session::push('filenamelainnya', $filename);
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
