import ApplicationLogo from "@/Components/ApplicationLogo";
import { usePage, Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function AppChat({ title, children }) {
    const { users, auth, roles } = usePage().props;
    return (
        <div class="flex h-screen antialiased text-gray-800">
            <Head title={title} />
            <div class="flex flex-row h-full w-full overflow-x-hidden">
                <div class="hidden md:flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    <div class="flex flex-row items-center justify-center h-12 w-full">
                        <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                            <ApplicationLogo/>
                        </div>
                        <Link className="ml-2 text-2xl font-bold" href={route("chats.index")}>Chat</Link>
                    </div>
                    <div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                        <div class="h-20 w-20 rounded-full border overflow-hidden">
                            {/* <img
                                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                alt="Avatar"
                                class="h-full w-full"
                            /> */}
                            <div className="flex items-center justify-center w-full h-full text-2xl font-semibold bg-indigo-200 rounded-full">
                                    {Array.from(auth.user.name)[0]}
                                    </div>
                        </div>
                        <div class="text-sm font-semibold mt-2">
                            {auth.user.name}
                        </div>
                        <div class="text-xs text-gray-500">
                        {roles.map((role) => ( role.name ))}
                        </div>
                        <div class="flex flex-row items-center mt-3">
                            <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                                <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                            </div>
                            <div class="leading-none ml-1 text-xs">Active</div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-8">
                        <div class="flex flex-row items-center justify-between text-xs">
                            <span class="font-bold">Contact</span>
                            {/* <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                                4
                            </span> */}
                        </div>
                        <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
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
                {children}
            </div>
        </div>
    );
}
