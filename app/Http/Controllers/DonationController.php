<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Snap;
use Midtrans\Notification;

class DonationController extends Controller
{
    /**
     * Make request global.
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    /**
     * Class constructor.
     *
     * @param \Illuminate\Http\Request $request User Request
     *
     * @return void
     */
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
     * Show index page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $data['donations'] = Donation::orderBy('id', 'desc')->paginate(8);
        
        // return view('home', $data);
        return inertia('Wallets/Deposit/DonationForm',$data );
    }

    /**
     * Submit donation.
     *
     * @return array
     */
    // public function submitDonation()
    // {
    //   // return request()->all();
    //     $validator = \Validator::make(request()->all(), [
    //         'donor_name'  => 'required',
    //         'donor_email' => 'required|email',
    //         'amount'      => 'required|numeric'
    //     ]);

    //     if ($validator->fails()) {
    //         return [
    //           'status'  => 'error',
    //           'message' => $validator->errors()->first()
    //         ];
    //     }

    //     \DB::transaction(function(){
    //         // Save donasi ke database
    //         $donation = Donation::create([
    //             'donor_name' => $this->request->donor_name,
    //             'donor_email' => $this->request->donor_email,
    //             'donation_type' => $this->request->donation_type,
    //             'amount' => floatval($this->request->amount),
    //             'note' => $this->request->note,
    //         ]);

    //         // Buat transaksi ke midtrans kemudian save snap tokennya.
    //         $payload = [
    //             'transaction_details' => [
    //                 'order_id'      => $donation->id,
    //                 'gross_amount'  => $donation->amount,
    //             ],
    //             'customer_details' => [
    //                 'first_name'    => $donation->donor_name,
    //                 'email'         => $donation->donor_email,
    //                 // 'phone'         => '08888888888',
    //                 // 'address'       => '',
    //             ],
    //             'item_details' => [
    //                 [
    //                     'id'       => $donation->donation_type,
    //                     'price'    => $donation->amount,
    //                     'quantity' => 1,
    //                     'name'     => ucwords(str_replace('_', ' ', $donation->donation_type))
    //                 ]
    //             ]
    //         ];
            
    //         $snapToken = Snap::getSnapToken($payload);
    //         $donation->snap_token = $snapToken;
    //         $donation->save();
            
    //         // Beri response snap token
    //         // $this->response['snap_token'] = $snapToken;
    //     });

    //     // return response()->json($this->response);
    //     // return response()->json([
    //     //     'snap_token' => $snapToken
    //     // ]);
    //     // $Snap = response()->json($this->response['snap_token']);
    //     return Inertia::location('https://app.sandbox.midtrans.com/snap/v2/vtweb/' . $this->response['snap_token']);
    // }

    public function submitDonation(Request $request)
{
    // return $request->all();
    // Validasi input
    $validator = Validator::make($request->all(), [
        'donor_name'  => 'required',
        'donor_email' => 'required|email',
        'amount'      => 'required|numeric'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status'  => 'error',
            'message' => $validator->errors()->first()
        ]);
    }

    try {
        $snapToken = DB::transaction(function () use ($request) {
            // Simpan donasi ke database
            $donation = Donation::create([
                'donor_name'    => $request->donor_name,
                'donor_email'   => $request->donor_email,
                'donation_type' => $request->donation_type,
                'amount'        => floatval($request->amount),
                'note'          => $request->note,
            ]);

            // Buat transaksi ke Midtrans
            $payload = [
                'transaction_details' => [
                    'order_id'      => $donation->id,
                    'gross_amount'  => $donation->amount,
                ],
                'customer_details' => [
                    'first_name'    => $donation->donor_name,
                    'email'         => $donation->donor_email,
                ],
                'item_details' => [
                    [
                        'id'       => $donation->donation_type,
                        'price'    => $donation->amount,
                        'quantity' => 1,
                        'name'     => ucwords(str_replace('_', ' ', $donation->donation_type))
                    ]
                ]
            ];

            $snapToken = Snap::getSnapToken($payload);
            $donation->snap_token = $snapToken;
            $donation->save();

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

    /**
     * Midtrans notification handler.
     *
     * @param Request $request
     * 
     * @return void
     */
    public function notificationHandler(Request $request)
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
          $donation = Donation::findOrFail($orderId);

          if ($transaction == 'capture') {

            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {

              if($fraud == 'challenge') {
                // TODO set payment status in merchant's database to 'Challenge by FDS'
                // TODO merchant should decide whether this transaction is authorized or not in MAP
                // $donation->addUpdate("Transaction order_id: " . $orderId ." is challenged by FDS");
                $donation->setPending();
              } else {
                // TODO set payment status in merchant's database to 'Success'
                // $donation->addUpdate("Transaction order_id: " . $orderId ." successfully captured using " . $type);
                $donation->setSuccess();
              }

            }

          } elseif ($transaction == 'settlement') {

            // TODO set payment status in merchant's database to 'Settlement'
            // $donation->addUpdate("Transaction order_id: " . $orderId ." successfully transfered using " . $type);
            $donation->setSuccess();
            // return "worksss";
            // dd("works");
            $user = auth()->user();
            $deposit = $user->deposit($notif['gross_amount'], ['message' => 'Deposit Anda sudah diterima otomatis oleh Admin', 'type' => 'accept'], true);
          } elseif($transaction == 'pending'){

            // TODO set payment status in merchant's database to 'Pending'
            // $donation->addUpdate("Waiting customer to finish transaction order_id: " . $orderId . " using " . $type);
            $donation->setPending();

          } elseif ($transaction == 'deny') {

            // TODO set payment status in merchant's database to 'Failed'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is Failed.");
            $donation->setFailed();

          } elseif ($transaction == 'expire') {

            // TODO set payment status in merchant's database to 'expire'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is expired.");
            $donation->setExpired();

          } elseif ($transaction == 'cancel') {

            // TODO set payment status in merchant's database to 'Failed'
            // $donation->addUpdate("Payment using " . $type . " for transaction order_id: " . $orderId . " is canceled.");
            $donation->setFailed();

          }

    }
}