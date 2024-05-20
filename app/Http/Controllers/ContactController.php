<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required',
        ]);

        $user = User::where('email', $validated['email'])->orWhere('username',  $validated['email'])->orWhere('phone',  $validated['email'])->first();
        if (!$user) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal tambah kotak, user dengan email/username/no telp tersebut tidak ditemukan',
            ]);
        }
        if ($user->id == auth()->user()->id) {
            return back()->with([
                'type' => 'error',
                'message' => 'Tidak bisa menambah diri sendiri sebagai kontak',
            ]);
        }
        // dd($user);
        
        $exist = Contact::where('user_id',auth()->user()->id)->where('contact_id',$user->id)->first();
        // dd($validated['email']);
        // dd(auth()->user()->id);
        if ($exist) {
            return back()->with([
                'type' => 'error',
                'message' => 'Anda sudah memiliki kontak tersebut',
            ]);
        }
        $contact = Contact::create(['user_id'=> auth()->user()->id, 'contact_id'=>$user->id]);
        $contact = Contact::create(['contact_id'=> auth()->user()->id, 'user_id'=>$user->id]);
        return back()->with([
            'type' => 'success',
            'message' => 'Kontak berhasil disimpan',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
