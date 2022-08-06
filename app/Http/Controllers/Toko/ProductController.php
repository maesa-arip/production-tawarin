<?php

namespace App\Http\Controllers\Toko;

use App\Http\Controllers\Controller;
use App\Http\Resources\Toko\ProductResource;
use App\Http\Resources\Toko\ProductSingleResource;
use App\Http\Resources\Toko\UserProductResource;
use App\Models\Toko\Category;
use App\Models\Toko\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category,fn($q,$v)=>$q->whereBelongsTo(Category::where('slug',$v)->first()))
            ->select('id','price','slug','name','picture','category_id')
            ->paginate(12)
            ->withQueryString();
        return inertia('Toko/Products/Index',[
            'products' => ProductResource::collection($products),
        ]);
    }
    public function table(Request $request)
    {
        $products = Product::query()->with(['category'])
                        ->when($request->category, fn ($q, $slug) => $q->whereBelongsTo(Category::whereSlug($slug)->firstOr(fn () => abort(404))))
                        ->when($request->search, fn ($q, $key) => $q->where('name', 'like', "%{$key}%"))
                        ->when($request->filtered, function ($q, $value) {
                            switch ($value) {
                                case 'latest': $q->latest(); break;
                                case 'oldest': $q->oldest(); break;
                                default: abort(404); break;
                            }
                        });
        return inertia('Toko/Products/Table', [
            'products' => ProductResource::collection($products->latest()->paginate()->withQueryString()),
            'categories' => Category::get(),
            'filter' => $request->only(['search', 'page', 'category', 'filtered']),
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Toko\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Inertia('Toko/Products/Show',[
            'product' =>ProductSingleResource::make($product->load('category'))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Toko\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Toko\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Toko\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
    public function mine(Request $request)
    {
        $products = $request->user()->products()
        ->latest()
        ->paginate()
        ->withQueryString();
        // return $products;
        return inertia('Toko/Products/Mine',[
            'products' => UserProductResource::collection($products),
        ]);
    }
}
