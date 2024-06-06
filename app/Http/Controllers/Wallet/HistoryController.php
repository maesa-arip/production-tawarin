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
            ->where('payable_id', auth()->user()->id)
            ->where('confirmed', 1)
            ->with('wallet');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/Index', ['transactions' => $transactions]);
    }
    public function main(Request $request)
    {
        $query = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            // ->where('confirmed',1)
            // ->whereJsonContains('meta->type', 'uang masuk')
            // ->whereJsonContains('meta->type', 'tip')
            // ->whereJsonContains('meta->type', 'deposit')
            // ->whereJsonContains('meta->type', 'referral')
            ->with('wallet');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryUtama', ['transactions' => $transactions]);
    }
    public function topup(Request $request)
    {
        $query = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            // ->where('confirmed',1)
            ->where('meta', null)
            ->orWhereJsonContains('meta->type', 'accept')
            ->orWhereJsonContains('meta->type', 'decline')
            // ->whereJsonContains('meta->type', 'tip')
            // ->whereJsonContains('meta->type', 'deposit')
            // ->whereJsonContains('meta->type', 'referral')
            ->with('wallet');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryTopUp', ['transactions' => $transactions]);
    }
    public function bonus(Request $request)
    {
        $query = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            ->where('confirmed', 1)
            // ->whereJsonContains('meta->type', 'uang masuk')
            // ->whereJsonContains('meta->type', 'tip')
            // ->whereJsonContains('meta->type', 'deposit')
            // ->whereJsonContains('meta->type', 'referral')
            ->with('wallet')->whereRelation('wallet', 'slug', '=', 'bonus');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryBonus', ['transactions' => $transactions]);
    }
    public function deposit(Request $request)
    {
        $query = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            ->where('confirmed', 1)
            // ->whereJsonContains('meta->type', 'uang masuk')
            // ->whereJsonContains('meta->type', 'tip')
            ->whereJsonContains('meta->type', 'deposit')
            // ->whereJsonContains('meta->type', 'referral')
            ->with('wallet');
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
            HistoryResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Wallets/History/HistoryDeposit', ['transactions' => $transactions]);
    }
    public function summary(Request $request)
    {
        $query = Transaction::query()
            ->where('confirmed', 1)
            ->where('type', 'withdraw')
            ->whereJsonContains('transactions.meta->type', 'deposit')
            ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
            ->join('users', 'wallets.holder_id', '=', 'users.id')
            ->groupBy('wallets.holder_id', 'users.id', 'users.name', 'users.created_at')
            ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(ABS(transactions.amount)) as total_amount'));
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
    public function summarytopup(Request $request)
    {
        $query = Transaction::query()
            ->where('type', 'deposit')
            ->where('confirmed', '1')
            ->where('transactions.meta', NULL)
            ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
            ->join('users', 'wallets.holder_id', '=', 'users.id')
            ->select('transactions.*', 'users.id as user_id', 'users.name as user_name');
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
            ArrayResource::collection($query->fastPaginate($request->load ? $request->load : $this->loadDefault)->withQueryString())

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
        return inertia('Wallets/History/TopUpSummary', ['transactions' => $transactions]);
    }
    public function summarytawarin(Request $request)
    {
        $topUpBelumKonfirmasi = DB::table('transactions')
            ->where('type', 'deposit')
            ->where('confirmed', 0)
            ->where('meta', null)
            ->sum('amount');

        $topUpSudahKonfirmasi = DB::table('transactions')
            ->where('type', 'deposit')
            ->where('confirmed', 1)
            ->whereJsonContains('meta->type', 'accept')
            ->sum('amount');

        $topUpSudahKonfirmasiNULL = DB::table('transactions')
            ->where('type', 'deposit')
            ->where('confirmed', 1)
            ->where('meta', NULL)
            // ->whereJsonContains('meta->type', 'accept_withdraw')
            ->sum('amount');
        $totalTopUp = $topUpSudahKonfirmasi + $topUpSudahKonfirmasiNULL;
        $topUpDitolak = DB::table('transactions')
            ->where('type', 'deposit')
            ->where('confirmed', 0)
            ->whereJsonContains('meta->type', 'decline')
            ->sum('amount');

        $withdrawBelumKonfirmasi = DB::table('transactions')
            ->where('type', 'withdraw')
            ->where('confirmed', 0)
            ->whereJsonContains('meta->type', 'request_withdraw')
            ->sum('amount');

        $withdrawSudahKonfirmasi = DB::table('transactions')
            ->where('type', 'withdraw')
            ->where('confirmed', 1)
            ->whereJsonContains('meta->type', 'accept_withdraw')
            ->sum('amount');



        $withdrawDitolak = DB::table('transactions')
            ->where('type', 'withdraw')
            ->where('confirmed', 0)
            ->whereJsonContains('meta->type', 'decline')
            ->sum('amount');

        $referral = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            ->where('confirmed', 1)
            ->whereJsonContains('meta->type', 'referral')
            ->sum('amount');

        $fee = Transaction::query()
            ->where('payable_id', auth()->user()->id)
            ->where('confirmed', 1)
            ->whereJsonContains('meta->type', 'fee')
            ->sum('amount');

        $bonus = auth()->user()->hasWallet('bonus') ? auth()->user()->getWallet('bonus')->balance : 0;

        // dd($topUpBelumKonfirmasi,$topUpSudahKonfirmasi,$topUpSudahKonfirmasiNULL,$totalTopUp,$topUpDitolak,$withdrawBelumKonfirmasi,$withdrawSudahKonfirmasi,$withdrawDitolak,$referral,$bonus);

        $sumsGrouped = DB::table('transactions')
            ->select(DB::raw('type, JSON_UNQUOTE(JSON_EXTRACT(meta, "$.type")) as meta_type, SUM(ABS(amount)) as total'))
            ->groupBy('type', 'meta_type')
            ->get();

        return inertia('Wallets/History/TawarinSummary', [
            'topUpBelumKonfirmasi' => $topUpBelumKonfirmasi, 'topUpSudahKonfirmasi' => $topUpSudahKonfirmasi, 'topUpSudahKonfirmasiNULL' => $topUpSudahKonfirmasiNULL, 'totalTopUp' => $totalTopUp, 'topUpDitolak' => $topUpDitolak, 'withdrawBelumKonfirmasi' => $withdrawBelumKonfirmasi, 'withdrawSudahKonfirmasi' => $withdrawSudahKonfirmasi, 'withdrawDitolak' => $withdrawDitolak, 'referral' => $referral, 'fee' => $fee, 'bonus' => $bonus
        ]);
    }
    public function companysummary(Request $request)
    {
        $query = Transaction::query()
            ->where('confirmed', 1)
            ->where('type', 'deposit')
            ->where(function($query) {
                $query->whereRaw("JSON_UNQUOTE(JSON_EXTRACT(transactions.meta, '$.message')) LIKE ?", ['Pembayarn dari%'])
                      ->orWhereRaw("JSON_UNQUOTE(JSON_EXTRACT(transactions.meta, '$.message')) LIKE ?", ['Bagi Hasil%']);
            })
            // ->whereRaw("JSON_UNQUOTE(JSON_EXTRACT(transactions.meta, '$.message')) LIKE ?", ['Pembayarn dari%'])
            // ->whereRaw("JSON_UNQUOTE(JSON_EXTRACT(transactions.meta, '$.message')) LIKE ?", ['Bagi Hasil%'])
            ->whereJsonContains('transactions.meta->type', 'uang masuk')
            ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
            ->join('users', 'wallets.holder_id', '=', 'users.id')
            ->join('reservation_employees', 'reservation_employees.user_id', '=', 'users.id')
            ->groupBy('wallets.holder_id', 'users.id', 'users.name', 'users.created_at')
            ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(ABS(transactions.amount)) as total_amount'))
            ->get();
        dd($query);
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
        return inertia('Wallets/History/CompanySummary', ['transactions' => $transactions]);
    }
}
