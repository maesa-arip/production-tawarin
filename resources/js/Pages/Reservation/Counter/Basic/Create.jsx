import React, { useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
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
import Map from "@/Components/Map";
import TimeInput from "@/Components/TimeInput";
import RadioCard from "@/Components/RadioCard";
import InputError from "@/Components/InputError";
import RadioCard2 from "@/Components/RadioCard2";
import Tooltip from "@/Components/Tooltip";
import BaseModal from "@/Components/Modal/BaseModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";

export default function Create({ onOff }) {
    const set_dayoff = [
        { id: 1, name: "OFF" },
        { id: 2, name: "ON" },
    ];
    const team = [
        { id: 1, value:0, name: "Team" },
        { id: 2, value:1, name: "PerOrangan" },
    ];


    const [priceUser, setPriceUser] = useState("");
    const [price, setPrice] = useState("");
    const [hidePercent, setHidePercent] = useState(false);
    const [hideDiskon, setHideDiskon] = useState(false);
    const onChangePriceUserHandler = (e) => {
        setPriceUser(e.target.value);
        setPrice(Math.ceil((e.target.value * (100 + 5)) / 100));
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahHarga = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(Math.ceil((priceUser * (100 + 5)) / 100));

    const { data, setData, post, processing, reset, errors } = useForm({});
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]:
                e.target.type === "checkbox" || e.target.type === "radio"
                    ? e.target.checked
                    : e.target.value,
        });
    };

    // console.log(data)
    const [selectedSetDayOff, setSelectedSetDayOff] = useState();
    const onChangeSetDayOff = (e) => {
        setData({ ...data, ["set_dayoff"]: e.value });
    };

    const [selectedNeedImageReservation, setSelectedNeedImageReservation] =
        useState();
    const onChangeNeedImageReservation = (e) => {
        setData({ ...data, ["need_image_reservation"]: e.value });
    };

    const [selectedTeamOrPerson, setSelectedTeamOrPerson] =
        useState();
    const onChangeTeamOrPerson = (e) => {
        setData({ ...data, ["need_team"]: e.value });
    };

    const [selectedNeedImageBeforeAfter, setSelectedNeedImageBeforeAfter] =
        useState();
    const onChangeNeedImageBeforeAfter = (e) => {
        setData({ ...data, ["need_image_before_after"]: e.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("reservationCounters.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    const [isOpenKomisiDialog, setIsOpenKomisiDialog] = useState(false);
    const [isOpenDiskonDialog, setIsOpenDiskonDialog] = useState(false);
    const [state, setState] = useState([]);

    const openKomisiDialog = () => {
        setIsOpenKomisiDialog(true);
    };
    const noKomisiDialog = () => {
        setIsOpenKomisiDialog(false);
        setHidePercent(true);
        setData({ ...data, ["percent_owner"]: 100, ["percent_employe"]: 0});
    };
    const yesKomisiDialog = () => {
        setIsOpenKomisiDialog(false);
    };
    useEffect(() => {
        openKomisiDialog();
    }, [])
    const [percent_owner, setPercent_owner] = useState(0);
    useEffect(() => {
        setData({ ...data, ["percent_employe"]: (100 - (parseInt(data.percent_owner)|| 100))});
    }, [percent_owner,data.percent_owner])
    

    const openDiskonDialog = () => {
        setIsOpenDiskonDialog(true);
    };
    const noDiskonDialog = () => {
        setIsOpenDiskonDialog(false);
        setHideDiskon(true);
        setData({ ...data,  ["jumlahlayanandiskon"]: 0});
    };
    const yesDiskonDialog = () => {
        setIsOpenDiskonDialog(false);
    };
    useEffect(() => {
        openDiskonDialog();
    }, [])
    return (
        <div>
            <Head title="Plan Create" />
            <BaseModal
                isOpenInfoDialog={isOpenKomisiDialog}
                setIsOpenInfoDialog={setIsOpenKomisiDialog}
                size="max-w-2xl"
                title={"Pilih"}
                closeButton="false"
            >
                <p>Apakah anda akan memberikan komisi kepada pegawai untuk layanan ini ?</p>
                <ThirdButtonNoLink type="button" color="secondary" onClick={noKomisiDialog}>Tidak</ThirdButtonNoLink>
                <ThirdButtonNoLink className="mx-2 mt-2" type="button" onClick={yesKomisiDialog}>Iya</ThirdButtonNoLink>
            </BaseModal>
            <BaseModal
                isOpenInfoDialog={isOpenDiskonDialog}
                setIsOpenInfoDialog={setIsOpenDiskonDialog}
                size="max-w-2xl"
                title={"Pilih"}
                closeButton="false"
            >
                <p>Apakah anda akan memberikan diskon kepada pelanggan untuk layanan ini ?</p>
                
                <ThirdButtonNoLink type="button" color="secondary" onClick={noDiskonDialog}>Tidak</ThirdButtonNoLink>
                <ThirdButtonNoLink className="mx-2 mt-2" type="button" onClick={yesDiskonDialog}>Iya</ThirdButtonNoLink>
            </BaseModal>
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Layanan
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap Layananmu
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
                                                    Nama Layanan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
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
                                                    htmlFor="price_user"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Harga
                                                </label>
                                                <input
                                                    type="number"
                                                    name="price_user"
                                                    id="price_user"
                                                    onChange={
                                                        onChangePriceUserHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.price_user && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.price_user}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {priceUser &&
                                                        formatRupiahHarga}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {priceUser &&
                                                            "(" +
                                                                Terbilang(
                                                                    price
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
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
                                                Secara Otomatis Sistem akan up
                                                5% dari Harga yang dimasukan,
                                                harga yang dilihat oleh
                                                Pelanggan adalah harga yang
                                                sudah di up 5%, nilai 5%
                                                tersebut akan menjadi fee untuk
                                                Tawarin.
                                            </div>
                                            {hidePercent == true ? '' : 
                                            <>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Persentase untuk Owner
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="percent_owner"
                                                            value={
                                                                data.percent_owner ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="percent_owner"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.percent_owner}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Persentase untuk Pekerja
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="percent_employe"
                                                            value={
                                                                data.percent_employe ?? ""
                                                            }
                                                            readOnly
                                                            onChange={onChange}
                                                            id="percent_employe"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.percent_employe}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
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
                                                Deposit akan dipotong dari Persentase Untuk Pekerja 
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Persentase untuk Deposit
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="deposit"
                                                            value={
                                                                data.deposit ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="deposit"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.deposit}
                                                    </span>
                                                )}
                                            </div>
                                            </>}
                                            
                                            {hideDiskon == true ? '' : 
                                            <>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Layanan untuk Mendapat Layanan Gratis
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="jumlahlayanandiskon"
                                                            value={
                                                                data.jumlahlayanandiskon ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="jumlahlayanandiskon"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jumlahlayanandiskon}
                                                    </span>
                                                )}
                                            </div>
                                            </>}
                                            
                                            
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="service_duration"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Lama Pelayanan (Menit)
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="service_duration"
                                                            value={
                                                                data.service_duration ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="service_duration"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.service_duration
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="period"
                                                    className="inline-flex text-sm font-medium text-gray-700 "
                                                >
                                                    Batas Waktu Reservasi (Hari)
                                                    <Tooltip
                                                        message={
                                                            "Batas waktu reservasi adalah bla bla bla"
                                                        }
                                                    >
                                                        <>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-5 h-5 icon icon-tabler icon-tabler-info-hexagon-filled"
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
                                                                <path
                                                                    d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 9.586h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                                                                    strokeWidth={
                                                                        0
                                                                    }
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </>
                                                    </Tooltip>
                                                </label>

                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="period"
                                                            value={
                                                                data.period ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="period"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.period}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="description"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Deskripsi
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <textarea
                                                            type="text"
                                                            name="description"
                                                            value={
                                                                data.description ??
                                                                ""
                                                            }
                                                            rows={3}
                                                            onChange={onChange}
                                                            id="description"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.description
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 mt-5 md:mt-0 md:col-span-6">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Gambar Layanan
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
                                                                            "reservationcounter"
                                                                        }
                                                                        allowMultiple={false}
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
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <ThirdButtonNoLink processing={processing}>
                                            Simpan
                                        </ThirdButtonNoLink>
                                        {/* <Button className="" processing={processing}>
                                            Simpan
                                        </Button> */}
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

Create.layout = (page) => <AppReservasi children={page}></AppReservasi>;
