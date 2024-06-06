<?php

namespace App\Http\Controllers\Wallet\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wallet\TransactionSingleResource;
use App\Http\Resources\Wallet\WithdrawAdminResource;
use App\Models\User;
use App\Notifications\DepositConfirmNotification;
use App\Notifications\WithdrawConfirmNotification;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class WithdrawOwnerController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Transaction::query()
        // ->where(function ($query) {
        //     $query->where('type','withdraw')
        //           ->where('confirmed','<>',1);
        // })->orWhere(function ($query) {
        //     $query->orWhereJsonContains('meta->type','request_withdraw')
        //     ->orWhereJsonContains('meta->type','accept');
        // })
        ->where('type','withdraw')
        // ->where('confirmed','<>',1)
        ->whereJsonContains('meta->type','deposit_withdraw')
        ->with('wallet');
        // ->orderBy('transactions.created_at','DESC')->take(10)->get();
        
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
        return inertia('Reservation/Withdraw_Deposit/Index',['transactions'=>$transactions]);
    }
    public function show($id)
    {
        $transaction = Transaction::find($id);
        return inertia('Reservation/Withdraw_Deposit/Show',[
            'transaction'=>TransactionSingleResource::make($transaction),
            ]);
    }
    public function confirmed(Transaction $transaction,$id)
    {
        $transaction = Transaction::find($id);
        
        if ($transaction->payable_type=='App\Models\User') {
            $user = User::find($transaction->payable_id);
        }
        $deposit_id = DB::table('transfers')->where('withdraw_id',$id)->first();
        $transaction2 = Transaction::find($deposit_id->deposit_id);
        $user2 = User::find($transaction2->payable_id);
        // dd($user);
        $transaction->meta = ['type'=>'deposit_withdraw','message' => 'Pengiriman Deposit Ke Saldo Utama Anda sudah diterima oleh Owner'];
        $transaction->save();
        $user->getWallet('deposit')->confirm($transaction);

        $transaction2->meta = ['type'=>'deposit_withdraw','message' => 'Pengiriman Deposit Ke Saldo Utama Anda sudah diterima oleh Owner'];
        $transaction2->save();
        $user2->confirm($transaction2);

        $user->notify(new WithdrawConfirmNotification($transaction));
        Cache::forget('notifications_count');

        return redirect('/owneradmindeposits')->with([
            'type' => 'success',
            'message' => 'Berhasil Terima Withdraw',
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
