<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
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
            RoleResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Permissions/Roles/Index',['roles'=>$roles]);
    }

    public function store()
    {
        request()->validate([
            'name' => 'required',
        ]);
        Role::create([
            'name' => request('name'),
            'guard_name' => request('guard_name') ?? 'web',
        ]);
        return back()->with([
            'type' => 'success',
            'message' => 'Role was created',
        ]);
    }
    public function edit(Role $role)
    {
        return view('permission.roles.edit', [
            'role' => $role,
            'submit' => 'Update',
        ]);
    }
    public function update(Role $role)
    {
        request()->validate([
            'name' => 'required',
        ]);
        $role->update([
            'name' => request('name'),
            'guard_name' => request('guard_name') ?? 'web',
        ]);
        return back()->with([
            'type' => 'success',
            'message' => 'Role was updated',
        ]);
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Role was deleted',
        ]);
    }
}
