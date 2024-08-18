<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\WithdrawRequest;
use App\Models\Bank;
use App\Models\UserBank;
use Illuminate\Http\Request;
use Bavix\Wallet\External\Dto\Extra;
use Bavix\Wallet\External\Dto\Option;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class WithdrawController extends Controller
{
    public function create()
    {
        $banks = Bank::get();
        $userBank = UserBank::with('bank')->where('user_id',auth()->user()->id)->first();
        $user = auth()->user();
        $wallet_id = DB::table('wallets')->where('holder_type','App\Models\User')->where('name','Default Wallet')->where('holder_id',$user->id)->first();
        $onhold = abs(DB::table('transactions')->where('wallet_id',$wallet_id->id)->where('type','withdraw')->where('confirmed',0)->whereJsonContains('meta->type', 'request_withdraw')->sum('amount'));
        $balance = $user->balance - $onhold;
        // dd($userBank);
        return inertia('Wallets/Withdraw/Create', ['banks' => $banks,'userBank' => $userBank,'balance' => $balance,'onhold' => $onhold]);
    }
    public function store(WithdrawRequest $request)
    {
        // dd($request->all());
        $user = auth()->user();

        $currentTimestamp = Carbon::now()->toDateString();
        $exists = Transaction::where('payable_id', $user->id)
            ->where(DB::raw('ABS(amount)'), $request->amount)
            ->where('type', 'withdraw')
            ->where('meta->type', '<>', 'decline')
            // ->whereJsonContains('meta->type','<>','decline')
            ->whereDate('created_at', $currentTimestamp)
            ->exists();
        // dd($exists);
        if ($exists) {
            //     Session::remove('folder');
            // Session::remove('filename');
            return redirect('wallets')->with([
                'type' => 'error',
                'message' => 'Withdraw gagal, sudah pernah melakukan withdraw dengan nominal tersebut pada hari ini',
            ]);
        }
        if (!$exists) {
            $wallet_id = DB::table('wallets')->where('holder_type','App\Models\User')->where('name','Default Wallet')->where('holder_id',$user->id)->first();
        $onhold = abs(DB::table('transactions')->where('wallet_id',$wallet_id->id)->where('type','withdraw')->where('confirmed',0)->whereJsonContains('meta->type', 'request_withdraw')->sum('amount'));
        $userBank = UserBank::with('bank')->where('user_id',auth()->user()->id)->first();
        // dd($request->amount + 2500);
        if ($request->amount + 2500 > $user->balance - $onhold) {
            return redirect()->route('withdraws.create')->with([
                'message' => 'Penarikan Gagal, Saldo tidak mencukupi',
                'type' => 'error'
            ]);
        }
        // dd($user->balance);
        $withdraw = $user->withdraw($request->amount,['message' => 'Permintaan Penarikan dari '.$user->name ,'bank_name' => $userBank->bank->name, 'account_number' => $userBank->account_number,'account_name' => $userBank->account_name, 'type' => 'request_withdraw'], false);


        return redirect('wallets')->with([
            'type' => 'success',
            'message' => 'Withdraw berhasil, menunggu konfirmasi admin',
        ]);
        }

        
        
    }
}
