<?php

namespace App\Http\Controllers\Toko;

use App\Http\Controllers\Controller;
use App\Http\Resources\Toko\HistoryResource;
use App\Models\Toko\Cart;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $carts = Cart::query()
            ->whereBelongsTo($request->user())
            ->latest()
            ->paginate()
            ->withQueryString();
        return inertia('Toko/History', [
            'carts' => HistoryResource::collection($carts),
        ]);
    }
}
