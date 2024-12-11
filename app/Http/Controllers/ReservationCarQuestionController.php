<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArrayResource;
use App\Models\Reservation\ReservationCarQuestion;
use Illuminate\Http\Request;

class ReservationCarQuestionController extends Controller
{
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = ReservationCarQuestion::query();
        // dd($query);
        if ($request->q) {
            $query->where('question','like','%'.$request->q.'%')
            
            ;
        }

        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $questions = (
            ArrayResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => ReservationCarQuestion::count(),
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
        return inertia('Reservation/Counter/Question/Index',['questions'=>$questions]);
    }
    public function store (Request $request)
    {
        // dd(auth()->user()->company->id);
        $validated = $request->validate([
            'question' => 'required',
        ]);
        ReservationCarQuestion::create([
            'reservation_company_id' => auth()->user()->company->id,
            'question' => $request->question,
        ]);
        return redirect('reservationQuestions')->with([
            'type' => 'success',
            'message' => 'Berhasil',
        ]);
    }
    public function update(Request $request, $id)
    {
        $reservationCarQuestion = ReservationCarQuestion::findOrFail($id);
        $validated = $request->validate([
            'question' => 'required|string|max:255',
        ]);
        $reservationCarQuestion->update($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Pertanyaan berhasil diubah',
        ]);
    }
    public function destroy($id)
    {
        $reservationCarQuestion = ReservationCarQuestion::findOrFail($id);
        $reservationCarQuestion->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Pertanyaan berhasil dihapus',
        ]);
    }
}
