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
import { IconChecks, IconCircleCheck, IconXboxX } from "@tabler/icons";
import { numberFormat } from "@/Libs/helper";

export default function MyTeamInvitation({
    auth,
    mustVerifyEmail,
    status,
    myInvitations,
}) {
    const [state, setState] = useState([]);
    const [isOpenAcceptDialog, setIsOpenAcceptDialog] = useState(false);
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
        put(route("reservation.acceptinvitation", state.id), {
            onSuccess: () => setIsOpenAcceptDialog(false),
        });
    };
    // console.log(myInvitations)
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
            >
                <ThirdButtonNoLink color="teal" onClick={acceptInvitation}>
                    Terima
                </ThirdButtonNoLink>
            </InfoModal>
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                Undangan Karyawan
                            </div>
                        </div>
                        {myInvitations.map((item, index) => (
                            <div className="py-5" key={index}>
                                <div className="p-2 duration-150 bg-white rounded-lg shadow cursor-pointer">
                                    <div>
                                        <div className="flex items-center justify-between px-4 my-6">
                                            <p className="font-bold text-gray-500">
                                                Nama Perusahaan
                                            </p>
                                            <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                                                {item.team.counter.company.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Nama Layanan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.team.counter.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Lama Layanan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.team.counter.service_duration} Menit
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Harga Layanan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            Rp. {numberFormat(item.team.counter.price_user)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Komisi
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.team.counter.percent_employe}%
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Nama Team
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.team.name}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            {item.approved == 1 ? <ThirdButtonNoLink
                                                    color="teal"
                                                    className="cursor-not-allowed"
                                                >
                                                    SUDAH MENJADI TEAM{" "}
                                                    <IconChecks className="w-5 h-5 ml-2" />
                                                </ThirdButtonNoLink> : <><ThirdButtonNoLink
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
MyTeamInvitation.layout = (page) => <AppReservasi children={page}></AppReservasi>;
