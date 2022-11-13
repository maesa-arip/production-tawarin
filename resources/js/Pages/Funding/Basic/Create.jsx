import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";

export default function Create({ fundingCategories }) {
    // const [enabled, setEnabled] = useState(false);
    const [anggaran, setAnggaran] = useState("");
    const [totalLembar, setTotalLembar] = useState("");
    const [hargaPerLembar, setHargaPerLembar] = useState("");

    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);

    const onChangeTotalLembarHandler = (e) => {
        setTotalLembar(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatAngkaTotalLembar = new Intl.NumberFormat("id-ID", {}).format(
        totalLembar
    );

    const onChangeHargaPerLembarHandler = (e) => {
        setHargaPerLembar(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahHargaPerLembar = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(hargaPerLembar);

    const { data, setData, post, processing, reset, errors } = useForm({});

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onChangeFundingCategoryId = (e) => {
        setData({ ...data, ["funding_category_id"]: e.id });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("fundings.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <div>
            <Head title="Funding Create" />
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Pendanaan
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Use a permanent address where you can
                                        receive mail.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Pendanaan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <div className="inline-flex items-center text-sm text-gray-500 rounded-l-md">
                                                            Pendanaan
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

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="funding_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        fundingCategories
                                                    }
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangeFundingCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.funding_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label
                                                    htmlFor="jangka_waktu_penawaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Penawaran
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

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="harga_perlembar"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Harga Per Lembar
                                                </label>
                                                <input
                                                    type="number"
                                                    name="harga_perlembar"
                                                    id="harga_perlembar"
                                                    value={
                                                        data.harga_perlembar ??
                                                        ""
                                                    }
                                                    onChange={
                                                        onChangeHargaPerLembarHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.harga_perlembar && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.harga_perlembar}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {hargaPerLembar &&
                                                        formatRupiahHargaPerLembar}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {hargaPerLembar &&
                                                            "(" +
                                                                Terbilang(
                                                                    hargaPerLembar
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="total_lembar"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Total Lembar
                                                </label>
                                                <input
                                                    type="number"
                                                    name="total_lembar"
                                                    id="total_lembar"
                                                    value={
                                                        data.total_lembar ?? ""
                                                    }
                                                    onChange={
                                                        onChangeTotalLembarHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.total_lembar && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.total_lembar}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {totalLembar &&
                                                        formatAngkaTotalLembar}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {totalLembar &&
                                                            "(" +
                                                                Terbilang(
                                                                    totalLembar
                                                                ) +
                                                                ")"}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran
                                                </label>
                                                <input
                                                    type="number"
                                                    name="anggaran"
                                                    id="anggaran"
                                                    onChange={
                                                        onChangeAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.anggaran}
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
                                        Alamat Pendanaan
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Decide which communications you'd like
                                        to receive and how.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="alamat"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Alamat Pendanaan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="alamat"
                                                            value={
                                                                data.alamat ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="alamat"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.alamat}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="provinsi"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Provinsi
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="provinsi"
                                                            value={
                                                                data.provinsi ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="provinsi"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.provinsi}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="kota"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Kabupaten/Kota
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="kota"
                                                            value={
                                                                data.kota ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="kota"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.kota}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="kecamatan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Kecamatan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="kecamatan"
                                                            value={
                                                                data.kecamatan ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="kecamatan"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.kecamatan}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="desa"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Desa
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="desa"
                                                            value={
                                                                data.desa ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="desa"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.desa}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="maps"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Maps
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="maps"
                                                            value={
                                                                data.maps ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="maps"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.maps}
                                                    </span>
                                                )}
                                            </div>

                                            {/* <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="funding_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Provinsi
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        fundingCategories
                                                    }
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangeFundingCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.funding_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="funding_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kabupaten
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        fundingCategories
                                                    }
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangeFundingCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.funding_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="funding_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kecamatan
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        fundingCategories
                                                    }
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangeFundingCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.funding_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="funding_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Desa
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={
                                                        fundingCategories
                                                    }
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangeFundingCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.funding_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div> */}
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
                                        Tentang Bisnis
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        This information will be displayed
                                        publicly so be careful what you share.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Cover Depan (Gambar Ini Akan Muncul Dibagian Depan Pendanaan)
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
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <Filepond
                                                        inputname={"document"}
                                                        allowMultiple={true}
                                                        maxFiles={"3"}
                                                    />
                                                    <div className="flex justify-center text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label
                                                    htmlFor="jangka_waktu_penawaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    ROI
                                                </label>
                                                <input
                                                    type="number"
                                                    name="roi"
                                                    id="roi"
                                                    value={
                                                        data.roi ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.roi
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="jadwal_deviden"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jadwal Deviden
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jadwal_deviden"
                                                    id="jadwal_deviden"
                                                    value={
                                                        data.jadwal_deviden ??
                                                        ""
                                                    }
                                                    onChange={
                                                        onChange
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.jadwal_deviden && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jadwal_deviden}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="tentang_bisnis"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Tentang Bisnis
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="tentang_bisnis"
                                                    name="tentang_bisnis"
                                                    rows={3}
                                                    onChange={onChange}
                                                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Masukan Penjelasan Tentang
                                                Bisnis Anda
                                            </p>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="prospektus"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Prospektus Bisnis
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="prospektus"
                                                    name="prospektus"
                                                    rows={3}
                                                    onChange={onChange}
                                                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Masukan penjelasan prospektus
                                                bisnis Anda bila diperlukan
                                            </p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                File Prospektus
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
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <Filepond
                                                        inputname={"fileprospektus"}
                                                        allowMultiple={true}
                                                        maxFiles={"3"}
                                                    />
                                                    <div className="flex justify-center text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <Button processing={processing}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
