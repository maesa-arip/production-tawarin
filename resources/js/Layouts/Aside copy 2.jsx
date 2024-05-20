import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import "../../css/static/stickymenu.css";

export default function Aside() {
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
        // <aside style={{ display: "none" }}>
        //     <div id="nav" className={isActive ? "active" : null}>
        //         <div id="close" onClick={toggleClass}>
        //             <div className="bar" />
        //             <div className="bar" />
        //         </div>
        //         <div id="nav-items">
        //             <ul style={{ color: "white !important" }}>
        //                 {permission_name.indexOf("lihat menu admin saldo") >
        //                     -1 && (
        //                     <>
        //                         <li>
        //                             <div className="registration-box row">
        //                                 <Disclosure as="div" className="">
        //                                     {({ open }) => (
        //                                         <>
        //                                             <h3 className="">
        //                                                 <Disclosure.Button className="flex items-center justify-between w-full">
        //                                                     <span className="text-xl header-menu-text">
        //                                                         Admin
        //                                                     </span>
        //                                                     <span className="flex items-center ">
        //                                                         {open ? (
        //                                                             <MinusIcon
        //                                                                 className="w-5 h-5 text-white"
        //                                                                 aria-hidden="true"
        //                                                             />
        //                                                         ) : (
        //                                                             <PlusIcon
        //                                                                 className="w-5 h-5 text-white"
        //                                                                 aria-hidden="true"
        //                                                             />
        //                                                         )}
        //                                                     </span>
        //                                                 </Disclosure.Button>
        //                                             </h3>

        //                                             <Disclosure.Panel className="">
        //                                                 <div className="">
        //                                                     {permission_name.indexOf(
        //                                                         "lihat menu admin saldo"
        //                                                     ) > -1 && (
        //                                                         <>
        //                                                             <Link
        //                                                                 onClick={
        //                                                                     toggleClass
        //                                                                 }
        //                                                                 href="/admindeposits"
        //                                                                 className="relative flex-row items-center w-full header-menu-text "
        //                                                             >
        //                                                                 <span className="flex ml-2 text-lg header-menu-text">
        //                                                                     Admin
        //                                                                     Deposit
        //                                                                 </span>
        //                                                             </Link>
        //                                                             <Link
        //                                                                 onClick={
        //                                                                     toggleClass
        //                                                                 }
        //                                                                 href="/adminwithdraws"
        //                                                                 className="relative flex-row items-center w-full header-menu-text "
        //                                                             >
        //                                                                 <span className="flex ml-2 text-lg header-menu-text">
        //                                                                     Admin
        //                                                                     Withdraw
        //                                                                 </span>
        //                                                             </Link>
        //                                                             <Link
        //                                                                 onClick={
        //                                                                     toggleClass
        //                                                                 }
        //                                                                 href="/adminplans"
        //                                                                 className="relative flex-row items-center w-full header-menu-text "
        //                                                             >
        //                                                                 <span className="flex ml-2 text-lg header-menu-text">
        //                                                                     Admin
        //                                                                     Perencanaan
        //                                                                 </span>
        //                                                             </Link>
        //                                                             <Link
        //                                                                 onClick={
        //                                                                     toggleClass
        //                                                                 }
        //                                                                 href={route(
        //                                                                     "users.index"
        //                                                                 )}
        //                                                                 className="relative flex-row items-center w-full header-menu-text "
        //                                                             >
        //                                                                 <span className="flex ml-2 text-lg header-menu-text">
        //                                                                     Admin
        //                                                                     User
        //                                                                 </span>
        //                                                             </Link>
        //                                                         </>
        //                                                     )}
        //                                                 </div>
        //                                             </Disclosure.Panel>
        //                                         </>
        //                                     )}
        //                                 </Disclosure>
        //                             </div>
        //                         </li>
        //                     </>
        //                 )}

        //                 <li>
        //                     <div className="registration-box row">
        //                         <Link
        //                             onClick={toggleClass}
        //                             href="/homereservasi"
        //                             className="header-menu-text"
        //                             style={{
        //                                 color: "white !important",
        //                             }}
        //                         >
        //                             Reservasi
        //                         </Link>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="registration-box row">
        //                         <Link
        //                             onClick={toggleClass}
        //                             href="/homekonstruksi"
        //                             className="header-menu-text"
        //                             style={{
        //                                 color: "white !important",
        //                             }}
        //                         >
        //                             Konstruksi
        //                         </Link>
        //                     </div>
        //                 </li>
        //                 {auth.user ? (
        //                     <>
        //                         <li>
        //                             <div className="registration-box row">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/dashboard"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Dashboard
        //                                 </Link>
        //                             </div>
        //                         </li>

        //                         <li>
        //                             <div className="registration-box row">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/profile"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Profile
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="registration-box">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/wallets"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Saldo
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="registration-box">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/chat"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Chat
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="registration-box row ">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href={route("logout")}
        //                                     method="post"
        //                                     as="button"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Log Out
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                     </>
        //                 ) : (
        //                     <>
        //                         <li>
        //                             <div className="registration-box row">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/login"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Masuk
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                         <li>
        //                             <div className="registration-box">
        //                                 <Link
        //                                     onClick={toggleClass}
        //                                     href="/register"
        //                                     className="header-menu-text"
        //                                     style={{
        //                                         color: "white !important",
        //                                     }}
        //                                 >
        //                                     Daftar
        //                                 </Link>
        //                             </div>
        //                         </li>
        //                     </>
        //                 )}
        //             </ul>
        //         </div>
        //     </div>
        // </aside>
        <div
            id="stickyMenu"
            className={`z-40 fixed bottom-0 left-0 right-0 overflow-hidden transition-all duration-300 bg-white shadow-lg md:hidden rounded-2xl`}
        >
            <button
                id="menuToggle"
                className="relative flex items-center justify-center w-full py-4 text-xl font-semibold text-center text-white bg-yellow-500"
                onClick={toggleMenu}
            >
                Menu
                <span id="menuIcon" className="absolute right-4">
                    {menuIcon}
                </span>
            </button>
            <div
                id="menuContent"
                className={`overflow-y-auto bg-yellow-500 ${menuClass} transition-height`}
            >
                <ul className="flex flex-col items-start justify-center px-8 text-xl leading-10">
                    <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                        <Link href="/homereservasi" className="text-white">
                            {" "}
                            Reservasi
                        </Link>
                    </li>
                    <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                        <Link href="/homekonstruksi" className="text-white ">
                            {" "}
                            Konstruksi
                        </Link>
                    </li>
                    {permission_name.indexOf("lihat menu admin saldo") >
                            -1 && (
                                <li className="justify-between w-full">
                        <div className="flex items-center">
                            <button
                                className={`flex items-center justify-between w-full py-6 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                onClick={() => toggleSubmenu(0)}
                            >
                                Admin Saldo
                                <span className="text-right submenu-icon">
                                    {submenuOpen === 0 ? (
                                        <MinusSVG />
                                    ) : (
                                        <PlusSVG />
                                    )}
                                </span>
                            </button>
                        </div>
                        {submenuOpen === 0 && (
                            <ul className={`pl-4 space-y-2 ${subMenuClass}`}>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <Link href="/admindeposits" className="text-white ">
                                        {" "}
                                        Admin Deposit
                                    </Link>
                                </li>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <Link href="/adminwithdraws" className="text-white">
                                        {" "}
                                        Admin Withdraw
                                    </Link>
                                </li>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <Link href="/adminplans" className="text-white">
                                        {" "}
                                        Admin Perencanaan
                                    </Link>
                                </li>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <a href={route("users.index")} className="text-white">
                                        {" "}
                                        Admin User
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                            )}
                    <li className="justify-between w-full">
                        <div className="flex items-center">
                            <button
                                className={`flex items-center justify-between w-full py-6 text-center text-white border-b border-gray-100 border-opacity-25 submenu-toggle`}
                                onClick={() => toggleSubmenu(0)}
                            >
                                Services
                                <span className="text-right submenu-icon">
                                    {submenuOpen === 0 ? (
                                        <MinusSVG />
                                    ) : (
                                        <PlusSVG />
                                    )}
                                </span>
                            </button>
                        </div>
                        {submenuOpen === 0 && (
                            <ul className={`pl-4 space-y-2 ${subMenuClass}`}>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white ">
                                        {" "}
                                        Service 1
                                    </a>
                                </li>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white">
                                        {" "}
                                        Service 2
                                    </a>
                                </li>
                                <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                                    <a href="#" className="text-white">
                                        {" "}
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    {auth.user ? (
                        <>
                        <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                        <Link href="/dashboard" className="text-white">
                            {" "}
                            Dashboard
                        </Link>
                    </li>
                        </>
                        ) : (
<><li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                        <Link href="/login" className="text-white">
                            {" "}
                            Masuk
                        </Link>
                    </li>
                    <li className="w-full py-6 border-b border-gray-100 border-opacity-25 ">
                        <Link href="/register" className="text-white">
                            {" "}
                            Daftar
                        </Link>
                    </li></>
                        )}
                    
                </ul>
            </div>
        </div>
    );
}
