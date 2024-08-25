<?php

namespace App\Http\Controllers\Chat;

use App\Events\MessageSent;
use App\Events\TestEvent;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index()
    {
        $contacts = User::join('contacts', 'users.id', '=', 'contacts.contact_id')
        ->where('user_id',auth()->user()->id)
        ->orWhere('chats.receiver_id',auth()->user()->id)
        ->leftjoin('chats','users.id','chats.sender_id')
        ->select('users.*')
        // ->leftjoin('chats as sa','users.id','sa.receiver_id')
        ->distinct()
        ->get();
        
    
        // dd($contacts);
        return inertia('Chats/Index', ['contacts'=>$contacts]);
    }

    public function show(User $user){

        $chats = Chat::where(
                fn ($q) => $q->where('sender_id', Auth::id())->where('receiver_id',$user->id)
        )->orWhere(
                fn ($q) => $q->where('sender_id', $user->id)->where('receiver_id', Auth::id())
    
        )->get();
        // dd($chats);
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
