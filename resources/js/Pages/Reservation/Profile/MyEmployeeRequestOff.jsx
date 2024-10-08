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
import { IconChecks, IconCircleCheck, IconX, IconXboxX } from "@tabler/icons";
import { numberFormat } from "@/Libs/helper";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";

export default function MyEmployeeRequestOff({
    auth,
    mustVerifyEmail,
    status,
    myEmployeeRequestOff,
}) {
    // console.log(myEmployeeRequestOff)
    const [state, setState] = useState([]);
    const [isOpenAcceptDialog, setIsOpenAcceptDialog] = useState(false);
    const [isOpenDeclineDialog, setIsOpenDeclineDialog] = useState(false);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const { data, setData, patch,post,put, processing, errors, reset } = useForm({
    });
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const openAcceptDialog = (item) => {
        setState(item);
        setIsOpenAcceptDialog(true);
    };
    const closeAcceptDialog = (item) => {
        // setState(item);
        setIsOpenAcceptDialog(false);
    };

    const openDeclineDialog = (item) => {
        setState(item);
        setIsOpenDeclineDialog(true);
    };
    const closeDeclineDialog = (item) => {
        // setState(item);
        setIsOpenDeclineDialog(false);
    };
    const openInfoDialog2 = (item) => {
        setState(item);
        setIsOpenInfoDialog2(true);
    };
    const startService = () => {
        put(route("reservation.startservice", state.id), {
            onSuccess: () => setIsOpenInfoDialog(false),
        });
    };
    const finishService = () => {
        put(route("reservation.finishservice", state.id), {
            onSuccess: () => setIsOpenInfoDialog2(false),
        });
    };

    const acceptInvitation = (e) => {
        e.preventDefault();
        put(route("reservation.acceptdayoff", state.id), {
            onSuccess: () => setIsOpenAcceptDialog(false),
        });
    };

    const declineDayOff = (e) => {
        e.preventDefault();
        put(route("reservation.declinedayoff", state.id), {
            onSuccess: () => setIsOpenDeclineDialog(false),
        });
    };
    // console.log(myEmployeeRequestOff)
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                title={"Mulai Pelayanan ?"}
            >
                <ThirdButtonNoLink processing={processing} onClick={startService}>
                    Mulai
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog2}
                setIsOpenInfoDialog={setIsOpenInfoDialog2}
                size="2xl"
                title={"Selesaikan Pelayanan ?"}
            >
                <ThirdButtonNoLink color="teal" onClick={finishService}>
                    Selesai
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenAcceptDialog}
                setIsOpenInfoDialog={setIsOpenAcceptDialog}
                size="2xl"
                title={"Yakin Terima ?"}
                closeButton="false"
            >
                <ThirdButtonNoLink className="mx-2" onClick={acceptInvitation}>
                    Terima
                </ThirdButtonNoLink>
                <ThirdButtonNoLink color="secondary" onClick={closeAcceptDialog}>
                    Batal
                </ThirdButtonNoLink>
            </InfoModal>

            <InfoModal
                isOpenInfoDialog={isOpenDeclineDialog}
                setIsOpenInfoDialog={setIsOpenDeclineDialog}
                size="2xl"
                title={"Yakin Tolak ?"}
                closeButton="false"
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
                <ThirdButtonNoLink className="mx-2 mt-2" onClick={declineDayOff}>
                    Tolak
                </ThirdButtonNoLink>
                <ThirdButtonNoLink color="secondary" onClick={closeDeclineDialog}>
                    Batal
                </ThirdButtonNoLink>
            </InfoModal>
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                Request Libur
                            </div>
                        </div>
                        {myEmployeeRequestOff.map((item, index) => (
                            <div className="py-5" key={index}>
                                <div className="p-2 duration-150 bg-white rounded-lg shadow cursor-pointer">
                                    <div>
                                        <div className="flex items-center justify-between px-4 my-6">
                                            <p className="font-bold text-gray-500">
                                                Karyawan
                                            </p>
                                            <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                                                {item.user.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Hari Libur
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.date}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Alasan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.reason}
                                            </p>
                                        </div>
                                        {item.decline == 1 ? <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Alasan di Tolak
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.decline_reason}
                                            </p>
                                        </div> : <></>}
                                        
                                       
                                        
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                        {item.decline == 1 ? <ThirdButtonNoLink
                                                    color="red"
                                                    className="cursor-not-allowed"
                                                >
                                                    SUDAH Ditolak{" "}
                                                    <IconX className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink>: 
                                            item.approved == 1 ? 
                                            <ThirdButtonNoLink
                                                    color="teal"
                                                    className="cursor-not-allowed"
                                                >
                                                    SUDAH DISETUJUI{" "}
                                                    <IconChecks className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink> 
                                                : 
                                                <><ThirdButtonNoLink
                                                    color="teal"
                                                    className=""  onClick={() =>
                                                        openAcceptDialog(
                                                            item
                                                        )
                                                    }
                                                >
                                                    TERIMA{" "}
                                                    <IconCircleCheck className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink>
                                                <ThirdButtonNoLink
                                                    color="red"
                                                    className=""
                                                    onClick={() =>
                                                        openDeclineDialog(
                                                            item
                                                        )
                                                    }
                                                >
                                                    TOLAK{" "}
                                                    <IconXboxX className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink></>}
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
MyEmployeeRequestOff.layout = (page) => <AppReservasi children={page}></AppReservasi>;
