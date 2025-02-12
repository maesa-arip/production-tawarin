<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Wallet\DepositRequest;
use App\Models\Plan\Plan;
use App\Models\TemporaryFile;
use App\Models\User;
use App\Notifications\Wallet\UserDepositNotification;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Midtrans\Config;
use Midtrans\Snap;

class DepositController extends Controller
{
    protected $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
        // Set midtrans configuration
        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Wallets/Deposit/Create');
    }
    public function create_auto()
    {
        return inertia('Wallets/Deposit/DonationForm');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DepositRequest $request)
    {
        $user = auth()->user();
        $admin = User::find(1);
        // $deposit = $user->deposit($request->amount, null, false); 
        $currentTimestamp = Carbon::now()->toDateString();
        $exists = Transaction::where('payable_id', $user->id)
            ->where('amount', $request->amount)
            ->where('type', 'deposit')
            ->where('meta->type', '<>', 'decline')
            // ->whereJsonContains('meta->type','<>','decline')
            ->whereDate('created_at', $currentTimestamp)
            ->exists();
        // dd($exists);
        if ($exists) {
            //     Session::remove('folder');
            // Session::remove('filename');
            return redirect('wallets')->with([
                'type' => 'error',
                'message' => 'Top Up gagal, sudah pernah melakukan top up dengan nominal tersebut pada hari ini',
            ]);
        }
        if (!$exists) {
            $deposit = $user->deposit($request->amount, ['message' => 'Permintaan Deposit dari ' . $user->name, 'type' => 'request_deposit'], false);
            $temporaryFolder = Session::get('folder');
            $namefile = Session::get('filename');

            for ($i = 0; $i < count($temporaryFolder); $i++) {
                $temporary = TemporaryFile::where('folder', $temporaryFolder[$i])->where('filename', $namefile[$i])->first();
                if ($temporary) { //if exist
                    $deposit->addMedia(storage_path('app/public/files/tmp/' . $temporaryFolder[$i] . '/' . $namefile[$i]))
                        ->toMediaCollection('BuktiTransfer');
                    //hapus file and folder temporary
                    $path = storage_path() . '/app/files/tmp/' . $temporary->folder . '/' . $temporary->filename;
                    if (File::exists($path)) {
                        Storage::move('files/tmp/' . $temporary->folder . '/' . $temporary->filename, 'files/' . $temporary->folder . '/' . $temporary->filename);
                        File::delete($path);
                        rmdir(storage_path('app/files/tmp/' . $temporary->folder));
                        //delete record in temporary table
                        $temporary->delete();
                    }
                }
            }
            Session::remove('folder');
            Session::remove('filename');

            $admin->notify(new UserDepositNotification($deposit));
            Cache::forget('notifications_count');
            return redirect('wallets')->with([
                'type' => 'success',
                'message' => 'Top Up berhasil, menunggu konfirmasi admin',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function store_auto(Request $request)
    {
        // Validasi input

        // return $request->price;
        $validator = Validator::make($request->all(), [
            'price'      => 'required|numeric'
        ]);

        
        if ($validator->fails()) {
            return response()->json([
                'status'  => 'error',
                'message' => $validator->errors()->first()
            ]);
        }

        try {
            $snapToken = DB::transaction(function () use ($request) {
                $biayaAdmin = ceil($request->price * 1 / 100);
                $amount = ceil($request->price * 101 / 100);
                $user = User::findOrFail(auth()->user()->id);
                $deposit = $user->deposit($request->price, ['message' => 'Permintaan Deposit dari ' . $user->name, 'type' => 'request_deposit'], false);
                // Simpan donasi ke database
                // $donation = Donation::create([
                //     'donor_name'    => $request->donor_name,
                //     'donor_email'   => $request->donor_email,
                //     'donation_type' => $request->donation_type,
                //     'amount'        => floatval($request->amount),
                //     'note'          => $request->note,
                // ]);

                // Buat transaksi ke Midtrans
                $payload = [
                    'transaction_details' => [
                        'order_id'      => $deposit->id,
                        'gross_amount'  => floatval($amount),
                    ],
                    'customer_details' => [
                        'first_name'    => $user->name,
                        'email'         => $user->email,
                    ],
                    'item_details' => [
                        [
                            'id'       => $deposit->id,
                            'price'    => floatval($request->price),
                            'quantity' => 1,
                            'name'     => 'request_deposit'
                        ],
                        [
                            'id'       => $deposit->id,
                            'price'    => floatval($biayaAdmin),
                            'quantity' => 1,
                            'name'     => 'biaya_admin'
                        ]
                    ]
                ];

                $snapToken = Snap::getSnapToken($payload);
                $deposit->snap_token = $snapToken;
                $deposit->save();

                return $snapToken;
            });

            // return Inertia::location('https://app.sandbox.midtrans.com/snap/v2/vtweb/' . $snapToken);
            return response()->json([
                'status' => 'success',
                'snap_token' => $snapToken
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }
    public function notification(Request $request)
    {
        // return $request->all();
        $notif = $request->all();
        // return $notif;
        // return $notif['transaction_status'];
        // \Log::info('Midtrans Notification Received', $request->all());
        $transaction = $notif['transaction_status'];
        $type = $notif['payment_type'];
        $orderId = $notif['order_id'];
        $fraud = $notif['fraud_status'];
        $data = Transaction::findOrFail($orderId);
        //   $donation = Donation::findOrFail($orderId);

        if ($transaction == 'capture') {

            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {

                if ($fraud == 'challenge') {
                    // TODO set payment status in merchant's database to 'Challenge by FDS'
                    // TODO merchant should decide whether this transaction is authorized or not in MAP
                    // $donation->addUpdate("Transaction order_id: " . $orderId ." is challenged by FDS");
                    // $data->setPending();
                } else {
                    // TODO set payment status in merchant's database to 'Success'
                    // $donation->addUpdate("Transaction order_id: " . $orderId ." successfully captured using " . $type);
                    // $donation->setSuccess();
                    if ($data->payable_type == 'App\Models\User') {
                        $user = User::find($data->payable_id);
                    }
                    if ($data->payable_type == 'App\Models\Plan\Plan') {
                        $user = Plan::find($data->payable_id);
                    }
                    $data->meta = ['type' => 'accept', 'message' => 'Deposit Anda sudah diterima otomatis oleh Admin'];
                    $data->save();
                    $user->confirm($data);
                    // return redirect('wallets')->with([
                    //     'type' => 'success',
                    //     'message' => 'Top Up berhasil',
                    // ]);
                }
            }
        } elseif ($transaction == 'settlement') {

            // TODO set payment status in merchant's database to 'Settlement'
            // $donation->addUpdate("Transaction order_id: " . $orderId ." successfully transfered using " . $type);
            // $donation->setSuccess();
            // return "worksss";
            // dd("works");
            if ($data->payable_type == 'App\Models\User') {
                $user = User::find($data->payable_id);
            }
            if ($data->payable_type == 'App\Models\Plan\Plan') {
                $user = Plan::find($data->payable_id);
            }
            $data->meta = ['type' => 'accept', 'message' => 'Deposit Anda sudah diterima otomatis oleh Admin'];
            $data->save();
            $user->confirm($data);
            // return redirect('wallets')->with([
            //     'type' => 'success',
            //     'message' => 'Top Up berhasil',
            // ]);
        } elseif ($transaction == 'pending') {

            // TODO set payment status in merchant's database to 'Pending'
            // $donation->addUpdate("Waiting customer to finish transaction order_id: " . $orderId . " using " . $type);
            // $data->setPending();
        } elseif ($transaction == 'deny') {

            // TODO set payment status in merchant's database to 'Failed'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is Failed.");
            // $data->setFailed();
        } elseif ($transaction == 'expire') {

            // TODO set payment status in merchant's database to 'expire'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is expired.");
            // $data->setExpired();
        } elseif ($transaction == 'cancel') {

            // TODO set payment status in merchant's database to 'Failed'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is canceled.");
            // $data->setFailed();
        }
    }
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
