<?php

namespace App\Http\Controllers\Portofolio;

use App\Http\Controllers\Controller;
use App\Http\Requests\Portofolio\PortofolioRequest;
use App\Http\Resources\Portofolio\PortofolioResource;
use App\Models\Portofolio\Portofolio;
use App\Models\Portofolio\PortofolioCategory;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class PortofolioController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $portofolios = Portofolio::query()
            ->with('portofolio_category')
            ->when($request->portofolio_category, fn ($q, $v) => $q->whereBelongsTo(PortofolioCategory::where('slug', $v)->first()))
            ->where('user_id', auth()->user()->id)
            ->with('media')
            ->select('id','user_id','name', 'slug','portofolio_category_id', 'luas_bangunan','anggaran_proyek','owner','phone_owner','is_approved', 'created_at');
        if ($request->q) {
            $portofolios->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('owner', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $portofolios->orderBy($request->field, $request->direction);
        }
        $portofolios = (PortofolioResource::collection($portofolios->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        return inertia('Portofolios/Basic/Index', ['portofolios' => $portofolios]);
    }
    public function create()
    {
        $portofolio_categories = PortofolioCategory::get();
        return inertia('Portofolios/Basic/Create', [
            'portofolio_categories' => $portofolio_categories,
        ]);
    }
    public function store(PortofolioRequest $request)
    {
        $atrribute_portofolios = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Proyek ' . $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'luas_bangunan' => $request->luas_bangunan,
            'anggaran_proyek' => $request->anggaran_proyek,
            'owner' => $request->owner,
            'phone_owner' => $request->phone_owner,
            'description' => $request->description,
            'portofolio_category_id' => $request->portofolio_category_id,
        ]);
        $portofolio = Portofolio::create($atrribute_portofolios);
        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');
        if ($temporaryFolder) {
            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
                if ($temporary) {
                    $portofolio->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
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

        // $user = User::whereHas('roles', function ($query) {
        //     $query->where('name', 'admin');
        // })->get();
        // Notification::send($user, new PortofolioNewNotification($portofolio));
        Cache::forget('notifications_count');
        return redirect('portofolios')->with([
            'type' => 'success',
            'message' => 'Portofolios was created',
        ]);
    }
}
