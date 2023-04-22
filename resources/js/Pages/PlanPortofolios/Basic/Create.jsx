import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";
import CurrencyInput from "react-currency-input-field";
import ThirdButton from "@/Components/ThirdButton";
import DangerButton from "@/Components/DangerButton";
import { IconTrash } from "@tabler/icons";

export default function Create({
    plan_categories,
}) {
    // const [enabled, setEnabled] = useState(false);
    const [anggaran, setAnggaran] = useState("");


    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);


    const { data, setData, post, processing, reset, errors } = useForm({});

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onChangePlanCategoryId = (e) => {
        setData({ ...data, ["plan_category_id"]: e.id });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("planportofolios.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };


    return (
        <div>
            <Head title="Portofolio Create" />
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
                                        Masukan data lengkap perencanaanmu
                                        disini.
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

                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="plan_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={plan_categories}
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangePlanCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.plan_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                           
                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="luas_bangunan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Perkiraan Luas Bangunan M
                                                    <sup>2</sup>
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
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="owner"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Owner
                                                </label>
                                                <input
                                                    type="text"
                                                    name="owner"
                                                    id="owner"
                                                    onChange={onChange}
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.owner && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.owner}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="phone_owner"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Phone Owner
                                                </label>
                                                <input
                                                    type="number"
                                                    name="phone_owner"
                                                    id="phone_owner"
                                                    onChange={onChange}
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.phone_owner && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.phone_owner}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="phone_owner"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Deskripsi
                                                </label>
                                                <textarea

rows={3}
onChange={onChange}
className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
placeholder=""
defaultValue={""}
                                                    type="text"
                                                    name="description"
                                                    id="description"
                                                    
                                                    autoComplete="off"
                                                />
                                                {errors.description && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.description}
                                                    </span>
                                                )}
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
                                        Gambar Perencanaan
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Sertakan contoh gambar rumah yang
                                        disukai guna memudahkan kondultan
                                        membuat desain sesuai keinginanmu.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Contoh Gambar Rumah yang disukai
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
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <Filepond
                                                        inputname={"document"}
                                                        allowMultiple={true}
                                                        maxFiles={"5"}
                                                        required={true}
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
                                            Simpan
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
