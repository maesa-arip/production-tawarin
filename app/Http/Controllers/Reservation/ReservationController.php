<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyProfileUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\Reservation\ReservationResource;
use App\Models\Reservation\ReservationCategory;
use App\Models\Reservation\ReservationCompany;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function edit(Request $request)
    {
        $company = ReservationCompany::where('user_id',auth()->user()->id)->first();
        $reservation_categories = ReservationCategory::get();
        return Inertia::render('Reservation/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'reservation_categories' => $reservation_categories,
            'company' => $company,
        ]);
    }

    public function update(CompanyProfileUpdateRequest $request)
    {
        $atrributes = ([
            'name' => $name = $request->name,
            'slug' => str($name)->slug() . '-' . Str::lower(Str::random(6)),
            'lat' => $request->lat,
            'lng' => $request->lng,
            'formattedAddress' => $request->formattedAddress,
            'is_approved' => 1,
            'user_id' => auth()->user()->id,
            'reservation_category_id' => $request->reservation_category_id,
        ]);
        ReservationCompany::updateOrCreate(['user_id'=>auth()->user()->id],$atrributes);
        return Redirect::route('reservationprofile.edit')->with([
            'type' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
    public $loadDefault = 10;
    public function list(Request $request)
    {
        $reservation_categories = ReservationCategory::get();
        $reservations = ReservationCompany::query()
            ->with('reservation_category')
            ->where('is_approved', 1)
            ->when($request->reservation_category, fn ($q, $v) => $q->whereBelongsTo(ReservationCategory::where('slug', $v)->first()))
            ->select('id', 'name', 'formattedAddress','is_approved', 'reservation_category_id','slug', 'created_at');
        if ($request->q) {
            $reservations->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('slug', 'like', '%' . $request->q . '%')
                ->orWhere('formattedAddress', 'like', '%' . $request->q . '%')
                ->orWhere('reservation_category_id', 'like', '%' . $request->q . '%');
        }
        if ($request->has(['field', 'direction'])) {
            $reservations->orderBy($request->field, $request->direction);
        }
        $reservations = (ReservationResource::collection($reservations->latest()->fastPaginate($request->load)->withQueryString())
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
        return inertia('Reservation/Public/List', ['reservations' => $reservations,'reservation_categories' => $reservation_categories]);
    }
}
