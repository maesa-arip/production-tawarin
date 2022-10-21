<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
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
}
