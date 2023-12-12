import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import NavLink from "@/Components/NavLink";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CopyButton from "@/Components/CopyButton";
import ThirdButton from "@/Components/ThirdButton";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { Inertia } from "@inertiajs/inertia";
import { IconChecks } from "@tabler/icons";

export default function MyReservation({ myReservations }) {
    const [state, setState] = useState([])
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false)
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const finishCustomer = () => {
        Inertia.put(route("reservation.finishcustomer", state.id), {
            onSuccess: () => setIsOpenInfoDialog(false), 
        });
    };
    return (

        <>
        <InfoModal
                    isOpenInfoDialog={isOpenInfoDialog}
                    setIsOpenInfoDialog={setIsOpenInfoDialog}
                    size="2xl"
                    title={"Selesaikan Pelayanan ?"}
                >
                    <ThirdButtonNoLink color="teal" onClick={finishCustomer}>
                        Selesai
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
                        {myReservations.map((item,index)=>(
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
                                            23
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
                                            1
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
                                            Status
                                        </p>
                                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                        {item.id}
                                        </p>
                                    </div>
                                    <div className="flex items-center px-4 my-4 justify-evenly">
                                        {item.selesai_customer == 1 ? (<ThirdButtonNoLink
                                                    color="teal"
                                                    className="cursor-not-allowed"
                                                >
                                                    BERES <IconChecks className="w-5 h-5 ml-2"/>
                                                </ThirdButtonNoLink>):(<>{item.selesai_team == 1 ? <ThirdButtonNoLink onClick={() =>openInfoDialog(item)} color="teal" >Selesaikan Layanan</ThirdButtonNoLink> : (<> {item.dikerjakan == 1 ? <ThirdButtonNoLink color="yellow">Sedang dikerjakan</ThirdButtonNoLink> : <ThirdButton color="gray">Belum dikerjakan</ThirdButton>}</>)}</>)}
                                        
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
MyReservation.layout = (page) => <App children={page}></App>;
