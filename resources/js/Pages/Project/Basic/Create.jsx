import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";

export default function Create({
    project_categories,
    project_payments,
    project_masters,
}) {
    const [anggaran, setAnggaran] = useState("");
    const [jaminanPemeliharaan, setJaminanPemeliharaan] = useState("");
    const [jaminanPelaksanaan, setJaminanPelaksanaan] = useState("");
    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);

    const onChangeJaminanPemeliharaanHandler = (e) => {
        setJaminanPemeliharaan(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahJaminanPemeliharaan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(jaminanPemeliharaan);

    const onChangeJaminanPelaksanaanHandler = (e) => {
        setJaminanPelaksanaan(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahJaminanPelaksanaan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(jaminanPelaksanaan);

    const { data, setData, post, processing, reset, errors } = useForm({});

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const defaultValue = [{ name: "Pilih" }];
    const [selectedCategory, setSelectedCategory] = useState(defaultValue[0]);
    const [selectedPayment, setSelectedPayment] = useState(defaultValue[0]);

    const onChangeProjectCategoryId = (e) => {
        setData({ ...data, ["project_category_id"]: e.id });
    };
    const onChangeProjectPaymentId = (e) => {
        setData({ ...data, ["project_payment_id"]: e.id });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("projects.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <div>
            <Head title="Project Create" />
            <Container>
                <form onSubmit={onSubmitHandler}>

                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Proyek
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap proyekmu disini.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Proyek
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <div className="inline-flex items-center text-sm text-gray-500 rounded-l-md">
                                                            Proyek
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                data.name ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="name"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.name}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="project_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        project_categories
                                                    }
                                                    selected={selectedCategory}
                                                    onChange={(e) => {
                                                        onChangeProjectCategoryId(
                                                            e
                                                        );
                                                        setSelectedCategory(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.project_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="project_payment_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Metode Pembayaran
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={project_payments}
                                                    selected={selectedPayment}
                                                    onChange={(e) => {
                                                        onChangeProjectPaymentId(
                                                            e
                                                        );
                                                        setSelectedPayment(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.project_payment_id
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="anggaran_proyek"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Proyek
                                                </label>
                                                <input
                                                    type="number"
                                                    name="anggaran_proyek"
                                                    id="anggaran_proyek"
                                                    value={
                                                        data.anggaran_proyek ?? ""
                                                    }
                                                    onChange={
                                                        onChangeAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.anggaran_proyek && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.anggaran_proyek}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {anggaran &&
                                                        formatRupiahAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {anggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    anggaran
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="jangka_waktu_penawaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Penawaran
                                                    (Hari)
                                                </label>

                                                <input
                                                    type="number"
                                                    name="jangka_waktu_penawaran"
                                                    id="jangka_waktu_penawaran"
                                                    value={
                                                        data.jangka_waktu_penawaran ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.jangka_waktu_penawaran
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="jangka_waktu_pelaksanaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Pelaksanaan
                                                    (Hari)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jangka_waktu_pelaksanaan"
                                                    id="jangka_waktu_pelaksanaan"
                                                    value={
                                                        data.jangka_waktu_pelaksanaan ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.jangka_waktu_pelaksanaan
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="masa_waktu_pemeliharaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Masa Waktu Pemeliharaan
                                                    (Hari)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="masa_waktu_pemeliharaan"
                                                    id="masa_waktu_pemeliharaan"
                                                    value={
                                                        data.masa_waktu_pemeliharaan ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    min="1"
                                                    max="5"
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.masa_waktu_pemeliharaan
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="jaminan_pemeliharaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jaminan Pemeliharaan
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jaminan_pemeliharaan"
                                                    id="jaminan_pemeliharaan"
                                                    value={
                                                        data.jaminan_pemeliharaan ??
                                                        ""
                                                    }
                                                    onChange={
                                                        onChangeJaminanPemeliharaanHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.jaminan_pemeliharaan && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jaminan_pemeliharaan}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {jaminanPemeliharaan &&
                                                        formatRupiahJaminanPemeliharaan}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {jaminanPemeliharaan &&
                                                            "(" +
                                                                Terbilang(
                                                                    jaminanPemeliharaan
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="jaminan_pelaksanaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jaminan Pelaksanaan
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jaminan_pelaksanaan"
                                                    id="jaminan_pelaksanaan"
                                                    value={
                                                        data.jaminan_pelaksanaan ??
                                                        ""
                                                    }
                                                    onChange={
                                                        onChangeJaminanPelaksanaanHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.jaminan_pelaksanaan && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jaminan_pelaksanaan}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {jaminanPelaksanaan &&
                                                        formatRupiahJaminanPelaksanaan}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {jaminanPelaksanaan &&
                                                            "(" +
                                                                Terbilang(
                                                                    jaminanPelaksanaan
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-span-12 mt-5 md:mt-0 md:col-span-6">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Denah Lokasi
                                                                Beserta Ukuran
                                                                Lahan (Max 5)
                                                            </label>
                                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                <div className="w-full text-center">
                                                                    <svg
                                                                        className="w-12 h-12 mx-auto text-gray-400"
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        viewBox="0 0 48 48"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <Filepond
                                                                        inputname={
                                                                            "denahlokasiukuran"
                                                                        }
                                                                        allowMultiple={
                                                                            true
                                                                        }
                                                                        maxFiles={
                                                                            "5"
                                                                        }
                                                                        // required={
                                                                        //     true
                                                                        // }
                                                                    />
                                                                    <div className="flex justify-center text-sm text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                        >
                                                                            <span>
                                                                                Upload
                                                                                a
                                                                                file
                                                                            </span>
                                                                        </label>
                                                                        <p className="pl-1">
                                                                            or
                                                                            drag
                                                                            and
                                                                            drop
                                                                        </p>
                                                                    </div>
                                                                    <p className="text-xs text-gray-500">
                                                                        PNG,
                                                                        JPG, GIF
                                                                        up to
                                                                        10MB
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 mt-5 md:mt-0 md:col-span-6">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Foto Kondisi
                                                                Lahan Saat Ini
                                                                (Max 5)
                                                            </label>
                                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                <div className="w-full text-center">
                                                                    <svg
                                                                        className="w-12 h-12 mx-auto text-gray-400"
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        viewBox="0 0 48 48"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <Filepond
                                                                        inputname={
                                                                            "kondisisaatini"
                                                                        }
                                                                        allowMultiple={
                                                                            true
                                                                        }
                                                                        maxFiles={
                                                                            "5"
                                                                        }
                                                                        // required={
                                                                        //     true
                                                                        // }
                                                                    />
                                                                    <div className="flex justify-center text-sm text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                        >
                                                                            <span>
                                                                                Upload
                                                                                a
                                                                                file
                                                                            </span>
                                                                        </label>
                                                                        <p className="pl-1">
                                                                            or
                                                                            drag
                                                                            and
                                                                            drop
                                                                        </p>
                                                                    </div>
                                                                    <p className="text-xs text-gray-500">
                                                                        PNG,
                                                                        JPG, GIF
                                                                        up to
                                                                        10MB
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Kebutuhan Proyek
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Silakan centang dan isi kebutuhan
                                        Proyekmu, agar para konsultan yang
                                        menawar bisa menyiapkan data sesuai
                                        dengan kebutuhanmu.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        {project_masters.map(
                                            (project_master, i) => (
                                                <div
                                                    key={i}
                                                    className="col-span-12 my-4 mt-5 md:mt-0 md:col-span-6"
                                                >
                                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                        <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    {
                                                                        project_master.name
                                                                    }
                                                                </label>
                                                                <div
                                                                    key={
                                                                        project_master.id
                                                                    }
                                                                >
                                                                    <div className="mt-1">
                                                                        <textarea
                                                                            key={
                                                                                project_master.id
                                                                            }
                                                                            id={
                                                                                project_master.slug
                                                                            }
                                                                            name={
                                                                                project_master.slug
                                                                            }
                                                                            rows={
                                                                                3
                                                                            }
                                                                            onChange={
                                                                                onChange
                                                                            }
                                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                            placeholder=""
                                                                            defaultValue={
                                                                                ""
                                                                            }
                                                                        />
                                                                    </div>
                                                                    {project_master.type ==
                                                                    "file" ? (
                                                                        <p className="mt-2 text-sm text-gray-500">
                                                                            Masukan
                                                                            File{" "}
                                                                            {
                                                                                project_master.name
                                                                            }{" "}
                                                                            Bila
                                                                            diperlukan.
                                                                        </p>
                                                                    ) : (
                                                                        <></>
                                                                    )}
                                                                </div>
                                                                {project_master.type ==
                                                                "file" ? (
                                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                        <div className="w-full text-center">
                                                                            <svg
                                                                                className="w-12 h-12 mx-auto text-gray-400"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                viewBox="0 0 48 48"
                                                                                aria-hidden="true"
                                                                            >
                                                                                <path
                                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                    strokeWidth={
                                                                                        2
                                                                                    }
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                            <Filepond
                                                                                inputname={
                                                                                    project_master.slug
                                                                                }
                                                                                allowMultiple={
                                                                                    true
                                                                                }
                                                                                maxFiles={
                                                                                    "5"
                                                                                }
                                                                                // required={
                                                                                //     true
                                                                                // }
                                                                            />
                                                                            <div className="flex justify-center text-sm text-gray-600">
                                                                                <label
                                                                                    htmlFor="file-upload"
                                                                                    className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                                >
                                                                                    <span>
                                                                                        Upload
                                                                                        a
                                                                                        file
                                                                                    </span>
                                                                                </label>
                                                                                <p className="pl-1">
                                                                                    or
                                                                                    drag
                                                                                    and
                                                                                    drop
                                                                                </p>
                                                                            </div>
                                                                            <p className="text-xs text-gray-500">
                                                                                PNG,
                                                                                JPG,
                                                                                GIF
                                                                                up
                                                                                to
                                                                                10MB
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <Button processing={processing}>
                                            Simpan
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
