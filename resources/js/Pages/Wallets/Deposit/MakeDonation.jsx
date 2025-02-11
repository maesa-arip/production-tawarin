import { usePage } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';


export default function MakeDonation() {
    const { props } = usePage();
    const [formData, setFormData] = useState({
        donor_name: '',
        donor_email: '',
        donation_type: '',
        amount: '',
        note: ''
    });

    useEffect(() => {
        // Load Midtrans Snap script
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.dataset.clientKey = props.midtransClientKey;
        script.async = true;
        
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(route('donation.store'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.status === 'error') {
                alert(data.message);
                return;
            }

            if (window.snap) {
                window.snap.pay(data.snap_token, {
                    onSuccess: () => {
                        router.reload();
                    },
                    onPending: () => {
                        console.log('Payment pending');
                    },
                    onError: () => {
                        router.reload();
                    }
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during donation submission.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="make_donation section_gap">
            <div className="container">
                <div className="row justify-content-start section-title-wrap">
                    <div className="col-lg-12">
                        <h1>Make a Donation Today</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis nesciunt nam
                            quod nemo eum, vitae architecto distinctio reiciendis?
                        </p>
                    </div>
                </div>
                <div className="donate_now_wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="donate_box mb-30">
                                    <div className="form-group">
                                        <label>Nama</label>
                                        <input
                                            name="donor_name"
                                            type="text"
                                            placeholder="Nama"
                                            className="form-control"
                                            value={formData.donor_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="donate_box mb-30">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            name="donor_email"
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
                                            value={formData.donor_email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="donate_box mb-30">
                                    <div className="form-group">
                                        <label>Jenis Donasi</label>
                                        <select
                                            name="donation_type"
                                            className="form-control"
                                            value={formData.donation_type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value=""></option>
                                            <option value="infak_kemanusiaan">Infak Kemanusiaan</option>
                                            <option value="infak_pendidikan">Infak Pendidikan</option>
                                            <option value="infak_kesehatan">Infak Kesehatan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="donate_box">
                                    <div className="form-group">
                                        <input
                                            name="amount"
                                            type="number"
                                            placeholder="Nominal Donasi"
                                            className="form-control"
                                            min="10000"
                                            max="999999999"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="donate_box">
                                    <div className="form-group">
                                        <textarea
                                            name="note"
                                            type="text"
                                            placeholder="Pesan"
                                            className="form-control"
                                            value={formData.note}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="donate_box">
                                    <button type="submit" className="main_btn w-100">
                                        donate now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}