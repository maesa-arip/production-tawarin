import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";
import DropdownMenu from "@/Components/DropdownMenu";
import MenuModal from "@/Components/Modal/MenuModal";
import { PhotographIcon } from "@heroicons/react/solid";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {MenuIcon,XIcon} from "@heroicons/react/outline";
import Logo from '../../img/Tawarin.png';


export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props;
    const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
    const openMenuModal = () => {
        setIsOpenMenuModal(true);
    };
    return (
        <>
            <Popover className="relative bg-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6">
                    <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
                        <div className="flex justify-start">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                <img className="w-auto h-8 sm:h-10" src={Logo}/>
                                
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
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
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/toko/products">Products</NavLink>
                            <DropdownMenu label={"Categories"}>
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
                                    <DropdownMenu label={auth.user.name}>
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
                                </>
                            ) : (
                                <>
                                    <NavLink href="/login">Login</NavLink>
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
                        className="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform md:hidden"
                    >
                        <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="w-auto h-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                            alt="Workflow"
                                        />
                                    </div>
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
                                <div className="mt-6">
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
                                </div>
                            </div>
                            <div className="px-5 py-6 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    

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
                className="fixed inset-x-0 bottom-0 z-10 block bg-white shadow md:hidden"
            >
                <MenuModal
                    isOpenMenuModal={isOpenMenuModal}
                    setIsOpenMenuModal={setIsOpenMenuModal}
                >
                    <div className="grid items-center justify-between grid-cols-4 gap-8">
                        <div>
                            <PhotographIcon className="px-5 py-5 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Tes
                            </p>
                        </div>
                        <div>
                            <PhotographIcon className="px-5 py-5 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Tes
                            </p>
                        </div>
                        <div>
                            <PhotographIcon className="px-5 py-5 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Tes
                            </p>
                        </div>
                        <div>
                            <PhotographIcon className="px-5 py-5 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                            <p className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                                Tes
                            </p>
                        </div>
                    </div>
                </MenuModal>
                <div id="tabs" className="flex justify-between">
                    <NavLink
                        href="/"
                        className={
                            "w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                        }
                    >
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 42 42"
                            className="inline-block mb-1"
                        >
                            <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </g>
                        </svg>

                        <span className="block text-xs tab tab-home">Home</span>
                    </NavLink>
                    <a
                        href="#"
                        className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
                    >
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 42 42"
                            className="inline-block mb-1"
                        >
                            <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <path
                                    d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                                    fill="currentColor"
                                    opacity="0.1"
                                />
                                <g transform="translate(2.000000, 3.000000)">
                                    <path
                                        d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                                        fill="currentColor"
                                        transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
                                    />
                                    <circle
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        cx="27.5"
                                        cy="27.5"
                                        r="7.5"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span className="block text-xs tab tab-kategori">
                            Category
                        </span>
                    </a>
                    <a
                        onClick={openMenuModal}
                        className="justify-center inline-block w-full pt-2 pb-1 text-center cursor-pointer focus:text-teal-500 hover:text-teal-500"
                    >
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 42 42"
                            className="inline-block mb-1"
                        >
                            <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </g>
                        </svg>
                        <span onClick={openMenuModal} className="block text-xs">
                            Explore
                        </span>
                    </a>
                    <a
                        href="#"
                        className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
                    >
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 42 42"
                            className="inline-block mb-1"
                        >
                            <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <path
                                    d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                                    fill="currentColor"
                                    opacity="0.1"
                                />
                                <g transform="translate(2.000000, 3.000000)">
                                    <path
                                        d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                                        fill="currentColor"
                                        transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
                                    />
                                    <circle
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        cx="27.5"
                                        cy="27.5"
                                        r="7.5"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span className="block text-xs tab tab-whishlist">
                            Whishlist
                        </span>
                    </a>
                    <a
                        href="#"
                        className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
                    >
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 42 42"
                            className="inline-block mb-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </svg>
                        <span className="block text-xs tab tab-account">
                            Account
                        </span>
                    </a>
                </div>
            </section>
            
        </>
    );
}
