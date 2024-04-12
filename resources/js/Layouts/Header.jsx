import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import { Link, usePage } from '@inertiajs/inertia-react'
import Logo from "../../img/Tawarin.png";
import React from 'react'
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Fragment } from "react";
import DropdownMenu from '@/Components/DropdownMenu';

export default function Header() {
    const {
        auth,
        categories_global,
        carts_global_count,
        notifications_count,
        permissions,
    } = usePage().props;
    const permission_name = permissions
    ? permissions.map((permission) => permission.name)
    : "null";
  return (
    // <header className="bg-white shadow-md">
    //                 <div className="container flex items-center justify-between py-4 mx-auto">
    //                     <div className="flex items-center">
    //                         <NavLink href="/">
    //                             <span className="sr-only"></span>
    //                             <img
    //                                 className="w-8 h-8"
    //                                 src={Logo}
    //                                 aria-label="TawarinLogo"
    //                                 alt="Logo"
    //                             />
    //                         </NavLink>
    //                     </div>
    //                     <div className="hidden space-x-10 lg:flex">
    //                         <NavLink
    //                             className="text-gray-700 hover:text-gray-900"
    //                             href="/dashboard"
    //                         >
    //                             Dashboard
    //                         </NavLink>
    //                         <NavLink
    //                             className="text-gray-700 hover:text-gray-900"
    //                             href="/wallets"
    //                         >
    //                             Saldo
    //                         </NavLink>
    //                         <NavLink
    //                             className="text-gray-700 hover:text-gray-900"
    //                             href="/chats"
    //                         >
    //                             Chat
    //                         </NavLink>
    //                         {/* <NavLink className="text-gray-700 hover:text-gray-900" href="/chats">Chat</NavLink> */}
    //                     </div>
    //                     {auth.user ? (
    //                         <>
    //                         <div className="hidden space-x-4 lg:flex">
    //                             <Dropdown>
    //                                 <Dropdown.Trigger>
    //                                     <span className="inline-flex rounded-md">
    //                                         <button
    //                                             type="button"
    //                                             className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none"
    //                                         >
    //                                             {auth.user.name}

    //                                             <svg
    //                                                 className="ml-2 -mr-0.5 h-4 w-4"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 viewBox="0 0 20 20"
    //                                                 fill="currentColor"
    //                                             >
    //                                                 <path
    //                                                     fillRule="evenodd"
    //                                                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                                     clipRule="evenodd"
    //                                                 />
    //                                             </svg>
    //                                         </button>
    //                                     </span>
    //                                 </Dropdown.Trigger>

    //                                 <Dropdown.Content>
    //                                     <Dropdown.Link
    //                                         href={route("dashboard")}
    //                                     >
    //                                         Dashboard
    //                                     </Dropdown.Link>
    //                                     <Dropdown.Link
    //                                         href={route("profile.edit")}
    //                                     >
    //                                         Edit Profile
    //                                     </Dropdown.Link>
    //                                     <Dropdown.Link
    //                                         href={route("users.profiles")}
    //                                     >
    //                                         Porfolios
    //                                     </Dropdown.Link>
    //                                     <Dropdown.Link
    //                                         href={route("portofolios.index")}
    //                                     >
    //                                         Input Porfolios
    //                                     </Dropdown.Link>
    //                                     <Dropdown.Link
    //                                         href={route("logout")}
    //                                         method="post"
    //                                         as="button"
    //                                     >
    //                                         Log Out
    //                                     </Dropdown.Link>
    //                                 </Dropdown.Content>
    //                             </Dropdown>
    //                             <NavLink
    //                                 className="flex items-center justify-items-end gap-x-2"
    //                                 href="/toko/carts"
    //                             >
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="w-5 h-5"
    //                                     fill="none"
    //                                     viewBox="0 0 24 24"
    //                                     stroke="currentColor"
    //                                     strokeWidth={2}
    //                                 >
    //                                     <path
    //                                         strokeLinecap="round"
    //                                         strokeLinejoin="round"
    //                                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    //                                     />
    //                                 </svg>
    //                                 {carts_global_count > 0
    //                                     ? carts_global_count
    //                                     : null}
    //                             </NavLink>
    //                             <NavLink
    //                                 className="flex items-center justify-items-end gap-x-2"
    //                                 href="/notifications"
    //                             >
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="w-5 h-5 icon icon-tabler icon-tabler-bell-ringing"
    //                                     width={24}
    //                                     height={24}
    //                                     viewBox="0 0 24 24"
    //                                     strokeWidth={2}
    //                                     stroke="currentColor"
    //                                     fill="none"
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                 >
    //                                     <path
    //                                         stroke="none"
    //                                         d="M0 0h24v24H0z"
    //                                         fill="none"
    //                                     />
    //                                     <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    //                                     <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    //                                     <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
    //                                     <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
    //                                 </svg>

    //                                 {notifications_count > 0
    //                                     ? notifications_count
    //                                     : null}
    //                             </NavLink>
    //                             </div>
    //                         </>
    //                     ) : (
    //                         <>
    //                             <div className="hidden space-x-4 lg:flex">
    //                                 <Link
    //                                     href="/login"
    //                                     className="px-4 py-2 rounded-md"
    //                                 >
    //                                     Login
    //                                 </Link>
    //                                 <Link
    //                                     href="/register"
    //                                     style={{
    //                                         backgroundColor: "rgb(245 158 11)",
    //                                     }}
    //                                     className="px-4 py-2 text-white rounded-md bg-amber-500"
    //                                 >
    //                                     Sign Up
    //                                 </Link>
    //                             </div>
    //                         </>
    //                     )}
    //                 </div>
    //             </header>
    <Popover className="relative bg-white">
                <div className="px-4 mx-auto sm:px-6">
                    <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
                        <div className="flex justify-start">
                            <a className='flex' href="/">
                                <span className="sr-only"></span>
                                <img
                                    className="w-8 h-8"
                                    src={Logo}
                                    aria-label="TawarinLogo"
                                    alt="Logo"
                                />
                                <p className='flex items-center justify-center ml-2 text-2xl tracking-tight text-transparent bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-500 bg-clip-text justify-items-center'>Tawarin</p>
                            </a>
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
                            
                            {permission_name.indexOf("lihat menu admin saldo") >
                                -1 && (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
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
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
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
                            
                            {auth.user ? (
                                <>
                                   
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none"
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
                                    <div className="justify-end hidden space-x-4 lg:flex">
                                     <Link
                                         href="/login"
                                         className="inline-flex items-center px-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-transparent hover:text-yellow-500 hover:border-yellow-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                                     >
                                         Masuk
                                     </Link>
                                     <Link
                                         href="/register"
                                         style={{
                                             backgroundColor: "rgb(245 158 11)",
                                         }}
                                         className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border-transparent rounded-md hover:text-black hover:border-yellow-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 bg-amber-500"
                                     >
                                         Daftar
                                     </Link>
                                 </div>
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
  )
}
