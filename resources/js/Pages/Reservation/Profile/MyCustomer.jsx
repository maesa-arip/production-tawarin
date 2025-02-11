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
import {
    IconCheck,
    IconChecks,
    IconCircleCheck,
    IconCircleX,
    IconHelp,
    IconMoodSad,
    IconQuestionCircle,
    IconX,
    IconXboxX,
} from "@tabler/icons";
import TextInputCheckbox from "@/Components/TextInputCheckbox";
import TextAreaInput from "@/Components/TextAreaInput";

export default function MyCustomer({
    auth,
    mustVerifyEmail,
    status,
    myCustomers,
    appEnv,
}) {
    const [state, setState] = useState([]);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const [isOpenInfoDialog3, setIsOpenInfoDialog3] = useState(false);
    const [isOpenInfoDialog4, setIsOpenInfoDialog4] = useState(false);
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const openInfoDialog = (item) => {
        setState(item);
        setIsOpenInfoDialog(true);
    };
    const openInfoDialog2 = (item) => {
        setState(item);
        setIsOpenInfoDialog2(true);
    };
    const openInfoDialog3 = (item) => {
        setState(item);
        setIsOpenInfoDialog3(true);
    };
    const openInfoDialog4 = (item) => {
        setState(item);
        setIsOpenInfoDialog4(true);
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
    const declineanswer = () => {
        put(route("reservation.declineanswer", state.id), {
            onSuccess: () => setIsOpenInfoDialog3(false),
        });
    };
    const approvedanswer = () => {
        put(route("reservation.approvedanswer", state.id), {
            onSuccess: () => setIsOpenInfoDialog4(false),
        });
    };
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
    };
    const closeInfoDialog2 = () => {
        setIsOpenInfoDialog2(false);
    };
    const closeInfoDialog3 = () => {
        setIsOpenInfoDialog3(false);
    };
    const closeInfoDialog4 = () => {
        setIsOpenInfoDialog4(false);
    };
    let wa = "";
    // console.log(appEnv);
    
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Mulai Pelayanan ?"}
            >
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={startService}
                >
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
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={finishService}
                >
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

            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog3}
                setIsOpenInfoDialog={setIsOpenInfoDialog3}
                size="2xl"
                closeButton="false"
                title={"Yakin Tolak Jawaban Pelanggan ?"}
            >
                <TextAreaInput
                    placeholder="Komentar"
                    name="pekerja_comment"
                    handleChange={onHandleChange}
                ></TextAreaInput>
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={declineanswer}
                    color="danger"
                >
                    Tolak
                </ThirdButtonNoLink>

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeInfoDialog3}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog4}
                setIsOpenInfoDialog={setIsOpenInfoDialog4}
                size="2xl"
                closeButton="false"
                title={"Yakin Terima Jawaban Pelanggan ?"}
            >
                {state.request_approved == 1 ? (
                    <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                        <span className="text-lg font-semibold text-left">
                            {state.customer_comment}
                        </span>
                    </div>
                ) : (
                    <></>
                )}

                <ThirdButtonNoLink
                    processing={processing}
                    onClick={approvedanswer}
                >
                    Terima
                </ThirdButtonNoLink>

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeInfoDialog4}
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
                                                {item.counterCategoryName}{" "}
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
                                        {item.complaint == 1 ? (
                                            <div className="flex items-center justify-between px-4 my-4">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Alasan Komplain
                                                </p>
                                                <p className="rounded-full bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-600">
                                                    {item.complaint_reason}
                                                </p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}

                                        {item.answers.map((item, index) => (
                                            <div
                                                className="grid grid-cols-12 gap-1"
                                                key={index}
                                            >
                                                <div className="col-span-10 p-1 mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                    <div>
                                                        <div className="flex items-center justify-between ">
                                                            <p className="text-sm font-semibold text-gray-500">
                                                                {
                                                                    item
                                                                        .question
                                                                        .question
                                                                }
                                                            </p>
                                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                            {item.request_approved ==
                                                            1 ? (
                                                                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-yellow-600">
                                                                    {
                                                                        item.customer_comment
                                                                    }
                                                                </p>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {item.approved == 0 &&
                                                item.decline == 0 &&
                                                item.request_approved == 0 ? (
                                                    <>
                                                        <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                            <div>
                                                                <div className="flex items-center justify-between ">
                                                                    {/* <p className="text-sm font-semibold text-yellow-500">
                                                                <IconHelp/>
                                                            </p> */}
                                                                    <p className="text-sm font-semibold text-red-500">
                                                                        <IconXboxX
                                                                            onClick={() =>
                                                                                openInfoDialog3(
                                                                                    item
                                                                                )
                                                                            }
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                            <div>
                                                                <div className="flex items-center justify-between ">
                                                                    <p className="text-sm font-semibold text-green-500">
                                                                        <IconCircleCheck
                                                                            onClick={() =>
                                                                                openInfoDialog4(
                                                                                    item
                                                                                )
                                                                            }
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}

                                                {item.approved == 1 ? (
                                                    <>
                                                        <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                            <div>
                                                                <div className="flex items-center justify-between ">
                                                                    <p className="text-sm font-semibold text-green-500">
                                                                        <IconCircleCheck
                                                                            onClick={() =>
                                                                                openInfoDialog4(
                                                                                    item
                                                                                )
                                                                            }
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                                {item.decline == 1 &&
                                                item.request_approved == 1 &&
                                                item.approved == 0 ? (
                                                    <>
                                                        <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                            <div>
                                                                <div className="flex items-center justify-between ">
                                                                    <p className="text-sm font-semibold text-yellow-500">
                                                                        <IconQuestionCircle
                                                                            onClick={() =>
                                                                                openInfoDialog4(
                                                                                    item
                                                                                )
                                                                            }
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                                {item.decline == 1 &&
                                                item.approved == 0 ? (
                                                    <>
                                                        <div className="col-span-1 p-1 mx-auto mt-2 duration-150 bg-white rounded-lg shadow cursor-pointer ">
                                                            <div>
                                                                <div className="flex items-center justify-between ">
                                                                    <p className="text-sm font-semibold text-red-500">
                                                                        <IconCircleX
                                                                            onClick={() =>
                                                                                openInfoDialog3(
                                                                                    item
                                                                                )
                                                                            }
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            // <div className="py-1" key={index}>
                                            //     <div className="relative p-2 overflow-hidden duration-150 bg-white rounded-lg shadow cursor-pointer">
                                            //         <div>
                                            //             <div className="flex items-center justify-between ">
                                            //                 <p className="text-sm font-semibold text-gray-500">
                                            //                     {
                                            //                         item
                                            //                             .question
                                            //                             .question
                                            //                     }
                                            //                 </p>
                                            //                 <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                            //                     {
                                            //                         item.description
                                            //                     }
                                            //                 </p>
                                            //             </div>

                                            //         </div>
                                            //     </div>
                                            // </div>
                                        ))}
                                        {item.batal_customer == 1 ? (
                                            <div className="flex items-center justify-between px-4 my-4">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Alasan Batal
                                                </p>
                                                <p className="rounded-full bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-600">
                                                    {item.alasan_batal_customer}
                                                </p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <div className="flex items-center px-4 my-4 justify-evenly">
                                            {item.batal_customer == 1 ? (
                                                <ThirdButtonNoLink
                                                    className="cursor-not-allowed"
                                                    color="red"
                                                >
                                                    Sudah dibatalkan{" "}
                                                    <IconX className="w-4 h-4" />
                                                </ThirdButtonNoLink>
                                            ) : item.selesai_customer == 1 ? (
                                                <>
                                                    <ThirdButtonNoLink
                                                        color="teal"
                                                        className="cursor-not-allowed"
                                                    >
                                                        BERES{" "}
                                                        <IconChecks className="w-5 h-5 ml-2" />
                                                    </ThirdButtonNoLink>
                                                    <div className="hidden">
                                                    {item.user.phone?.charAt(0) === '0' ? wa = item.user.phone.slice(1) : wa = item.user.phone}
                                                    </div>
                                                    
                                                    <a  className="inline-flex items-center px-3 py-2 mr-1 text-xs font-semibold text-yellow-600 rounded-md bg-yellow-50 ring-yellow-500/10 ring-1 ring-inset"
                                                        href={
                                                            "https://wa.me/62" +
                                                            wa +
                                                            "?text=Terima kasih telah berbelanja Rp. " + item.team.counter.price.toLocaleString() +" di "+ item.team.counter.company.name +", cek struk di http://tawarin.id/ereceipt/"+ item.code
                                                        }
                                                        data-action="share/whatsapp/share"
                                                    >
                                                        Kirim Nota via Whatsapp
                                                    </a>
                                                </>
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
                                                    ) : item.complaint == 1 ? (
                                                        <ThirdButtonNoLink
                                                            color="red"
                                                            className="cursor-not-allowed"
                                                        >
                                                            Pelanggan Komplain{" "}
                                                            <IconMoodSad className="w-5 h-5 ml-2" />
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
                                                                    onClick={
                                                                        item.leader ===
                                                                        1
                                                                            ? () =>
                                                                                  openInfoDialog(
                                                                                      item
                                                                                  )
                                                                            : undefined
                                                                    }
                                                                    className={
                                                                        item.leader ===
                                                                        1
                                                                            ? ""
                                                                            : "cursor-not-allowed"
                                                                    }
                                                                >
                                                                    Mulai
                                                                </ThirdButtonNoLink>
                                                            )}
                                                            {item.dikerjakan ==
                                                            1 ? (
                                                                <ThirdButtonNoLink
                                                                    onClick={
                                                                        item.leader ===
                                                                        1
                                                                            ? () =>
                                                                                  openInfoDialog2(
                                                                                      item
                                                                                  )
                                                                            : undefined
                                                                    }
                                                                    className={
                                                                        item.leader ===
                                                                        1
                                                                            ? ""
                                                                            : "cursor-not-allowed"
                                                                    }
                                                                    // onClick={() =>
                                                                    //     openInfoDialog2(
                                                                    //         item
                                                                    //     )
                                                                    // }
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
