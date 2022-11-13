<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\WithdrawRequest;
use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    public function create()
    {
        return inertia('Wallets/Withdraw/Create');
    }
    public function store(WithdrawRequest $request)
    {
        $user = auth()->user();
        $withdraw = $user->withdraw($request->amount, null, false);

        return redirect('wallets')->with([
            'type' => 'success',
            'message' => 'Withdraw berhasil, menunggu konfirmasi admin',
        ]);
    }
}
