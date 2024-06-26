import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function Aside() {
    const {
        auth,
        categories_global,
        carts_global_count,
        notifications_count,
        permissions,
    } = usePage().props;
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    return (
        <aside style={{ display: "none" }}>
            <div id="nav" className={isActive ? "active" : null}>
                <div id="close" onClick={toggleClass}>
                    <div className="bar" />
                    <div className="bar" />
                </div>
                <div id="nav-items">
                    <ul style={{ color: "white !important" }}>
                        {permission_name.indexOf("lihat menu admin saldo") >
                            -1 && (
                            <>
                                <li>
                                    <div className="registration-box row">
                                        <Disclosure as="div" className="">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="">
                                                        <Disclosure.Button className="flex items-center justify-between w-full">
                                                            <span className="text-xl header-menu-text">
                                                                Admin
                                                            </span>
                                                            <span className="flex items-center ">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>

                                                    <Disclosure.Panel className="">
                                                        <div className="">
                                                            {permission_name.indexOf(
                                                                "lihat menu admin saldo"
                                                            ) > -1 && (
                                                                <>
                                                                    <Link
                                                                        onClick={
                                                                            toggleClass
                                                                        }
                                                                        href="/admindeposits"
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Admin
                                                                            Deposit
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                        onClick={
                                                                            toggleClass
                                                                        }
                                                                        href="/adminwithdraws"
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Admin
                                                                            Withdraw
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                        onClick={
                                                                            toggleClass
                                                                        }
                                                                        href="/adminplans"
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Admin
                                                                            Perencanaan
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                        onClick={
                                                                            toggleClass
                                                                        }
                                                                        href={route(
                                                                            "users.index"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Admin
                                                                            User
                                                                        </span>
                                                                    </Link>
                                                                </>
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </li>
                            </>
                        )}

                        <li>
                            <div className="registration-box row">
                                <Link
                                    onClick={toggleClass}
                                    href="/homereservasi"
                                    className="header-menu-text"
                                    style={{
                                        color: "white !important",
                                    }}
                                >
                                    Reservasi
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="registration-box row">
                                <Link
                                    onClick={toggleClass}
                                    href="/homekonstruksi"
                                    className="header-menu-text"
                                    style={{
                                        color: "white !important",
                                    }}
                                >
                                    Konstruksi
                                </Link>
                            </div>
                        </li>
                        {/* <li>
                                    <div className="registration-box row">
                                        <Disclosure as="div" className="">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="">
                                                        <Disclosure.Button className="flex items-center justify-between w-full">
                                                            <span className="text-xl header-menu-text">
                                                                Reservasi
                                                            </span>
                                                            <span className="flex items-center ">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>

                                                    <Disclosure.Panel className="">
                                                        <div className="">
                                                            {permission_name.indexOf(
                                                                "lihat menu owner reservasi"
                                                            ) > -1 && (
                                                                <>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservationprofile.edit"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Atur
                                                                            Perusahaan
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservationCounters.index"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Atur
                                                                            Layanan
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservation.mycompanycustomers"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Pelanggan
                                                                            Perusahaan
                                                                        </span>
                                                                    </Link>
                                                                </>
                                                            )}
                                                            {permission_name.indexOf(
                                                                "lihat menu pekerja reservasi"
                                                            ) > -1 && (
                                                                <>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservation.myteaminvitations"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Lihat
                                                                            Undangan
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservation.mycustomers"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Lihat
                                                                            Pelanggan
                                                                        </span>
                                                                    </Link>
                                                                    <Link
                                                                    onClick={toggleClass}
                                                                        href={route(
                                                                            "reservation.mycounters"
                                                                        )}
                                                                        className="relative flex-row items-center w-full header-menu-text "
                                                                    >
                                                                        <span className="flex ml-2 text-lg header-menu-text">
                                                                            Lihat
                                                                            Layanan
                                                                        </span>
                                                                    </Link>
                                                                </>
                                                            )}
                                                            <Link
                                                            onClick={toggleClass}
                                                                href={route(
                                                                    "reservation.myreservations"
                                                                )}
                                                                className="relative flex-row items-center w-full header-menu-text "
                                                            >
                                                                <span className="flex ml-2 text-lg header-menu-text">
                                                                    Reservasi
                                                                    Saya
                                                                </span>
                                                            </Link>
                                                            <Link
                                                            onClick={toggleClass}
                                                                href={route(
                                                                    "reservation.list"
                                                                )}
                                                                className="relative flex-row items-center w-full header-menu-text "
                                                            >
                                                                <span className="flex ml-2 text-lg header-menu-text">
                                                                    Cari
                                                                    Reservasi
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </li>
                                <li>
                                    <div className="registration-box row">
                                        <Disclosure as="div" className="">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="">
                                                        <Disclosure.Button className="flex items-center justify-between w-full">
                                                            <span className="text-xl header-menu-text">
                                                                Konstruksi
                                                            </span>
                                                            <span className="flex items-center ">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="w-5 h-5 text-white"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>

                                                    <Disclosure.Panel className="">
                                                        <div className="">
                                                            <Link
                                                            onClick={toggleClass}
                                                                href=""
                                                                className="relative flex-row items-center w-full header-menu-text "
                                                            >
                                                                <span className="flex ml-2 text-lg header-menu-text">
                                                                    Undangan
                                                                    Saya
                                                                </span>
                                                            </Link>
                                                            <Link
                                                            onClick={toggleClass}
                                                                href=""
                                                                className="relative flex-row items-center w-full header-menu-text "
                                                            >
                                                                <span className="flex ml-2 text-lg header-menu-text">
                                                                    Pelanggan
                                                                    Saya
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </li> */}
                        {auth.user ? (
                            <>
                                <li>
                                    <div className="registration-box row">
                                        <Link
                                            onClick={toggleClass}
                                            href="/dashboard"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="registration-box row">
                                        <Link
                                            onClick={toggleClass}
                                            href="/profile"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Profile
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="registration-box">
                                        <Link
                                            onClick={toggleClass}
                                            href="/wallets"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Saldo
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="registration-box">
                                        <Link
                                            onClick={toggleClass}
                                            href="/chat"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Chat
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="registration-box row ">
                                        <Link
                                            onClick={toggleClass}
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Log Out
                                        </Link>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <div className="registration-box row">
                                        <Link
                                            onClick={toggleClass}
                                            href="/login"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Masuk
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="registration-box">
                                        <Link
                                            onClick={toggleClass}
                                            href="/register"
                                            className="header-menu-text"
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Daftar
                                        </Link>
                                    </div>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
