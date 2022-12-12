<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\DepositRequest;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Wallet\UserDepositNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Wallets/Deposit/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DepositRequest $request)
    {
        $user = auth()->user();
        $admin = User::find(1);
        $deposit = $user->deposit($request->amount, null, false);        
        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');

        for ($i = 0; $i < count($temporaryFolder); $i++) {
            $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
            if ($temporary) { //if exist
                $deposit->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
                    ->toMediaCollection('BuktiTransfer');
                //hapus file and folder temporary
                $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                if (File::exists($path)) {
                    Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                    File::delete($path);
                    rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                    //delete record in temporary table
                    $temporary->delete();
                }
            }
        }
        Session::remove('folder');
        Session::remove('filename');

        $admin->notify(new UserDepositNotification($deposit));
        Cache::forget('notifications_count');
        return redirect('wallets')->with([
            'type' => 'success',
            'message' => 'Top Up berhasil, menunggu konfirmasi admin',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
