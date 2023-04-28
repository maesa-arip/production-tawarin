<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\Plan\PlanPortofolio;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = User::query()->with('roles')->with('join_as');
        // dd($query);
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('username','like','%'.$request->q.'%')
            ->orWhere('email','like','%'.$request->q.'%')
            ->orWhere('address','like','%'.$request->q.'%')
            ;
        }

        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $users = (
            UserResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => User::count(),
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
        // $roles = Role::pluck('name', 'id');
        return inertia('Users/Index',['users'=>$users, 'roles'=>$roles]);
        // return inertia('Users/Index',['users'=>$users]);
    }
    public function store(UserRequest $request)
    {
        
        $atrributes = $request->toArray();
        $atrributes['password'] = bcrypt($request->password);
        $user = User::create($atrributes);
        $user->syncRoles($request->input('roles'));

        return back()->with([
            'type' => 'success',
            'message' => 'Users was created',
        ]);
    }
    // public function update(UserRequest $request, User $user)
    // {
    //     $atrributes = $request->toArray();
    //     $atrributes['password'] = bcrypt($request->password);
    //     $user->update($atrributes);
    //     $user->syncRoles($request->input('roles'));

    //     return back()->with([
    //         'type' => 'success',
    //         'message' => 'Users was updated',
    //     ]);
    // }
    public function update(Request $request, User $user)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email','unique:users,email,'. optional($user)->id],
        ]);
        $user->update($validated);
        $user->syncRoles($request->input('roles'));
        return back()->with([
            'type' => 'success',
            'message' => 'User berhasil diubah',
        ]);
    }

    public function profile()
    {
        $portofolios = PlanPortofolio::where('user_id', auth()->user()->id)->get();
        $count = PlanPortofolio::where('user_id', auth()->user()->id)->count();


        $dataplan = [];
        foreach ($portofolios as $plan_detail) {
            $plan_result = PlanPortofolio::where('id', $plan_detail->id)->first();
            $dataplan[$plan_detail->slug] = $plan_result->getMedia('contohgambar');
        }
        // $media = $portofolios->getMedia('contohgambar');
        // dd($portofolios);
        return inertia('Users/Basic/Profile',['portofolios'=>$portofolios,'count'=>$count,'dataplan' => $dataplan,]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Users was deleted',
        ]);
    }

    public function list(Request $request)
    {
        $query = User::query()->with('roles')->where('id','<>',1);
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('username','like','%'.$request->q.'%')
            ->orWhere('email','like','%'.$request->q.'%')
            ->orWhere('address','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $users = (
            UserResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => User::count(),
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
        return inertia('Users/Public/List',['users'=>$users, 'roles'=>$roles]);
    }
    public function detail($id)
    {
        $user = User::where('username',$id)->first();
        $portofolios = PlanPortofolio::where('user_id', $user->id)->get();
        $count = PlanPortofolio::where('user_id', $user->id)->count();
        $dataplan = [];
        foreach ($portofolios as $plan_detail) {
            $plan_result = PlanPortofolio::where('id', $plan_detail->id)->first();
            $dataplan[$plan_detail->slug] = $plan_result->getMedia('contohgambar');
        }
        return inertia('Users/Basic/Profile',['portofolios'=>$portofolios,'count'=>$count,'dataplan' => $dataplan,]);
    }
}
