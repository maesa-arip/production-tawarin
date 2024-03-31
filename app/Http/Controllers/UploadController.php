<?php

namespace App\Http\Controllers;

use App\Models\Plan\Plan;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

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
        // $request->validate([
        //     'document' => 'required',
        //     'document.*' => 'required|mimes:pdf,xlx,csv|max:2048',
        // ]);
        if ($request->hasFile('denahlokasiukuran')) {
            $file = $request->file('denahlokasiukuran');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderdenahlokasiukuran', $folder);
            Session::push('filenamedenahlokasiukuran', $filename);
            return [$folder, $filename, 'folderdenahlokasiukuran', 'filenamedenahlokasiukuran'];
            // return 'folderdenahlokasiukuran';
            // return 'filenamedenahlokasiukuran';


        }
        if ($request->hasFile('kondisisaatini')) {
            $file = $request->file('kondisisaatini');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderkondisisaatini', $folder);
            Session::push('filenamekondisisaatini', $filename);
            return [$folder, $filename, 'folderkondisisaatini', 'filenamekondisisaatini'];
        }

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
            return [$folder, $filename, 'folder', 'filename'];
        }
        if ($request->hasFile('reservationcounter')) {
            $file = $request->file('reservationcounter');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldercounter', $folder);
            Session::push('filenamecounter', $filename);
            return [$folder, $filename, 'foldercounter', 'filenamecounter'];


        }
        if ($request->hasFile('profilepicture')) {
            $file = $request->file('profilepicture');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('folderprofile', $folder);
            Session::push('filenameprofile', $filename);
            return [$folder, $filename, 'folderprofile', 'filenameprofile'];


        }
        if ($request->hasFile('reservationcompany')) {
            $file = $request->file('reservationcompany');
            $filename = hexdec(uniqid()) . '.' . $file->extension();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/files/tmp/' . $folder, $filename);
            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);
            Session::push('foldercompany', $folder);
            Session::push('filenamecompany', $filename);
            return [$folder, $filename, 'foldercompany', 'filenamecompany'];


        }



        // Upload Hasil
        $plan_details = Plan::join('plan_details', 'plan_details.plan_id', 'plans.id')
            ->join('plan_masters', 'plan_masters.id', 'plan_details.plan_master_id')
            ->select('plan_masters.name', 'plans.jumlah_revisi', 'plan_masters.slug', 'plan_details.id')
            ->get();

        foreach ($plan_details as $plan_detail) {
            if ($request->hasFile($plan_detail->slug)) {
                $file = $request->file($plan_detail->slug);
                ${"folder" . $plan_detail->slug} = uniqid() . '-' . now()->timestamp;
                ${"filename" . $plan_detail->slug} = hexdec(uniqid()) . '.' . $file->extension();
                $file->storeAs('public/files/tmp/' . ${"folder" . $plan_detail->slug}, ${"filename" . $plan_detail->slug});
                TemporaryFile::create([
                    'folder' => ${"folder" . $plan_detail->slug},
                    'filename' => ${"filename" . $plan_detail->slug}
                ]);
                Session::push("folder" . $plan_detail->slug, ${"folder" . $plan_detail->slug});
                Session::push("filename" . $plan_detail->slug, ${"filename" . $plan_detail->slug});
            }
        }


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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
            return $filename;
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
        $db = TemporaryFile::where('filename', $request->filename)->first();
        if ($db) {
            $path = storage_path() . '/app/public/files/tmp/' . $db->folder . '/' . $db->filename;
            if (File::exists($path)) {
                File::delete($path);
                rmdir(storage_path('app/public/files/tmp/' . $db->folder));

                //delete record in table temporaryImage
                TemporaryFile::where([
                    'folder' =>  $db->folder,
                    'filename' => $db->filename
                ])->delete();

                //Delete Session
                $sessfolder = Session::get($request->sessionfolder, []);
                $index = array_search($request->folder, $sessfolder);

                if ($index !== false) {
                    array_splice($sessfolder, $index, 1);
                    Session::put($request->sessionfolder, array_values($sessfolder));
                }

                $sessfilename = Session::get($request->sessionfilename, []);
                $index = array_search($request->filename, $sessfilename);
                if ($index !== false) {
                    array_splice($sessfilename, $index, 1);
                    Session::put($request->sessionfilename, array_values($sessfilename));
                }
                return response()->json(['message' => 'File deleted'], 200);
            } else {
                return response()->json(['message' => 'File not found'], 404);
            }
        }
    }
    public function destroyimage($id)
    {
        $media = Media::findOrfail($id);
        $media->delete();
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Media berhasil dihapus',
        ]);
    }
}
