<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    public function transfer()
    {
        $users = User::whereNotIn('id', [auth()->user()->id])->take(10)->get();
        return inertia('Wallets/Transfer/Create', [
            'users' => UserResource::collection($users),
        ]);
    }
    public function transferstore(Request $request)
    {
        $from = User::find(auth()->user()->id);
        $to = User::find($request->id);
        $from->transfer($to, $request->amount); 
        return redirect('wallets')->with(
            ['type'=>'success',
            'message'=>'Transfer Berhasil']
        );
    }    
}
