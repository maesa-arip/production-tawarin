import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import { IconListSearch, IconUserSearch } from "@tabler/icons";
import React from "react";

export default function Choose() {
    return (
        <>
            <Head title="Perencanaan" />
            <div className="flex flex-col lg:col-span-5 xl:col-span-6">
                <div className="relative z-10 my-auto overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-slate-900/5 xl:mt-18">
                    <section>
                        {/* <header className="p-4 space-y-4 rounded-t-xl sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-slate-900">
                                Projects
                            </h2>
                            <div className="flex items-center py-2 pl-2 pr-3 text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm cursor-pointer group hover:bg-blue-400">
                                <svg
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="mr-2"
                                >
                                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                </svg>
                                New
                            </div>
                        </div>
                        <div className="relative rounded-md group">
                            <svg
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                />
                            </svg>
                            <input
                                type="text"
                                aria-label="Filter projects"
                                placeholder="Filter projects..."
                                className="w-full py-2 pl-10 text-sm leading-6 bg-transparent rounded-md shadow-sm appearance-none text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </header> */}
                        <ul className="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-50 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <Link href={route('planbids.index')}>
                            <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                                <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                    <div>
                                        <dt className="sr-only">Title</dt>
                                        <dd className="font-semibold text-slate-900 group-hover:text-white">
                                            Penawaran Saya
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Category</dt>
                                        <dd className="group-hover:text-blue-200">
                                            Lihat penawaranmu
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
                            <Link href={route('plans.index')}>
                            <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                                <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                    <div>
                                        <dt className="sr-only">Title</dt>
                                        <dd className="font-semibold text-slate-900 group-hover:text-white">
                                            Perencanaan Saya
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Category</dt>
                                        <dd className="group-hover:text-blue-200">
                                            Lihat perencanaanmu
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
                            <Link href={route('plan.list')}>
                            <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                                <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                    <div>
                                        <dt className="sr-only">Title</dt>
                                        <dd className="font-semibold text-slate-900 group-hover:text-white">
                                            Cari Perencanaan
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Category</dt>
                                        <dd className="group-hover:text-blue-200">
                                            Cari perencanaan disini
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
                            <Link href={route('plans.create')}>
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
                                    Tambah perencanaan
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
