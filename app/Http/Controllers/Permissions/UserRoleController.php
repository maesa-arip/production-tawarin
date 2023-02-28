<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Permission\UserRoleResource;
use App\Models\User;
use Spatie\Permission\Models\{Permission, Role};

class UserRoleController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = User::query()->with('roles');
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            // ->orWhere('guard_name','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $users = (
            UserRoleResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Permissions/UserRole/Index',['users'=>$users]);
    }

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
