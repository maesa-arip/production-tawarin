<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\TemporaryFile;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function edit(Request $request)
    {
        $user =  User::find(auth()->user()->id);
        // dd($user);
        // $media = $user->getMedia('profilepicture');
        // dd($media);
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            // $media = $user->getMedia('contohgambar');
        // dd($media);
            'media' => $user->getMedia('profilepicture'),
        ]);
    }

    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\ProfileUpdateRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ProfileUpdateRequest $request)
    {
        
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        $user = User::find(auth()->user()->id);

        $temporaryFolderProfile = Session::get('folderprofile');
        $namefileProfile = Session::get('filenameprofile');
        if ($temporaryFolderProfile) {
            for ($i = 0; $i < count($temporaryFolderProfile); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolderProfile[$i])->where('filename', $namefileProfile[$i])->first();
                if ($temporary) {
                    $user->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderProfile[$i] . '/' . $namefileProfile[$i]))
                        ->toMediaCollection('profilepicture');
                    $path = storage_path() . '/app/public/files/tmp/' . $temporary->folder;
                    if (File::exists($path)) {
                        File::delete($path);
                        rmdir(storage_path('app/public/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
        Session::remove('folderprofile');
        Session::remove('filenameprofile');
        
        return Redirect::route('profile.edit')->with([
            'type' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
