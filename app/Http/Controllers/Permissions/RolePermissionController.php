<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Permission\RolePermissionResource;
use Spatie\Permission\Models\{Permission, Role};

class RolePermissionController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Role::query()
        ->with('permissions');
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('guard_name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $roles = (
            RolePermissionResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Role::count(),
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
        return inertia('Permissions/PermissionRole/Index',['roles'=>$roles]);
    }

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
        return inertia('Permissions/PermissionRole/Edit',[
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
