<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\RolePermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\{Permission, Role};


class AssignController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Role::query();
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('guard_name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $roles = (
            RolePermissionResource::collection($query->latest()->with('permissions')->fastPaginate($request->load)->withQueryString())
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
        return inertia('Permissions/Assign/Index',['roles'=>$roles]);
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
