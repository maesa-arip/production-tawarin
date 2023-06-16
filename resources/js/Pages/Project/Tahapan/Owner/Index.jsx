import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head } from "@inertiajs/inertia-react";
import { IconFileText, IconReceipt, IconUpload } from "@tabler/icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

export default function Index({ plan, balance, tahap, step }) {
    return (
        <>
            <Head title="Tahapan Perencanaan" />

            <div className="max-w-full mx-auto">
                <div className="p-8 mb-5 bg-white rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">
                                Saldo Bersama (Dilihat Owner)
                            </h2>
                            <div className="flex flex-col w-full space-y-8">
                                <div className="w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="text-xl font-semibold tracking-tigh">
                                                {plan.name}
                                            </div>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <ApplicationLogo />
                                            </div>
                                        </div>
                                        <div className="inline-block w-12 h-8 overflow-hidden rounded-md shadow-inner bg-gradient-to-tl from-yellow-200 to-yellow-100">
                                            <div className="relative grid w-full h-full grid-cols-2 gap-1">
                                                <div className="absolute w-4 h-6 border border-gray-900 rounded left-4 top-1" />
                                                <div className="border-b border-r border-gray-900 rounded-br" />
                                                <div className="border-b border-l border-gray-900 rounded-bl" />
                                                <div className="border-t border-r border-gray-900 rounded-tr" />
                                                <div className="border-t border-l border-gray-900 rounded-tl" />
                                            </div>
                                        </div>
                                        <div className="text-xs font-semibold tracking-tight">
                                            Saldo
                                        </div>
                                        <div className="text-2xl font-semibold">
                                            Rp {numberFormat(balance)}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="relative">
                                    <div className="absolute flex items-start px-2 py-3 space-x-2 text-gray-900 bg-white border-gray-200 rounded-lg shadow-2xl -right-4 lg:right-36 -mt-14 md:-mt-16 w-72">
                                        <div className="flex-initial">
                                            <div className="inline-flex items-center justify-center bg-green-300 rounded-lg bg-gradient-tl from-green-400 via-green-400">
                                                <div className="p-2">
                                                    <svg
                                                        className="w-4 h-4 text-white opacity-90"
                                                        width={24}
                                                        height={24}
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-start justify-between flex-1">
                                            <div>
                                                <h2 className="text-xs font-semibold tracking-tight">
                                                    Tawarin Gotong Royong
                                                </h2>
                                                <p className="text-xs font-light text-gray-500">
                                                    Kamu mendapat saldo tambahan
                                                    Rp 50.000
                                                </p>
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                17:15
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="grid w-full grid-cols-1 mt-12 text-white gap-x-1 md:w-96">
                                <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center my-2 px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={route("plan.deposit", plan.slug)}
                                >
                                    Masukan Saldo 50%
                                </NavLink>
                                <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={route("plan.lihathasil", plan.slug)}
                                >
                                    Lihat Hasil
                                </NavLink>
                                {/* <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={"/wallet/transfers"}
                                >
                                    Transfer
                                </NavLink>
                                <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={"/withdraws/create"}
                                >
                                    Tarik
                                </NavLink>

                                <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={"/histories"}
                                >
                                    History
                                </NavLink> */}
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h2 className="mb-4 text-2xl font-bold">Tahapan</h2>
                            {/* <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="group relative mx-auto w-full overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                                        <div className="absolute invisible group-hover:animate-spin-slow -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                                        <div className="relative rounded-[15px] bg-white p-6">
                                            <div className="space-y-4">
                                                <img
                                                    className=""
                                                    src="https://nuxt.com/assets/home/ux-fast-light.svg"
                                                    alt=""
                                                />
                                                <p className="text-lg font-semibold text-slate-800">
                                                    {step.title}
                                                </p>
                                                <p className="font-md text-slate-500">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="mt-8">
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div className="w-1 h-full pointer-events-none bg-sky-500" />
                                    </div>
                                    <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-sky-500">
                                        <IconFileText className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Kontrak dan 50% Dana
                                        </h2>
                                        <p className="leading-relaxed">
                                            Silakan masukan saldo 50% dari nilai
                                            kontrak sebelum konsultan upload
                                            hasil perencanaannya. Dana ini tidak
                                            bisa ditarik oleh konsultan sebelum
                                            disetujui oleh owner.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div
                                            className={
                                                `w-1 h-full pointer-events-none ` +
                                                (tahap > 1
                                                    ? "bg-sky-500"
                                                    : "bg-gray-500")
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            `relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ` +
                                            (tahap > 1
                                                ? "bg-sky-500"
                                                : "bg-gray-500")
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 icon icon-tabler icon-tabler-clock-pause"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M13 20.94a8.916 8.916 0 0 1 -7.364 -2.576a9 9 0 1 1 15.306 -5.342" />
                                            <path d="M12 7v5l2 2" />
                                            <path d="M17 17v5" />
                                            <path d="M21 17v5" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Menunggu Konfirmasi Admin
                                        </h2>
                                        <p className="leading-relaxed">
                                            Dana sudah di upload, menunggu
                                            konfirmasi admin Tawarin
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div
                                            className={
                                                `w-1 h-full pointer-events-none ` +
                                                (tahap > 2
                                                    ? "bg-sky-500"
                                                    : "bg-gray-500")
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            `relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ` +
                                            (tahap > 2
                                                ? "bg-sky-500"
                                                : "bg-gray-500")
                                        }
                                    >
                                        <IconUpload className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Menunggu konsultan upload hasil
                                        </h2>
                                        <p className="leading-relaxed">
                                            Dana sudah disetujui admin, menunggu
                                            konsultan upload hasil perencanaan
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div
                                            className={
                                                `w-1 h-full pointer-events-none ` +
                                                (tahap > 3
                                                    ? "bg-sky-500"
                                                    : "bg-gray-500")
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            `relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ` +
                                            (tahap > 3
                                                ? "bg-sky-500"
                                                : "bg-gray-500")
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 icon icon-tabler icon-tabler-coins"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                                            <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                                            <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                                            <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                                            <path d="M3 11c0 .888 .772 1.45 2 2" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Upload Sisa 50% Pembayaran
                                        </h2>
                                        <p className="leading-relaxed">
                                            Silakan upload sisa pembayaran
                                            sebelum bisa melihat hasil, dana ini
                                            tidak bisa ditarik oleh konsultan
                                            sebelum pekerjaan dari konsultan
                                            selesai
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div
                                            className={
                                                `w-1 h-full pointer-events-none ` +
                                                (tahap > 4
                                                    ? "bg-sky-500"
                                                    : "bg-gray-500")
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            `relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ` +
                                            (tahap > 4
                                                ? "bg-sky-500"
                                                : "bg-gray-500")
                                        }
                                    >
                                        <IconReceipt className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Owner sudah bayar 100%
                                        </h2>
                                        <p className="leading-relaxed">
                                            Silakan upload sisa pembayaran
                                            sebelum bisa melihat hasil, dana ini
                                            tidak bisa ditarik oleh konsultan
                                            sebelum pekerjaan dari konsultan
                                            selesai
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex pb-12">
                                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                                        <div
                                            className={
                                                `w-1 h-full pointer-events-none ` +
                                                (tahap > 5
                                                    ? "bg-sky-500"
                                                    : "bg-gray-500")
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            `relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ` +
                                            (tahap > 5
                                                ? "bg-sky-500"
                                                : "bg-gray-500")
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 icon icon-tabler icon-tabler-clock-edit"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M21 12a9.001 9.001 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052" />
                                            <path d="M12 7v5l2 2" />
                                            <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            Revisi
                                        </h2>
                                        <p className="leading-relaxed">
                                            Silakan upload sisa pembayaran
                                            sebelum bisa melihat hasil, dana ini
                                            tidak bisa ditarik oleh konsultan
                                            sebelum pekerjaan dari konsultan
                                            selesai
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-500 rounded-full">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <path d="M22 4L12 14.01l-3-3" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font">
                                            FINISH
                                        </h2>
                                        <p className="leading-relaxed">
                                            Pitchfork ugh tattooed scenester
                                            echo park gastropub whatever
                                            cold-pressed retro.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page}></App>;
