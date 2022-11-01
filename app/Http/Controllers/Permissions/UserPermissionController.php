<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserPermissionController extends Controller
{
    public function create()
    {
        $roles = Role::get();
        $users = User::has('roles')->get();
        return view('permission.assign.user.create', compact('roles', 'users'));
    }

    public function store()
    {
        $user = User::where('email', request('email'))->first();
        $user->assignRole(request('roles'));
        $notification = array(
            'title' => 'Success',
            'message' => 'Assign Role Berhasil',
            'position' => 'topRight',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }

    public function edit(User $user)
    {
        return view('permission.assign.user.edit', [
            'user' => $user,
            'roles' => Role::get(),
            'users' => User::has('roles')->get(),
        ]);
    }
    public function update(User $user)
    {
        $user->syncRoles(request('roles'));
        $notification = array(
            'title' => 'Success',
            'message' => 'Sync Role Berhasil',
            'position' => 'topRight',
            'alert-type' => 'success'
        );
        return redirect()->route('assign.user.create')->with($notification);
    }
}
