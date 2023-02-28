<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\PermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $allPermissions = Permission::query()->with('roles');
        if ($request->q) {
            $allPermissions->where('name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $allPermissions->orderBy($request->field,$request->direction);
        }
        $allPermissions = (
            PermissionResource::collection($allPermissions->latest()->fastPaginate($request->load)->withQueryString())
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
        $roles = Role::get();
        return inertia('Users/Permissions/Index',['allPermissions'=>$allPermissions, 'roles'=>$roles]);
    }

    public function store(Request $request)
    {
        dd($request->all());
        $data = $request->validate([
            'name' => ['required', 'string'],
            'roles' => ['array'],
        ]);

        $permission = Permission::create($data);

        $permission->syncRoles($request->input('roles'));
        return back()->with([
            'type' => 'success',
            'message' => 'Permission berhasil dibuat',
        ]);
    }

    public function update(Request $request, Permission $permission)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'roles' => ['array'],
        ]);

        $permission->update($data);

        $permission->syncRoles($request->input('roles'));
        return back()->with([
            'type' => 'success',
            'message' => 'Permission berhasil diubah',
        ]);
    }
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Permission berhasil dihapus',
        ]);
    }
}
