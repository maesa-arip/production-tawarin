<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Models\User;
use Bavix\Wallet\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index()
    {
        $balance = auth()->user()->balance;
        $bonus = auth()->user()->hasWallet('bonus') ? auth()->user()->getWallet('bonus')->balance : 0 ;
        return inertia('Wallets/Basic/Index',[
            'balance' => $balance,
            'bonus' => $bonus,
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
