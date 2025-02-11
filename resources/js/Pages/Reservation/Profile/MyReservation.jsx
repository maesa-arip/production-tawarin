import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import AppReservasi from "@/Layouts/AppReservasi";
import NavLink from "@/Components/NavLink";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CopyButton from "@/Components/CopyButton";
import ThirdButton from "@/Components/ThirdButton";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { Inertia } from "@inertiajs/inertia";
import {
    IconChecks,
    IconCircleCheck,
    IconHelp,
    IconX,
    IconXboxX,
} from "@tabler/icons";
import RadioCard from "@/Components/RadioCard";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Terbilang } from "@/Libs/helper";

export default function MyReservation({
    myReservations,
    ratingCategories,
    tips,
}) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog3, setIsOpenInfoDialog3] = useState(false);
    const [isOpenCancelDialog, setIsOpenCancelDialog] = useState(false);
    const [isOpenComplaintDialog, setIsOpenComplaintDialog] = useState(false);
    const [tip, setTip] = useState("");
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const openInfoDialog3 = (item) => {
        setState(item);
        setIsOpenInfoDialog3(true);
    };
    const closeInfoDialog3 = () => {
        setIsOpenInfoDialog3(false);
    };
    const finishCustomer = () => {
        put(route("reservation.finishcustomer", state.id), {
            onSuccess: () => setIsOpenInfoDialog(false),
        });
    };
    // console.log(myReservations)
    const requestapproved = () => {
        put(route("reservation.requestapproved", state.id), {
            onSuccess: () => setIsOpenInfoDialog3(false),
        });
    };

    const [selected, setSelected] = useState();
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
        setSelected();
        setTip("");
    };
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    // Cancel
    const openCancelDialog = (item) => {
        setState(item);
        setIsOpenCancelDialog(true);
    };
    const closeCancelDialog = () => {
        setIsOpenCancelDialog(false);
        setSelected();
    };

    const handleCancelReservation = (e) => {
        e.preventDefault();
        put(route("reservation.cancelreservation", state.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenCancelDialog(false), reset()]);
            },
            // onSuccess: () => setIsOpenCancelDialog(false),
        });
    };

    // Complaint
    const openComplaintDialog = (item) => {
        setState(item);
        setIsOpenComplaintDialog(true);
    };
    const closeComplaintDialog = () => {
        setIsOpenComplaintDialog(false);
        setSelected();
    };
    const handleComplaintReservation = (e) => {
        e.preventDefault();
        put(route("reservation.complaintreservation", state.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenComplaintDialog(false), reset()]);
            },
            // onSuccess: () => setIsOpenCancelDialog(false),
        });
    };
    const onChangeTipHandler = (e) => {
        setTip(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahTip = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(tip);
    console.log(data);

    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog3}
                setIsOpenInfoDialog={setIsOpenInfoDialog3}
                size="2xl"
                closeButton="false"
                title={
                    "Berikut adalah tanggapan dari pekerja, silakan dijawab kembali"
                }
            >
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={12} cy={12} r={9} />
                        <line x1={12} y1={8} x2="12.01" y2={8} />
                        <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                    <span className="text-lg font-semibold text-red-500">
                        {state.pekerja_comment}
                    </span>
                </div>
                <span className="text-lg font-semibold">
                    {state.question?.question}
                </span>
                <TextAreaInput
                    placeholder="Komentar"
                    name="customer_comment"
                    handleChange={onHandleChange}
                ></TextAreaInput>
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={requestapproved}
                    // color="danger"
                >
                    Jawab
                </ThirdButtonNoLink>

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeInfoDialog3}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            ;
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Selesaikan Pelayanan ?"}
            >
                {myReservations.reservation_category_id === 2 && <figure class="flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
                    <div class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
                        <div class="px-4 sm:px-0">
                            <div class="mx-auto max-w-lg py-2 text-sm/6 text-gray-900 dark:text-gray-200">
                                <p class="text-justify">
                                    Sebelum menyelesaikan layanan, pastikan
                                    untuk mengecek kembali semua barang bawaan
                                    Anda di dalam kendaraan. Pastikan tidak ada
                                    yang tertinggal agar perjalanan Anda tetap
                                    nyaman dan aman. Terima kasih!
                                </p>
                            </div>
                        </div>
                    </div>
                </figure>}
                
                <figure class="flex flex-col mt-2 gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
                    <div class="not-prose overflow-auto p-2 rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
                        <p className="py-4 text-sm font-semibold text-center">
                            Berikan Tip
                        </p>
                        <div className="col-span-6 sm:col-span-3">
                            <input
                                type="number"
                                name="tip"
                                id="tip"
                                onChange={onChangeTipHandler}
                                onWheel={(e) => e.target.blur()}
                                autoComplete="off"
                                className="block w-full mt-0 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.tip && (
                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                    {errors.tip}
                                </span>
                            )}
                            <div className="inline mt-1 ml-1 text-xs font-semibold text-left text-indigo-500">
                                {tip && formatRupiahTip}{" "}
                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-left text-indigo-500">
                                    {tip && "(" + Terbilang(tip) + " Rupiah)"}
                                </span>
                            </div>
                        </div>
                        {/* <RadioCard
                    ShouldMap={tips}
                    selected={selected}
                    onChange={(e) => {
                        setData({
                            ...data,
                            ["tip"]: e.id,
                        });
                        setSelected(e);
                    }}
                /> */}
                    </div>
                </figure>
                <figure class="flex flex-col my-2 gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
                    <div class="not-prose overflow-auto p-2 rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
                        <p className="pt-4 pb-2 text-center">Berikan Rating</p>

                        {/* Rating */}
                        <div className="flex flex-row-reverse items-center justify-center pb-8">
                            <input
                                id="hs-ratings-readonly-1"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        ["rating"]: 5,
                                    });
                                }}
                                defaultValue={1}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-1"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-2"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        ["rating"]: 4,
                                    });
                                }}
                                defaultValue={2}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-2"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-3"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        ["rating"]: 3,
                                    });
                                }}
                                defaultValue={3}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-3"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-4"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        ["rating"]: 2,
                                    });
                                }}
                                defaultValue={4}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-4"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-5"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name="hs-ratings-readonly"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        ["rating"]: 1,
                                    });
                                }}
                                defaultValue={5}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-5"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </figure>
                {/* End Rating */}
                {myReservations.reservation_category_id=== 2 && ratingCategories.map((item, index) => (
                    <div className="px-2 pt-2 my-2 border rounded-lg">
                        <p className="text-left">{item.name}</p>

                        <div className="flex flex-row-reverse items-center justify-center pb-8">
                            <input
                                id="hs-ratings-readonly-1"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name={item.id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [item.id]: 5,
                                    });
                                }}
                                defaultValue={1}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-1"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-2"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name={item.id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [item.id]: 4,
                                    });
                                }}
                                defaultValue={2}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-2"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-3"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name={item.id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [item.id]: 3,
                                    });
                                }}
                                defaultValue={3}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-3"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-4"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name={item.id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [item.id]: 2,
                                    });
                                }}
                                defaultValue={4}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-4"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                            <input
                                id="hs-ratings-readonly-5"
                                type="radio"
                                className="w-8 h-8 text-transparent bg-transparent border-0 appearance-none cursor-pointer peer -ms-5 checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                name={item.id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [item.id]: 1,
                                    });
                                }}
                                defaultValue={5}
                            />
                            <label
                                htmlFor="hs-ratings-readonly-5"
                                className="text-gray-300 pointer-events-none peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600 dark:text-gray-600"
                            >
                                <svg
                                    className="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                ))}
                

                <TextAreaInput
                    placeholder="Komentar"
                    name="comments"
                    handleChange={onHandleChange}
                ></TextAreaInput>

                <ThirdButtonNoLink
                    className="mt-2"
                    processing={processing}
                    onClick={finishCustomer}
                >
                    Selesai
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeInfoDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenCancelDialog}
                setIsOpenInfoDialog={setIsOpenCancelDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Batalkan Reservasi ?"}
            >
                <p className="p-4 text-left border rounded-lg">
                    Pembatalan hanya bisa dilakukan 2 Jam sebelum layanan atau
                    jika barber tidak ada
                </p>
                <InputLabel className={"text-left mt-4"}>
                    Masukan Alasan
                </InputLabel>
                <TextAreaInput
                    type="text"
                    name="reason"
                    value={data.reason}
                    className="block w-full mt-1"
                    autoComplete="reason"
                    isFocused={true}
                    handleChange={(e) => setData("reason", e.target.value)}
                />
                <InputError
                    message={errors.reason}
                    className="mt-2 mb-2 text-left"
                />

                <ThirdButtonNoLink
                    className="mt-2"
                    processing={processing}
                    onClick={handleCancelReservation}
                >
                    Selesai
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeCancelDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenComplaintDialog}
                setIsOpenInfoDialog={setIsOpenComplaintDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Laporkan Pekerja ?"}
            >
                <p className="p-4 text-left border rounded-lg">
                    Jika melakukan komplain maka secara otomatis layanan akan
                    dibatalkan dan pembayaran akan dikembalikan, jika komplain
                    diterima oleh owner, maka akan mendapat kompensasi tambahan
                </p>
                <InputLabel className={"text-left mt-4"}>
                    Masukan Alasan Laporan
                </InputLabel>
                <TextAreaInput
                    type="text"
                    name="complaint_reason"
                    value={data.complaint_reason}
                    className="block w-full mt-1"
                    autoComplete="complaint_reason"
                    isFocused={true}
                    handleChange={(e) =>
                        setData("complaint_reason", e.target.value)
                    }
                />
                <InputError
                    message={errors.complaint_reason}
                    className="mt-2 mb-2 text-left"
                />

                <ThirdButtonNoLink
                    className="mt-2"
                    processing={processing}
                    onClick={handleComplaintReservation}
                >
                    Kirim Laporan
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeComplaintDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                Reservasi Saya
                            </div>
                        </div>
                        {myReservations.map((item, index) => (
                            <div className="py-5" key={index}>
                                <div className="relative p-2 overflow-hidden duration-150 bg-white rounded-lg shadow cursor-pointer">
                                    {/* <div class="absolute left-0 top-0 h-12 w-12">
                                        <div
                                            className={`absolute transform text-center text-white font-semibold py-1 top-[20px] w-[250px] ${
                                                item.batal_customer == 1
                                                    ? "bg-red-700"
                                                    : item.selesai_customer == 1
                                                    ? "bg-teal-700"
                                                    : item.selesai_team == 1
                                                    ? "bg-yellow-700"
                                                    : item.dikerjakan == 1
                                                    ? "bg-amber-700"
                                                    : "bg-gray-700"
                                            }`}
                                        >
                                            {item.batal_customer == 1 ? (
                                                <>
                                                    Sudah dibatalkan{" "}
                                                    <IconX className="w-4 h-4" />
                                                </>
                                            ) : item.selesai_customer == 1 ? (
                                                <>
                                                    BERES{" "}
                                                    <IconChecks className="w-5 h-5 ml-2" />
                                                </>
                                            ) : item.selesai_team == 1 ? (
                                                <>Menunggu Konfirmasi</>
                                            ) : item.dikerjakan == 1 ? (
                                                <>Sedang dikerjakan</>
                                            ) : (
                                                <>Belum Dikerjakan</>
                                            )}
                                        </div>
                                    </div> */}
                                    <div>
                                        <div className="flex items-center justify-between px-4 my-6">
                                            <p className="font-bold text-gray-500">
                                                Nama Layanan
                                            </p>
                                            <p className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
                                                {item.counterCategoryName}{" "}
                                                {item.counterName}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Kode Bukti
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.code}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Tanggal Reservasi
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.date}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Jam Reservasi
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.time}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Pekerja
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.name}
                                            </p>
                                        </div>
                                        {item.jumlahlayanandiskon > 0 ? (
                                            <div className="flex items-center justify-between px-4 my-4">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Layanan Ke
                                                </p>
                                                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                    {item.layanan_ke}{" "}
                                                    {item.ambil_bonus == 1
                                                        ? "(Cashback)"
                                                        : ""}
                                                </p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {item.answers.map((item, index) => (
                                            <div
                                                className="grid grid-cols-12 gap-1"
                                                key={index}
                                            >
                                                <div className="col-span-10 p-1 mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                    <div>
                                                        <div className="flex items-center justify-between ">
                                                            <p className="text-sm font-semibold text-gray-500">
                                                                {
                                                                    item
                                                                        .question
                                                                        .question
                                                                }
                                                            </p>
                                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                    <div>
                                                        <div className="flex items-center justify-between ">
                                                            {item.approved ==
                                                                0 &&
                                                            item.decline ==
                                                                0 ? (
                                                                <p className="text-sm font-semibold text-yellow-500">
                                                                    <IconHelp />
                                                                </p>
                                                            ) : (
                                                                <></>
                                                            )}

                                                            {item.decline ==
                                                            1 ? (
                                                                <p className="text-sm font-semibold text-red-500">
                                                                    <IconXboxX
                                                                        onClick={() =>
                                                                            openInfoDialog3(
                                                                                item
                                                                            )
                                                                        }
                                                                    />
                                                                </p>
                                                            ) : (
                                                                <p className="text-sm font-semibold text-green-500">
                                                                    <IconCircleCheck />
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                                                            <div>
                                                                                                <div className="flex items-center justify-between ">
                                                                                                    
                                                                                                    
                                                                                                </div>
                                                                                            </div>
                                                                                        </div> */}
                                            </div>
                                            // <div className="py-1" key={index}>
                                            //     <div className="relative p-2 overflow-hidden duration-150 bg-white rounded-lg shadow cursor-pointer">
                                            //         <div>
                                            //             <div className="flex items-center justify-between ">
                                            //                 <p className="text-sm font-semibold text-gray-500">
                                            //                     {
                                            //                         item
                                            //                             .question
                                            //                             .question
                                            //                     }
                                            //                 </p>
                                            //                 <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            //                     {
                                            //                         item.description
                                            //                     }
                                            //                 </p>
                                            //             </div>

                                            //         </div>
                                            //     </div>
                                            // </div>
                                        ))}

                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            {item.batal_customer == 1 ? (
                                                <ThirdButtonNoLink
                                                    className="cursor-not-allowed"
                                                    color="red"
                                                >
                                                    Sudah dibatalkan{" "}
                                                    <IconX className="w-4 h-4" />
                                                </ThirdButtonNoLink>
                                            ) : item.punishment == 2 ? (
                                                <ThirdButtonNoLink
                                                    className="cursor-not-allowed"
                                                    color="amber"
                                                >
                                                    Komplain Ditolak{" "}
                                                    <IconChecks className="w-4 h-4" />
                                                </ThirdButtonNoLink>
                                            ) : item.punishment == 1 ? (
                                                <ThirdButtonNoLink
                                                    className="cursor-not-allowed"
                                                    color="teal"
                                                >
                                                    Komplain Diterima{" "}
                                                    <IconChecks className="w-4 h-4" />
                                                </ThirdButtonNoLink>
                                            ) : item.complaint == 1 ? (
                                                <ThirdButtonNoLink
                                                    className="cursor-not-allowed"
                                                    color="red"
                                                >
                                                    Komplain Terkirim{" "}
                                                    <IconChecks className="w-4 h-4" />
                                                </ThirdButtonNoLink>
                                            ) : item.selesai_customer == 1 ? (
                                                <ThirdButtonNoLink
                                                    color="teal"
                                                    className="cursor-not-allowed"
                                                >
                                                    BERES{" "}
                                                    <IconChecks className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink>
                                            ) : (
                                                <>
                                                    {item.selesai_team == 1 ? (
                                                        <ThirdButtonNoLink
                                                            onClick={() =>
                                                                openInfoDialog(
                                                                    item
                                                                )
                                                            }
                                                            color="teal"
                                                        >
                                                            Selesaikan Layanan
                                                        </ThirdButtonNoLink>
                                                    ) : (
                                                        <>
                                                            {" "}
                                                            {item.dikerjakan ==
                                                            1 ? (
                                                                <ThirdButtonNoLink color="yellow">
                                                                    Sedang
                                                                    dikerjakan
                                                                </ThirdButtonNoLink>
                                                            ) : (
                                                                <>
                                                                    <ThirdButtonNoLink
                                                                        onClick={() =>
                                                                            openCancelDialog(
                                                                                item
                                                                            )
                                                                        }
                                                                        color="secondary"
                                                                    >
                                                                        Batal
                                                                    </ThirdButtonNoLink>
                                                                    <ThirdButton
                                                                        href={route(
                                                                            "reservations.change",
                                                                            {
                                                                                id: item.id,
                                                                                reservationCompany:
                                                                                    item.companySlug,
                                                                            }
                                                                        )}
                                                                        className={
                                                                            item.id
                                                                        }
                                                                        color="tawarin"
                                                                    >
                                                                        Ubah
                                                                    </ThirdButton>
                                                                    <ThirdButtonNoLink
                                                                        onClick={() =>
                                                                            openComplaintDialog(
                                                                                item
                                                                            )
                                                                        }
                                                                        color="danger"
                                                                    >
                                                                        Laporkan
                                                                        Pekerja
                                                                    </ThirdButtonNoLink>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
        // </AuthenticatedLayout>
    );
}
MyReservation.layout = (page) => <AppReservasi children={page}></AppReservasi>;
