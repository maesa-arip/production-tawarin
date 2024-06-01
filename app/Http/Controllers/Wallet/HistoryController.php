<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Http\Resources\Wallet\HistoryResource;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Transaction::query()
        ->where('payable_id',auth()->user()->id)
        ->where('confirmed',1)
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/Index',['transactions'=>$transactions]);
    }
    public function main(Request $request)
    {
        $query = Transaction::query()
        ->where('payable_id',auth()->user()->id)
        // ->where('confirmed',1)
        // ->whereJsonContains('meta->type', 'uang masuk')
        // ->whereJsonContains('meta->type', 'tip')
        // ->whereJsonContains('meta->type', 'deposit')
        // ->whereJsonContains('meta->type', 'referral')
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryUtama',['transactions'=>$transactions]);
    }
    public function topup(Request $request)
    {
        $query = Transaction::query()
        ->where('payable_id',auth()->user()->id)
        // ->where('confirmed',1)
        ->where('meta',null)
        ->orWhereJsonContains('meta->type', 'accept')
        ->orWhereJsonContains('meta->type', 'decline')
        // ->whereJsonContains('meta->type', 'tip')
        // ->whereJsonContains('meta->type', 'deposit')
        // ->whereJsonContains('meta->type', 'referral')
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryTopUp',['transactions'=>$transactions]);
    }
    public function bonus(Request $request)
    {
        $query = Transaction::query()
        ->where('payable_id',auth()->user()->id)
        ->where('confirmed',1)
        // ->whereJsonContains('meta->type', 'uang masuk')
        // ->whereJsonContains('meta->type', 'tip')
        // ->whereJsonContains('meta->type', 'deposit')
        // ->whereJsonContains('meta->type', 'referral')
        ->with('wallet')->whereRelation('wallet', 'slug', '=', 'bonus');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryBonus',['transactions'=>$transactions]);
    }
    public function deposit(Request $request)
    {
        $query = Transaction::query()
        ->where('payable_id',auth()->user()->id)
        ->where('confirmed',1)
        // ->whereJsonContains('meta->type', 'uang masuk')
        // ->whereJsonContains('meta->type', 'tip')
        ->whereJsonContains('meta->type', 'deposit')
        // ->whereJsonContains('meta->type', 'referral')
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryDeposit',['transactions'=>$transactions]);
    }
    public function summary(Request $request)
    {
        $query = Transaction::query()
            ->where('confirmed', 1)
            ->where('type', 'withdraw')
            ->whereJsonContains('transactions.meta->type', 'deposit')
            ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
            ->join('users', 'wallets.holder_id', '=', 'users.id')
            ->groupBy('wallets.holder_id', 'users.id','users.name','users.created_at')
            ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(ABS(transactions.amount)) as total_amount'));
            // ->get();
        // ->with('wallet')->get();
        // dd($query);
        if ($request->q) {
            $query->where('payable_type', 'like', '%' . $request->q . '%')
                ->orWhere('type', 'like', '%' . $request->q . '%')
                ->orWhere('amount', 'like', '%' . $request->q . '%')
                ->orWhere('confirmed', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $query->orderBy($request->field, $request->direction);
        }
        $transactions = (
            ArrayResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Transaction::count(),
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        return inertia('Wallets/History/DepositSummary', ['transactions' => $transactions]);
    }
    public function summarytawarin(Request $request)
    {
        $query = Transaction::query()
        ->where('confirmed', 1)
        ->whereIn('type', ['withdraw', 'deposit'])
        ->where(function ($query) {
            $query->where('type', 'withdraw')
                ->whereJsonContains('transactions.meta->type', 'deposit');
        })
        ->orWhere(function ($query) {
            $query->where('type', 'deposit')
                ->whereJsonContains('transactions.meta->type', 'req_deposit');
        })
        ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
        ->join('users', 'wallets.holder_id', '=', 'users.id')
        ->groupBy('wallets.holder_id', 'users.id', 'users.name', 'users.created_at')
        ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(CASE WHEN type = "withdraw" THEN ABS(transactions.amount) ELSE 0 END) as total_withdraw, SUM(CASE WHEN type = "deposit" THEN ABS(transactions.amount) ELSE 0 END) as total_deposit'))
        ->get();
        // ->with('wallet')->get();
        // dd($query);
        if ($request->q) {
            $query->where('payable_type', 'like', '%' . $request->q . '%')
                ->orWhere('type', 'like', '%' . $request->q . '%')
                ->orWhere('amount', 'like', '%' . $request->q . '%')
                ->orWhere('confirmed', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $query->orderBy($request->field, $request->direction);
        }
        $transactions = (
            ArrayResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Transaction::count(),
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        return inertia('Wallets/History/TawarinSummary', ['transactions' => $transactions]);
    }
}
