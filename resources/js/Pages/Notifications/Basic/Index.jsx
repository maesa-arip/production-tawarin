import Container from "@/Components/Container";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import ThirdButtonSmall from "@/Components/ThirdButtonSmall";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Head, Link } from "@inertiajs/inertia-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

export default function Index({ notifications }) {
    return (
        <>
            <Head title="Wallet" />

            <div className="max-w-full mx-auto">
                <div className="p-8 mb-5 bg-white rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20">
                        <div className="mt-12 md:mt-0">
                            <h2 className="mb-4 text-2xl font-semibold ">
                                Notifications
                            </h2>
                            <div className="space-y-4">
                            {notifications.map((notification) => (
                                <div key={notification.id} className="relative p-3 pb-4 pl-5 overflow-hidden rounded-lg bg-amber-200 dark:bg-amber-950">
                                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-amber-600 dark:bg-amber-400" />
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs font-medium text-amber-900 dark:text-amber-200">
                                        {notification.data.type}
                                        </div>
                                        <div className="flex items-center justify-center h-6 rounded-lg w-22">
                                            <div className="flex text-xs font-medium dark:text-amber-200 text-amber-800">
                                            {dayjs(
                                                    notification.created_at
                                                ).fromNow()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-amber-950 dark:text-amber-50">
                                    {notification.data.title}
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-amber-950 dark:text-amber-50">
                                    {notification.data.message}
                                    </div>
                                    <div className="relative z-0 flex mt-2 -space-x-1">
                                    {notification.data.url ? (
                                            <ThirdButtonSmall
                                                href={notification.data.url}
                                                
                                            >
                                                Lihat
                                            </ThirdButtonSmall>
                                        ) : (
                                            ""
                                        )}
                                        
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page}></App>;
