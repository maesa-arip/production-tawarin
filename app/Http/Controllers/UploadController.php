<?php

namespace App\Http\Controllers;

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
        Session::put('folder', $folder); //save session  folder
        Session::put('filename', $filename); //save session filename

            $file->storeAs('public/files/tmp/' . $folder, $filename);

            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);

            return 'Success';
            //return $filename;
        }
        // }
        return '';
        
    
    }
    public function storedropzone()
    {
        return "works";
    }
}
