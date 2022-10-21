import Container from "@/Components/Container";
import Header from "@/Components/Header";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(balance) {
    return (
        <>
            <Head title="Wallet" />

            <div className="max-w-full mx-auto">
                <div className="p-8 mb-5 bg-white rounded-3xl">
                    <h1 className="mb-10 text-3xl font-bold">
                        User yang menggunakan kode referalmu
                    </h1>
                    <div className="flex items-center justify-between">
                        <div className="flex items-stretch">
                            {/* <div className="text-xs text-gray-400">
                                Members
                                <br />
                                Referal
                            </div>
                            <div className="mx-4 border-l h-100" /> */}
                            <ul className="flex items-center justify-center space-x-2">
                                {/* Story #1 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Sage
                                    </span>
                                </li>
                                {/* Story #1 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Jett
                                    </span>
                                </li>
                                {/* Story #2 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        {/* Thumbnail */}
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Sky
                                    </span>
                                </li>
                                {/* Story #3 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        {/* Thumbnail */}
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Olivia
                                    </span>
                                </li>
                                {/* Story #4 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Julia
                                    </span>
                                </li>
                                {/* Story #1 */}
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <a
                                        className="block p-1 bg-white rounded-full"
                                        href="#"
                                    >
                                        {/* Thumbnail */}
                                        <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        />
                                    </a>
                                    {/* Username */}
                                    <span className="text-xs text-gray-500">
                                        Hendrick
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 h-9 rounded-xl hover:text-white"
                            >
                                Kode Referal
                            </button>
                        </div>
                    </div>
                    <hr className="my-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20">
                        <div>
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
                                        Rp {numberFormat(
                                                            balance.balance
                                                        )}
                                                        
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
                                                    Kamu mendapat saldo tambahan Rp 50.000
                                                </p>
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                17:15
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="grid grid-cols-2 gap-4 mt-12 md:mt-8">
                                <div className="col-span-2">
                                    <div className="p-4 bg-green-100 rounded-xl">
                                        <div className="text-xl font-bold leading-none text-gray-800">
                                            Good day, <br />
                                            Kristin
                                        </div>
                                        <div className="mt-5">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-800 transition bg-white rounded-xl hover:text-green-500"
                                            >
                                                Start tracking
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 text-gray-800 bg-yellow-100 rounded-xl">
                                    <div className="text-2xl font-bold leading-none">
                                        20
                                    </div>
                                    <div className="mt-2">Saldo Utama</div>
                                </div>
                                <div className="p-4 text-gray-800 bg-yellow-100 rounded-xl">
                                    <div className="text-2xl font-bold leading-none">
                                        5,5
                                    </div>
                                    <div className="mt-2">Saldo Bonus</div>
                                </div>
                                <div className="col-span-2">
                                    <div className="p-4 text-gray-800 bg-purple-100 rounded-xl">
                                        <div className="text-xl font-bold leading-none">
                                            Your daily plan
                                        </div>
                                        <div className="mt-2">
                                            5 of 8 completed
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h2 className="mb-4 text-2xl font-bold">
                                Notifications
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="text-xs text-gray-400">
                                            Referal
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            4h
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        Kode referal digunakan
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="inline mr-1 text-gray-800 align-middle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        Maesa menggunakan kode referalmu
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="text-xs text-gray-400">
                                            Penarikan
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            7d
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        Penarikanmu sudah berhasil
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="inline mr-1 text-gray-800 align-middle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        Saldomu berkurang Rp 50.000
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-gray-800 bg-white border rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="text-xs text-gray-400">
                                            Deposit
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            2h
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        Deposit berhasil
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="inline mr-1 text-gray-800 align-middle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        Saldomu bertambah Rp 75.000
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
