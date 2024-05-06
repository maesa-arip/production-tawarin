import ApplicationLogo from "@/Components/ApplicationLogo";
import { usePage, Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Toaster } from "react-hot-toast";


export default function AppChat({ title, children }) {
    const { users, auth, roles } = usePage().props;
    return (
        <div className="h-screen antialiased text-gray-800 ">
            <Header/>
            <Aside/>
                
           <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                duration: 5000,
              }}
            />
            <Head title={title} />
            {/* <div className="w-full h-full overflow-x-hidden">
                <div className="flex-col flex-shrink-0 hidden w-64 py-8 pl-6 pr-2 bg-white md:flex">
                    <div className="flex flex-row items-center justify-center w-full h-12">
                        <Link className="ml-2 text-2xl font-bold" href={route("chats.index")}>Chat</Link>
                    </div>
                    <div className="flex flex-col items-center w-full px-4 py-6 mt-4 bg-indigo-100 border border-gray-200 rounded-lg">
                        <div className="w-20 h-20 overflow-hidden border rounded-full">
                            <div className="flex items-center justify-center w-full h-full text-2xl font-semibold bg-indigo-200 rounded-full">
                                    {Array.from(auth.user.name)[0]}
                                    </div>
                        </div>
                        <div className="mt-2 text-sm font-semibold">
                            {auth.user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                        {roles.map((role) => ( role.name ))}
                        </div>
                        <div className="flex flex-row items-center mt-3">
                            <div className="flex flex-col justify-center w-8 h-4 bg-indigo-500 rounded-full">
                                <div className="self-end w-3 h-3 mr-1 bg-white rounded-full"></div>
                            </div>
                            <div className="ml-1 text-xs leading-none">Active</div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-row items-center justify-between text-xs">
                            <span className="font-bold">Contact</span>
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
                    
                </div>
                {children}
            </div> */}
            <main className="md:pb-0">{children}</main>
        </div>
    );
}
