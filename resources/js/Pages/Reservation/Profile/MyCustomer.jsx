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
import { IconChecks } from "@tabler/icons";

export default function MyCustomer({
    auth,
    mustVerifyEmail,
    status,
    myCustomers,
}) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const { data, setData, patch,post,put, processing, errors, reset } = useForm({
    });
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
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
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
    };
    const closeInfoDialog2 = () => {
        setIsOpenInfoDialog2(false);
    };
    // console.log(myCustomers)
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Mulai Pelayanan ?"}
            >
                <ThirdButtonNoLink processing={processing} onClick={startService}>
                    Mulai
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
                isOpenInfoDialog={isOpenInfoDialog2}
                setIsOpenInfoDialog={setIsOpenInfoDialog2}
                size="2xl"
                closeButton="false"
                title={"Yakin Selesaikan Pelayanan ?"}
            >
                <ThirdButtonNoLink processing={processing} onClick={finishService}>
                    Selesai
                </ThirdButtonNoLink>
                
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeInfoDialog2}
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
                                Pelanggan Saya
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
                                        <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
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
                                            Nama Pelanggan
                                        </p>
                                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            {item.user.name}
                                        </p>
                                    </div>
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            {item.selesai_customer == 1 ? (
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
                                                                    dikerjakan
                                                                    ...
                                                                </ThirdButtonNoLink>
                                                            ) : (
                                                                <ThirdButtonNoLink
                                                                    onClick={() =>
                                                                        openInfoDialog(
                                                                            item
                                                                        )
                                                                    }
                                                                >
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
MyCustomer.layout = (page) => <AppReservasi children={page}></AppReservasi>;
