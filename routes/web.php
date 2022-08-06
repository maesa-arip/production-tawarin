<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Plan\PlanController;
use App\Http\Controllers\Toko\CartController;
use App\Http\Controllers\Toko\HistoryController;
use App\Http\Controllers\Toko\InvoiceController;
use App\Http\Controllers\Toko\PaymentNotificationController;
use App\Http\Controllers\Toko\ProductController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//Example
Route::get('filepond', [UploadController::class, 'filepond'])->name('filepond.index');
Route::get('dropzone', [UploadController::class, 'dropzone'])->name('dropzone.index');
Route::get('example/form', [ExampleController::class, 'form'])->name('example.form');
Route::get('example/descriptionlist', [ExampleController::class, 'descriptionlist'])->name('example.descriptionlist');
Route::post('/upload/filepond/store', [UploadController::class, 'store'])->name('filepond.store');
Route::post('/upload/dropzone/store', [UploadController::class, 'storedropzone'])->name('dropzone.store');
// End Example

// Plans
Route::Resource('plans', PlanController::class);
// End Plans

Route::get('toko/products/table', [ProductController::class, 'table'])->name('toko.products.table');
Route::get('/', HomeController::class)->name('home');
Route::get('toko/products/me', [ProductController::class,'mine'])->middleware('auth')->name('products.mine');
Route::resource('toko/products', ProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('toko/history',HistoryController::class)->name('tokohistory');
    Route::apiResource('users', UserController::class);
});

Route::controller(InvoiceController::class)->middleware('auth')->group(function () {
    Route::post('toko/invoice', 'store');
    Route::get('toko/invoice/{invoice:order_id}', 'show')->name('tokoinvoice.show');
});

Route::controller(CartController::class)->middleware('auth')->group(function () {
    Route::get('toko/carts', 'index');
    Route::delete('toko/carts/delete/{cart}', 'destroy')->name('tokocart.delete');
    Route::post('toko/carts/add-to-cart/{product:slug}',  'store')->name('tokocart.store');
});

Route::post('api/notification/handling', [PaymentNotificationController::class,'hit']);

require __DIR__ . '/auth.php';
