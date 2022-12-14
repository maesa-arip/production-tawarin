import Container from "@/Components/Container";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Index({ balance, bonus }) {
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
                            <ul className="flex items-center justify-center space-x-2 overflow-x-auto">
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
                            {/* <h2 className="mb-4 text-2xl font-bold">Saldo Utama</h2> */}
                            <div className="flex flex-col w-full space-y-8">
                                <div className="w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="text-xl font-semibold tracking-tigh">
                                                SALDO UTAMA
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
                            <div className="grid w-full grid-cols-4 mt-6 text-white gap-x-1 md:w-96">
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
                            <hr className="my-10" />

                            {/* <h2 className="mt-10 mb-4 text-2xl font-bold">Saldo Bonus</h2> */}
                        </div>

                        <div className="mt-12 md:mt-0">
                            <div className="flex flex-col w-full space-y-8">
                                <div className="w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="text-xl font-semibold tracking-tigh">
                                                SALDO BONUS
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
                                            Rp {numberFormat(bonus)}
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
                            <div className="grid w-full grid-cols-2 mt-6 text-white gap-x-1 md:w-96">
                                <div className="grid w-full grid-cols-1">
                                    <NavLink
                                        type="button"
                                        className={
                                            "inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white"
                                        }
                                        href={"/wallet/transfers"}
                                    >
                                        Transfer ke Saldo Utama
                                    </NavLink>
                                </div>
                                <div className="grid w-full grid-cols-2 gap-x-1">
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
                            </div>

                            <hr className="my-10" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page}></App>;
