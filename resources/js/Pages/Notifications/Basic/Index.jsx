import Container from "@/Components/Container";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head, Link } from "@inertiajs/inertia-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

export default function Index({ notifications }) {
    return (
        <>
            <Head title="Wallet" />
            <div className="max-w-full mx-auto">
                <div className="p-8 mb-5 bg-white rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20">
                        {/* <div>
                            <h2 className="mb-4 text-2xl font-bold">Wallet</h2>
                            <div className="flex flex-col w-full space-y-8">
                                <div className="w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="text-xl font-semibold tracking-tigh">
                                                TAWARINWALLET
                                            </div>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <svg
                                                    className="w-8 h-8"
                                                    width={24}
                                                    height={24}
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M11 8.5L8 15.5L5 8.5"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="font-semibold text-white">
                                                    wallet
                                                </div>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
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
                                </div>
                            </div>

                            <div className="grid w-full h-full grid-cols-4 mt-12 text-white gap-x-1 md:w-96">
                                <NavLink
                                    type="button"
                                    className={
                                        "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                    }
                                    href={"/deposits/create"}
                                >
                                    TopUp
                                </NavLink>
                                <NavLink
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
                                </NavLink>
                            </div>
                        </div> */}
                        <div className="mt-12 md:mt-0">
                            <h2 className="mb-4 text-2xl font-bold">
                                Notifications
                            </h2>
                            <div className="space-y-4">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        // onClick={readNotification}
                                        className="p-4 space-y-2 text-gray-800 bg-green-100 border cursor-pointer bg-gradient-tl from-green-200 via-green-200 rounded-xl"
                                    >
                                        <div className="flex justify-between">
                                            <div className="text-xs text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="justify-center inline w-5 h-5 mr-3 text-center icon icon-tabler icon-tabler-info-circle"
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
                                                <circle cx={12} cy={12} r={9} />
                                                <line
                                                    x1={12}
                                                    y1={8}
                                                    x2="12.01"
                                                    y2={8}
                                                />
                                                <polyline points="11 12 12 12 12 16 13 16" />
                                            </svg>
                                                {notification.data.type}
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                {dayjs(
                                                    notification.created_at
                                                ).fromNow()}
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="font-bold hover:text-yellow-800 hover:underline"
                                        >
                                            {notification.data.title}
                                        </a>
                                        <div className="text-sm text-gray-600">
                                            
                                            {notification.data.message}
                                        </div>
                                        {notification.data.url ?
                                        <Link
                                        href={notification.data.url}
                                        className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                    >
                                        Lihat
                                    </Link>
                                        :''}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page}></App>;
