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
import Button from "@/Components/Button";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { Inertia } from "@inertiajs/inertia";
import { IconChecks, IconGavel, IconHelp, IconX } from "@tabler/icons";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";

export default function MyCompanyComplaintCustomer({
    auth,
    mustVerifyEmail,
    status,
    myCustomers,
}) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const [isOpenPunishmentDialog, setIsOpenPunishmentDialog] = useState(false);
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const openInfoDialog2 = (item) => {
        setState(item);
        setIsOpenInfoDialog2(true);
    };
    const noPunishment = () => {
        put(route("reservation.nopunishment", state.id), {
            onSuccess: () => setIsOpenInfoDialog(false),
        });
        // console.log('noPunishment')
    };
    const finishService = () => {
        put(route("reservation.finishservice", state.id), {
            onSuccess: () => setIsOpenInfoDialog2(false),
        });
    };
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
        reset();
    };
    const closeInfoDialog2 = () => {
        setIsOpenInfoDialog2(false);
        reset();
    };
    const openPunishmentDialog = (item) => {
        setState(item);
        setIsOpenPunishmentDialog(true);
    };
    const closePunishmentDialog = () => {
        setIsOpenPunishmentDialog(false);
        reset();
        // setSelected();
    };
    const handlePunishmentReservation = (e) => {
        e.preventDefault();
        // console.log('works')
        put(route("reservation.punishmentreservation", state.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenPunishmentDialog(false), reset()]);
            },
            // onSuccess: () => setIsOpenPunishmentDialog(false),
        });
    };
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Tidak Berikan Punishment ?"}
            >
                <p className="p-4 text-base font-semibold text-left border-2 border-yellow-600 rounded-lg">
                    Yakin tolak komplain ?
                </p>
                <InputLabel className={"text-left mt-4"}>
                    Masukan Alasan Menolak Komplain
                </InputLabel>
                <TextAreaInput
                    type="text"
                    name="complaint_decline_reason"
                    value={data.complaint_decline_reason}
                    className="block w-full mt-1"
                    autoComplete="complaint_decline_reason"
                    isFocused={true}
                    handleChange={(e) => setData("complaint_decline_reason", e.target.value)}
                />
                <InputError
                    message={errors.complaint_decline_reason}
                    className="mt-2 mb-2 text-left"
                />
                <ThirdButtonNoLink onClick={noPunishment}>
                    Yakin
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog2}
                setIsOpenInfoDialog={setIsOpenInfoDialog2}
                size="2xl"
                closeButton="false"
                title={"Yakin Selesaikan Pelayanan ?"}
            >
                {/* <ThirdButtonNoLink color="teal" onClick={finishService}>
                    Selesai
                </ThirdButtonNoLink> */}

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialog2}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>

            <InfoModal
                isOpenInfoDialog={isOpenPunishmentDialog}
                setIsOpenInfoDialog={setIsOpenPunishmentDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Terima Komplain ?"}
            >
                <p className="p-4 text-base font-semibold text-left border-2 border-yellow-600 rounded-lg">
                    Yakin berikan punishment ke barber ?
                </p>
                <InputLabel className={"text-left mt-4"}>
                    Masukan Alasan
                </InputLabel>
                <TextAreaInput
                    type="text"
                    name="punishment_comment"
                    value={data.punishment_comment}
                    className="block w-full mt-1"
                    autoComplete="punishment_comment"
                    isFocused={true}
                    handleChange={(e) => setData("punishment_comment", e.target.value)}
                />
                <InputError
                    message={errors.punishment_comment}
                    className="mt-2 mb-2 text-left"
                />

                <ThirdButtonNoLink
                    className="mt-2"
                    processing={processing}
                    onClick={handlePunishmentReservation}
                >
                    Simpan
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closePunishmentDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <Head title="Cancel Customer" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                History Pelanggan Komplain
                            </div>
                        </div>
                        {myCustomers.map((item, index) => (
                            <div className="py-5" key={index}>
                                <div className="p-2 duration-150 bg-white rounded-lg shadow cursor-pointer">
                                    <div>
                                        <div className="flex items-center justify-between px-4 my-6">
                                            <p className="font-bold text-gray-500">
                                                Nama Layanan
                                            </p>
                                            <p className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
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
                                                Team
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Nama Pelanggan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.customerName}
                                            </p>
                                        </div>

                                        {item.complaint == 1 ? (
                                            <div className="flex items-center justify-between px-4 my-4">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Alasan Batal
                                                </p>
                                                <p className="rounded-full bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-600">
                                                    {item.complaint_reason}
                                                </p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            {item.complaint == 1 ? (
                                                <>
                                                    {item.punishment == 2 ? (
                                                        <ThirdButtonNoLink
                                                            className="cursor-pointer"
                                                            color="teal"
                                                        >
                                                            Tolak Komplain{" "}
                                                            <IconChecks className="w-4 h-4" />
                                                        </ThirdButtonNoLink>
                                                    ) : item.punishment == 1 ? (
                                                        <ThirdButtonNoLink
                                                            className="cursor-pointer"
                                                            color="red"
                                                        >
                                                            Already Punish{" "}
                                                            <IconX className="w-4 h-4" />
                                                        </ThirdButtonNoLink>
                                                    ) : (
                                                        <>
                                                            <ThirdButtonNoLink
                                                                className="cursor-pointer"
                                                                color="red"
                                                                onClick={() =>
                                                                    openInfoDialog(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                Tolak Komplain{" "}
                                                                <IconHelp className="w-4 h-4" />
                                                            </ThirdButtonNoLink>
                                                            <ThirdButtonNoLink
                                                                className="cursor-pointer"
                                                                color="yellow"
                                                                onClick={() =>
                                                                    openPunishmentDialog(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                Punishment{" "}
                                                                <IconGavel className="w-4 h-4" />
                                                            </ThirdButtonNoLink>
                                                        </>
                                                    )}
                                                </>
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
                                                            color="yellow"
                                                            className="cursor-not-allowed"
                                                        >
                                                            Menunggu Konfirmasi
                                                            Pelanggan
                                                        </ThirdButtonNoLink>
                                                    ) : (
                                                        <>
                                                            {item.dikerjakan ==
                                                            1 ? (
                                                                <ThirdButtonNoLink>
                                                                    Sedang
                                                                    dikerjakan...
                                                                </ThirdButtonNoLink>
                                                            ) : (
                                                                <ThirdButtonNoLink>
                                                                    Mulai
                                                                </ThirdButtonNoLink>
                                                            )}
                                                            {item.dikerjakan ==
                                                            1 ? (
                                                                <ThirdButtonNoLink
                                                                    onClick={() =>
                                                                        openInfoDialog2(
                                                                            item
                                                                        )
                                                                    }
                                                                    color="cyan"
                                                                >
                                                                    Selesai
                                                                </ThirdButtonNoLink>
                                                            ) : (
                                                                <ThirdButtonNoLink
                                                                    color="gray"
                                                                    className="cursor-not-allowed"
                                                                >
                                                                    Selesai
                                                                </ThirdButtonNoLink>
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
MyCompanyComplaintCustomer.layout = (page) => (
    <AppReservasi children={page}></AppReservasi>
);
