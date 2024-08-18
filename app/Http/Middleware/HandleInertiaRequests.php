<?php

namespace App\Http\Middleware;

use App\Models\Reservation\ReservationCustomer;
use App\Models\Toko\Cart;
use App\Models\Toko\Category;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        $cart_global_count = $request->user() ? Cache::rememberForever('carts_global_count',fn()=> Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count()) : null;
        $notification_count = $request->user() ? Cache::rememberForever('notifications_count',fn()=> auth()->user()->unreadNotifications->count()) : null;
        $roles = $request->user() ? $request->user()->getRoleNames() : null;
        $permissions = $request->user() ? $request->user()->getAllPermissions() : null;
        $requestTopUp = Transaction::WhereJsonContains('meta->type','request_deposit')->where('confirmed',0)->where('type','deposit')->count();
        $requestWithdraw = Transaction::WhereJsonContains('meta->type','request_withdraw')->where('confirmed',0)->where('type','withdraw')->count();
        $customer_count = $request->user() ? ReservationCustomer::with('user')->where('reservation_team_details.user_id', auth()->user()->id)
            ->join('reservation_teams', 'reservation_teams.id', 'reservation_customers.reservation_team_id')
            ->join('reservation_team_details', 'reservation_teams.id', 'reservation_team_details.reservation_team_id')
            ->join('reservation_counters', 'reservation_counters.id', 'reservation_teams.reservation_counter_id')
            ->join('reservation_companies', 'reservation_companies.id', 'reservation_counters.reservation_company_id')
            ->where('reservation_customers.selesai_customer',0)
            ->where('reservation_customers.batal_customer',0)
            ->count() : null;
        $allSessions = Session::all();
        return array_merge(parent::share($request), [
            'users' => fn () => $request->user() ? \App\Models\User::where('id', '!=', $request->user()->id)->get() : null,
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message'),
            ],
            'flash_simple' => [
                'type_simple' => $request->session()->get('type_simple'),
                'message_simple' => $request->session()->get('message_simple'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categories_global' => Cache::rememberForever('categories_global', fn()=> Category::whereHas('products')->get()->map(fn($q)=>[
                'name'=>$q->name,
                'slug'=>$q->slug,
            ])),
            'carts_global_count' => $cart_global_count,
            'notifications_count' => $notification_count,
            'permissions' => $permissions,
            'roles' => $roles,
            'customer_count' => $customer_count,
            'allSessions' => $allSessions,
            'requestTopUp' => $requestTopUp,
            'requestWithdraw' => $requestWithdraw,
            'csrf_token' => csrf_token(),
        ]);
    }
}
