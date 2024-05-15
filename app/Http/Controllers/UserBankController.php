<?php

namespace App\Http\Controllers;

use App\Models\UserBank;
use Illuminate\Http\Request;

class UserBankController extends Controller
{
    public function store(Request $request){
        $validated = $request->validate([
            'bank_id' => 'required',
            'account_number' => 'required',
            'account_name' => 'required',
        ]);
        $userBank = UserBank::updateOrCreate(
            ['user_id' => auth()->user()->id],
            ['bank_id' => $validated['bank_id'], 'account_number' => $validated['account_number'],'account_name' => $validated['account_name'],'main'=>1]
        );
        return back()->with([
            'type' => 'success',
            'message' => 'Data Bank Berhasil Disimpan',
        ]);
    }
}
