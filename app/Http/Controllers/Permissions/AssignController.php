<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\{Permission, Role};


class AssignController extends Controller
{
    public function create()
    {

        return view('permission.assign.create', [
            'roles' => Role::get(),
            'permissions' => Permission::get(),
        ]);
    }

    public function store()
    {

        request()->validate([
            'role' => 'required',
            'permissions' => 'array|required',
        ]);

        $role = Role::find(request('role'));
        $role->givePermissionTo(request('permissions'));

        $notification = array(
            'title' => 'Success',
            'message' => 'Permission berhasil',
            'position' => 'topRight',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }

    public function edit(Role $role)
    {
        return view('permission.assign.sync', [
            'role' => $role,
            'roles' => Role::get(),
            'permissions' => Permission::get(),
        ]);
    }

    public function update(ROle $role)
    {
        request()->validate([
            'role' => 'required',
            'permissions' => 'array|required',
        ]);
        $role->syncPermissions(request('permissions'));
        $notification = array(
            'title' => 'Success',
            'message' => 'Sync Permission Berhasil',
            'position' => 'topRight',
            'alert-type' => 'success'
        );
        return redirect()->route('assign.create')->with($notification);
    }
}
