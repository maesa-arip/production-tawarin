<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Models\User;
use Bavix\Wallet\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WalletController extends Controller
{
    public function index()
    {
        $user = User::where('id',auth()->user()->id)->first();
        $referral = User::where('from_referral', $user->referral)->get();
        $user->wallet->refreshBalance();
        $balance = auth()->user()->balance;
        
        $wallet_id = DB::table('wallets')->where('holder_type','App\Models\User')->where('name','Default Wallet')->where('holder_id',$user->id)->first();
        $depositpekerja = abs(DB::table('transactions')->where('wallet_id',$wallet_id->id)->where('type','withdraw')->where('confirmed',1)->whereJsonContains('meta->type', 'deposit')->sum('amount')) - abs(DB::table('transactions')->where('wallet_id',$wallet_id->id)->where('type','deposit')->whereJsonContains('meta->type', 'deposit_withdraw')->where('confirmed',1)->sum('amount'));
        $bonus = auth()->user()->hasWallet('bonus') ? auth()->user()->getWallet('bonus')->balance : 0 ;
        $deposit = auth()->user()->hasWallet('deposit') ? auth()->user()->getWallet('deposit')->balance : 0 ;
        return inertia('Wallets/Basic/Index',[
            'balance' => $balance,
            'bonus' => $bonus,
            'deposit' => $deposit,
            'depositpekerja' => $depositpekerja,
            'referral' => $referral,
        ]);
    }
    public function deposit(User $user)
    {
        // $user->deposit(100, null, false);
        return inertia('Wallets/SingleWallet/Deposit');
    }

    public function depositstore(User $user, Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required',
        ]);
        $request->user()->deposit($validated, null, false);
    }
}
