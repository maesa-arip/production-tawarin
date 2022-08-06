<?php

namespace App\Http\Controllers\Toko;

use App\Events\TestEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\Toko\CartResource;
use App\Models\Toko\Cart;
use App\Models\Toko\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $carts = Cart::query()
        ->with('product')
        ->whereBelongsTo($request->user())
        ->whereNull('paid_at')
        ->get();
        broadcast(new TestEvent);
        return inertia('Toko/Cart/Index',[
            'carts' => CartResource::collection($carts),
        ]);
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
    public function store(Request $request, Product $product)
    {
        // Cart::create([
        //     'product_id' => $product->id,
        // ]);
        $product->carts()->updateOrCreate([
            'user_id' => $request->user()->id,
            'product_id' => $product->id,
        ],[
            'user_id' => $request->user()->id,
            'price' => $product->price,
        ]);
        Cache::forget('carts_global_count');
        return redirect('toko/carts');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Toko\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Toko\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Toko\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Toko\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();
        Cache::forget('carts_global_count');
        return back();
    }
}
