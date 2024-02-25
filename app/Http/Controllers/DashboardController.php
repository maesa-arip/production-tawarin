<?php

namespace App\Http\Controllers;

use App\Http\Resources\Plan\PlanResource;
use App\Models\Auth\JoinAs;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanCategory;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
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
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran', 'jangka_waktu_pelaksanaan','user_id', 'slug', 'is_approved', 'jumlah_revisi', 'name', 'plan_category_id', 'created_at')
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
                'per_page' => 10,
            ],
            'filtered' => [
                'load' => 6,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',
            ]
        ]);
        $joinas_reservasi = JoinAs::where('name', 'like', '%Reservasi%')->get();
        $joinas_konstruksi = JoinAs::where('name', 'not like', '%Reservasi%')->get();
        $user = User::where('id',auth()->user()->id)->first();
        $referral = User::where('from_referral', $user->referral)->count();
        $balance = auth()->user()->balance;
        $bonus = auth()->user()->hasWallet('bonus') ? auth()->user()->getWallet('bonus')->balance : 0 ;
        $portofolio = User::where('users.id', auth()->user()->id)->join('plan_portofolios', 'plan_portofolios.user_id','users.id')->get();
        
        return inertia('Dashboard', ['plans' => $plans, 'portofolio'=> $portofolio, 'joinas_reservasi'=>$joinas_reservasi,'joinas_konstruksi'=>$joinas_konstruksi,'balance' => $balance,
        'bonus' => $bonus,
        'referral' => $referral,]);
    }
}
