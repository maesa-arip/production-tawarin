<?php

use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\Chat\ChatController;
use App\Http\Controllers\ChooseController;
use App\Http\Controllers\ContactController;
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
use App\Http\Controllers\Plan\PlanPortofolioController;
use App\Http\Controllers\Plan\PlanResultController;
use App\Http\Controllers\Plan\PlanRevisionController;
use App\Http\Controllers\PlanRevisionResultController;
use App\Http\Controllers\Portofolio\PortofolioController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Reservation\ReservationCarCategoryController;
use App\Http\Controllers\Reservation\ReservationController;
use App\Http\Controllers\Reservation\ReservationCounterController;
use App\Http\Controllers\Reservation\ReservationDayOffBreakController;
use App\Http\Controllers\Reservation\ReservationEmployeeController;
use App\Http\Controllers\Reservation\ReservationRatingCategoryController;
use App\Http\Controllers\ReservationCarQuestionController;
use App\Http\Controllers\ReservationRatingController;
use App\Http\Controllers\Toko\CartController;
use App\Http\Controllers\Toko\HistoryController;
use App\Http\Controllers\Toko\InvoiceController;
use App\Http\Controllers\Toko\PaymentNotificationController;
use App\Http\Controllers\Toko\ProductController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserBankController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Wallet\Admin\DepositAdminController;
use App\Http\Controllers\Wallet\Admin\SpendingAdminController;
use App\Http\Controllers\Wallet\DepositController;
use App\Http\Controllers\Wallet\TransferController;
use App\Http\Controllers\Wallet\WalletController;
use App\Http\Controllers\Wallet\Admin\WithdrawAdminController;
use App\Http\Controllers\Wallet\Admin\WithdrawOwnerController;
use App\Http\Controllers\Wallet\HistoryController as WalletHistoryController;
use App\Http\Controllers\Wallet\PlanDepositController;
use App\Http\Controllers\Wallet\WithdrawController;
use App\Models\Reservation\ReservationCompany;
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

Route::get('/coming', function () {
    return Inertia::render('ComingSoon');
})->name('coming');

Route::get('/reservasi', function () {
    return Inertia::render('Reservasi');
})->name('reservasi');


