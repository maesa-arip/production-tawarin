import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import { IconListSearch, IconUserSearch } from "@tabler/icons";
import React from "react";

export default function Choose() {
    return (
        <>
            <Head title="Pendanaan" />
            <div className="flex flex-col lg:col-span-5 xl:col-span-6">
                <div className="relative z-10 my-auto overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-slate-900/5 xl:mt-18">
                    <section>
                        <ul className="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-50 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <Link href={route('fundings.index')}>
                            <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                                <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                    <div>
                                        <dt className="sr-only">Title</dt>
                                        <dd className="font-semibold text-slate-900 group-hover:text-white">
                                            Pendanaan Saya
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Category</dt>
                                        <dd className="group-hover:text-blue-200">
                                            Lihat Pendanaan
                                        </dd>
                                    </div>
                                    <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                                        <dt className="sr-only">Users</dt>
                                        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                            <IconUserSearch />
                                        </dd>
                                    </div>
                                </dl>
                            </li>
                            </Link>
                            <Link href={route('funding.list')}>
                            <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                                <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                    <div>
                                        <dt className="sr-only">Title</dt>
                                        <dd className="font-semibold text-slate-900 group-hover:text-white">
                                            Cari Pendanaan
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Category</dt>
                                        <dd className="group-hover:text-blue-200">
                                            Cari pendanaanmu disini
                                        </dd>
                                    </div>
                                    <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                                        <dt className="sr-only">Users</dt>
                                        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                            <IconListSearch />
                                        </dd>
                                    </div>
                                </dl>
                            </li>
                            </Link>
                            <Link href={route('fundings.create')}>
                            <li className="flex">
                                <div className="flex flex-col items-center justify-center w-full py-3 text-sm font-medium leading-6 border-2 border-dashed rounded-md cursor-pointer group border-slate-300 text-slate-900 hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500">
                                    <svg
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="mb-1 text-slate-400 group-hover:text-blue-500"
                                    >
                                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    Buat Pendanaan
                                </div>
                            </li>
                            </Link>
                            
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}
Choose.layout = (page) => <App children={page}></App>;
