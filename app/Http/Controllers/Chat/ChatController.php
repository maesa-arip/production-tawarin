<?php

namespace App\Http\Controllers\Chat;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index()
    {
        return inertia('Chats/Index');
    }

    public function show(User $user){

        $chats = Chat::where(
                fn ($q) => $q->where('sender_id', Auth::id())->where('receiver_id',$user->id)
        )->orWhere(
                fn ($q) => $q->where('sender_id', $user->id)->where('receiver_id', Auth::id())
    
        )->get();
        return inertia('Chats/Show',[
            'user'=>$user,
            'chats'=>$chats,
        ]);
     }
    
     public function store(Request $request, User $user)
     {
         $request->validate([
             'message' => ['required'],
         ]);
         $chat = Auth::user()->chats()->create([
                'receiver_id' => $user->id,
                'message' => $request->message,
         ]);
        //  return $chat->load('receiver');
         broadcast(new MessageSent($chat->load('receiver')))->toOthers();
         return back();
     }
}
