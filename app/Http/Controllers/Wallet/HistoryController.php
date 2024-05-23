<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\Wallet\HistoryResource;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;

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
}
