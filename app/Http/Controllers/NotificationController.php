<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        Cache::forget('notifications_count');
        return inertia('Notifications/Basic/Index', [
            'notifications' => auth()->user()->notifications,
        ]);
    }

    // public function index()
    // {
    //     $user = User::find(auth()->user()->id)->get();
    //     return inertia('Notifications/Basic/Index', ['user' =>$user]);
    // }
}
