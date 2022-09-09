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

export default function Create({
    plan_master_checkboxs,
    plan_master_texts,
    plan_categories,
}) {
    // const [enabled, setEnabled] = useState(false);
    const [anggaran, setAnggaran] = useState("");
    const [dariAnggaran, setDariAnggaran] = useState("");
    const [sampaiAnggaran, setSampaiAnggaran] = useState("");

    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);

    const onChangeDariAnggaranHandler = (e) => {
        setDariAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahDariAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(dariAnggaran);

    const onChangeSampaiAnggaranHandler = (e) => {
        setSampaiAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahSampaiAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(sampaiAnggaran);

    const { data, setData, post, reset, errors } = useForm({});

    const onChange = (e) => {setData({ ...data, [e.target.id]: e.target.value })};

    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onChangePlanCategoryId = (e) => {
        setData({ ...data, ['plan_category_id']: e.id});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("plans.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <div>
            <Head title="Plan Create" />
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Perencanaan
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
                                                    Nama Perencanaan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <div className="inline-flex items-center text-sm text-gray-500 rounded-l-md">
                                                            Perencanaan
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
                                                    htmlFor="plan_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage ShouldMap={ plan_categories} selected={selected} onChange={(e) => {
                                                                onChangePlanCategoryId(e);
                                                                setSelected(e);
                                                              }}/>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.plan_category_id}
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
                                                    htmlFor="jangka_waktu_pelaksanaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Pelaksanaan
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

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="jumlah_revisi"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Revisi
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jumlah_revisi"
                                                    id="jumlah_revisi"
                                                    value={
                                                        data.jumlah_revisi ?? ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jumlah_revisi}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="luas_bangunan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Luas Bangunan
                                                </label>
                                                <input
                                                    type="number"
                                                    name="luas_bangunan"
                                                    id="luas_bangunan"
                                                    value={
                                                        data.luas_bangunan ?? ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.luas_bangunan && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.luas_bangunan}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="acuan_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Acuan Anggaran Proyek
                                                </label>
                                                <input
                                                    type="number"
                                                    name="acuan_anggaran"
                                                    id="acuan_anggaran"
                                                    value={
                                                        data.acuan_anggaran ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.acuan_anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.acuan_anggaran}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
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
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="dari_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan (dari)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="dari_anggaran"
                                                    id="dari_anggaran"
                                                    onChange={
                                                        onChangeDariAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.dari_anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.dari_anggaran}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {dariAnggaran &&
                                                        formatRupiahDariAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {dariAnggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    dariAnggaran
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="sampai_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan
                                                    (sampai)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="sampai_anggaran"
                                                    id="sampai_anggaran"
                                                    onChange={
                                                        onChangeSampaiAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.sampai_anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.sampai_anggaran}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {sampaiAnggaran &&
                                                        formatRupiahSampaiAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {sampaiAnggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    sampaiAnggaran
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
                                        Kebutuhan Perencanaan
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
                                        {plan_master_checkboxs.map(
                                            (plan_master_checkbox, i) => (
                                                <div
                                                    key={
                                                        plan_master_checkbox.id
                                                    }
                                                    className="flex items-center justify-between px-3 py-4 rounded-md shadow"
                                                >
                                                    {plan_master_checkbox.name}
                                                    <label
                                                        htmlFor={
                                                            plan_master_checkbox.slug
                                                        }
                                                        className="relative inline-flex items-center cursor-pointer"
                                                    >
                                                        <input
                                                            key={
                                                                plan_master_checkbox.id
                                                            }
                                                            onChange={onChange}
                                                            type="checkbox"
                                                            id={
                                                                plan_master_checkbox.slug
                                                            }
                                                            name={plan_master_checkbox.slug}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-600  dark:peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:bg-slate-500 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-indigo-500 peer-after:ring-indigo-500" />
                                                    </label>
                                                </div>
                                            )
                                        )}
                                        {plan_master_texts.map(
                                            (plan_master_text, i) => (
                                                <div key={plan_master_text.id}>
                                                    <label
                                                        htmlFor={
                                                            plan_master_text.slug
                                                        }
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        {plan_master_text.name}
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            key={
                                                                plan_master_text.id
                                                            }
                                                            id={
                                                                plan_master_text.slug
                                                            }
                                                            name={
                                                                plan_master_text.slug
                                                            }
                                                            rows={3}
                                                            onChange={onChange}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            placeholder=""
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Masukan Keterangan{" "}
                                                        {plan_master_text.name}{" "}
                                                        Bila diperlukan.
                                                    </p>
                                                </div>
                                            )
                                        )}
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
                                        Gambar Perencanaan
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
                                                Cover photo
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
                                                        inputname={"cover"}
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
                                        <Button>Saveee</Button>
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
