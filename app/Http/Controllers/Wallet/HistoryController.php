<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Http\Resources\Wallet\HistoryResource;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCounter;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationTeam;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
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
        $withdrawQuery = Transaction::query()
        ->where('confirmed', 1)
        ->where('type', 'withdraw')
        ->whereJsonContains('transactions.meta->type', 'deposit')
        ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
        ->join('users', 'wallets.holder_id', '=', 'users.id')
        ->groupBy('wallets.holder_id', 'users.id', 'users.name', 'users.created_at')
        ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(ABS(transactions.amount)) as withdraw_amount'));

    // Initial complex query for deposit transactions
    $depositQuery = Transaction::query()
        ->where('confirmed', 1)
        ->where('type', 'deposit')
        ->whereJsonContains('transactions.meta->type', 'deposit_withdraw')
        ->join('wallets', 'transactions.wallet_id', '=', 'wallets.id')
        ->join('users', 'wallets.holder_id', '=', 'users.id')
        ->groupBy('wallets.holder_id', 'users.id', 'users.name', 'users.created_at')
        ->select(DB::raw('users.id as user_id, users.name as user_name, wallets.holder_id, users.created_at, SUM(ABS(transactions.amount)) as deposit_amount'));

    // Raw SQL for both subqueries
    // $withdrawSql = $withdrawQuery->toSql();
    // $depositSql = $depositQuery->toSql();

    // Combine the queries using a union and handle both left and right joins
    $combinedQuery = DB::query()
        ->fromSub($withdrawQuery, 'withdraws')
        ->leftJoinSub($depositQuery, 'deposits', 'withdraws.user_id', '=', 'deposits.user_id')
        ->select(DB::raw('withdraws.user_id, withdraws.user_name, withdraws.holder_id, withdraws.created_at, COALESCE(withdraws.withdraw_amount, 0) - COALESCE(deposits.deposit_amount, 0) as total_amount'))
        ->union(
            DB::query()
                ->fromSub($depositQuery, 'deposits')
                ->leftJoinSub($withdrawQuery, 'withdraws', 'deposits.user_id', '=', 'withdraws.user_id')
                ->select(DB::raw('deposits.user_id, deposits.user_name, deposits.holder_id, deposits.created_at, COALESCE(withdraws.withdraw_amount, 0) - COALESCE(deposits.deposit_amount, 0) as total_amount'))
        );
        // dd($depositQuery);
        // dd($combinedQuery);
        // if ($request->q) {
        //     $combinedQuery->where('payable_type', 'like', '%' . $request->q . '%')
        //         ->orWhere('type', 'like', '%' . $request->q . '%')
        //         ->orWhere('amount', 'like', '%' . $request->q . '%')
        //         ->orWhere('confirmed', 'like', '%' . $request->q . '%');
        // }
        // if ($request->has(['field', 'direction'])) {
        //     $combinedQuery->orderBy($request->field, $request->direction);
        // }
        // $transactions = (
        //     ArrayResource::collection($combinedQuery->latest()->paginate($request->load)->withQueryString())
        // )->additional([
        //     'attributes' => [
        //         'total' => Transaction::count(),
        //         'per_page' => 10,
        //     ],
        //     'filtered' => [
        //         'load' => $request->load ?? $this->loadDefault,
        //         'q' => $request->q ?? '',
        //         'page' => $request->page ?? 1,
        //         'field' => $request->field ?? '',
        //         'direction' => $request->direction ?? '',

        //     ]
        // ]);
        $transactions = $combinedQuery->get();
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
            ->orWhereJsonContains('meta->type', 'accept_wihdraw')
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
        $company = ReservationCompany::where('user_id', auth()->user()->id)->first();
        $employees = ReservationEmployee::with('user')->where('reservation_company_id',$company->id)->get();
        $counters = ReservationCounter::where('reservation_company_id',$company->id)->get();
        $query = ReservationEmployee::select(
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            'reservation_counters.id as counter_id',
            'reservation_counters.name as counter_name',
            // 'reservation_customers.reservation_team_id',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->groupBy('reservation_employees.id', 'users.name', 'reservation_counters.id', 'reservation_counters.name')
        ->orderBy('reservation_employees.id')
        ->orderBy('reservation_counters.id');

        $sumQuery = ReservationEmployee::select(
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            // 'reservation_counters.id as counter_id',
            // 'reservation_counters.name as counter_name',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->where('reservation_companies.user_id', '=', auth()->user()->id)
        // ->groupBy('reservation_employees.id', 'users.name', 'reservation_counters.id', 'reservation_counters.name')
        ->groupBy('reservation_employees.id', 'users.name')
        ->orderBy('reservation_employees.id')
        ->orderBy('reservation_counters.id');

        if ($request->q && $request->q<>'Semua Karyawan') {
            $query->where('users.name', 'like', '%' . $request->q . '%');
            $sumQuery->where('users.name', 'like', '%' . $request->q . '%');
        }
        if ($request->r && $request->r<>'Semua Layanan') {
            $query->where('reservation_counters.name', $request->r);
            $sumQuery->where('reservation_counters.name', $request->r);
        }
        if (!$request->startDate && !$request->endDate) {
            $query->whereDate('reservation_customers.created_at', Carbon::today());
            // $sumQuery->whereDate('reservation_customers.created_at', Carbon::today());
            // $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse('01-06-2024'), Carbon::today()]);
            $sumQuery->whereDate('reservation_customers.created_at', Carbon::today());
        }
        if (!$request->startDate && $request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::today(), Carbon::parse($request->endDate)->addDay()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::today(), Carbon::parse($request->endDate)->addDay()]);
        }
        if ($request->startDate && !$request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate)->addDay(), Carbon::today()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate)->addDay(), Carbon::today()]);
        }
        if ($request->startDate && $request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate), Carbon::parse($request->endDate)->addDay()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate), Carbon::parse($request->endDate)->addDay()]);
        }
        if ($request->has(['field', 'direction'])) {
            $query->orderBy($request->field, $request->direction);
            $sumQuery->orderBy($request->field, $request->direction);
        }
        $transactions = (
            ArrayResource::collection($query->fastPaginate($request->load ?? $this->loadDefault)->withQueryString())
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
        $sumTransactions = (
            ArrayResource::collection($sumQuery->fastPaginate($request->load ?? $this->loadDefault)->withQueryString())
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
        return inertia('Wallets/History/CompanySummary', ['transactions' => $transactions,'sumTransactions' => $sumTransactions, 'employees' => $employees,'counters'=>$counters]);
    }
    public function employeesummary(Request $request)
    {
        // $query2 = ReservationCustomer::where('reservation_customers.selesai_customer', '=', 1)->get();
        // dd($query2);
        $employees = ReservationEmployee::all();
        $query = ReservationEmployee::select(
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            'reservation_counters.id as counter_id',
            'reservation_counters.name as counter_name',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->where('reservation_employees.user_id', '=', auth()->user()->id)
        ->groupBy('reservation_employees.id', 'users.name', 'reservation_counters.id', 'reservation_counters.name')
        ->orderBy('reservation_employees.id')
        ->orderBy('reservation_counters.id');
        $sumQuery = ReservationEmployee::select(
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            // 'reservation_counters.id as counter_id',
            // 'reservation_counters.name as counter_name',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->where('reservation_employees.user_id', '=', auth()->user()->id)
        // ->groupBy('reservation_employees.id', 'users.name', 'reservation_counters.id', 'reservation_counters.name')
        ->groupBy('reservation_employees.id', 'users.name')
        ->orderBy('reservation_employees.id')
        ->orderBy('reservation_counters.id');
        // dd($query2->get());
        
        if ($request->q) {
            $query->where('payable_type', 'like', '%' . $request->q . '%')
                ->orWhere('type', 'like', '%' . $request->q . '%')
                ->orWhere('amount', 'like', '%' . $request->q . '%')
                ->orWhere('confirmed', 'like', '%' . $request->q . '%');
            $sumQuery->where('payable_type', 'like', '%' . $request->q . '%')
                ->orWhere('type', 'like', '%' . $request->q . '%')
                ->orWhere('amount', 'like', '%' . $request->q . '%')
                ->orWhere('confirmed', 'like', '%' . $request->q . '%');
        }
        if (!$request->startDate && !$request->endDate) {
            $query->whereDate('reservation_customers.created_at', Carbon::today());
            // $sumQuery->whereDate('reservation_customers.created_at', Carbon::today());
            // $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse('01-06-2024'), Carbon::today()]);
            $sumQuery->whereDate('reservation_customers.created_at', Carbon::today());
        }
        if (!$request->startDate && $request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::today(), Carbon::parse($request->endDate)->addDay()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::today(), Carbon::parse($request->endDate)->addDay()]);
        }
        if ($request->startDate && !$request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate)->addDay(), Carbon::today()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate)->addDay(), Carbon::today()]);
        }
        if ($request->startDate && $request->endDate) {
            $query->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate), Carbon::parse($request->endDate)->addDay()]);
            $sumQuery->whereBetween('reservation_customers.created_at', [Carbon::parse($request->startDate), Carbon::parse($request->endDate)->addDay()]);
        }
        if ($request->has(['field', 'direction'])) {
            $query->orderBy($request->field, $request->direction);
            $sumQuery->orderBy($request->field, $request->direction);
        }
        $transactions = (
            ArrayResource::collection($query->fastPaginate($request->load ?? $this->loadDefault)->withQueryString())
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
        $sumTransactions = (
            ArrayResource::collection($sumQuery->fastPaginate($request->load ?? $this->loadDefault)->withQueryString())
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
        return inertia('Wallets/History/EmployeeSummary', ['transactions' => $transactions,'sumTransactions' => $sumTransactions, 'employees' => $employees]);
    }
}
