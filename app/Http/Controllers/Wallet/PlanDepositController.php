<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanBid;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Wallet\UserDepositNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PlanDepositController extends Controller
{
    public function plandeposit(Plan $plan)
    {
        $planbid = PlanBid::where('plan_id',$plan->id)->where('is_approved',1)->sum('bid_price')/2;
        return inertia('Wallets/Deposit/Plan/PlanDeposit',[
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'planbid'=>$planbid,
        ]);
    }
    public function plandepositstore(Plan $plan)
    {
        $planbid = PlanBid::where('plan_id',$plan->id)->where('is_approved',1)->sum('bid_price')/2;
        $admin = User::find(1);
        $deposit = $plan->deposit($planbid, null, false);        
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
}
