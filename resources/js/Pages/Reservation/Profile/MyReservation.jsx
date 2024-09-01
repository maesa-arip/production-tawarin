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
import { IconChecks, IconX } from "@tabler/icons";
import RadioCard from "@/Components/RadioCard";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function MyReservation({ myReservations, tips }) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenCancelDialog, setIsOpenCancelDialog] = useState(false);
    const [isOpenComplaintDialog, setIsOpenComplaintDialog] = useState(false);
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const finishCustomer = () => {
        put(route("reservation.finishcustomer", state.id), {
            onSuccess: () => setIsOpenInfoDialog(false),
        });
    };

    const [selected, setSelected] = useState();
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
        setSelected();
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

    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Selesaikan Pelayanan ?"}
            >
                <p className="py-4 text-left">Berikan Tip</p>
                <RadioCard
                    ShouldMap={tips}
                    selected={selected}
                    onChange={(e) => {
                        setData({
                            ...data,
                            ["tip"]: e.id,
                        });
                        setSelected(e);
                    }}
                />
                <p className="pt-8 pb-2 text-left">Berikan Rating</p>
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
                {/* End Rating */}

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
                title={"Yakin Laporkan Barber ?"}
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

                                        {/* <div className="flex items-center justify-between px-4 my-4">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Status
                                        </p>
                                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                        {item.id}
                                        </p>
                                    </div> */}
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
                                            ) : item.punishment == 1 ? (<ThirdButtonNoLink
                                                className="cursor-not-allowed"
                                                color="teal"
                                            >
                                                Komplain Diterima{" "}
                                                <IconChecks className="w-4 h-4" />
                                            </ThirdButtonNoLink>) : item.complaint == 1 ? (
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
                                                                        Laporkan Barber
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
