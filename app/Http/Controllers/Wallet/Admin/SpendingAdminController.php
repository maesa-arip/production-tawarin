<?php

namespace App\Http\Controllers\Wallet\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Http\Resources\Wallet\WithdrawAdminResource;
use App\Models\User;
use Bavix\Wallet\External\Dto\Extra;
use Bavix\Wallet\External\Dto\Option;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;

class SpendingAdminController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Transaction::query()
        ->where('type','withdraw')
        ->whereJsonContains('meta->type','spending_tawarin')
        ->with('wallet');
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
        return inertia('Wallets/Admin/Spending/Index',['transactions'=>$transactions]);
    }
    public function create()
    {
        return inertia('Wallets/Admin/Spending/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required',
            'description' => 'required',
        ]);
        // dd($request->all());
        $user = User::findOrfail(auth()->user()->id);
        $walletDefault = $user->getWallet('default');
        $walletSpending = $user->getWallet('spending');
        if (!$walletSpending) {
            $walletSpending = $user->createWallet(['name' => 'Spending Wallet', 'slug' => 'spending']);
        };
        $transfer = $walletDefault->transfer($walletSpending, $request->amount, new Extra(
            deposit: ['message' => 'Pengeluaran untuk '.$request->description,'type'=>'spending_tawarin'],
            withdraw: new Option(meta: ['message' => 'Pengeluaran untuk '.$request->description,'type' => 'spending_tawarin'], confirmed: true)
        ));
        return redirect('adminspendings')->with(
            ['type'=>'success',
            'message'=>'Pengeluaran Berhasil disimpan']
        );
        
    }
}
