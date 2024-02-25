import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";
import NavLinkMobile from "@/Components/NavLinkMobile";
import DropdownMenu from "@/Components/DropdownMenu";
import MenuModal from "@/Components/Modal/MenuModal";
import InfoModal from "@/Components/Modal/InfoModal";
import { PhotographIcon } from "@heroicons/react/solid";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../img/Tawarin.png";
import {
    IconBarcode,
    IconBrandSupernova,
    IconBuildingSkyscraper,
    IconBuildingStore,
    IconCash,
    IconHomeEdit,
    IconListNumbers,
    IconShoppingCart,
    IconTools,
    IconUserSearch,
    IconUsers,
    IconWallet,
    IconWriting,
} from "@tabler/icons";
import Dropdown from "@/Components/Dropdown";
import MenuLogo from "@/Components/MenuLogo";

export default function Navbar() {
    const {
        auth,
        categories_global,
        carts_global_count,
        notifications_count,
        permissions,
    } = usePage().props;
    const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
    const openMenuModal = () => {
        setIsOpenMenuModal(true);
    };
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [state, setState] = useState([]);
    const openInfoDialog = () => {
        setState();
        setIsOpenInfoDialog(true);
    };

    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                title={"Info"}
                header={""}
            >
                Anda harus login terlebih dahulu untuk menggunakan fitur chat
            </InfoModal>
            <Popover className="relative bg-white">
                <div className="px-4 mx-auto sm:px-6">
                    <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
                        <div className="flex justify-start">
                            <NavLink href="/">
                                <span className="sr-only"></span>
                                <img
                                    className="w-8 h-8"
                                    src={Logo}
                                    aria-label="TawarinLogo"
                                    alt="Logo"
                                />
                            </NavLink>
                        </div>
                        {auth.user ? (
                            <>
                                <NavLink
                                    className="flex items-center md:hidden justify-items-end gap-x-2"
                                    href="/notifications"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 icon icon-tabler icon-tabler-bell-ringing"
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
                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                        <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                                        <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                                    </svg>

                                    {notifications_count > 0
                                        ? notifications_count
                                        : null}
                                </NavLink>
                            </>
                        ) : (
                            <></>
                        )}
                        <div className="hidden -my-2 -mr-2 md:hidden lg:hidden">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>

                        <Popover.Group
                            as="nav"
                            className="hidden space-x-10 md:flex"
                        >
                            {/* <NavLink href="/">Home</NavLink> */}
                            {auth.user && (
                                <NavLink href="/wallets">Saldo</NavLink>
                            )}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="relative ml-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
                                                >
                                                    Reservasi
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Link
                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-yellow-500 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                href={route("reservation.list")}
                                            >
                                                Reservasi
                                            </Link>
                                            <Link
                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                href={route(
                                                    "reservationprofile.edit"
                                                )}
                                            >
                                                Setting Company
                                            </Link>
                                            <Link
                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                href={route(
                                                    "reservationCounters.index"
                                                )}
                                            >
                                                Setting Layanan
                                            </Link>
                                            <Link
                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                href={route(
                                                    "permissions.index"
                                                )}
                                            >
                                                Setting Jadwal
                                            </Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            {permission_name.indexOf("atur hak akses") > -1 && (
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="relative ml-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
                                                    >
                                                        Permission
                                                        <svg
                                                            className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Link
                                                    className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                    href={route("users.index")}
                                                >
                                                    Users
                                                </Link>
                                                <Link
                                                    className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                    href={route("roles.index")}
                                                >
                                                    Roles
                                                </Link>
                                                <Link
                                                    className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                    href={route(
                                                        "permissions.index"
                                                    )}
                                                >
                                                    Permissions
                                                </Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            )}
                            <NavLink href={route("user.list")}>
                                Pengguna
                            </NavLink>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
                                        >
                                            Perencanaan
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("plan.list")}>
                                        Cari Perencanaan
                                    </Dropdown.Link>
                                    {permission_name.indexOf(
                                        "melakukan penawaran perencanaan"
                                    ) > -1 && (
                                        <Dropdown.Link href={"/planbids"}>
                                            Penawaran Saya
                                        </Dropdown.Link>
                                    )}
                                    {permission_name.indexOf(
                                        "lihat menu perencanaan"
                                    ) > -1 && (
                                        <>
                                            <Dropdown.Link href={"/plans"}>
                                                Perencanaan Saya
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={"/plans/create"}
                                            >
                                                Buat Perencanaan
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route(
                                                    "planportofolios.index"
                                                )}
                                            >
                                                Portofolio
                                            </Dropdown.Link>
                                        </>
                                    )}
                                </Dropdown.Content>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
                                        >
                                            Proyek
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("project.list")}>
                                        Cari Proyek
                                    </Dropdown.Link>
                                    {permission_name.indexOf(
                                        "melakukan penawaran proyek"
                                    ) > -1 && (
                                        <Dropdown.Link href={"/planbids"}>
                                            Penawaran Saya
                                        </Dropdown.Link>
                                    )}
                                    {permission_name.indexOf(
                                        "lihat menu proyek"
                                    ) > -1 && (
                                        <>
                                            <Dropdown.Link href={"/projects"}>
                                                Proyek Saya
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={"/projects/create"}
                                            >
                                                Buat Proyek
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route(
                                                    "planportofolios.index"
                                                )}
                                            >
                                                Portofolio
                                            </Dropdown.Link>
                                        </>
                                    )}
                                </Dropdown.Content>
                            </Dropdown>

                            {permission_name.indexOf("lihat menu pendanaan") >
                                -1 && (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
                                            >
                                                Pendanaan
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={"/fundings"}>
                                            Pendanaan Saya
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("funding.list")}
                                        >
                                            Cari Pendanaan
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={"/fundings/create"}
                                        >
                                            Buat Pendanaan
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            )}
                            {/* <NavLink href="/toko/products">Toko</NavLink> */}
                            {/* <NavLink href="/projects/choose">Proyek</NavLink>
                            <NavLink href="/">Keahlian</NavLink>
                            <NavLink href="/toko/products">Toko</NavLink>
                            <NavLink href="/toko/products">Alat</NavLink> */}
                            {/* <DropdownMenu label={"Pendanaan"}>
                                <DropdownMenu.Link href="/fundings">
                                    Pendanaan Saya
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/public/fundings/list">
                                    Cari Pendanaan
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/fundings/create">
                                    Buat Pendanaan
                                </DropdownMenu.Link>
                            </DropdownMenu> */}

                            {/* <DropdownMenu label={"Categories"}>
                                {categories_global.map((category) => (
                                    <DropdownMenu.Link
                                        key={category.slug}
                                        href={`/toko/products?category=${category.slug}`}
                                    >
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                                {category.name}
                                            </p>
                                        </div>
                                    </DropdownMenu.Link>
                                ))}
                            </DropdownMenu> */}

                            {/* <DropdownMenu label={"Admin"}>
                                <DropdownMenu.Link href="/admindeposits">
                                    Deposit
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/adminwithdraws">
                                    Withdraw
                                </DropdownMenu.Link>
                            </DropdownMenu> */}
                            {permission_name.indexOf("lihat menu admin saldo") >
                                -1 && (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none"
                                            >
                                                Admin
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={"/admindeposits"}>
                                            Deposit
                                        </Dropdown.Link>
                                        <Dropdown.Link href={"/adminwithdraws"}>
                                            Withdraw
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            )}
                            {permission_name.indexOf(
                                "lihat menu admin general"
                            ) > -1 && (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none"
                                            >
                                                Admin Perencanaan
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={"/adminplans"}>
                                            Atur Perencanaan
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            )}
                            {/* <DropdownMenu label={"Hak Akses"}>
                                <DropdownMenu.Link href="/role-and-permission/roles">
                                    Roles
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/role-and-permission/permissions">
                                    Permissions
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/role-and-permission/assignable">
                                    Assign Permissions to Roles
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/role-and-permission/assign/user">
                                    Assign Roles to User
                                </DropdownMenu.Link>
                            </DropdownMenu> */}

                            {/* <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none"
                                        >
                                            Hak Akses
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={"/role-and-permission/roles"}
                                    >
                                        Roles
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={
                                            "/role-and-permission/permissions"
                                        }
                                    >
                                        Permissions
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={
                                            "/role-and-permission/permission-to-role"
                                        }
                                    >
                                        Assign Permissions to Roles
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={
                                            "/role-and-permission/role-to-user"
                                        }
                                    >
                                        Assign Roles to User
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown> */}

                            {/* <DropdownMenu label={"Example"}>
                                <DropdownMenu.Link href="/example/homefunding">
                                    Landing Page Funding
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/form">
                                    Form
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/funding">
                                    Funding
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/example/descriptionlist">
                                    Decription List
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/filepond">
                                    Filepond
                                </DropdownMenu.Link>
                                <DropdownMenu.Link href="/dropzone">
                                    Dropzone
                                </DropdownMenu.Link>
                            </DropdownMenu> */}
                            {auth.user ? (
                                <>
                                    {/* <DropdownMenu label={auth.user.name}>
                                        <DropdownMenu.Link href="/dashboard">
                                            Dashboard
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Profile
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Perencanaan Saya
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Proyek Saya
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Pendanaan Saya
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Keahlian Saya
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Toko Saya
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/profile">
                                            Alat Saya
                                        </DropdownMenu.Link>

                                        <DropdownMenu.Link href="/toko/carts">
                                            Your Cart
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/toko/products/me">
                                            Your Products
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/toko/history">
                                            Your History
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/users">
                                            Users
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/toko/products/table">
                                            Table Products
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </DropdownMenu.Link>
                                    </DropdownMenu> */}
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("dashboard")}
                                            >
                                                Dashboard
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Edit Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("users.profiles")}
                                            >
                                                Porfolios
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route(
                                                    "portofolios.index"
                                                )}
                                            >
                                                Input Porfolios
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                    <NavLink
                                        className="flex items-center justify-items-end gap-x-2"
                                        href="/toko/carts"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        {carts_global_count > 0
                                            ? carts_global_count
                                            : null}
                                    </NavLink>
                                    <NavLink
                                        className="flex items-center justify-items-end gap-x-2"
                                        href="/notifications"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 icon icon-tabler icon-tabler-bell-ringing"
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
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                                            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                                        </svg>

                                        {notifications_count > 0
                                            ? notifications_count
                                            : null}
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink href="/login">Masuk</NavLink>
                                    <NavLink href="/register">Register</NavLink>
                                </>
                            )}
                        </Popover.Group>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform z-60 md:hidden"
                    >
                        <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <NavLink href="/">
                                        <img
                                            className="w-8 h-8 sm:h-10"
                                            src={Logo}
                                            aria-label="TawarinLogo"
                                            alt="Logo"
                                        />
                                    </NavLink>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                {/* <div className="mt-6">
                                    <DropdownMenu
                                        className="grid gap-y-8"
                                        label={"Categories"}
                                    >
                                        {categories_global.map((category) => (
                                            <DropdownMenu.Link
                                                key={category.slug}
                                                href={`/toko/products?category=${category.slug}`}
                                            >
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        {category.name}
                                                    </p>
                                                </div>
                                            </DropdownMenu.Link>
                                        ))}
                                    </DropdownMenu>
                                </div> */}
                            </div>
                            <div className="px-5 py-6 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <DropdownMenu label={"Funding"}>
                                        <DropdownMenu.Link href="/fundings">
                                            Index
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/public/fundings/list">
                                            List
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/fundings/create">
                                            Form
                                        </DropdownMenu.Link>
                                    </DropdownMenu>

                                    <DropdownMenu label={"Plan"}>
                                        <DropdownMenu.Link href="/plans">
                                            Index
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/public/plans/list">
                                            List
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/plans/create">
                                            Form
                                        </DropdownMenu.Link>
                                    </DropdownMenu>

                                    <NavLink href="/toko/products">
                                        Products
                                    </NavLink>
                                    <DropdownMenu label={"Example"}>
                                        <DropdownMenu.Link href="/example/homefunding">
                                            Landing Page Funding
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/example/form">
                                            Form
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/example/funding">
                                            Funding
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/example/descriptionlist">
                                            Decription List
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/filepond">
                                            Filepond
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href="/dropzone">
                                            Dropzone
                                        </DropdownMenu.Link>
                                    </DropdownMenu>

                                    {auth.user ? (
                                        <>
                                            <DropdownMenu
                                                label={auth.user.name}
                                            >
                                                <DropdownMenu.Link href="/dashboard">
                                                    Dashboard
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link href="/profile">
                                                    Profile
                                                </DropdownMenu.Link>

                                                <DropdownMenu.Link href="/toko/carts">
                                                    Your Cart
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link href="/toko/products/me">
                                                    Your Products
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link href="/toko/history">
                                                    Your History
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link href="/users">
                                                    Users
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link href="/toko/products/table">
                                                    Table Products
                                                </DropdownMenu.Link>
                                                <DropdownMenu.Link
                                                    href="/logout"
                                                    method="post"
                                                    as="button"
                                                >
                                                    Logout
                                                </DropdownMenu.Link>
                                            </DropdownMenu>

                                            <NavLink
                                                className="flex items-center gap-x-2"
                                                href="/toko/carts"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                    />
                                                </svg>
                                                {carts_global_count > 0
                                                    ? carts_global_count
                                                    : null}
                                            </NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink href="/login">
                                                Login
                                            </NavLink>
                                            <NavLink href="/register">
                                                Register
                                            </NavLink>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            <section
                id="bottom-navigation"
                className="fixed inset-x-0 bottom-0 z-50 block bg-white shadow md:hidden"
            >
                <MenuModal
                    isOpenMenuModal={isOpenMenuModal}
                    setIsOpenMenuModal={setIsOpenMenuModal}
                >
                    <div className="grid items-center justify-between grid-cols-3 gap-x-12 gap-y-4">
                        {/* <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("reservation.myreservations")}
                        >
                            <IconListNumbers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Reservasi Saya
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("reservation.mycustomers")}
                        >
                            <IconListNumbers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Pelanggan Saya
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("reservation.myteaminvitations")}
                        >
                            <IconListNumbers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Undangan Saya
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("reservation.list")}
                        >
                            <IconListNumbers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Cari Reservasi
                            </p>
                        </NavLinkMobile> */}
                        
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("coming")}
                        >
                            <IconCash className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Pendanaan
                            </p>
                        </NavLinkMobile>

                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("plan.list")}
                        >
                            <IconHomeEdit className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Perencanaan
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href="/public/projects/list"
                        >
                            <IconBuildingSkyscraper className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Proyek
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href="/coming"
                        >
                            <IconUserSearch className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Keahlian
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href="/coming"
                        >
                            <IconBuildingStore className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Toko
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href="/coming"
                        >
                            <IconTools className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Alat
                            </p>
                        </NavLinkMobile>
                        <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href={route("user.list")}
                        >
                            <IconUsers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                            <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Pengguna.
                            </p>
                        </NavLinkMobile>
                        {auth.user ? (
                            <NavLinkMobile
                                onClick={() => setIsOpenMenuModal(false)}
                                href={route("planportofolios.index")}
                            >
                                <IconWriting className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                                <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                    Portofolio
                                </p>
                            </NavLinkMobile>
                        ) : (
                            <></>
                        )}

                        {permission_name.indexOf("lihat menu admin saldo") >
                            -1 && (
                            <NavLinkMobile
                                onClick={() => setIsOpenMenuModal(false)}
                                href="/projects/choose"
                            >
                                <IconBarcode className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                                <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                    Admin Saldo
                                </p>
                            </NavLinkMobile>
                        )}
                        {permission_name.indexOf("lihat menu admin general") >
                            -1 && (
                            <NavLinkMobile
                                onClick={() => setIsOpenMenuModal(false)}
                                href={"/adminplans"}
                            >
                                <IconBrandSupernova className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                                <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                    Atur Perencanaan
                                </p>
                            </NavLinkMobile>
                        )}
                        {permission_name.indexOf("atur hak akses") > -1 && (
                            <NavLinkMobile
                                onClick={() => setIsOpenMenuModal(false)}
                                href={route("users.index")}
                            >
                                <IconUsers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />

                                <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                    Admin User
                                </p>
                            </NavLinkMobile>
                        )}

                        {/* <NavLinkMobile
                            onClick={() => setIsOpenMenuModal(false)}
                            href="/wallets"
                        >
                            <IconWallet className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Saldo
                            </p>
                        </NavLinkMobile> */}
                    </div>
                </MenuModal>
                <div id="tabs" className="flex justify-between">
                    {auth.user ? (
                        <NavLinkMobile
                            href="/dashboard"
                            className={
                                "w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mb-1 icon icon-tabler icon-tabler-home-move"
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
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
                                <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
                                <path d="M16 19h6" />
                                <path d="M19 16l3 3l-3 3" />
                            </svg>

                            <span className="block text-xs tab tab-home">
                                Home
                            </span>
                        </NavLinkMobile>
                    ) : (
                        <NavLinkMobile
                            href="/"
                            className={
                                "w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mb-1 icon icon-tabler icon-tabler-home-move"
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
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
                                <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
                                <path d="M16 19h6" />
                                <path d="M19 16l3 3l-3 3" />
                            </svg>

                            <span className="block text-xs tab tab-home">
                                Home
                            </span>
                        </NavLinkMobile>
                    )}

                    {auth.user ? (
                        <NavLinkMobile
                            href={route("chats.index")}
                            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mb-1 icon icon-tabler icon-tabler-message"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                            </svg>

                            <span className="block text-xs tab tab-kategori">
                                Chat
                            </span>
                        </NavLinkMobile>
                    ) : (
                        <button
                            onClick={() => openInfoDialog()}
                            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                        >
                            <svg
                                onClick={() => openInfoDialog()}
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mb-1 icon icon-tabler icon-tabler-message"
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
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                            </svg>

                            <span className="block text-xs tab tab-kategori">
                                Chat
                            </span>
                        </button>
                    )}

                    <button
                        onClick={openMenuModal}
                        className="justify-center inline-block w-full pt-2 pb-1 text-center cursor-pointer focus:text-black hover:text-black"
                    >
                        <MenuLogo />
                        <span onClick={openMenuModal} className="block text-xs">
                            Explore
                        </span>
                    </button>

                    {auth.user ? (
                        <>
                            <NavLinkMobile
                                href="/wallets"
                                className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block mb-1 icon icon-tabler icon-tabler-wallet"
                                    width={25}
                                    height={25}
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
                                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                </svg>

                                <span className="block text-xs tab tab-wallet">
                                    Wallet
                                </span>
                            </NavLinkMobile>
                            <NavLinkMobile
                                href="/profile"
                                className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block mb-1 icon icon-tabler icon-tabler-user-circle"
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
                                    <circle cx={12} cy={10} r={3} />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                </svg>

                                <span className="block text-xs tab tab-profile">
                                    Profile
                                </span>
                            </NavLinkMobile>
                        </>
                    ) : (
                        <>
                            <NavLinkMobile
                                href="/login"
                                className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block mb-1 icon icon-tabler icon-tabler-login"
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
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                                </svg>

                                <span className="block text-xs tab tab-login">
                                    Masuk
                                </span>
                            </NavLinkMobile>
                            <NavLinkMobile
                                href="/register"
                                className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block mb-1 icon icon-tabler icon-tabler-user-plus"
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
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 11h6m-3 -3v6" />
                                </svg>

                                <span className="block text-xs tab tab-register">
                                    Daftar
                                </span>
                            </NavLinkMobile>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
