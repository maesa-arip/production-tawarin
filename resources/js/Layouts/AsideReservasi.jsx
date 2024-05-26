import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import "../../css/static/stickymenu.css";

export default function AsideReservasi() {
    const { auth, permissions } = usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    const MenuSVG = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-menu-2"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
        </svg>
    );
    const CloseSVG = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-x"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );

    const PlusSVG = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-plus"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
        </svg>
    );

    const MinusSVG = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-minus"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
        </svg>
    );

    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(null); // Keeps track of opened submenu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubmenu = (index) => {
        setSubmenuOpen(submenuOpen === index ? null : index);
    };

    const menuClass = menuOpen ? "menu-extended" : "menu-collapsed";
    const subMenuClass = menuOpen ? "submenu-expanded" : "submenu-collapsed";
    const menuIcon = menuOpen ? <CloseSVG /> : <MenuSVG />;

    return (
        <div
            id="stickyMenu"
            className={`z-40 mx-4 fixed bottom-0 left-0 right-0 overflow-hidden transition-all duration-300 bg-amber-500 shadow-lg md:hidden rounded-2xl`}
        >
            <button
                id="menuToggle"
                className="relative flex items-center justify-center w-full py-3 font-semibold text-center text-white bg-amber-500"
                onClick={toggleMenu}
            >
                Menu
                <span id="menuIcon" className="absolute right-4">
                    {menuIcon}
                </span>
            </button>
            <div
                id="menuContent"
                className={`overflow-y-auto bg-amber-500 ${menuClass} transition-height`}
            >
                <ul className="flex flex-col items-start justify-center px-8 leading-10">
                    {auth.user ? (
                        <>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/dashboard"
                                    className="text-white"
                                >
                                    {" "}
                                    Dashboard
                                </Link>
                            </li>
                            {permission_name.indexOf("lihat menu admin saldo") >
                                -1 && (
                                <li className="justify-between w-full">
                                    <div className="flex items-center">
                                        <button
                                            className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                            onClick={() => toggleSubmenu(1)}
                                        >
                                            Admin Saldo
                                            <span className="text-right submenu-icon">
                                                {submenuOpen === 1 ? (
                                                    <MinusSVG />
                                                ) : (
                                                    <PlusSVG />
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                    {submenuOpen === 1 && (
                                        <ul
                                            className={`pl-4 space-y-2 ${subMenuClass}`}
                                        >
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href="/admindeposits"
                                                    className="text-white "
                                                >
                                                    {" "}
                                                    Admin Deposit
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href="/adminwithdraws"
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Admin Withdraw
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href="/adminplans"
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Admin Perencanaan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route("users.index")}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Admin User
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            )}
                            {permission_name.indexOf(
                                "lihat menu owner reservasi"
                            ) > -1 && (
                                <>
                                <li className="justify-between w-full">
                                    <div className="flex items-center">
                                        <button
                                            className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                            onClick={() => toggleSubmenu(2)}
                                        >
                                            Pengaturan Owner
                                            <span className="text-right submenu-icon">
                                                {submenuOpen === 2 ? (
                                                    <MinusSVG />
                                                ) : (
                                                    <PlusSVG />
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                    {submenuOpen === 2 && (
                                        <ul
                                            className={`pl-4 space-y-2 ${subMenuClass}`}
                                        >
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservationprofile.edit"
                                                    )}
                                                    className="text-white "
                                                >
                                                    {" "}
                                                    Atur Perusahaan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservationemployees.index"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Atur Karyawan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.myemployeerequestoff"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Atur Permintaan Libur
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservationCounters.index"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Atur Layanan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.mycompanycustomers"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Pelanggan Perusahaan
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="justify-between w-full">
                                <div className="flex items-center">
                                    <button
                                        className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                        onClick={() => toggleSubmenu(5)}
                                    >
                                        Rekapan
                                        <span className="text-right submenu-icon">
                                            {submenuOpen === 5 ? (
                                                <MinusSVG />
                                            ) : (
                                                <PlusSVG />
                                            )}
                                        </span>
                                    </button>
                                </div>
                                {submenuOpen === 5 && (
                                    <ul
                                        className={`pl-4 space-y-2 ${subMenuClass}`}
                                    >
                                        <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                            <Link
                                                onClick={toggleMenu}
                                                href={route(
                                                    "reservationprofile.edit"
                                                )}
                                                className="text-white "
                                            >
                                                {" "}
                                                Rekapan Pendapatan Perusahaan
                                            </Link>
                                        </li>
                                        <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                            <Link
                                                onClick={toggleMenu}
                                                href={route(
                                                    "reservationprofile.edit"
                                                )}
                                                className="text-white "
                                            >
                                                {" "}
                                                Rekapan Pendapatan Karyawan
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li></>
                            )}
                            {permission_name.indexOf(
                                "lihat menu pekerja reservasi"
                            ) > -1 && (
                                <li className="justify-between w-full">
                                    <div className="flex items-center">
                                        <button
                                            className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                            onClick={() => toggleSubmenu(3)}
                                        >
                                            Pengaturan Pekerja
                                            <span className="text-right submenu-icon">
                                                {submenuOpen === 3 ? (
                                                    <MinusSVG />
                                                ) : (
                                                    <PlusSVG />
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                    {submenuOpen === 3 && (
                                        <ul
                                            className={`pl-4 space-y-2 ${subMenuClass}`}
                                        >
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservationemployeedayoff.index"
                                                    )}
                                                    className="text-white "
                                                >
                                                    {" "}
                                                    Atur Hari Libur dan Istirahat
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.myteaminvitations"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Lihat Undangan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.mycustomers"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Lihat Pelanggan
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.mycounters"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Lihat Layanan
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            )}
                            <li className="justify-between w-full">
                                    <div className="flex items-center">
                                        <button
                                            className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                            onClick={() => toggleSubmenu(4)}
                                        >
                                            Pemesanan
                                            <span className="text-right submenu-icon">
                                                {submenuOpen === 4 ? (
                                                    <MinusSVG />
                                                ) : (
                                                    <PlusSVG />
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                    {submenuOpen === 4 && (
                                        <ul
                                            className={`pl-4 space-y-2 ${subMenuClass}`}
                                        >
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.myreservations"
                                                    )}
                                                    className="text-white "
                                                >
                                                    {" "}
                                                    Reservasi Saya
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href={route(
                                                        "reservation.list"
                                                    )}
                                                    className="text-white"
                                                >
                                                    {" "}
                                                    Cari Reservasi
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/profile"
                                    className="text-white"
                                >
                                    {" "}
                                    Profile
                                </Link>
                            </li>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/wallets"
                                    className="text-white"
                                >
                                    {" "}
                                    Saldo
                                </Link>
                            </li>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/chat"
                                    className="text-white"
                                >
                                    {" "}
                                    Chat
                                </Link>
                            </li>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="text-white"
                                >
                                    Log Out
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/login"
                                    className="text-white"
                                >
                                    {" "}
                                    Masuk
                                </Link>
                            </li>
                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                <Link
                                    onClick={toggleMenu}
                                    href="/register"
                                    className="text-white"
                                >
                                    {" "}
                                    Daftar
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
