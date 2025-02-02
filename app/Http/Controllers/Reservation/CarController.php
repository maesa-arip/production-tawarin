<?php

namespace App\Http\Controllers\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArrayResource;
use App\Models\Reservation\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $query = Car::query()->with('company')->where('reservation_company_id','<>',0);
        // dd($query);
        if ($request->q) {
            $query->where('name','like','%'.$request->q.'%')
            ->orWhere('merk','like','%'.$request->q.'%')
            ->orWhere('standar_kategori','like','%'.$request->q.'%')
            ;
        }

        if ($request->has(['field','direction'])) {
            $query->orderBy($request->field,$request->direction);
        }
        $cars = (
            ArrayResource::collection($query->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => Car::count(),
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
        return inertia('Reservation/Car/Index',['cars'=>$cars]);
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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'merk' => 'required|string|max:255',
            'standar_kategori' => 'required|string|max:255',
        ]);
        Car::create([
            'reservation_company_id' => auth()->user()->company->id,
            'name' => $request->name,
            'merk' => $request->merk,
            'standar_kategori' => $request->standar_kategori,
        ]);
        return back()->with([
            'type' => 'success',
            'message' => 'Car was created',
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
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'merk' => 'required|string|max:255',
            'standar_kategori' => 'required|string|max:255',
        ]);
        $car = Car::findOrFail($id);
        $car->update($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Kendaraan berhasil diubah',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Car::findOrFail($id);
        $car->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Kendaraan was deleted',
        ]);
    }
}
