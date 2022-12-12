<?php

namespace App\Http\Middleware;

use App\Models\Toko\Cart;
use App\Models\Toko\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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
        $permissions = $request->user() ? $request->user()->getAllPermissions() : null;
        $roles = $request->user() ? $request->user()->getRoleNames() : null;
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message'),
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
            'csrf_token' => csrf_token(),
        ]);
    }
}
