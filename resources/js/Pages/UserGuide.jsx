import React from "react";
import AppDefault from "@/Layouts/AppDefault";

export default function UserGuide() {
    return (
        <div className="container p-4 mx-auto md:p-12 lg:p-16">
            <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl lg:text-6xl gradient-text">
                Panduan Penggunaan Aplikasi
            </h1>
            <div className="p-6 overflow-hidden bg-white shadow-lg rounded-2xl md:p-8 lg:p-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-20" />
                    <h2 className="relative z-10 mb-6 text-2xl font-semibold text-gray-800 md:text-3xl">
                        Langkah-Langkah Penggunaan
                    </h2>
                </div>
                <ol className="relative z-10 space-y-6 md:space-y-8">
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                1.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Setting Nama Perusahaan
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Masuk ke menu pengaturan, lalu pilih opsi
                                    "Profil Perusahaan". Isikan nama perusahaan
                                    Anda pada kolom yang tersedia dan simpan
                                    perubahan.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                2.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Undang Karyawan
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Pada menu "Karyawan", klik tombol "Undang
                                    Karyawan". Masukkan alamat email karyawan
                                    yang ingin diundang, lalu kirimkan undangan.
                                    Karyawan akan menerima email untuk
                                    bergabung.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                3.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Buat Produk
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Buka menu "Produk", lalu klik "Tambah
                                    Produk". Isikan informasi produk seperti
                                    nama, deskripsi, dan harga. Simpan produk
                                    baru Anda.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                4.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Tambahkan Kategori untuk Produk
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Di menu "Kategori Produk", klik "Tambah
                                    Kategori". Berikan nama untuk kategori baru
                                    dan simpan. Anda kemudian dapat mengaitkan
                                    produk dengan kategori ini pada detail
                                    produk.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                5.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Tambahkan Detail Produk
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Buka detail produk yang ingin diubah. Anda
                                    dapat menambahkan informasi lebih lanjut
                                    seperti gambar, spesifikasi, dan memilih
                                    kategori yang telah dibuat.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                6.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Atur Kendaraan dan Atur Tim
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Pada menu "Kendaraan", Anda dapat
                                    menambahkan dan mengelola data kendaraan. Di
                                    menu "Tim", Anda dapat mengatur anggota tim
                                    dan penugasannya.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 hover-scale">
                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                            <span className="w-10 text-2xl font-medium text-center text-blue-600">
                                7.
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Cuci Mobil Sudah Bisa Dipesan
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    Setelah semua langkah di atas selesai,
                                    layanan cuci mobil sudah dapat dipesan oleh
                                    pelanggan melalui aplikasi.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

UserGuide.layout = (page) => <AppDefault children={page}></AppDefault>;
