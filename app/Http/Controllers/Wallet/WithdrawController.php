<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\WithdrawRequest;
use App\Models\Bank;
use App\Models\UserBank;
use Illuminate\Http\Request;
use Bavix\Wallet\External\Dto\Extra;
use Bavix\Wallet\External\Dto\Option;

class WithdrawController extends Controller
{
    public function create()
    {
        $banks = Bank::get();
        $userBank = UserBank::with('bank')->where('user_id',auth()->user()->id)->first();
        // dd($userBank);
        return inertia('Wallets/Withdraw/Create', ['banks' => $banks,'userBank' => $userBank]);
    }
    public function store(WithdrawRequest $request)
    {
        // dd($request->all());
        $user = auth()->user();
        $userBank = UserBank::with('bank')->where('user_id',auth()->user()->id)->first();
        // dd($user);
        $withdraw = $user->withdraw($request->amount,['message' => 'Permintaan Penarikan dari '.$user->name ,'bank_name' => $userBank->bank->name, 'account_number' => $userBank->account_number,'account_name' => $userBank->account_name, 'type' => 'uang keluar'], false);


        return redirect('wallets')->with([
            'type' => 'success',
            'message' => 'Withdraw berhasil, menunggu konfirmasi admin',
        ]);
    }
}
