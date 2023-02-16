<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanBidRequest;
use App\Http\Resources\Plan\PlanBidResource;
use App\Http\Resources\Plan\PlanResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanBid;
use App\Models\Plan\PlanCategory;
use Illuminate\Http\Request;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Plan\PlanBidNotification;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;

class PlanBidController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->with('plan_bid')
            ->with('plan_bids')
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->whereHas('plan_bids', function($q){
                $q->where('user_id', auth()->user()->id);
            })
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran', 'user_id', 'slug', 'jumlah_revisi', 'name', 'plan_category_id','created_at')->withSum('plan_bids','is_approved');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanBidResource::collection($plans->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Plan::count(),
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
        return inertia('PlanBids/Basic/Index', ['plans' => $plans]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlanBidRequest $request)
    {
        $plan_id=$request->plan_id;
        $attribute_planbids = ([
            'user_id' => auth()->user()->id,
            'plan_id' => $plan_id,
            'bid_price_user' => $bid_price_user = $request->bid_price_user,
            'bid_price' => $bid_price_user * 101/100,
            'description' => $request->description,
        ]);
        $planbid = PlanBid::create($attribute_planbids);

        $temporaryFolder = Session::get('folder');
        $namefile = Session::get('filename');
        if($temporaryFolder){
            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
                if ($temporary) { //if exist
                    $planbid->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
                        ->toMediaCollection('desainawal');
                    //hapus file and folder temporary
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        //delete record in temporary table
                        $temporary->delete();
                    }
                }
            }
        }
        
        Session::remove('folder');
        Session::remove('filename');

        $plan = Plan::find($request->plan_id);
        $user = User::find($plan->user_id);
        $user->notify(new PlanBidNotification($plan));
        Cache::forget('notifications_count');

        return redirect('planbids')->with([
            'type' => 'success',
            'message' => 'Penawaran sudah terkirim',
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
