<?php

namespace App\Http\Controllers;

use App\Http\Resources\Plan\PlanResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanCategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function home(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->with('winner')
            ->with('media')
            ->where('is_approved', 1)
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran','jangka_waktu_pelaksanaan' ,'user_id', 'slug', 'jumlah_revisi', 'name', 'is_approved', 'plan_category_id', 'created_at');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanResource::collection($plans->latest()->fastPaginate(8)->withQueryString()));
        return inertia('HomeDefault', ['plans' => $plans]);
    }
    public function homekonstruksi(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->with('winner')
            ->with('media')
            ->where('is_approved', 1)
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran','jangka_waktu_pelaksanaan' ,'user_id', 'slug', 'jumlah_revisi', 'name', 'is_approved', 'plan_category_id', 'created_at');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanResource::collection($plans->latest()->fastPaginate(8)->withQueryString()));
        return inertia('Home', ['plans' => $plans]);
    }
    public function homereservasi(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->with('winner')
            ->with('media')
            ->where('is_approved', 1)
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran','jangka_waktu_pelaksanaan' ,'user_id', 'slug', 'jumlah_revisi', 'name', 'is_approved', 'plan_category_id', 'created_at');
        if ($request->q) {
            $plans->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('jumlah_revisi', 'like', '%' . $request->q . '%')
                ->orWhere('anggaran_proyek', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $plans->orderBy($request->field, $request->direction);
        }
        $plans = (PlanResource::collection($plans->latest()->fastPaginate(8)->withQueryString()));
        return inertia('HomeReservasi', ['plans' => $plans]);
    }
}
