<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = User::query();
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
        return inertia('Users/Index',['users'=>$users]);
    }
    public function store(UserRequest $request)
    {
        $atrributes = $request->toArray();
        $atrributes['password'] = bcrypt($request->password);
        User::create($atrributes);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was created',
        ]);
    }
    public function update(UserRequest $request, User $user)
    {
        $atrributes = $request->toArray();
        $atrributes['password'] = bcrypt($request->password);
        $user->update($atrributes);

        return back()->with([
            'type' => 'success',
            'message' => 'Users was updated',
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Users was deleted',
        ]);
    }
}
