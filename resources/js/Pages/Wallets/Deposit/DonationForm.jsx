import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import App from "@/Layouts/App";
import Container from "@/Components/Container";
import { Terbilang } from "@/Libs/helper";

const DonationForm = ({ midtransClientKey }) => {
    const [formData, setFormData] = useState({
        // donor_name: "",
        // donor_email: "",
        // donation_type: "",
        amount: "",
        // note: "",
    });
    const [price, setPrice] = useState(0);
    const [grossAmount, setGrossAmount] = useState(0);
    const [biayaAdmin, setBiayaAdmin] = useState(0);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // setPrice(e.target.value);
        setBiayaAdmin(Math.ceil((e.target.value * 1) / 100));
        setGrossAmount(Math.ceil((e.target.value * (100 + 1)) / 100));
        // setFormData({ ...formData, ['gross_amount']: grossAmount });
        // setFormData({ ...formData, ['biaya_admin']: biayaAdmin });
    };
    useEffect(() => {
        // Load Midtrans Snap.js
        const script = document.createElement("script");
        script.src = "https://app.midtrans.com/snap/snap.js";
        script.setAttribute(
            "data-client-key",
            import.meta.env.VITE_MIDTRANS_CLIENT_KEY
        );
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/deposit/store_auto", formData);
            if (response.data.status === "error") {
                alert(response.data.message);
            } else {
                window.snap.pay(response.data.snap_token, {
                    // onSuccess: async (result) => {
                    //     await axios.post("/sanbox/deposit/notification/handler", result);
                    // },
                    onSuccess: async (result) => {
                        // console.log("Transaction success", result);
                        // console.log(result)
                        // await axios.post(
                        //     "/deposit/notification/handler",
                        //     result
                        // );
                        window.location.href = "/wallets"; // Redirect setelah sukses
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
            console.error("Error Top Up:", error);
        }
    };
    const formatRupiahPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(formData.price);
    const formatRupiahBiayaAdmin = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(biayaAdmin);
    const formatRupiahGrossAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(grossAmount);
    // console.log(formData)
    // console.log(grossAmount)
    // console.log(biayaAdmin)
    return (
        <Container>
            <section className="make_donation section_gap">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Data Top Up
                            </h3>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <form onSubmit={handleSubmit}>
                                <div className="col-span-12 px-3 py-4 m-4 text-sm text-gray-500 rounded shadow md:col-span-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <circle cx={12} cy={12} r={9} />
                                        <line
                                            x1={12}
                                            y1={8}
                                            x2="12.01"
                                            y2={8}
                                        />
                                        <polyline points="11 12 12 12 12 16 13 16" />
                                    </svg>
                                    Setiap transaksi top-up akan dikenakan biaya
                                    administrasi sebesar 1% dari jumlah top-up.
                                </div>
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="amount"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Jumlah Top Up
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                min="10000"
                                                max="999999999"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                                // onChange={
                                                //     onChangeAmountHandler
                                                // }
                                                onWheel={(e) => e.target.blur()}
                                                autoComplete="off"
                                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />

                                            <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                {formData.price &&
                                                    formatRupiahPrice}{" "}
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                    {formData.price &&
                                                        "(" +
                                                            Terbilang(
                                                                formData.price
                                                            ) +
                                                            " Rupiah)"}
                                                </span>
                                            </div>
                                            <div className="p-2 mt-4 border rounded">
                                                <label
                                                    htmlFor="amount"
                                                    className="block mt-2 text-sm font-medium text-gray-700"
                                                >
                                                    Biaya Admin
                                                </label>
                                                <input
                                                    type="number"
                                                    name="biaya_admin"
                                                    id="biaya_admin"
                                                    min="10000"
                                                    max="999999999"
                                                    value={biayaAdmin}
                                                    readOnly
                                                    // onChange={handleChange}
                                                    // required
                                                    // onChange={
                                                    //     onChangeAmountHandler
                                                    // }
                                                    // onWheel={(e) => e.target.blur()}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {biayaAdmin &&
                                                        formatRupiahBiayaAdmin}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {biayaAdmin &&
                                                            "(" +
                                                                Terbilang(
                                                                    biayaAdmin
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                                <label
                                                    htmlFor="amount"
                                                    className="block mt-2 text-sm font-medium text-gray-700"
                                                >
                                                    Total Bayar
                                                </label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    id="amount"
                                                    min="10000"
                                                    max="999999999"
                                                    value={grossAmount}
                                                    readOnly
                                                    // onChange={handleChange}
                                                    // required
                                                    // onChange={
                                                    //     onChangeAmountHandler
                                                    // }
                                                    // onWheel={(e) => e.target.blur()}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                {grossAmount &&
                                                    formatRupiahGrossAmount}{" "}
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                    {grossAmount &&
                                                        "(" +
                                                            Terbilang(
                                                                grossAmount
                                                            ) +
                                                            " Rupiah)"}
                                                </span>
                                            </div>
                                            </div>
                                            
                                            {/* {errors.amount && (
                                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                    {errors.amount}
                                                                </span>
                                                            )}
                                                            <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                                {amount &&
                                                                    formatRupiahAmount}{" "}
                                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                                    {amount &&
                                                                        "(" +
                                                                            Terbilang(
                                                                                amount
                                                                            ) +
                                                                            " Rupiah)"}
                                                                </span>
                                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 m-4 text-xs font-semibold tracking-wide tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-amber-500 hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-600 focus:outline-none false focus:ring-2 focus:ring-offset-2"
                                >
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row justify-content-start section-title-wrap">
                        <div className="col-lg-12">
                            <h1>Make a Donation Today</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
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
                                        <option value="">
                                            Pilih Jenis Donasi
                                        </option>
                                        <option value="infak_kemanusiaan">
                                            Infak Kemanusiaan
                                        </option>
                                        <option value="infak_pendidikan">
                                            Infak Pendidikan
                                        </option>
                                        <option value="infak_kesehatan">
                                            Infak Kesehatan
                                        </option>
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
                                    <button
                                        type="submit"
                                        className="main_btn w-100"
                                    >
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
                <script
                    src="https://app.midtrans.com/snap/snap.js"
                    data-client-key={midtransClientKey}
                ></script>
            </section>
        </Container>
    );
};

export default DonationForm;

DonationForm.layout = (page) => <App children={page}></App>;
