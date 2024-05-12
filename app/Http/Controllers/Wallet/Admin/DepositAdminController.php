<?php

namespace App\Http\Controllers\Wallet\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wallet\DepositAdminResource;
use App\Http\Resources\Wallet\TransactionSingleResource;
use App\Models\Plan\Plan;
use App\Models\User;
use App\Notifications\DepositConfirmNotification;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DepositAdminController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Transaction::query()->where('type','deposit')
        ->where('meta', NULL)
        ->with('wallet')->with('wallet.holder');
        
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
            DepositAdminResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/Admin/Deposit/Index',['transactions'=>$transactions]);
    }
    public function show($id)
    {
        $transaction = Transaction::find($id);
        $media = $transaction->getMedia('BuktiTransfer');
        return inertia('Wallets/Admin/Deposit/Show',[
            'transaction'=>TransactionSingleResource::make($transaction),
            'media' => ($media),]);
    }
    public function confirmed(Transaction $transaction,$id)
    {
        
        $transaction = Transaction::find($id);
        if ($transaction->payable_type=='App\Models\User') {
            $user = User::find($transaction->payable_id);
        }
        if ($transaction->payable_type=='App\Models\Plan\Plan') {
            $user = Plan::find($transaction->payable_id);
        }
        $user->confirm($transaction);

        // $pesan = [
        //     'type' => 'Info',
        //     'title' => 'Top Up mu sudah diverifikasi',
        //     'message' => 'Top Up mu sudah diterima, silakan lihat di menu saldo',
        //     'url' => '',
        // ];

        // $user->notify(new DepositConfirmNotification($transaction));
        Cache::forget('notifications_count');

        return redirect('/admindeposits')->with([
            'type' => 'success',
            'message' => 'Confirmed',
        ]);
    }
}
