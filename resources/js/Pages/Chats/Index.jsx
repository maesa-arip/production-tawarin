import ApplicationLogo from "@/Components/ApplicationLogo";
import AppChat from "@/Layouts/AppChat";
import Aside from "@/Layouts/Aside";
import Header from "@/Layouts/Header";
import Navbar from "@/Layouts/Navbar";
import NavbarDefault2 from "@/Layouts/NavbarDefault2";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import "../../../css/static/style.css";
import "../../../css/static/index_responsive.css";

export default function Index(props) {
    const { users, auth, roles } = usePage().props;
    return (
        <>
            <div className="w-full h-full overflow-x-hidden">
                <Head title={"Chat"} />
                {/* <NavbarDefault2/> */}
                <Header/>
            <Aside/>
                <div className="flex-col flex-shrink-0 w-full px-8 py-8 bg-white">
                    <div className="flex flex-row items-center justify-center w-full h-12">
                        {/* <div className="flex items-center justify-center w-10 h-10 text-indigo-700 bg-indigo-100 rounded-2xl">
                            <ApplicationLogo />
                        </div> */}
                        <Link
                            className="ml-2 text-2xl font-bold"
                            href={route("chats.index")}
                        >
                            Chat
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-full px-4 py-6 mt-4 rounded-lg bg-amber-500">
                        <div className="w-20 h-20 overflow-hidden rounded-full">
                            {/* <img
                                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                alt="Avatar"
                                className="w-full h-full"
                            /> */}
                            <div className="flex items-center justify-center w-full h-full text-2xl font-semibold rounded-full bg-amber-200">
                                {Array.from(auth.user.name)[0]}
                            </div>
                        </div>
                        <div className="mt-2 text-sm font-semibold">
                            {auth.user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                            {/* {roles.map((role) => ( role.name ))} */}
                        </div>
                        <div className="flex flex-row items-center mt-3">
                            <div className="flex flex-col justify-center w-8 h-4 bg-indigo-500 rounded-full">
                                <div className="self-end w-3 h-3 mr-1 bg-white rounded-full"></div>
                            </div>
                            <div className="ml-1 text-xs leading-none">
                                Active
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-row items-center justify-between text-xs">
                            <span className="font-bold">Contact</span>
                            {/* <span className="flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full">
                                4
                            </span> */}
                        </div>
                        <div className="flex flex-col h-48 mt-4 -mx-2 space-y-1 overflow-y-auto">
                            {users.map((user) => (
                                <Link
                                    key={user.id}
                                    href={route("chats.show", user.username)}
                                    className={`block ${
                                        route().current(
                                            "chats.show",
                                            user.username
                                        )
                                            ? "flex flex-row items-center bg-gray-100 rounded-xl p-2"
                                            : "flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                    }`}
                                >
                                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full">
                                        {Array.from(user.name)[0]}
                                    </div>
                                    <div className="ml-2 text-sm font-semibold">
                                        {user.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* <div className="p-4 space-y-3 bg-gray-100 rounded-xl">
                        <div>{auth.user.name}</div>
                        <Link
                            href={route("logout")}
                            method="POST"
                            as="button"
                            className="px-4 py-2 font-medium text-black bg-white border rounded-xl"
                        >
                            Log out
                        </Link>
                    </div> */}
                </div>
                {/* {children} */}
            </div>
        </>
    );
}

// Index.layout = (page) => <AppChat children={page} />;
