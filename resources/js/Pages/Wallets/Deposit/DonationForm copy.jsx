import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import App from "@/Layouts/App";

const DonationForm = ({ midtransClientKey }) => {
    const [formData, setFormData] = useState({
        donor_name: "",
        donor_email: "",
        donation_type: "",
        amount: "",
        note: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        // Load Midtrans Snap.js
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", import.meta.env.VITE_MIDTRANS_CLIENT_KEY);
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/donation/store", formData);
            if (response.data.status === "error") {
                alert(response.data.message);
            } else {
                window.snap.pay(response.data.snap_token, {
                    onSuccess: async (result) => {
                        await axios.post("/notification/handler", result);
                    },
                    onPending: (result) => {
                        console.log("Pending payment", result);
                    },
                    onError: () => {
                        window.location.reload();
                    },
                });
            }
        } catch (error) {
            console.error("Error submitting donation:", error);
        }
    };
    

    return (
        <Container>
        <section className="make_donation section_gap">
            <div className="container">
                <div className="row justify-content-start section-title-wrap">
                    <div className="col-lg-12">
                        <h1>Make a Donation Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="donate_now_wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4">
                                <input
                                    type="text"
                                    name="donor_name"
                                    placeholder="Nama"
                                    className="form-control"
                                    value={formData.donor_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-lg-4">
                                <input
                                    type="email"
                                    name="donor_email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={formData.donor_email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-lg-4">
                                <select
                                    name="donation_type"
                                    className="form-control"
                                    value={formData.donation_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Pilih Jenis Donasi</option>
                                    <option value="infak_kemanusiaan">Infak Kemanusiaan</option>
                                    <option value="infak_pendidikan">Infak Pendidikan</option>
                                    <option value="infak_kesehatan">Infak Kesehatan</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="Nominal Donasi"
                                    className="form-control"
                                    min="10000"
                                    max="999999999"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-lg-4">
                                <textarea
                                    name="note"
                                    placeholder="Pesan"
                                    className="form-control"
                                    value={formData.note}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="col-lg-4">
                                <button type="submit" className="main_btn w-100">Donate Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={midtransClientKey}></script>
        </section>
        </Container>
    );
};

export default DonationForm;

DonationForm.layout = (page) => <App children={page}></App>;
