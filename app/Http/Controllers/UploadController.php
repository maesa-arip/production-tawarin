<?php

namespace App\Http\Controllers;

use App\Models\TemporaryFile;
use Illuminate\Http\Request;

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
        if ($request->hasFile('cover')) {
            $file = $request->file('cover');

            // foreach ($file as $file) {
            $filename = $file->getClientOriginalName();
            // $folder = uniqid() . '-' . now()->timestamp;
            $folder =  auth()->user()->id;

            $file->storeAs('public/files/tmp/' . $folder, $filename);

            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $filename
            ]);

            return $folder;
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
