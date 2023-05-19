<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Auth\JoinAs;
use App\Models\User;
use App\Notifications\RegisteredNewUserNotification;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $joinas = JoinAs::get();
        return Inertia::render('Auth/Register', ['joinas'=>$joinas]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'username' => 'required|string|max:255|unique:users',
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'join_as_id' => 'required',
            // 'referral' => 'required',
            'from_referral' => 'max:7',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        // dd($request->all());
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'phone' => $request->phone,
            'address' => $request->address,
            'join_as_id' => $request->join_as_id,
            'referral' => Str::lower(Str::random(6)),
            'from_referral' => $request->from_referral ? $request->from_referral : 'tawarin',
            'password' => Hash::make($request->password),
        ]);
        $user->createWallet(
            [
            'name' => 'Bonus Wallet',
            'slug' => 'bonus',
            ]
        );
        $user->createWallet(
            [
            'name' => 'Default Wallet',
            'slug' => 'default',
            ]
        );

        event(new Registered($user));
        $admin = User::whereHas('roles', function ($query) {
            $query->where('name', 'admin');
        })->get();
        Notification::send($admin, new RegisteredNewUserNotification($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
