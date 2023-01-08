import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head } from "@inertiajs/inertia-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

export default function Index({ plan, balance,tahap,step }) {
    return (
        <>
            <Head title="Tahapan Perencanaan" />
            
            <div className="max-w-full mx-auto">
            
                <div className="p-8 mb-5 bg-white rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">
                                Saldo Bersama (Dilihat Konsultan)
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
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={route('plan.uploadhasil',plan.slug)}
                                >
                                    Upload Hasil
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
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="group relative mx-auto w-full overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                                        <div className="absolute invisible group-hover:animate-spin-slow -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                                        <div className="relative rounded-[15px] bg-white p-6">
                                            <div className="space-y-4">
                                                <img className=""
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page}></App>;
