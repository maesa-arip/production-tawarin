<?php

namespace App\Http\Controllers\Wallet\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wallet\TransactionSingleResource;
use App\Http\Resources\Wallet\WithdrawAdminResource;
use App\Models\User;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class WithdrawAdminController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Transaction::query()->where('type','withdraw')
        ->where('confirmed','<>',1)
        ->with('wallet');
        
        // ->join('wallets', 'wallets.id', '=', 'transactions.wallet_id')
        // ->join('users', 'users.id', '=', 'wallets.holder_id');
        // ->get();
        // dd($query);
        if ($request->q) {
            $query->where('payable_type','like','%'.$request->q.'%')
            ->orWhere('type','like','%'.$request->q.'%')
            ->orWhere('amount','like','%'.$request->q.'%')
            ->orWhere('confirmed','like','%'.$request->q.'%')
            ;
        }

        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $transactions = (
            WithdrawAdminResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Transaction::count(),
                'per_page' =>10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        return inertia('Wallets/Admin/Withdraw/Index',['transactions'=>$transactions]);
    }
    public function show($id)
    {
        $transaction = Transaction::find($id);
        return inertia('Wallets/Admin/Withdraw/Show',[
            'transaction'=>TransactionSingleResource::make($transaction),
            ]);
    }
    public function confirmed(Transaction $transaction,$id)
    {
        $transaction = Transaction::find($id);
        $user = User::find($transaction->payable_id);
        $user->confirm($transaction);

        return redirect('/adminwithdraws')->with([
            'type' => 'success',
            'message' => 'Confirmed',
        ]);
    }
    public function decline(Request $request, Transaction $transaction,$id)
    {
        
        $validated = $request->validate([
            'reason' => 'required',
        ]);
        // dd($request->all());
        $transaction = Transaction::find($id);
        $transaction->meta = ['type'=>'decline','message' => 'Withdraw Anda ditolak oleh admin karena '.$validated['reason']];
        $transaction->save();
        if ($transaction->payable_type=='App\Models\User') {
            $user = User::find($transaction->payable_id);
        }
        if ($transaction->payable_type=='App\Models\Plan\Plan') {
            $user = Plan::find($transaction->payable_id);
        }
        // $user->confirm($transaction);
        

        // $pesan = [
        //     'type' => 'Info',
        //     'title' => 'Top Up mu sudah diverifikasi',
        //     'message' => 'Top Up mu sudah diterima, silakan lihat di menu saldo',
        //     'url' => '',
        // ];

        // $user->notify(new DepositConfirmNotification($transaction));
        Cache::forget('notifications_count');

        return redirect('/adminwithdraws')->with([
            'type' => 'success',
            'message' => 'Berhasil Tolak Top Up',
        ]);
    }
}
