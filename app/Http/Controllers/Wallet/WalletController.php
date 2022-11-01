<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index()
    {
        $balance = auth()->user()->balance;
        return inertia('Wallets/Basic/Index',[
            'balance' => $balance,
        ]);
    }
    public function deposit(User $user)
    {
        $user->deposit(100, null, false);
        return inertia('Wallets/SingleWallet/Deposit');
    }
}
