<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class NotificationController extends Controller
{
    public function index()
    {
        Cache::forget('notifications_count');
        return inertia('Notifications/Basic/Index', [
            'notifications' => auth()->user()->notifications,
        ]);
    }
    public function readMessage($id)
    {
        $notification = DatabaseNotification::findOrfail($id);
        $notification->update(['read_at' => now()]);
        Cache::forget('notifications_count');
        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil dibaca',
        ]);
    }
    public function readAllMessage()
    {
        $user = User::find(auth()->user()->id);
        $user->unreadNotifications()->update(['read_at' => now()]);
        Cache::forget('notifications_count');
        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil dibaca semua',
        ]);
    }
}
