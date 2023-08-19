<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanRequest;
use App\Http\Resources\Plan\PlanCategoryResource;
use App\Http\Resources\Plan\PlanMasterResource;
use App\Http\Resources\Plan\PlanMasterRoomResource;
use App\Http\Resources\Plan\PlanResource;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanBid;
use App\Models\Plan\PlanCategory;
use App\Models\Plan\PlanDetail;
use App\Models\Plan\PlanMaster;
use App\Models\Plan\PlanMasterRoom;
use App\Models\Plan\PlanRoom;
use App\Models\Plan\PlanStep;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Plan\PlanNewNotification;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class PlanController extends Controller
{
    public function choose()
    {
        return inertia('Plans/Basic/Choose');
    }
    public function tahapan(Plan $plan)
    {
        $balance = $plan->balance;
        $planbid = PlanBid::where('plan_id', $plan->id)->where('is_approved', 1)->sum('bid_price') / 2;
        $tahap = 1;
        $transaction = Transaction::where('payable_id', $plan->id)->first();
        if (is_null($transaction)) {
            $tahap = 1;
        }
        if ($transaction) {
            if ($transaction->confirmed == false) {
                $tahap = 2;
            }
            if ($balance == $planbid) {
                $tahap = 3;
            }
        }
        if ($plan->plan_result && $balance == $planbid) {
            $tahap = 4;
        }
        if ($balance == $planbid * 2) {
            $tahap = 5;
        }

        $step = PlanStep::where('type', 1)->where('step', $tahap)->first();

        return Inertia('Plans/Tahapan/Owner/Index', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'balance' => $balance,
            'tahap' => $tahap,
            'step' => $step,
        ]);
    }
    public function hasil(Plan $plan)
    {

        $balance = $plan->balance;
        $planbid = PlanBid::where('plan_id', $plan->id)->where('is_approved', 1)->sum('bid_price') / 2;
        if ($balance == $planbid) {
            $tahap = 1;
        }
        return Inertia('Plans/Hasil/Index', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'balance' => $balance,
            'tahap' => $tahap,
        ]);
    }

    public $loadDefault = 15;
    public function index(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->with('winner')
            ->with('plan_bids')
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->where('user_id', auth()->user()->id)
            ->doesntHave('planReject')
            ->with('media')
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran', 'jangka_waktu_pelaksanaan', 'user_id', 'slug', 'is_approved', 'jumlah_revisi', 'name', 'plan_category_id', 'created_at')
            ->withCount(['plan_bids'])
            ->withSum('plan_bids', 'is_approved');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
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
        $planRejectCount = Plan::query()
            ->where('user_id', auth()->user()->id)
            ->has('planReject')->count();
        return inertia('Plans/Basic/Index', ['plans' => $plans, 'planRejectCount' => $planRejectCount]);
    }

    public function create()
    {
        $plan_categories = PlanCategory::get();
        $plan_master_rooms = PlanMasterRoom::get();
        $plan_master_checkboxs = PlanMaster::where('type', 'checkbox')->get();
        $plan_master_texts = PlanMaster::where('type', 'text')->get();
        return inertia('Plans/Basic/Create', [
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
            'plan_categories' => PlanCategoryResource::collection($plan_categories),
            'plan_master_rooms' => PlanMasterRoomResource::collection($plan_master_rooms),
        ]);
    }

    public function store(PlanRequest $request)
    {
        $atrribute_plans = ([
            'user_id' => auth()->user()->id,
            'name' => $name = 'Perencanaan ' . $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'jangka_waktu_penawaran' => $request->jangka_waktu_penawaran,
            'jangka_waktu_pelaksanaan' => $request->jangka_waktu_pelaksanaan,
            'jumlah_revisi' => $request->jumlah_revisi,
            'panjang' => $request->panjang,
            'lebar' => $request->lebar,
            'luas_bangunan' => $request->luas_bangunan,
            'anggaran_proyek' => $request->anggaran_proyek,
            'dari_anggaran' => $request->dari_anggaran,
            'sampai_anggaran' => $request->sampai_anggaran,
            'plan_category_id' => $request->plan_category_id,
            'lat' => $request->lat,
            'lng' => $request->lng,
        ]);

        // DB::beginTransaction();
        // try {
            $plan = Plan::create($atrribute_plans);

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

            $temporaryFolderdenahlokasi = Session::get('folderdenahlokasiukuran');
            $namefiledenahlokasi = Session::get('filenamedenahlokasiukuran');
            if ($temporaryFolderdenahlokasi) {
                for ($i = 0; $i < count($temporaryFolderdenahlokasi); $i++) {
                    $temporary = TemporaryFile::where('folder', $temporaryFolderdenahlokasi[$i])->where('filename', $namefiledenahlokasi[$i])->first();
                    if ($temporary) {
                        $plan->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderdenahlokasi[$i] . '/' . $namefiledenahlokasi[$i]))
                            ->toMediaCollection('denahlokasiukuran');
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
            Session::remove('folderdenahlokasiukuran');
            Session::remove('filenamedenahlokasiukuran');


            $temporaryFolderkondisisaatini = Session::get('folderkondisisaatini');
            $namefilekondisisaatini = Session::get('filenamekondisisaatini');
            if ($temporaryFolderkondisisaatini) {
                for ($i = 0; $i < count($temporaryFolderkondisisaatini); $i++) {
                    $temporary = TemporaryFile::where('folder', $temporaryFolderkondisisaatini[$i])->where('filename', $namefilekondisisaatini[$i])->first();
                    if ($temporary) {
                        $plan->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolderkondisisaatini[$i] . '/' . $namefilekondisisaatini[$i]))
                            ->toMediaCollection('kondisisaatini');
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
            Session::remove('folderkondisisaatini');
            Session::remove('filenamekondisisaatini');


            $planmasters = PlanMaster::get();
            foreach ($planmasters as $planmaster) {
                if ($request->has($planmaster->slug)) {
                    if ($planmaster->slug == 'lainnya') {
                        PlanDetail::create([
                            'plan_id' => $plan->id,
                            'plan_master_id' => $planmaster->id,
                            'description' => $request->lainnya,
                        ]);
                    } else {
                        PlanDetail::create([
                            'plan_id' => $plan->id,
                            'plan_master_id' => $planmaster->id,
                        ]);
                    }
                }
            }
            $planMasterRooms = PlanMasterRoom::get();
            foreach ($planMasterRooms as $planmasterroom) {
                if ($request->has($planmasterroom->slug)) {
                    PlanRoom::create([
                        'plan_id' => $plan->id,
                        'plan_master_room_id' => $planmasterroom->id,
                        'count' => $request[$planmasterroom->slug],
                    ]);
                }
            }
            foreach ($request->rooms as $rooms) {
                PlanRoom::create([
                    'plan_id' => $plan->id,
                    'name' => $rooms['name'],
                    'count' => $rooms['count'],
                ]);
            }

            $user = User::whereHas('roles', function ($query) {
                $query->where('name', 'admin');
            })->get();

            Notification::send($user, new PlanNewNotification($plan));
            Cache::forget('notifications_count');
            DB::commit();
            return redirect('plans')->with([
                'type' => 'success',
                'message' => 'Perencanaan berhasil dibuat',
            ]);
        // } catch (\Exception $e) {
        //     DB::rollback();
        //     return redirect('plans')->with([
        //         'type' => 'error',
        //         'message' => 'Perencanaan gagal dibuat',
        //     ]);
        // }
    }

    public function show(Plan $plan)
    {
        $planWithSum = $plan->with('plan_bids')->where('id', $plan->id)->withSum('plan_bids', 'is_approved')->first();
        $media = $plan->getMedia('contohgambar');
        $denahlokasiukuran = $plan->getMedia('denahlokasiukuran');
        $kondisisaatini = $plan->getMedia('kondisisaatini');
        // $video = $plan->getMedia('contohgambar')->where('mime_type','video/mp4');
        // dd($video);
        $plan_master_checkboxs = PlanMaster::where('type', 'checkbox')->get();
        $plan_master_texts = PlanMaster::where('type', 'text')->get();
        // $plan_details = $plan->plan_details;
        // $plan_details = $plan->with('plan_details.plan_master')->get();
        $plan_details = $plan->with('plan_details.plan_master')
            ->select('plans.id', 'plans.name', 'plan_details.id as plan_detail_id', 'plan_details.description', 'plan_masters.name as plan_master_name')
            ->join('plan_details', 'plans.id', '=', 'plan_details.plan_id')
            ->join('plan_masters', 'plan_details.plan_master_id', '=', 'plan_masters.id')
            ->where('plan_id', $plan->id)
            ->withCount('plan_details')
            ->get();
        // dd($video);
        $persentase = 5;
        $planRooms = PlanRoom::where('plan_id', $plan->id)->leftjoin('plan_master_rooms', 'plan_master_rooms.id', 'plan_rooms.plan_master_room_id')->select('plan_master_rooms.name', 'plan_master_rooms.id', 'plan_rooms.name as othername', 'plan_rooms.count')->get();


        return Inertia('Plans/Basic/Show', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'media' => ($media),
            'denahlokasiukuran' => ($denahlokasiukuran),
            'kondisisaatini' => ($kondisisaatini),
            // 'video' => ($video),
            'planWithSum' => $planWithSum,
            'plan_details' => ($plan_details),
            'planRooms' => ($planRooms),
            'persentase' => ($persentase),
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
        ]);
    }

    public function edit(Plan $plan)
    {
        $plan_details = $plan->with('plan_details')
            ->select('plan_details.plan_master_id as id', 'plan_details.description', 'plan_masters.name', 'plan_masters.slug')
            ->join('plan_details', 'plans.id', '=', 'plan_details.plan_id')
            ->join('plan_masters', 'plan_details.plan_master_id', '=', 'plan_masters.id')
            ->where('plan_id', $plan->id)
            ->get();
        $plan_rooms = $plan->with('plan_rooms')
            ->select('plan_rooms.plan_master_room_id as id', 'plan_rooms.name as elsename', 'plan_rooms.count', 'plan_master_rooms.name', 'plan_master_rooms.slug')
            ->join('plan_rooms', 'plans.id', '=', 'plan_rooms.plan_id')
            ->join('plan_master_rooms', 'plan_rooms.plan_master_room_id', '=', 'plan_master_rooms.id')
            ->where('plan_id', $plan->id)
            ->get();
        $plan_categories = PlanCategory::get();
        $plan_master_rooms = PlanMasterRoom::get();
        $plan_master_checkboxs = PlanMaster::where('type', 'checkbox')->get();
        $plan_master_texts = PlanMaster::where('type', 'text')->get();
        $media = $plan->getMedia('contohgambar');
        // dd($media);
        return inertia('Plans/Basic/Edit', [
            'plan_master_checkboxs' => PlanMasterResource::collection($plan_master_checkboxs),
            'plan_master_texts' => PlanMasterResource::collection($plan_master_texts),
            'plan_categories' => $plan_categories,
            'plan_master_rooms' => PlanMasterRoomResource::collection($plan_master_rooms),
            'plan' => $plan,
            'media' => $media,
            'plan_rooms' => $plan_rooms,
            'plan_details' => $plan_details,
        ]);
    }

    public function update(Request $request, Plan $plan)
    {
        dd("update");
    }

    public function destroy($id)
    {
        $plan = Plan::findOrfail($id);
        $plan->delete();
        return redirect('plans')->with([
            'type' => 'success',
            'message' => 'Perencanaan berhasil dihapus',
        ]);
    }

    public function list(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('winner')
            ->with('owner')
            ->with('media')
            ->where('is_approved', 1)
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran', 'jangka_waktu_pelaksanaan', 'jangka_waktu_penawaran', 'user_id', 'slug', 'jumlah_revisi', 'name', 'is_approved', 'plan_category_id', 'created_at')
            ->withCount(['plan_bids'])
            ->withSum('plan_bids', 'is_approved');
        // ->addSelect(['winner_name' => function ($query) {
        //     $query->select('name')
        //         ->from('users')
        //         ->whereColumn('winner_id', 'users.id')
        //         ->limit(1);
        // }])->get();
        // dd($plans);
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Plans/Public/List', ['plans' => $plans]);
    }
}
