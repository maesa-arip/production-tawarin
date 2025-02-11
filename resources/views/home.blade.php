@extends('layouts.app')
@section('title', 'Home')
@section('content')
    <section class="make_donation section_gap">
        <div class="container">
            <div class="row justify-content-start section-title-wrap">
                <div class="col-lg-12">
                    <h1>Make a Donation Today</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis nesciunt nam
                        quod nemo eum, vitae architecto distinctio reiciendis?
                    </p>
                </div>
            </div>
            <div class="donate_now_wrapper">
                <form id="donation" onsubmit="return submitForm();">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="donate_box mb-30">
                                <div class="form-group">
                                    <label>Nama</label>
                                    <input id="donor_name" name="donor_name" type="text" placeholder="Nama"
                                        class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="donate_box mb-30">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input id="donor_email" name="donor_email" type="email" placeholder="Email"
                                        class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="donate_box mb-30">
                                <div class="form-group">
                                    <label>Jenis Donasi</label>
                                    <select id="donation_type" name="donation_type" class="form-control" required>
                                        <option value=""></option>
                                        <option value="infak_kemanusiaan">Infak Kemanusiaan</option>
                                        <option value="infak_pendidikan">Infak Pendidikan</option>
                                        <option value="infak_kesehatan">Infak Kesehatan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="donate_box">
                                <div class="form-group">
                                    <input id="amount" name="amount" type="number" placeholder="Nominal Donasi"
                                        class="form-control" min="10000" max="999999999" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="donate_box">
                                <div class="form-group">
                                    <textarea id="note" name="note" type="text" placeholder="Pesan" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="donate_box">
                                <button type="submit" class="main_btn w-100">donate now</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection
@section('js')
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="{{ config('services.midtrans.clientKey') }}"></script>
    <script>
        function submitForm() {
            $.post("{{ '/donation/store' }}", {
                    _method: 'POST',
                    _token: '{{ csrf_token() }}',
                    amount: $('input#amount').val(),
                    note: $('textarea#note').val(),
                    donation_type: $('select#donation_type').val(),
                    donor_name: $('input#donor_name').val(),
                    donor_email: $('input#donor_email').val(),
                },
                function(data, status) {
                    if (data.status == 'error') {
                        alert(data.message);
                    } else {
                        snap.pay(data.snap_token, {
                            // Optional
                            onSuccess: function(result) {
                                // alert("Payment successful!");
                                $.post("{{ '/notification/handler' }}", {
                                        _token: '{{ csrf_token() }}', // Tambahkan CSRF token
                                        ...result // Pastikan result adalah objek yang valid
                                    },
                                    function(response) {
                                        console.log("Notification handler executed:", response);
                                    }
                                );
                                // console.log("success");
                            },
                            // Optional
                            onPending: function(result) {
                                console.log("pending");

                            },
                            // Optional
                            onError: function(result) {
                                location.reload();
                            }
                        });
                    }
                });
            return false;
        }
    </script>
@endsection
