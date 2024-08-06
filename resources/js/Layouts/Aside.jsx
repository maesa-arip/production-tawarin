import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import "../../css/static/stickymenu.css";
import { IconBrandWechat } from "@tabler/icons";

export default function Aside() {
    const { auth, permissions, requestTopUp, requestWithdraw } =
        usePage().props;
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
            >
                {auth.user ? (
                    <Link href="/chat" className="absolute left-4">
                        {" "}
                        <IconBrandWechat />
                    </Link>
                ) : (
                    <></>
                )}
                Menu
                <span
                    onClick={toggleMenu}
                    id="menuIcon"
                    className="absolute right-4"
                >
                    {menuIcon}
                </span>
            </button>
            <div
                id="menuContent"
                className={`overflow-y-auto bg-amber-500 ${menuClass} transition-height`}
            >
                <ul className="flex flex-col items-start justify-center px-8 leading-10">
                    <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                        <Link
                            onClick={toggleMenu}
                            href="/homereservasi"
                            className="text-white"
                        >
                            {" "}
                            Reservasi
                        </Link>
                    </li>
                    <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                        <Link
                            onClick={toggleMenu}
                            href="/homekonstruksi"
                            className="text-white "
                        >
                            {" "}
                            Konstruksi
                        </Link>
                    </li>

                    {/* <li className="justify-between w-full">
                        <div className="flex items-center">
                            <button
                                className={`flex items-center justify-between w-full py-2 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                onClick={() => toggleSubmenu(2)}
                            >
                                Services
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
                            <ul className={`pl-4 space-y-2 ${subMenuClass}`}>
                                <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white ">
                                        {" "}
                                        Service 1
                                    </a>
                                </li>
                                <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white">
                                        {" "}
                                        Service 2
                                    </a>
                                </li>
                                <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white">
                                        {" "}
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li> */}
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
                                    <div className="items-center ">
                                        <button
                                            className={`flex items-center w-full py-2 text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                            onClick={() => toggleSubmenu(1)}
                                        >
                                            <span className="text-right submenu-icon">
                                                {submenuOpen === 1 ? (
                                                    <MinusSVG />
                                                ) : (
                                                    <PlusSVG />
                                                )}
                                            </span>
                                            <span className="inline-flex">
                                                Admin Saldo{" "}
                                            </span>
                                            <span className="items-end content-center w-10 h-10 ml-auto text-base text-center text-red-500 bg-white rounded-full ">
                                                {requestTopUp + requestWithdraw}
                                            </span>
                                        </button>
                                    </div>
                                    {submenuOpen === 1 && (
                                        <ul
                                            className={`pl-6 space-y-2 ${subMenuClass}`}
                                        >
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href="/admindeposits"
                                                    className="flex justify-between text-white "
                                                >
                                                    <span className="inline-flex">
                                                        Admin Deposit
                                                    </span>
                                                    <span className="content-center w-10 h-10 text-base text-center text-red-500 bg-white rounded-full">
                                                        {requestTopUp}
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="w-full py-2 border-b border-gray-100 border-opacity-25 ">
                                                <Link
                                                    onClick={toggleMenu}
                                                    href="/adminwithdraws"
                                                    className="flex justify-between text-white"
                                                >
                                                    <span className="inline-flex">
                                                        Admin Withdraw
                                                    </span>
                                                    <span className="content-center w-10 h-10 ml-10 text-base text-center text-red-500 bg-white rounded-full">
                                                        {requestWithdraw}
                                                    </span>
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
