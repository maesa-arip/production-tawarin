<?php

use App\Http\Controllers\ChooseController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DependantDropdownController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\Funding\FundingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\Permissions\AssignController;
use App\Http\Controllers\Permissions\PermissionController;
use App\Http\Controllers\Permissions\RoleController;
use App\Http\Controllers\Permissions\RolePermissionController;
use App\Http\Controllers\Permissions\UserPermissionController;
use App\Http\Controllers\Permissions\UserRoleController;
use App\Http\Controllers\Plan\Admin\PlanAdminController;
use App\Http\Controllers\Plan\BidPlanController;
use App\Http\Controllers\Plan\PlanBidController;
use App\Http\Controllers\Plan\PlanController;
use App\Http\Controllers\Plan\PlanResultController;
use App\Http\Controllers\Plan\PlanRevisionController;
use App\Http\Controllers\PlanRevisionResultController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Toko\CartController;
use App\Http\Controllers\Toko\HistoryController;
use App\Http\Controllers\Toko\InvoiceController;
use App\Http\Controllers\Toko\PaymentNotificationController;
use App\Http\Controllers\Toko\ProductController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Wallet\Admin\DepositAdminController;
use App\Http\Controllers\Wallet\DepositController;
use App\Http\Controllers\Wallet\TransferController;
use App\Http\Controllers\Wallet\WalletController;
use App\Http\Controllers\Wallet\Admin\WithdrawAdminController;
use App\Http\Controllers\Wallet\HistoryController as WalletHistoryController;
use App\Http\Controllers\Wallet\PlanDepositController;
use App\Http\Controllers\Wallet\WithdrawController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Example
Route::get('filepond', [UploadController::class, 'filepond'])->name('filepond.index');
Route::get('dropzone', [UploadController::class, 'dropzone'])->name('dropzone.index');
Route::get('example/homefunding', [ExampleController::class, 'homefunding'])->name('example.homefunding');
Route::get('example/form', [ExampleController::class, 'form'])->name('example.form');
Route::get('example/funding', [ExampleController::class, 'funding'])->name('example.funding');
Route::get('example/descriptionlist', [ExampleController::class, 'descriptionlist'])->name('example.descriptionlist');
Route::post('/upload/filepond/store', [UploadController::class, 'store'])->name('filepond.store');
Route::delete('/upload/filepond/destroy', [UploadController::class, 'destroy'])->name('filepond.destroy');
Route::post('/upload/dropzone/store', [UploadController::class, 'storedropzone'])->name('dropzone.store');
// End Example

