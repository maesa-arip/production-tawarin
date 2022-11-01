<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\PermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Permission::query();
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('guard_name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $permissions = (
            PermissionResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Permission::count(),
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
        return inertia('Permissions/Permissions/Index',['permissions'=>$permissions]);
    }

    public function store()
    {
        request()->validate([
            'name' => 'required',
        ]);
        Permission::create([
            'name' => request('name'),
            'guard_name' => request('guard_name') ?? 'web',
        ]);
        return back()->with([
            'type' => 'success',
            'message' => 'Permission was created',
        ]);
    }

    public function update(Permission $permission)
    {
        request()->validate([
            'name' => 'required',
        ]);
        $permission->update([
            'name' => request('name'),
            'guard_name' => request('guard_name') ?? 'web',
        ]);
        return back()->with([
            'type' => 'success',
            'message' => 'Permission was created',
        ]);
    }
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Permission was deleted',
        ]);
    }
}
