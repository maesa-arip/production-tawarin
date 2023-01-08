<?php

namespace App\Http\Controllers\Funding;

use App\Http\Controllers\Controller;
use App\Http\Requests\Funding\FundingRequest;
use App\Http\Resources\Funding\FundingCategoryResource;
use App\Http\Resources\Funding\FundingResource;
use App\Http\Resources\Funding\FundingSingleResource;
use App\Models\Funding\Funding;
use App\Models\Funding\FundingCategory;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class FundingController extends Controller
{
    public function choose()
    {
        return inertia('Funding/Basic/Choose');
    }
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $fundings = Funding::query()
            ->with('funding_category')
            ->with('owner')
            ->when($request->funding_category, fn ($q, $v) => $q->whereBelongsTo(FundingCategory::where('slug', $v)->first()))
            ->where('user_id',auth()->user()->id)
            ->select('id', 'anggaran','user_id', 'slug','harga_perlembar', 'name', 'funding_category_id','created_at');
            if ($request->q) {
                $fundings->where('name','like','%'.$request->q.'%')
                ->orWhere('slug','like','%'.$request->q.'%')
                ->orWhere('harga_perlembar','like','%'.$request->q.'%')
                ->orWhere('anggaran','like','%'.$request->q.'%')
                ;
            }
            if ($request->has(['field','direction'])) {
                $fundings->orderBy($request->field,$request->direction);
            }
            $fundings = (
                FundingResource::collection($fundings->latest()->fastPaginate($request->load)->withQueryString())
            )->additional([
                'attributes' => [
                    'total' => Funding::count(),
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
            return inertia('Funding/Basic/Index',['fundings'=>$fundings]);
    }
    public function create()
    {
        $fundingCategories = FundingCategory::get();
        return inertia('Funding/Basic/Create', [
            'fundingCategories' => FundingCategoryResource::collection($fundingCategories),
        ]);
    }

    public function store(FundingRequest $request)
    {
        $attributeFundings = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Pendanaan ' . $request->name,
            'slug' => str($name)->slug(),
            'funding_category_id' => $request->funding_category_id,
            'jangka_waktu_penawaran' => $request->jangka_waktu_penawaran,
            'harga_perlembar' => $request->harga_perlembar,
            'total_lembar' => $request->total_lembar,
            'anggaran_user' => $anggaran_user = $request->anggaran,
            'anggaran' => $anggaran_user * 105/100,
            'maps' => $request->maps,
            'alamat' => $request->alamat,
            'provinsi' => $request->provinsi,
            'kota' => $request->kota,
            'kecamatan' => $request->kecamatan,
            'desa' => $request->desa,
            'prospektus' => $request->prospektus,
            'roi' => $request->roi,
            'jadwal_deviden' => $request->jadwal_deviden,
            'tentang_bisnis' => $request->tentang_bisnis,
        ]);
        $funding = Funding::create($attributeFundings);

        // $temporaryFile = TemporaryFile::where('folder',auth()->user()->id)->orderBy('id','desc')->first();
        // if($temporaryFile) {
        // $funding->addMedia(storage_path('app/public/files/tmp/funding/'. auth()->user()->id .'/'.$temporaryFile->filename))
        // ->toMediaCollection('fundingCover');
        // File::deletedirectory(storage_path('app/public/files/tmp/funding/'. auth()->user()->id));
        // $temporaryFile->delete();
        // }
        return redirect('fundings')->with([
            'type' => 'success',
            'message' => 'Fundings was created',
        ]);
    }

    public function show(Funding $funding)
    {
        $media = $funding->getMedia('fundingCover');
        $balance = $funding->balance;
        return Inertia('Funding/Basic/Show', [
            'funding' => FundingSingleResource::make($funding->load('funding_category')),
            'media' => ($media),
            'balance' => $balance,
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
    public function list(Request $request)
    {
        $fundings = Funding::query()
            ->with('funding_category')
            ->with('owner')
            // ->where('is_approved',1)
            ->when($request->funding_category, fn ($q, $v) => $q->whereBelongsTo(FundingCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran','user_id', 'slug','harga_perlembar','jangka_waktu_penawaran', 'total_lembar','name', 'funding_category_id','created_at');
            if ($request->q) {
                $fundings->where('name','like','%'.$request->q.'%')
                ->orWhere('slug','like','%'.$request->q.'%')
                ->orWhere('harga_perlembar','like','%'.$request->q.'%')
                ->orWhere('anggaran','like','%'.$request->q.'%')
                ;
            }
            if ($request->has(['field','direction'])) {
                $fundings->orderBy($request->field,$request->direction);
            }
            $fundings = (
                FundingResource::collection($fundings->latest()->fastPaginate($request->load)->withQueryString())
            )->additional([
                'attributes' => [
                    // 'total' => Plan::count(),
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
            return inertia('Funding/Public/List',['fundings'=>$fundings]);
    }
}