Route::get('/auth/{provider}', [SocialiteController::class, 'redirectToProvider']);
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'handleProvideCallback']);
Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/reservationlist', [ReservationController::class, 'list'])->name('reservation.list');
Route::middleware('auth', 'verified')->group(function () {
    Route::get('/reservation/employee/rating/{user_id}', [ReservationRatingController::class, 'getallemployeerating'])->name('reservationrating.employeerating');
    Route::Resource('contacts', ContactController::class);
    Route::get('reservationemployees/index_team', [ReservationEmployeeController::class,'index_team'])->name('reservation.teamheader');
    Route::post('reservationemployees/index_team', [ReservationEmployeeController::class,'store_team'])->name('reservation.store_teamheader');
    Route::get('reservationemployees/index_team_layanan', [ReservationEmployeeController::class,'index_team_layanan'])->name('reservation.teamlayanan');
    Route::post('reservationemployees/index_team_layanan', [ReservationEmployeeController::class,'store_team_layanan'])->name('reservation.store_teamlayanan');
    Route::Resource('reservationemployees', ReservationEmployeeController::class);
    Route::Resource('reservationemployeedayoff', ReservationDayOffBreakController::class);
    Route::post('reservationemployeebreak', [ReservationDayOffBreakController::class, 'store_break'])->name('reservationemployeebreak.store_break');
    Route::patch('reservationemployee_cancel/{id}', [ReservationDayOffBreakController::class, 'cancel_dayoff'])->name('reservationemployee_cancel.cancel_dayoff');
    Route::get('/reservationprofile', [ReservationController::class, 'edit'])->name('reservationprofile.edit');
    Route::patch('/reservationprofile', [ReservationController::class, 'update'])->name('reservationprofile.update');
    Route::delete('/reservationprofile', [ReservationController::class, 'destroy'])->name('reservationprofile.destroy');
    Route::get('/myreservations', [ReservationController::class, 'myreservations'])->name('reservation.myreservations');
    Route::get('/myteaminvitations', [ReservationController::class, 'myteaminvitations'])->name('reservation.myteaminvitations');
    // Route::put('/acceptinvitation/{id}', [ReservationController::class, 'acceptinvitation'])->name('reservation.acceptinvitation');
    Route::get('/myemployeerequestoff', [ReservationController::class, 'myemployeerequestoff'])->name('reservation.myemployeerequestoff');
    // Route::post('/reservations/setbreaktime', [ReservationController::class, 'setbreaktime'])->name('reservation.setbreaktime');
    Route::get('/reservations/myemployeebreaksetting', [ReservationController::class, 'myemployeebreaksetting'])->name('reservation.myemployeebreaksetting');
    Route::post('/reservations/storesetbreaktime', [ReservationController::class, 'storesetbreaktime'])->name('reservation.storesetbreaktime');
    Route::get('/reservations/mycustomers', [ReservationController::class, 'mycustomers'])->name('reservation.mycustomers');
    // Route::get('/reservations/myemployees', [ReservationController::class, 'myemployees'])->name('reservation.myemployees');
    Route::get('/reservations/mycompanycustomers', [ReservationController::class, 'mycompanycustomers'])->name('reservation.mycompanycustomers');
    Route::get('/reservations/mycompanycomplaintcustomers', [ReservationController::class, 'mycompanycomplaintcustomers'])->name('reservation.mycompanycomplaintcustomers');
    Route::get('/reservations/mycounters', [ReservationController::class, 'mycounters'])->name('reservation.mycounters');
    Route::put('/startservice/{id}/edit', [ReservationController::class, 'startservice'])->name('reservation.startservice');
    Route::put('/nopunishment/{id}/edit', [ReservationController::class, 'nopunishment'])->name('reservation.nopunishment');
    Route::put('/punishmentreservation/{id}/edit', [ReservationController::class, 'punishmentreservation'])->name('reservation.punishmentreservation');
    Route::put('/finishservice/{id}/edit', [ReservationController::class, 'finishservice'])->name('reservation.finishservice');
    Route::put('/declineanswer/{id}/edit', [ReservationController::class, 'declineanswer'])->name('reservation.declineanswer');
    Route::put('/approvedanswer/{id}/edit', [ReservationController::class, 'approvedanswer'])->name('reservation.approvedanswer');
    Route::put('/requestapproved/{id}/edit', [ReservationController::class, 'requestapproved'])->name('reservation.requestapproved');
    Route::put('/cancelreservation/{id}/edit', [ReservationController::class, 'cancelreservation'])->name('reservation.cancelreservation');
    Route::put('/complaintreservation/{id}/edit', [ReservationController::class, 'complaintreservation'])->name('reservation.complaintreservation');
    Route::put('/finishcustomer/{id}/edit', [ReservationController::class, 'finishcustomer'])->name('reservation.finishcustomer');
    Route::put('/updatejoinas/{id}/edit', [ReservationController::class, 'updatejoinas'])->name('reservation.updatejoinas');
    Route::post('/daftarcounter', [ReservationController::class, 'daftarcounter'])->name('reservation.daftarcounter');
    Route::patch('/joincounter/{slug}', [ReservationController::class, 'joincounter'])->name('reservation.joincounter');
    Route::post('/selectemployee/{id}/{slug}', [ReservationEmployeeController::class, 'selectemployee'])->name('reservation.selectemployee');
    Route::post('/maketeam/{slug}', [ReservationController::class, 'maketeam'])->name('reservation.maketeam');

    Route::put('/acceptdayoff/{id}/edit', [ReservationEmployeeController::class, 'acceptdayoff'])->name('reservation.acceptdayoff');
    Route::put('/acceptinvitation/{id}/edit', [ReservationEmployeeController::class, 'acceptinvitation'])->name('reservation.acceptinvitation');
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

// Chat
Route::get('/chat/{user:username}', [ChatController::class, 'show'])->name('chats.show');
Route::post('/chat/{user:username}', [ChatController::class, 'store'])->name('chats.store');
Route::get('/chat', [ChatController::class, 'index'])->name('chats.index');
// End Chat

// Permissions
// Route::prefix('role-and-permission')->namespace('Permissions')->group(function () {
//     Route::get('permission-to-role', [RolePermissionController::class, 'index'])->name('assign.role.index');
//     Route::post('permission-to-role', [RolePermissionController::class, 'store']);
//     Route::get('permission-to-role/{role}/edit', [RolePermissionController::class, 'edit'])->name('assign.role.edit');
//     Route::put('permission-to-role/{role}/edit', [RolePermissionController::class, 'update']);
//     //User
//     Route::get('role-to-user', [UserRoleController::class, 'index'])->name('assign.user.index');
//     Route::post('role-to-user', [UserRoleController::class, 'store']);
//     Route::get('role-to-user/{user}/edit', [UserRoleController::class, 'edit'])->name('assign.user.edit');
//     Route::put('role-to-user/{user}/edit', [UserRoleController::class, 'update']);

//     // Route::prefix('roles')->group(function () {
//     //     Route::get('', [RoleController::class, 'index'])->name('roles.index');
//     //     Route::post('store', [RoleController::class, 'store'])->name('roles.store');
//     //     Route::get('{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
//     //     Route::put('{role}/edit', [RoleController::class, 'update'])->name('roles.update');
//     //     Route::delete('{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
//     // });

//     // Route::prefix('permissions')->group(function () {
//     //     Route::get('', [PermissionController::class, 'index'])->name('permissions.index');
//     //     Route::post('store', [PermissionController::class, 'store'])->name('permissions.store');
//     //     Route::get('{permission}/edit', [PermissionController::class, 'edit'])->name('permissions.edit');
//     //     Route::put('{permission}/edit', [PermissionController::class, 'update'])->name('permissions.update');
//     //     Route::delete('{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');
//     // });
// });


//Public List
// Plans
Route::get('public/plans/list', [PlanController::class, 'list'])->name('plan.list');
Route::get('public/plans/{plan}', [PlanController::class, 'show'])->name('plans.show');
Route::get('public/planportofolios/{plans}', [PlanPortofolioController::class, 'show'])->name('planportofolios.show');
// End Plans

// Fundings
// Route::Resource('fundings', FundingController::class)->only('show');
Route::get('public/fundings/list', [FundingController::class, 'list'])->name('funding.list');
// End Fundings
//End Public List
// Plans
Route::get('public/projects/list', [ProjectController::class, 'list'])->name('project.list');
Route::get('public/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
//  Route::get('public/planportofolios/{plans}', [PlanPortofolioController::class,'show'])->name('planportofolios.show');
// End Plans

// Reservation
Route::get('public/reservations/{reservationCompany}/{id}/change', [ReservationController::class, 'change'])->name('reservations.change'); //Ubah Layanan
Route::put('public/reservations/{reservationCompany}/{id}/change', [ReservationController::class, 'change'])->name('reservations.change'); //Ubah Layanan
Route::get('public/reservations/{reservationCompany}', [ReservationController::class, 'show'])->name('reservations.show');

Route::get('public/reservationCounters/{reservationCounter}', [ReservationCounterController::class, 'settingteam'])->name('reservationCounters.settingteam');

Route::middleware('auth', 'verified')->group(function () {
    Route::post('public/reservationCounters', [ReservationController::class, 'store'])->name('reservationCounters.storecustomer');
    Route::get('public/reservationCounters/{reservationCompany}/{reservationCounter}/car', [ReservationCounterController::class, 'show_car'])->name('reservationCounters.show_car');
    Route::post('public/reservationCounters/{reservationCompany}/{reservationCounter}/{id}/change', [ReservationController::class, 'storechange'])->name('reservationCounters.storechangecustomer');
    Route::get('public/reservationCounters/{reservationCompany}/{reservationCounter}', [ReservationCounterController::class, 'show'])->name('reservationCounters.show');
    Route::get('public/reservationCounters/{reservationCompany}/{reservationCounter}/{id}/change', [ReservationCounterController::class, 'change'])->name('reservationCounters.change');

    Route::put('reservationCounters/{id}/set_cars', [ReservationCounterController::class, 'update_set_cars'])->name('reservationCounters.update_set_cars');
    
    Route::resource('userBanks', UserBankController::class);
    Route::resource('reservationQuestions', ReservationCarQuestionController::class);
    Route::resource('reservationRatingCategories', ReservationRatingCategoryController::class);
    Route::resource('reservationCarCategories', ReservationCarCategoryController::class);
});


//  Route::get('public/reservationCounters/{reservationCompany}/{reservationCounter}', [ReservationCounterController::class,'show'])->name('reservationCounters.show');
//  Route::get('public/reservations/{reservationCompany}/{reservationCounter}', [ReservationController::class,'show'])->name('reservations.show');
//End Reservation


//Alamat
Route::get('provinces', [DependantDropdownController::class, 'provinces'])->name('provinces');
Route::get('cities', [DependantDropdownController::class, 'cities'])->name('cities');
Route::get('districts', [DependantDropdownController::class, 'districts'])->name('districts');
Route::get('villages', [DependantDropdownController::class, 'villages'])->name('villages');
//End Alamat


Route::get('toko/products/table', [ProductController::class, 'table'])->name('toko.products.table');
Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/homekonstruksi', [HomeController::class, 'homekonstruksi'])->name('homekonstruksi');
Route::get('/homereservasi', [HomeController::class, 'homereservasi'])->name('homereservasi');
Route::get('toko/products/me', [ProductController::class, 'mine'])->middleware('auth')->name('products.mine');
Route::resource('toko/products', ProductController::class);


Route::group(['middleware' => ['permission:lihat menu admin saldo']], function () {
    Route::patch('admindeposit/{id}/confirmed', [DepositAdminController::class, 'confirmed'])->name('admindeposit.confirmed');
    Route::patch('admindeposit/{id}/decline', [DepositAdminController::class, 'decline'])->name('admindeposit.decline');
    Route::patch('adminwithdraw/{id}/confirmed', [WithdrawAdminController::class, 'confirmed'])->name('adminwithdraw.confirmed');
    Route::patch('adminwithdraw/{id}/decline', [WithdrawAdminController::class, 'decline'])->name('adminwithdraw.decline');
    Route::Resource('admindeposits', DepositAdminController::class);
    Route::Resource('adminwithdraws', WithdrawAdminController::class);
    Route::Resource('adminspendings', SpendingAdminController::class);
});

Route::group(['middleware' => ['permission:lihat menu owner reservasi']], function () {
    Route::patch('owneradmindeposits/{id}/confirmed', [WithdrawOwnerController::class, 'confirmed'])->name('owneradmindeposits.confirmed');
    Route::patch('owneradmindeposits/{id}/decline', [WithdrawOwnerController::class, 'decline'])->name('owneradmindeposits.decline');
    Route::put('reservation/declinedayoff/{id}/decline', [ReservationEmployeeController::class, 'declinedayoff'])->name('reservation.declinedayoff');
    Route::put('reservation/makecashier/{id}/update', [ReservationEmployeeController::class, 'makecashier'])->name('reservation.makecashier');
    Route::Resource('owneradmindeposits', WithdrawOwnerController::class);
});

Route::group(['middleware' => ['permission:lihat menu kasir reservasi']], function () {
    Route::get('/companychart', [ChartController::class, 'index'])->name('company.chart');
    Route::get('company/summary', [WalletHistoryController::class, 'companysummary'])->name('company.summary');
});

Route::group(['middleware' => ['permission:lihat menu pekerja reservasi']], function () {
    Route::get('/employeechart', [ChartController::class, 'employeechart'])->name('employee.chart');
    Route::get('employee/summary', [WalletHistoryController::class, 'employeesummary'])->name('employee.summary');
});

Route::get('/user/list', [UserController::class, 'list'])->name('user.list');
Route::get('/user/detail/{username}', [UserController::class, 'detail'])->name('user.detail');

Route::group(['middleware' => ['permission:atur hak akses user']], function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('permissions', PermissionController::class);
});

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('toko/history', HistoryController::class)->name('tokohistory');
    Route::get('/profiles', [UserController::class, 'profile'])->name('users.profiles');

    Route::put('/notification/readMessage/{id}', [NotificationController::class, 'readMessage'])->name('notification.readMessage');
    Route::get('/notification/readAllMessage', [NotificationController::class, 'readAllMessage'])->name('notification.readAllMessage');
    // Plans
    Route::Resource('adminplans', PlanAdminController::class);
    Route::patch('/planadmin/confirmed/{id}', [PlanAdminController::class, 'confirmed'])->name('planadmin.confirmed');
    Route::post('/planadmin/rejected/{id}', [PlanAdminController::class, 'rejected'])->name('planadmin.rejected');
    Route::Resource('plans', PlanController::class)->except('show');
    Route::delete('/image/destroy/{id}', [UploadController::class, 'destroyimage'])->name('media.destroy');
    Route::Resource('planportofolios', PlanPortofolioController::class)->except('show');
    // -- Tahapan Perencanaan
    Route::get('plan/tahapan/{plan}', [PlanController::class, 'tahapan'])->name('plan.tahapan');
    Route::get('bidplan/tahapan/{plan}', [BidPlanController::class, 'tahapan'])->name('bidplan.tahapan');

    Route::get('plan/hasil/{plan}', [PlanController::class, 'hasil'])->name('plan.hasil');
    Route::get('bidplan/hasil/{plan}', [BidPlanController::class, 'hasil'])->name('bidplan.hasil');

    //Hasil Perencanaan
    Route::get('plan/uploadresult/{plan}', [PlanResultController::class, 'UploadResult'])->name('plan.uploadhasil');
    Route::post('plan/uploadresult/{plan}', [PlanResultController::class, 'StoreUploadResult'])->name('plan.simpanhasil');
    Route::get('plan/showresult/{plan}', [PlanResultController::class, 'ShowResult'])->name('plan.lihathasil');
    Route::put('plan/finishresult/{planresult}', [PlanResultController::class, 'FinishResult'])->name('planresult.finish');
    //End Hasil Perencanaan

    //Revisi
    Route::get('plan/showrevision/{plan}', [PlanRevisionController::class, 'ShowRevision'])->name('plan.lihatrevisi');
    Route::post('plan/uploadrevision/{planrevision}', [PlanRevisionController::class, 'StoreRevision'])->name('plan.simpanrevisi');
    //End Revisi

    //Revisi Result
    Route::post('plan/uploadrevisionresult/{planrevisionresult}', [PlanRevisionResultController::class, 'StoreRevisionResult'])->name('plan.simpanrevisionresult');
    //End Revisi Result




    // -- End Tahapan Perencanaan
    Route::Resource('planbids', PlanBidController::class);
    Route::get('bidplans/{id}', [BidPlanController::class, 'listpenawar'])->name('bidplans.listpenawar');
    Route::get('bidplans/selectwinnerplan/{id}', [BidPlanController::class, 'selectwinnerplan'])->name('bidplans.selectwinnerplan');
    Route::Resource('bidplans', PlanBidController::class);
    // End Plans

    // Plans
    Route::get('pilar/choose', [ChooseController::class, 'pilar'])->name('choose.pilar');
    Route::get('fundings/choose', [FundingController::class, 'choose'])->name('fundings.choose');
    Route::get('plans/choose', [PlanController::class, 'choose'])->name('plans.choose');
    Route::get('projects/choose', [ProjectController::class, 'choose'])->name('projects.choose');
    Route::Resource('projects', ProjectController::class);

    // End Plans

    // Reservasi
    Route::Resource('reservationCounters', ReservationCounterController::class)->except('show');

    // End Reservasi

    // Fundings
    Route::Resource('fundings', FundingController::class);
    // End Fundings

    // Wallets

    Route::Resource('wallets', WalletController::class);
    Route::Resource('deposits', DepositController::class);
    Route::Resource('withdraws', WithdrawController::class);
    Route::Resource('histories', WalletHistoryController::class);
    Route::get('main/histories', [WalletHistoryController::class, 'main'])->name('main.histories');
    Route::get('topup/histories', [WalletHistoryController::class, 'topup'])->name('topup.histories');
    Route::get('withdraw/histories', [WalletHistoryController::class, 'withdraw'])->name('withdraw.histories');
    Route::get('bagihasil/histories', [WalletHistoryController::class, 'bagihasil'])->name('bagihasil.histories');
    Route::get('pembayaran/histories', [WalletHistoryController::class, 'pembayaran'])->name('pembayaran.histories');
    Route::get('bonus/histories', [WalletHistoryController::class, 'bonus'])->name('bonus.histories');
    Route::get('deposit/histories', [WalletHistoryController::class, 'deposit'])->name('deposit.histories');
    Route::get('deposit/summary', [WalletHistoryController::class, 'summary'])->name('deposit.summary');

    Route::get('tawarin/summary', [WalletHistoryController::class, 'summarytawarin'])->name('tawarin.summary');
    Route::get('topup/summary', [WalletHistoryController::class, 'summarytopup'])->name('topup.summary');
    Route::get('wallet/transfers', [TransferController::class, 'transfer'])->name('wallet.transfer');
    Route::post('wallet/transfers', [TransferController::class, 'transferstore'])->name('wallet.transferstore');
    Route::post('wallet/transferdepositstore', [TransferController::class, 'transferdepositstore'])->name('wallet.transferdepositstore');
    Route::get('plan/deposit/{plan}', [PlanDepositController::class, 'plandeposit'])->name('plan.deposit');
    Route::post('plan/deposit/{plan}', [PlanDepositController::class, 'plandepositstore'])->name('plan.depositstore');
    // End Wallets

    //Notifications
    Route::resource('notifications', NotificationController::class);
    //End Notifications


    //Portofolio
    Route::Resource('portofolios', PortofolioController::class)->except('show');
    //End Portofolio
});

Route::controller(InvoiceController::class)->middleware('auth', 'verified')->group(function () {
    Route::post('toko/invoice', 'store');
    Route::get('toko/invoice/{invoice:order_id}', 'show')->name('tokoinvoice.show');
});

Route::controller(CartController::class)->middleware('auth', 'verified')->group(function () {
    Route::get('toko/carts', 'index');
    Route::delete('toko/carts/delete/{cart}', 'destroy')->name('tokocart.delete');
    Route::post('toko/carts/add-to-cart/{product:slug}',  'store')->name('tokocart.store');
});

Route::post('api/notification/handling', [PaymentNotificationController::class, 'hit']);


require __DIR__ . '/auth.php';
