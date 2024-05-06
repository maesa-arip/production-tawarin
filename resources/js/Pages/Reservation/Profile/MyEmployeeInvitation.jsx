import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
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
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";

export default function MyEmployeeInvitation({
    auth,
    mustVerifyEmail,
    status,
    myInvitations,
}) {
    const [state, setState] = useState([]);
    const [isOpenAcceptDialog, setIsOpenAcceptDialog] = useState(false);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const openAcceptDialog = (item) => {
        setState(item);
        setIsOpenAcceptDialog(true);
    };
    const closeAcceptDialog = (item) => {
        setState(item);
        setIsOpenAcceptDialog(false);
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
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={startService}
                >
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
                {/* <ThirdButtonNoLink processing={processing} onClick={startService}>
                    Mulai
                </ThirdButtonNoLink> */}
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeAcceptDialog}
                >
                    Close
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={acceptInvitation}
                >
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
                            <div
                                key={index}
                                className="relative w-full mx-auto mt-4"
                            >
                                <div className="flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-4 col-start-1">
                                                <p className="text-sm font-semibold">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs font-medium text-gray-500">
                                                    {item.email}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end col-span-12 col-end-13">
                                                {item.approved == 1 ? (
                                                    <ThirdButtonSmallNoLink>
                                                        Diterima
                                                    </ThirdButtonSmallNoLink>
                                                ) : (
                                                    <ThirdButtonSmallNoLink color="secondary">
                                                        Menunggu Konfirmasi
                                                    </ThirdButtonSmallNoLink>
                                                )}
                                            </div>

                                            <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                            <div className="flex items-center justify-center col-span-2 col-start-1 mb-2">
                                                <img
                                                    className="object-cover w-12 h-12 border rounded-lg"
                                                    src={
                                                        item.media
                                                            ? item.media
                                                            : "storage/files/default/NoImage.svg"
                                                    }
                                                    alt="0"
                                                ></img>
                                            </div>
                                            <div className="col-span-10 col-start-3 mb-2">
                                                <Link className="text-base font-semibold">
                                                    {item.company.name}
                                                </Link>

                                                <p className="text-xs font-medium text-gray-500">
                                                    {item.phone}
                                                </p>
                                            </div>
                                            <div className="col-span-6 col-start-1">
                                                <div className="flex items-start">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (index) => (
                                                            <div
                                                                key={index}
                                                                className={`w-5 h-5 relative`}
                                                            >
                                                                {index <=
                                                                item.average_rating ? (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                    </svg>
                                                                ) : index -
                                                                      0.95 <
                                                                  item.average_rating ? (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <span className="flex items-start text-xs font-medium text-left text-slate-400">
                                                    {item.average_rating
                                                        ? Math.round(
                                                              item.average_rating *
                                                                  10
                                                          ) / 10
                                                        : 0}{" "}
                                                    out of 5 stars
                                                    <br />(
                                                    {item.count_rating
                                                        ? item.count_rating
                                                        : 0}{" "}
                                                    Reviews dari{" "}
                                                    {item.count_customer
                                                        ? item.count_customer
                                                        : 0}{" "}
                                                    Customer)
                                                </span>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="flex items-center justify-center col-span-12 gap-x-2">
                                                    {item.approved == 1 ? (
                                                        <ThirdButtonNoLink
                                                            color="teal"
                                                            className="cursor-not-allowed"
                                                        >
                                                            SUDAH MENJADI TEAM{" "}
                                                            <IconChecks className="w-5 h-5 ml-2" />
                                                        </ThirdButtonNoLink>
                                                    ) : (
                                                        <>
                                                            <ThirdButtonNoLink
                                                                color="teal"
                                                                className=""
                                                                onClick={() =>
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
                                                            </ThirdButtonNoLink>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
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
MyEmployeeInvitation.layout = (page) => (
    <AppReservasi children={page}></AppReservasi>
);