// Permissions
Route::prefix('role-and-permission')->namespace('Permissions')->group(function () {
    Route::get('permission-to-role', [RolePermissionController::class, 'index'])->name('assign.role.index');
    Route::post('permission-to-role', [RolePermissionController::class, 'store']);
    Route::get('permission-to-role/{role}/edit', [RolePermissionController::class, 'edit'])->name('assign.role.edit');
    Route::put('permission-to-role/{role}/edit', [RolePermissionController::class, 'update']);
    //User
    Route::get('role-to-user', [UserRoleController::class, 'index'])->name('assign.user.index');
    Route::post('role-to-user', [UserRoleController::class, 'store']);
    Route::get('role-to-user/{user}/edit', [UserRoleController::class, 'edit'])->name('assign.user.edit');
    Route::put('role-to-user/{user}/edit', [UserRoleController::class, 'update']);

    Route::prefix('roles')->group(function () {
        Route::get('', [RoleController::class, 'index'])->name('roles.index');
        Route::post('store', [RoleController::class, 'store'])->name('roles.store');
        Route::get('{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
        Route::put('{role}/edit', [RoleController::class, 'update'])->name('roles.update');
        Route::delete('{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
    });

    Route::prefix('permissions')->group(function () {
        Route::get('', [PermissionController::class, 'index'])->name('permissions.index');
        Route::post('store', [PermissionController::class, 'store'])->name('permissions.store');
        Route::get('{permission}/edit', [PermissionController::class, 'edit'])->name('permissions.edit');
        Route::put('{permission}/edit', [PermissionController::class, 'update'])->name('permissions.update');
        Route::delete('{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');
    });
});


//Public List
    // Plans
    Route::get('public/plans/list', [PlanController::class,'list'])->name('plan.list');
    Route::get('public/plans/{plan}', [PlanController::class,'show'])->name('plans.show');
    // End Plans

    // Fundings
    // Route::Resource('fundings', FundingController::class)->only('show');
    Route::get('public/fundings/list', [FundingController::class,'list'])->name('funding.list');
    // End Fundings
//End Public List

//Alamat
Route::get('provinces', [DependantDropdownController::class, 'provinces'])->name('provinces');
Route::get('cities', [DependantDropdownController::class, 'cities'])->name('cities');
Route::get('districts', [DependantDropdownController::class, 'districts'])->name('districts');
Route::get('villages', [DependantDropdownController::class, 'villages'])->name('villages');
//End Alamat


Route::get('toko/products/table', [ProductController::class, 'table'])->name('toko.products.table');
Route::get('/', HomeController::class)->name('home');
Route::get('toko/products/me', [ProductController::class, 'mine'])->middleware('auth')->name('products.mine');
Route::resource('toko/products', ProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('toko/history', HistoryController::class)->name('tokohistory');
    Route::get('/profiles', [UserController::class,'profile'])->name('users.profiles');
    Route::apiResource('users', UserController::class);
    // Plans
    Route::Resource('adminplans', PlanAdminController::class);
    Route::patch('/planadmin/confirmed/{id}', [PlanAdminController::class,'confirmed'])->name('planadmin.confirmed');
    Route::post('/planadmin/rejected/{id}', [PlanAdminController::class,'rejected'])->name('planadmin.rejected');
    Route::Resource('plans', PlanController::class)->except('show');
    // -- Tahapan Perencanaan
        Route::get('plan/tahapan/{plan}',[PlanController::class,'tahapan'])->name('plan.tahapan');
        Route::get('bidplan/tahapan/{plan}',[BidPlanController::class,'tahapan'])->name('bidplan.tahapan');

        Route::get('plan/hasil/{plan}',[PlanController::class,'hasil'])->name('plan.hasil');
        Route::get('bidplan/hasil/{plan}',[BidPlanController::class,'hasil'])->name('bidplan.hasil');

        //Hasil Perencanaan
            Route::get('plan/uploadresult/{plan}',[PlanResultController::class,'UploadResult'])->name('plan.uploadhasil');
            Route::post('plan/uploadresult/{plan}',[PlanResultController::class,'StoreUploadResult'])->name('plan.simpanhasil');
            Route::get('plan/showresult/{plan}',[PlanResultController::class,'ShowResult'])->name('plan.lihathasil');
            Route::put('plan/finishresult/{planresult}',[PlanResultController::class,'FinishResult'])->name('planresult.finish');
        //End Hasil Perencanaan

        //Revisi
            Route::get('plan/showrevision/{plan}',[PlanRevisionController::class,'ShowRevision'])->name('plan.lihatrevisi');
            Route::post('plan/uploadrevision/{planrevision}',[PlanRevisionController::class,'StoreRevision'])->name('plan.simpanrevisi');
        //End Revisi

        //Revisi Result
        Route::post('plan/uploadrevisionresult/{planrevisionresult}',[PlanRevisionResultController::class,'StoreRevisionResult'])->name('plan.simpanrevisionresult');
        //End Revisi Result
        
        


    // -- End Tahapan Perencanaan
    Route::Resource('planbids', PlanBidController::class);
    Route::get('bidplans/{id}', [BidPlanController::class,'listpenawar'])->name('bidplans.listpenawar');
    Route::get('bidplans/selectwinnerplan/{id}', [BidPlanController::class,'selectwinnerplan'])->name('bidplans.selectwinnerplan');
    Route::Resource('bidplans', PlanBidController::class);
    // End Plans

    // Plans
    Route::get('pilar/choose',[ChooseController::class,'pilar'])->name('choose.pilar');
    Route::get('fundings/choose',[FundingController::class,'choose'])->name('fundings.choose');
    Route::get('plans/choose',[PlanController::class,'choose'])->name('plans.choose');
    Route::get('projects/choose',[ProjectController::class,'choose'])->name('projects.choose');
    Route::Resource('projects', ProjectController::class);
    // End Plans

    // Fundings
    Route::Resource('fundings', FundingController::class);
    // End Fundings

    // Wallets
    Route::patch('admindeposit/{id}/confirmed', [DepositAdminController::class,'confirmed'])->name('admindeposit.confirmed');
    Route::patch('adminwithdraw/{id}/confirmed', [WithdrawAdminController::class,'confirmed'])->name('adminwithdraw.confirmed');
    Route::Resource('admindeposits', DepositAdminController::class);
    Route::Resource('adminwithdraws', WithdrawAdminController::class);
    Route::Resource('wallets', WalletController::class);
    Route::Resource('deposits', DepositController::class);
    Route::Resource('withdraws', WithdrawController::class);
    Route::Resource('histories', WalletHistoryController::class);
    Route::get('wallet/transfers', [TransferController::class,'transfer'])->name('wallet.transfer');
    Route::post('wallet/transfers', [TransferController::class,'transferstore'])->name('wallet.transferstore');
    Route::get('plan/deposit/{plan}',[PlanDepositController::class,'plandeposit'])->name('plan.deposit');
    Route::post('plan/deposit/{plan}',[PlanDepositController::class,'plandepositstore'])->name('plan.depositstore');
    // End Wallets

    //Notifications
    Route::resource('notifications', NotificationController::class);
    //End Notifications
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

Route::post('api/notification/handling', [PaymentNotificationController::class, 'hit']);


require __DIR__.'/auth.php';
