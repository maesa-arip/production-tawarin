<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Models\Reservation\ReservationCarCategory;
use Illuminate\Http\Request;

class ReservationCarCategoryController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = ReservationCarCategory::query();
        // dd($query);
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            
            ;
        }

        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $reservationCarCategories = (
            ArrayResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => ReservationCarCategory::count(),
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
        return inertia('Reservation/Counter/CarCategory/Index',['reservationCarCategories'=>$reservationCarCategories]);
    }
    public function store (Request $request)
    {
        // dd(auth()->user()->company->id);
        $validated = $request->validate([
            'name' => 'required',
        ]);
        ReservationCarCategory::create([
            'reservation_company_id' => auth()->user()->company->id,
            'name' => $request->name,
        ]);
        return redirect('reservationCarCategories')->with([
            'type' => 'success',
            'message' => 'Berhasil',
        ]);
    }
    public function update(Request $request, $id)
    {
        $reservationCarCategory = ReservationCarCategory::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $reservationCarCategory->update($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Kategori berhasil diubah',
        ]);
    }
    public function destroy($id)
    {
        $reservationCarCategory = ReservationCarCategory::findOrFail($id);
        $reservationCarCategory->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Kategori berhasil dihapus',
        ]);
    }
}
