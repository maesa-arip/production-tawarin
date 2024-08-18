import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import InfoModal from "@/Components/Modal/InfoModal";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { IconComet, IconCopy, IconFileDescription, IconShare } from "@tabler/icons";
import toast, { Toaster } from "react-hot-toast";
import Filepond from "@/Pages/Uploads/Filepond";
import ThirdButton from "@/Components/ThirdButton";

export default function Show({ transaction }) {
    const { data, setData, patch, clearErrors, processing, reset, errors } =
        useForm({});
    const confirmedHandler = (e) => {
        e.preventDefault();
        patch(route("adminwithdraw.confirmed", transaction.id));
    };
    const [isOpenDeclineDialog, setIsOpenDeclineDialog] = useState(false);
    const [isOpenAcceptDialog, setIsOpenAcceptDialog] = useState(false);
    const [state, setState] = useState([]);
    const openDeclineDialog = (data) => {
        setIsOpenDeclineDialog(true);
        setState(data);
    };
    const closeDeclineDialog = () => {
        setIsOpenDeclineDialog(false);
    };
    const openAcceptDialog = (data) => {
        setIsOpenAcceptDialog(true);
        setState(data);
    };
    const closeAcceptDialog = () => {
        setIsOpenAcceptDialog(false);
    };
    // const acceptWithdrawHandler = (e) => {
    //     e.preventDefault();
    //     patch(route("adminwithdraw.confirmed", transaction.id));
    // };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        patch(route("adminwithdraw.confirmed", transaction.id), {
            data,
            onSuccess: () => {
                return Promise.all([setIsOpenAcceptDialog(false), reset()]);
            },
        });
    };
    const declineWithdrawHandler = (e) => {
        e.preventDefault();
        patch(route("adminwithdraw.decline", transaction.id));
    };
    const notify = () => toast.success("Success Copy");
    return (
        <div>
            <Head title="Transactions" />
            <InfoModal
                isOpenInfoDialog={isOpenDeclineDialog}
                setIsOpenInfoDialog={setIsOpenDeclineDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Tolak Top Up ?"}
            >
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
                    processing={processing}
                    onClick={declineWithdrawHandler}
                >
                    Tolak
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeDeclineDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenAcceptDialog}
                setIsOpenInfoDialog={setIsOpenAcceptDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Terima Withdraw ?"}
            >
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Bukti Transfer
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
                                                        allowMultiple={false}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <ThirdButtonNoLink
                        processing={processing}
                        // onClick={acceptWithdrawHandler}
                    >
                        Terima
                    </ThirdButtonNoLink>

                    <ThirdButtonNoLink
                        className="mx-2 mt-2"
                        color="secondary"
                        onClick={closeAcceptDialog}
                    >
                        Close
                    </ThirdButtonNoLink>
                </form>
            </InfoModal>
            <Container>
                {transaction.confirmed == 1 ? (
                    <div className="flex items-center justify-center min-h-screen -mt-24 ">
                        <div className="w-full max-w-sm p-6 bg-white border shadow-lg rounded-xl">
                            <div className="flex flex-col items-center">
                                {/* Icon and Message */}
                                <div className="p-4 mb-4 ">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 text-green-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg> */}
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-green-500 icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>


                                    {/* <IconComet className="w-16 h-16 text-green-500"/> */}
                                </div>
                                <h1 className="text-xl font-bold text-gray-700">
                                    Payment Successful
                                </h1>
                            </div>
                            {/* Payment Details */}
                            <div className="p-4 mt-6 rounded-lg bg-gray-50">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h2 className="text-gray-500 uppercase">
                                            {transaction.meta?.account_name}
                                        </h2>
                                        <p className="text-sm text-gray-400">
                                            {transaction.meta?.bank_name} -{" "}
                                            {transaction.meta?.account_number}
                                        </p>
                                    </div>
                                    <div className="px-3 py-1 text-white uppercase bg-yellow-400 rounded-full">
                                    {Array.from(transaction.meta?.account_name)[0]}
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-700">
                                    Rp{" "}
                                    {numberFormat(Math.abs(transaction.amount))}
                                </div>
                                <div className="flex justify-between mt-4 text-sm text-gray-500">
                                    <div>
                                        <p>Transfer Date</p>
                                        <p className="font-semibold">
                                            {transaction.date}
                                        </p>
                                    </div>
                                    <div>
                                        <p>Time</p>
                                        <p className="font-semibold">{transaction.time}</p>
                                    </div>
                                </div>
                                {/* Action Buttons */}
                                <div className="flex mt-6 space-x-2">
                                    <button className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 text-sm text-gray-600 bg-gray-100 rounded-lg">
                                        <IconShare className="w-4 h-4 text-yellow-600"/>
                                        <span>Send receipt</span>
                                    </button>
                                    <button className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 text-sm text-gray-600 bg-gray-100 rounded-lg">
                                       
                                        <IconFileDescription className="w-4 h-4 text-yellow-600"/>
                                        <span>See Details</span>
                                    </button>
                                </div>
                            </div>
                            {/* Done Button */}
                            <ThirdButton type="button" href={'/adminwithdraws'} className="items-center justify-center w-full py-3 mt-6 text-lg font-bold text-center text-white bg-yellow-400 rounded-lg">
                                Done
                            </ThirdButton>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white">
                        <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Detail Transfer
                                </h2>

                                <p className="mt-4 text-gray-500"></p>

                                <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    {/* <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jenis
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {transaction.payable_type}
                                    </dd>
                                </div> */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <dt className="font-medium text-gray-900">
                                            Tipe
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {transaction.type}
                                        </dd>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <dt className="font-medium text-gray-900">
                                            Status
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {transaction.confirmed == 0 &&
                                            transaction.meta?.type ==
                                                "decline" ? (
                                                <ThirdButtonSmallNoLink color="red">
                                                    Ditolak
                                                </ThirdButtonSmallNoLink>
                                            ) : transaction.confirmed == 1 ? (
                                                <ThirdButtonSmallNoLink color="teal">
                                                    Diterima
                                                </ThirdButtonSmallNoLink>
                                            ) : (
                                                <ThirdButtonSmallNoLink color="secondary">
                                                    Menunggu Konfirmasi
                                                </ThirdButtonSmallNoLink>
                                            )}
                                        </dd>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <dt className="font-medium text-gray-900">
                                            Jumlah Withdraw
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            <button
                                                onClick={() => {
                                                    notify();
                                                    navigator.clipboard.writeText(
                                                        Math.abs(
                                                            transaction.amount
                                                        )
                                                    );
                                                }}
                                                type="button"
                                                className="js-clipboard-example [--is-toggle-tooltip:false] hs-tooltip relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                                data-clipboard-target="#hs-clipboard-tooltip-on-hover"
                                                data-clipboard-action="copy"
                                                data-clipboard-success-text="Copied"
                                            >
                                                <p>
                                                    Rp{" "}
                                                    {numberFormat(
                                                        transaction.amount
                                                    )}
                                                </p>
                                                <span className="border-s ps-3.5">
                                                    <IconCopy className="w-6 h-6" />
                                                </span>
                                            </button>
                                        </dd>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <dt className="font-medium text-gray-900">
                                            Informasi Bank
                                        </dt>

                                        <dd className="mt-2 text-sm text-gray-500">
                                            <div className="col-span-12 gap-2 px-3 py-4 mb-6 text-sm text-gray-500 rounded-lg shadow md:col-span-8">
                                                <div className="flex items-center justify-between p-2 mb-2 rounded-lg shadow-lg">
                                                    <p>Nama Bank</p>
                                                    <div>
                                                        <button
                                                            onClick={() => {
                                                                notify();
                                                                navigator.clipboard.writeText(
                                                                    transaction
                                                                        .meta
                                                                        ?.bank_name
                                                                );
                                                            }}
                                                            type="button"
                                                            className="ml-4 js-clipboard-example [--is-toggle-tooltip:false] hs-tooltip relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                                            data-clipboard-target="#hs-clipboard-tooltip-on-hover"
                                                            data-clipboard-action="copy"
                                                            data-clipboard-success-text="Copied"
                                                        >
                                                            <p>
                                                                {
                                                                    transaction
                                                                        .meta
                                                                        ?.bank_name
                                                                }
                                                            </p>
                                                            <span className="border-s ps-3.5">
                                                                <IconCopy className="w-6 h-6" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between p-2 mb-2 rounded-lg shadow-lg">
                                                    <p>Nomor Rekening</p>
                                                    <div>
                                                        <button
                                                            onClick={() => {
                                                                notify();
                                                                navigator.clipboard.writeText(
                                                                    transaction
                                                                        .meta
                                                                        ?.account_number
                                                                );
                                                            }}
                                                            type="button"
                                                            className="ml-4 js-clipboard-example [--is-toggle-tooltip:false] hs-tooltip relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                                            data-clipboard-target="#hs-clipboard-tooltip-on-hover"
                                                            data-clipboard-action="copy"
                                                            data-clipboard-success-text="Copied"
                                                        >
                                                            <p>
                                                                {
                                                                    transaction
                                                                        .meta
                                                                        ?.account_number
                                                                }
                                                            </p>
                                                            <span className="border-s ps-3.5">
                                                                <IconCopy className="w-6 h-6" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between p-2 rounded-lg shadow-lg">
                                                    <p>Nama Pemilik</p>
                                                    <div>
                                                        <button
                                                            onClick={() => {
                                                                notify();
                                                                navigator.clipboard.writeText(
                                                                    transaction
                                                                        .meta
                                                                        ?.account_name
                                                                );
                                                            }}
                                                            type="button"
                                                            className="ml-4 js-clipboard-example [--is-toggle-tooltip:false] hs-tooltip relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                                            data-clipboard-target="#hs-clipboard-tooltip-on-hover"
                                                            data-clipboard-action="copy"
                                                            data-clipboard-success-text="Copied"
                                                        >
                                                            <p>
                                                                {
                                                                    transaction
                                                                        .meta
                                                                        ?.account_name
                                                                }
                                                            </p>
                                                            <span className="border-s ps-3.5">
                                                                <IconCopy className="w-6 h-6" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            {transaction.confirmed == 0 &&
                                            transaction.meta?.type ==
                                                "decline" ? (
                                                <div className="px-1 py-3 text-right sm:px-6">
                                                    <p className="text-sm font-medium text-left text-red-500">
                                                        {
                                                            transaction.meta
                                                                ?.message
                                                        }
                                                    </p>
                                                </div>
                                            ) : transaction.confirmed == 1 ? (
                                                <></>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-end bg-gray-50">
                                        {transaction.confirmed == 0 &&
                                        transaction.meta?.type == "decline" ? (
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <ThirdButtonNoLink color="red">
                                                    Withdraw Sudah Ditolak
                                                </ThirdButtonNoLink>
                                            </div>
                                        ) : transaction.confirmed == 1 ? (
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <ThirdButtonNoLink color="teal">
                                                    Withdraw Sudah Diterima
                                                </ThirdButtonNoLink>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="px-4 py-3 text-right sm:px-6">
                                                    <Button
                                                        color="pink"
                                                        onClick={
                                                            openDeclineDialog
                                                        }
                                                    >
                                                        Tolak
                                                    </Button>
                                                </div>
                                                <div className="px-4 py-3 text-right sm:px-6">
                                                    <Button
                                                        onClick={
                                                            openAcceptDialog
                                                        }
                                                    >
                                                        Konfirmasi
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
