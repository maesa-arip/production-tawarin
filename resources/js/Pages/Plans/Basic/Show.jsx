import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import PlanItem from "@/Components/PlanItem";
import { numberFormat } from "@/Libs/helper";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Filepond from "@/Pages/Uploads/Filepond";
import { IconChecks } from "@tabler/icons";

export default function Show({
    plan,
    media,
    plan_master_checkboxs,
    plan_master_texts,
    plan_details,
    planWithSum,
}) {
    const { data, setData, post, patch, processing, reset, errors } = useForm(
        {}
    );
    const { permissions } = usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    const [bid, setBid] = useState("");

    const onChangeBidHandler = (e) => {
        setBid(e.target.value);
        setData({
            ...data,
            [e.target.id]: e.target.value,
            ["plan_id"]: plan.id,
        });
    };
    const formatRupiahBid = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(bid);

    const confirmHandler = (e) => {
        e.preventDefault();
        patch(route("planadmin.confirmed", plan.id));
    };
    const rejectHandler = (e) => {
        e.preventDefault();
        post(route("planadmin.rejected", plan.id), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("planbids.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <div>
            <Head title="Plans" />
            <Container>
                <div className="bg-white">
                    <div className="grid items-start grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
                        <div>
                            {planWithSum.plan_bids_sum_is_approved == 1 && (
                                <Link className="inline-flex px-2 py-1 text-xl font-semibold text-white bg-teal-500 rounded">
                                    Sudah Ada Pemenang
                                    <IconChecks className="inline-flex mt-1 ml-2" />
                                </Link>
                            )}
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {plan.name}
                            </h2>
                            <Link
                                className="inline-flex px-2 py-1 text-xs font-semibold text-white rounded bg-sky-500"
                                href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                            >
                                {plan.plan_category.name}
                            </Link>
                            <p className="mt-4 text-gray-500">
                                {plan.description}
                            </p>

                            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jangka Waktu Penawaran
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {numberFormat(
                                            plan.jangka_waktu_penawaran
                                        )}{" "}
                                        Hari
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jangka Waktu Pelaksanaan
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {numberFormat(
                                            plan.jangka_waktu_pelaksanaan
                                        )}{" "}
                                        Hari
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jumlah Revisi
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {numberFormat(plan.jumlah_revisi)} Kali
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Luas Bangunan
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {numberFormat(plan.luas_bangunan)} M
                                        <sup>2</sup>
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Anggaran Proyek
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp {numberFormat(plan.anggaran_proyek)}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Anggaran Perencanaan (Dari)
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp {numberFormat(plan.dari_anggaran)}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Anggaran Perencanaan (Sampai)
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp {numberFormat(plan.sampai_anggaran)}
                                    </dd>
                                </div>
                            </dl>
                            <div className="mt-5 md:mt-15 md:col-span-2">
                                {/* <div className="overflow-hidden shadow sm:rounded-md"> */}
                                <div className="py-5 space-y-6 bg-white">
                                    {plan_master_checkboxs.map(
                                        (plan_master_checkbox, i) => (
                                            <div
                                                key={plan_master_checkbox.id}
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
                                                        type="checkbox"
                                                        checked
                                                        disabled
                                                        id={
                                                            plan_master_checkbox.slug
                                                        }
                                                        name={
                                                            plan_master_checkbox.slug
                                                        }
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-sky-600  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500 peer-after:ring-sky-500" />
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
                                                        disabled
                                                        rows={3}
                                                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                        placeholder=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Masukan Keterangan{" "}
                                                    {plan_master_text.name} Bila
                                                    diperlukan.
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Contoh Desain
                            </h2>
                            <div className="mb-6 bg-white rounded-lg shadow">
                                <div className="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                                    <div className="grid grid-cols-6 col-span-2 gap-2 ">
                                        {media.map(
                                            (plan, index) =>
                                                index < 2 && (
                                                    <>
                                                        {plan.mime_type ==
                                                        "video/mp4" ? (
                                                            <div
                                                                key={plan.id}
                                                                className="h-full col-span-2 overflow-hidden shadow rounded-xl"
                                                            >
                                                                <div className="">
                                                                    <video
                                                                        controls
                                                                        src={`/storage/${plan.id}/${plan.file_name}`}
                                                                    ></video>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div
                                                                key={plan.id}
                                                                className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                            >
                                                                <img
                                                                    className="object-cover w-full h-full "
                                                                    src={`/storage/${plan.id}/${plan.file_name}`}
                                                                    alt={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                        )}

                                        {media.map(
                                            (plan, index) =>
                                                index > 1 &&
                                                index < 6 && (
                                                    <>
                                                        {plan.mime_type ==
                                                        "video/mp4" ? (
                                                            <div
                                                                key={plan.id}
                                                                className="h-full col-span-2 overflow-hidden shadow rounded-xl"
                                                            >
                                                                <div className="">
                                                                    <video
                                                                        controls
                                                                        src={`/storage/${plan.id}/${plan.file_name}`}
                                                                    ></video>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div
                                                                key={plan.id}
                                                                className="max-h-[10rem] col-span-2 overflow-hidden shadow rounded-xl"
                                                            >
                                                                <img
                                                                    className="object-cover w-full h-full "
                                                                    src={`/storage/${plan.id}/${plan.file_name}`}
                                                                    alt={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                        )}
                                    </div>
                                </div>
                                <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
                                    Ini adalah contoh gambar rumah yang disukai
                                    oleh owner, silakan buat desain sesuai
                                    dengan contoh gambar yang sudah disertakan
                                </div>
                            </div>
                            {permission_name.indexOf(
                                "melakukan penawaran perencanaan"
                            ) > -1 &&
                            planWithSum.plan_bids_sum_is_approved != 1 ? (
                                <form onSubmit={onSubmitHandler}>
                                    <div className="mb-6 bg-white rounded-lg shadow">
                                        <div className="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                                            <div className="grid grid-cols-1 col-span-2 gap-2 ">
                                                <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
                                                    Masukan Penawaran
                                                </h2>

                                                <div className="px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow">
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
                                                        <circle
                                                            cx={12}
                                                            cy={12}
                                                            r={9}
                                                        />
                                                        <line
                                                            x1={12}
                                                            y1={8}
                                                            x2="12.01"
                                                            y2={8}
                                                        />
                                                        <polyline points="11 12 12 12 12 16 13 16" />
                                                    </svg>
                                                    Secara Otomatis Sistem akan
                                                    up 5% dari Nilai Penawaran
                                                    yang dimasukan, penawaran
                                                    yang dilihat oleh Pemilik
                                                    Proyek adalah penawaran yang
                                                    sudah di up 5%, nilai 5%
                                                    tersebut akan menjadi fee
                                                    untuk Tawarin.
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="bid_price_user"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Penawaran
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="bid_price_user"
                                                        id="bid_price_user"
                                                        onChange={
                                                            onChangeBidHandler
                                                        }
                                                        onWheel={(e) =>
                                                            e.target.blur()
                                                        }
                                                        autoComplete="off"
                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                    />
                                                    {errors.bid_price_user && (
                                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                            {
                                                                errors.bid_price_user
                                                            }
                                                        </span>
                                                    )}
                                                    <div className="inline mt-1 ml-1 text-xs font-semibold text-sky-500">
                                                        {bid && formatRupiahBid}{" "}
                                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-sky-500">
                                                            {bid &&
                                                                "(" +
                                                                    Terbilang(
                                                                        bid
                                                                    ) +
                                                                    " Rupiah)"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <label
                                                        htmlFor={"description"}
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Deskripsikan Penawaranmu
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id={"description"}
                                                            name={"description"}
                                                            rows={3}
                                                            onChange={onChange}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Masukan deskripsi
                                                        penawaranmu untuk
                                                        menarik minat owner.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Desain awal
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
                                                            inputname={
                                                                "document"
                                                            }
                                                            allowMultiple={true}
                                                            maxFiles={"5"}
                                                        />
                                                        <div className="flex justify-center text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative font-medium bg-white rounded-md text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                                                            >
                                                                <span>
                                                                    Upload a
                                                                    file
                                                                </span>
                                                            </label>
                                                            <p className="pl-1">
                                                                or drag and drop
                                                            </p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">
                                                            PNG, JPG, GIF up to
                                                            10MB
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
                                </form>
                            ) : (
                                ""
                            )}
                            {permission_name.indexOf("approve perencanaan") >
                            -1 ? (
                                <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                            <div className="grid grid-cols-1 col-span-2 gap-2 ">
                                                <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
                                                    Konfirmasi
                                                </h2>

                                                <div className="px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow">
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
                                                        <circle
                                                            cx={12}
                                                            cy={12}
                                                            r={9}
                                                        />
                                                        <line
                                                            x1={12}
                                                            y1={8}
                                                            x2="12.01"
                                                            y2={8}
                                                        />
                                                        <polyline points="11 12 12 12 12 16 13 16" />
                                                    </svg>
                                                    Silakan Pilih, apakah
                                                    perencanaan ini akan
                                                    diterima dan ditampilkan
                                                    atau ditolak serta berikan
                                                    alasan bila ditolak.
                                                </div>
                                                <div className="mt-4">
                                                    <label
                                                        htmlFor={"description"}
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Alasan ditolak
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id={"description"}
                                                            name={"description"}
                                                            rows={3}
                                                            onChange={onChange}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            defaultValue={""}
                                                        />
                                                        {errors && (
                                                            <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                {
                                                                    errors.description
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Masukan alasan jika
                                                        perencanaan ditolak.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end bg-gray-50">
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <Button
                                                    onClick={rejectHandler}
                                                    color="pink"
                                                >
                                                    Tolak
                                                </Button>
                                            </div>
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <Button
                                                    onClick={confirmHandler}
                                                >
                                                    Terima
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
