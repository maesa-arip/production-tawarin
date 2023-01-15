<?php

namespace App\Http\Controllers\Plan\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Plan\PlanRejectRequest;
use App\Http\Resources\Plan\PlanResource;
use App\Models\Plan\Plan;
use App\Models\Plan\PlanReject;
use App\Models\User;
use App\Notifications\Plan\PlanConfirmedNotification;
use App\Notifications\Plan\PlanNewToKonsultanNotification;
use App\Notifications\Plan\PlanRejectNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;

class PlanAdminController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $plans = Plan::query()
            ->with('plan_category')
            ->with('owner')
            ->doesnthave('planReject')
            ->when($request->plan_category, fn ($q, $v) => $q->whereBelongsTo(PlanCategory::where('slug', $v)->first()))
            ->where('is_approved',0)
            ->select('id', 'anggaran_proyek', 'dari_anggaran', 'sampai_anggaran', 'user_id', 'slug', 'is_approved','jumlah_revisi', 'name', 'plan_category_id', 'created_at');
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
        return inertia('Plans/Admin/Index', ['plans' => $plans]);
    }

    public function confirmed($id)
    {
        $plan = Plan::find($id);
        $plan->is_approved = 1;
        $plan->save();
        $user = User::find($plan->user_id);
        $plan->createWallet(
            [
            'name' => $plan->name,
            'slug' => $plan->slug,
            ]
        );
        $user->notify(new PlanConfirmedNotification($plan));

        $konsultan = User::whereHas('roles', function ($query) {
            $query->where('name', 'konsultan (drafter)')->orWhere('name', 'konsultan (arsitek)');
        })->get();
        Notification::send($konsultan, new PlanNewToKonsultanNotification($plan));
        Cache::forget('notifications_count');
        return redirect('adminplans')->with([
            'type' => 'success',
            'message' => 'Perencanaan berhasil diterima dan ditampilkan',
        ]);
    }

    public function rejected(PlanRejectRequest $request, $id)
    {
        
        
        

        // $plan->plan_detail()->delete();
        // $plan->delete();

        $atrribute_plans = ([
            'plan_id' => $id,
            'description' => $request->description,
        ]);
        $plan = Plan::find($id);
        $user = User::find($plan->user_id);
        PlanReject::updateOrCreate($atrribute_plans);
        $descriptionreject = $request->description;
        $user->notify(new PlanRejectNotification($descriptionreject,$plan));
        Cache::forget('notifications_count');
        
        return redirect('adminplans')->with([
            'type' => 'success',
            'message' => 'Perencanaan ditolak',
        ]);
    }

}
