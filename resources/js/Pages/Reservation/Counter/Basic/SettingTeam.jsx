import Container from "@/Components/Container";
import { numberFormat } from "@/Libs/helper";
import { Head, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import EditModal from "@/Components/Modal/EditModal";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { IconChecks, IconLoader } from "@tabler/icons";

export default function SettingTeam({ reservationCounter }) {
    // console.log(reservationCounter);
    const [state, setState] = useState([]);
    const [isOpenJoinDialog, setIsOpenJoinDialog] = useState(false);
    const [isOpenTeamDialog, setIsOpenTeamDialog] = useState(false);
    const openJoinDialog = (result) => {
        setState(result);
        setIsOpenJoinDialog(true);
    };
    const openTeamDialog = (result) => {
        setState(result);
        setIsOpenTeamDialog(true);
    };
    const { data, setData, patch,post, processing, errors, reset } = useForm({
        // email: "",
    });
    const submit = (e) => {
        e.preventDefault();
        patch(route("reservation.joincounter", state.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenJoinDialog(false), reset()]);
            },
        });
    };
    const submitTeam = (e) => {
        e.preventDefault();
        post(route("reservation.maketeam",reservationCounter.slug), {
            onSuccess: () => {
                return Promise.all([setIsOpenTeamDialog(false), reset()]);
            },
        });
    };
    // console.log(reservationCounter)
    return (
        <div>
            <EditModal
                isOpenEditDialog={isOpenJoinDialog}
                setIsOpenEditDialog={setIsOpenJoinDialog}
                size="2xl"
                title={"Masukan Email Karyawan"}
            >
                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                    <ThirdButtonNoLink className="mt-4" disabled={processing}>
                        Undang
                    </ThirdButtonNoLink>
                </form>
            </EditModal>
            <EditModal
                isOpenEditDialog={isOpenTeamDialog}
                setIsOpenEditDialog={setIsOpenTeamDialog}
                size="2xl"
                title={"Masukan Nama Team"}
            >
                <form onSubmit={submitTeam}>
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                    <ThirdButtonNoLink className="mt-4" disabled={processing}>
                        Simpan
                    </ThirdButtonNoLink>
                </form>
            </EditModal>
            <Head title="Counter" />
            <Container>
                <div className="bg-white">
                    <div className="grid items-start grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {reservationCounter.name}
                            </h2>

                            <p className="mt-4 font-semibold text-gray-500">
                                kode : {reservationCounter.code}
                            </p>

                            <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Harga
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp{" "}
                                        {numberFormat(reservationCounter.price)}
                                    </dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Persentase Owner
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {reservationCounter.percent_owner}
                                    </dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Persentase Karyawan
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {reservationCounter.percent_employe}
                                    </dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Durasai Pelayanan
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {reservationCounter.service_duration}{" "}
                                        Menit
                                    </dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Batas Waktu Reservasi
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {reservationCounter.period} Hari
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Team <ThirdButtonNoLink onClick={() =>
                                                        openTeamDialog()
                                                    }
                                                >
                                                    Tambah</ThirdButtonNoLink>
                            </h2>
                            <div className="w-full">
                                {reservationCounter.team.map(
                                    (result, index) => (
                                        <div
                                            key={index}
                                            className="col-span-12 p-2 mb-4 overflow-hidden border rounded-xl"
                                        >
                                            <div className="flex justify-between font-semibold text-gray-500">
                                                <p>{result.name}</p>
                                                {reservationCounter.need_team == 0 && reservationCounter.team ? <ThirdButtonNoLink color="yellow">
                                                    Full
                                                </ThirdButtonNoLink> : <ThirdButtonNoLink
                                                    onClick={() =>
                                                        openJoinDialog(result)
                                                    }
                                                >
                                                    Undang Karyawan
                                                </ThirdButtonNoLink> }
                                                
                                            </div>
                                            <dl className="grid grid-cols-1 mt-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                                <div className="w-full pt-4 border-t border-gray-200">
                                                    {result.joincounter.map(
                                                        (detail, index) => (
                                                            <div
                                                                className="grid items-center grid-cols-12"
                                                                key={index}
                                                            >
                                                                <dt className="col-span-9 text-xs text-gray-900">
                                                                    {
                                                                        detail.email
                                                                    }
                                                                </dt>
                                                                <dd className="col-span-3 text-xs text-gray-500">
                                                                    {detail.approved ==1 ? (<div className="flex">Team <IconChecks className="w-4 h-4 ml-auto text-blue-400" /></div>) : (<div className="flex">Menunggu <IconLoader className="w-4 h-4 ml-auto text-yellow-400" /></div>)}
                                                                </dd>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </dl>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
SettingTeam.layout = (page) => <AppReservasi children={page} />;
