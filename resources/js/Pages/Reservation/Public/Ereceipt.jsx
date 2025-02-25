import { PhoneIcon } from "@heroicons/react/outline";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Ereceipt(props) {
    const invoice = props.invoice;
    console.log(invoice);
    return (
        <>
        <Head>
            <title>Struk Pembayaran</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />
        </Head>
            <div className="w-full p-6 space-y-6 shadow-lg bg-green-50 font-poppins ">
                <div className="space-y-2 text-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        {invoice.team.counter.company.name}
                    </h2>
                    <p className="flex items-center justify-center text-sm text-yellow-500">
                        <PhoneIcon className="w-5 h-5 mr-2" />{" "}
                        {invoice.team.counter.company.owner.phone}
                    </p>
                    <p className="text-sm text-yellow-500">
                        {invoice.team.counter.company.owner.email}
                    </p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <div className="grid grid-cols-2 text-sm gap-y-4">
                        <p>
                            <strong>No. Nota</strong>
                            <br />
                            {invoice.code}
                        </p>
                        <p>
                            <strong>Waktu</strong>
                            <br />
                            {invoice.date}
                        </p>
                        <p>
                            <strong>Pelanggan</strong>
                            <br />
                            #{invoice.plat}
                        </p>
                        <p>
                            <strong>Jenis Order</strong>
                            <br />
                            {invoice.team.counter.name}
                        </p>
                        <p>
                            <strong>Kasir</strong>
                            <br />
                            {invoice.team.name}
                        </p>
                        <p>
                            <strong>Order</strong>
                            <br />
                            {invoice.user.name}
                        </p>
                    </div>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h3 className="text-lg font-semibold leading-8">Detail Pesanan</h3>
                    <p className="text-sm leading-8">{invoice.user.name}</p>
                    <p className="text-sm leading-8">1 {invoice.team.counter.name} @ Rp {invoice.team.counter.price.toLocaleString()} / Unit</p>
                    <hr className="my-3 leading-8" />
                    <p className="flex justify-between text-sm leading-8">
                        <span>Subtotal 1 Produk:</span> <span>Rp {invoice.team.counter.price.toLocaleString()}</span>
                    </p>
                    <p className="flex justify-between text-sm leading-8">
                        <span>Pajak:</span> <span>Rp 0</span>
                    </p>
                    <p className="flex justify-between text-sm leading-8">
                        <span>Service Charge:</span> <span>Rp 0</span>
                    </p>
                    <hr className="my-3 leading-8" />
                    <p className="flex justify-between text-lg font-semibold leading-8">
                        <span>Total Tagihan:</span> <span>Rp {invoice.team.counter.price.toLocaleString()}</span>
                    </p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h3 className="text-lg font-semibold">Detail Pembayaran</h3>
                    <p className="flex justify-between text-sm">
                        <span>TAWARIN WALLET</span> <span>Rp {invoice.team.counter.price.toLocaleString()}</span>
                    </p>
                </div>
                {/* <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                    <h3 className="text-lg font-semibold">Nomor Order</h3>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="QR Code"
                        className="mx-auto my-3 rounded-md"
                    />
                    <p className="text-sm font-medium">CS/33/241106/0018</p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h3 className="text-lg font-semibold">
                        Rating &amp; Ulasan
                    </h3>
                    <div className="flex justify-center my-3 space-x-1 text-yellow-500">
                        ⭐⭐⭐⭐⭐
                    </div>
                    <textarea
                        className="w-full p-3 text-sm border rounded-xl"
                        placeholder="Bagikan pengalaman Anda (opsional)"
                        defaultValue={""}
                    />
                    <button className="w-full py-2 mt-3 text-white bg-green-500 shadow-md rounded-xl hover:bg-green-600">
                        Kirim Ulasan
                    </button>
                </div> */}
                <p className="mt-4 text-sm text-center text-gray-500">
                    Powered by{" "}
                    <strong className="text-yellow-500">Tawarin</strong>
                </p>
            </div>
        </>
    );
}
