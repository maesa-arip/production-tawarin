<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plan\BidPlanResource;
use App\Http\Resources\Plan\PlanSingleResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanBid;
use App\Models\Plan\PlanStep;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;

class BidPlanController extends Controller
{
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
        // if ($balance == $planbid*2) {
        //     $tahap = 4;
        //  }
        $step = PlanStep::where('type', 1)->where('step', $tahap)->first();
        return Inertia('Plans/Tahapan/Konsultan/Index', [
            'plan' => PlanSingleResource::make($plan->load('plan_category')),
            'balance' => $balance,
            'tahap' => $tahap,
            'step' => $step,
        ]);
    }
    public $loadDefault = 10;
    public function listpenawar(Request $request, $plan_id)
    {
        $bidplans = PlanBid::query()
            ->with('konsultan')
            ->with('plan')
            ->where('plan_id', $plan_id);
        $sum_is_approved = $bidplans->sum('is_approved');
        if ($request->q) {
            $bidplans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $bidplans->orderBy($request->field, $request->direction);
        }
        $bidplans = (BidPlanResource::collection($bidplans->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Plans/Bid/ListPenawar', ['bidplans' => $bidplans, 'sum_is_approved' => $sum_is_approved]);
    }
    public function selectwinnerplan($id)
    {
        $planbids = PlanBid::find($id);
        $planbids->is_approved = 1;
        $planbids->save();
        return redirect('plans')->with([
            'type' => 'success',
            'message' => 'Selamat anda sudah memilih pemenang',
        ]);
    }
}
