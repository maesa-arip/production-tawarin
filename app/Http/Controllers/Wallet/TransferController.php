<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Bavix\Wallet\External\Dto\Extra;
use Bavix\Wallet\External\Dto\Option;

class TransferController extends Controller
{
    public function transfer()
    {
        $users = User::whereNotIn('users.id', [auth()->user()->id])->join('contacts', 'users.id', '=', 'contacts.contact_id')->where('user_id',auth()->user()->id)->whereNotNull('email_verified_at')->select('users.*')->get();
        return inertia('Wallets/Transfer/Create', [
            'users' => UserResource::collection($users),
        ]);
    }
    public function transferstore(Request $request)
    {
        $from = User::find(auth()->user()->id);
        $to = User::find($request->transfer_id);
        // dd($request->all());
        // $from->transfer($to, $request->amount); 
        $transfer = $from->transfer($to, $request->amount, new Extra(
            deposit: ['message' => 'Terima dari '.$from->name,'type'=>'uang masuk'],
            withdraw: new Option(meta: ['message' => 'Transfer ke '.$to->name,'type' => 'uang keluar'], confirmed: true)
        ));
        return redirect('wallets')->with(
            ['type'=>'success',
            'message'=>'Transfer Berhasil']
        );
    }    
    public function transferdepositstore(Request $request)
    {
        $main = auth()->user()->getWallet('default');
        $deposit_wallet = User::find(25)->getWallet('deposit');
        $from = User::find(25);
        $to = User::find(auth()->user()->id);
        // $transfer = $firstWallet->transfer($secondWallet, 500, new Extra(
        //     deposit: ['message' => 'Hello, secondWallet!'],
        //     withdraw: new Option(meta: ['something' => 'anything'], confirmed: false)
        // ));
        $transfer = $deposit_wallet->transfer($to, $request->amount, new Extra(
            // deposit: ['message' => 'Pengembalian deposit dari '.$from->name,'type'=>'deposit_withdraw'],
            deposit: new Option(meta: ['message' => 'Pengembalian deposit dari '.$from->name,'type' => 'deposit_withdraw'], confirmed: false),
            withdraw: new Option(meta: ['message' => 'Pengembalian deposit ke '.$to->name,'type' => 'deposit_withdraw'], confirmed: false)
        ));
        return redirect('wallets')->with(
            ['type'=>'success',
            'message'=>'Transfer Deposit Berhasil']
        );
    } 
}
