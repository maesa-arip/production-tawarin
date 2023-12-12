import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "../Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "../Profile/Partials/UpdateProfileInformationForm";
import { Head, useForm } from "@inertiajs/inertia-react";
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
import EditModal from "@/Components/Modal/EditModal";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import InputError from "@/Components/InputError";

export default function MyCounter({ myCounters }) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenDaftarDialog, setIsOpenDaftarDialog] = useState(false);
    const openDaftarDialog = (item) => {
        setState(item);
        setIsOpenDaftarDialog(true);
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        code: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("reservation.daftarcounter"), {
            onSuccess: () => {
                return Promise.all([setIsOpenDaftarDialog(false), reset()]);
            },
        });
    };
    return (
        <>
            <EditModal
                isOpenEditDialog={isOpenDaftarDialog}
                setIsOpenEditDialog={setIsOpenDaftarDialog}
                size="2xl"
                title={"Masukan Kode Counter"}
            >
                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="code"
                        value={data.code}
                        className="block w-full mt-1"
                        autoComplete="code"
                        isFocused={true}
                        onChange={(e) => setData("code", e.target.value)}
                        // required
                    />
                    <InputError message={errors.code} className="mt-2" />
                    <ThirdButtonNoLink className="mt-4" disabled={processing}>
                        Daftar
                    </ThirdButtonNoLink>
                </form>
            </EditModal>

            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                Layanan Saya
                            </div>
                        </div>
                        <ThirdButtonNoLink
                            onClick={() => openDaftarDialog()}
                            className="mt-4"
                        >
                            Daftar Layanan
                        </ThirdButtonNoLink>
                        {myCounters.map((item, index) => (
                            <div className="py-5" key={index}>
                                <div className="p-2 duration-150 bg-white rounded-lg shadow cursor-pointer">
                                    <div>
                                        <div className="flex items-center justify-between px-4 my-6">
                                            <p className="font-bold text-gray-500">
                                                Nama Layanan
                                            </p>
                                            <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Kode
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.code}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Nama Perusahaan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.companyName}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Harga Counter
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.price}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Persentase Employe
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.percent_employe}%
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between px-4 my-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Lama Pelayanan
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                {item.service_duration} menit
                                            </p>
                                        </div>
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            <ThirdButton color="emerald">
                                                Lihat Pelanggan
                                            </ThirdButton>
                                            {/* {item.selesai_customer == 1 ? (<ThirdButtonNoLink
                                                    color="teal"
                                                    className="cursor-not-allowed"
                                                >
                                                    BERES <IconChecks className="w-5 h-5 ml-2"/>
                                                </ThirdButtonNoLink>):(<>{item.selesai_team == 1 ? <ThirdButtonNoLink onClick={() =>openInfoDialog(item)} color="teal" >Selesaikan Layanan</ThirdButtonNoLink> : (<> {item.dikerjakan == 1 ? <ThirdButtonNoLink color="yellow">Sedang dikerjakan</ThirdButtonNoLink> : <ThirdButton color="gray">Belum dikerjakan</ThirdButton>}</>)}</>)} */}
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
MyCounter.layout = (page) => <App children={page}></App>;
