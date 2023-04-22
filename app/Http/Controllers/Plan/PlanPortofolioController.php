<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanPortofolioRequest;
use App\Http\Resources\Plan\PlanCategoryResource;
use App\Http\Resources\Plan\PlanPortofolioResource;
use App\Models\Plan\PlanCategory;
use App\Models\Plan\PlanPortofolio;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Plan\PlanNewNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class PlanPortofolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $loadDefault = 15;
    public function index(Request $request)
    {
        $plans = PlanPortofolio::query()
            ->with('plan_category')
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->where('user_id', auth()->user()->id)
            ->with('media')
            ->select('id','user_id','name', 'slug','plan_category_id', 'luas_bangunan','anggaran_proyek','owner','phone_owner','is_approved', 'created_at');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('owner', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanPortofolioResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 15,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        return inertia('PlanPortofolios/Basic/Index', ['plans' => $plans]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $plan_categories = PlanCategory::get();
        return inertia('PlanPortofolios/Basic/Create', [
            'plan_categories' => PlanCategoryResource::collection($plan_categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlanPortofolioRequest $request)
    {
        $atrribute_plans = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Perencanaan ' . $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'luas_bangunan' => $request->luas_bangunan,
            'anggaran_proyek' => $request->anggaran_proyek,
            'owner' => $request->owner,
            'phone_owner' => $request->phone_owner,
            'description' => $request->description,
            'plan_category_id' => $request->plan_category_id,
        ]);
        $plan = PlanPortofolio::create($atrribute_plans);
        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');
        if ($temporaryFolder) {
            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
                if ($temporary) {
                    $plan->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
                        ->toMediaCollection('contohgambar');
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        $temporary->delete();
                    }
                }
            }
        }
        Session::remove('folder');
        Session::remove('filename');

        $user = User::whereHas('roles', function ($query) {
            $query->where('name', 'admin');
        })->get();
        Notification::send($user, new PlanNewNotification($plan));
        Cache::forget('notifications_count');
        return redirect('plans')->with([
            'type' => 'success',
            'message' => 'Plans was created',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
