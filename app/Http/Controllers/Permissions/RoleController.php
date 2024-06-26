<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $roles = Role::query()->with('permissions');
        if ($request->q) {
            $roles->where('name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $roles->orderBy($request->field,$request->direction);
        }
        $roles = (
            RoleResource::collection($roles->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' =>10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        $permission_alls = Permission::get();
        return inertia('Users/Roles/Index',['roles'=>$roles, 'permission_alls'=>$permission_alls]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'permissions' => ['array'],
        ]);
        $role = Role::create(['name' => $request->input('name')]);
        $role->givePermissionTo($request->input('permissions'));
        return back()->with([
            'type' => 'success',
            'message' => 'Role berhasil dibuat',
        ]);
    }
    public function edit(Role $role)
    {
        
    }
    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'permissions' => ['array'],
        ]);
        $role->update(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permissions'));
        return back()->with([
            'type' => 'success',
            'message' => 'Role berhasil diubah',
        ]);
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Role berhasil dihapus',
        ]);
    }
}
