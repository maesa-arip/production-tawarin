import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Choose() {
    return (
        <>
        <Head title="Project" />
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
                        <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                            <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                <div>
                                    <dt className="sr-only">Title</dt>
                                    <dd className="font-semibold text-slate-900 group-hover:text-white">
                                        Proyek Saya
                                    </dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Category</dt>
                                    <dd className="group-hover:text-blue-200">
                                        Engineering
                                    </dd>
                                </div>
                                <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                                    <dt className="sr-only">Users</dt>
                                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                        <img
                                            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        <li className="p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md">
                            <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                <div>
                                    <dt className="sr-only">Title</dt>
                                    <dd className="font-semibold text-slate-900 group-hover:text-white">
                                        Cari Proyek
                                    </dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Category</dt>
                                    <dd className="group-hover:text-blue-200">
                                        Human Resources
                                    </dd>
                                </div>
                                <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                                    <dt className="sr-only">Users</dt>
                                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                        <img
                                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        {/* <li className="hidden p-3 bg-white rounded-md shadow-sm cursor-pointer group ring-1 ring-slate-200 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md sm:block lg:hidden xl:block">
                            <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
                                <div>
                                    <dt className="sr-only">Title</dt>
                                    <dd className="font-semibold text-slate-900 group-hover:text-white">
                                        Onboarding Emails
                                    </dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Category</dt>
                                    <dd className="group-hover:text-blue-200">
                                        Customer Success
                                    </dd>
                                </div>
                                <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                                    <dt className="sr-only">Users</dt>
                                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                        <img
                                            src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                                            alt=""
                                            className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </dd>
                                </div>
                            </dl>
                        </li> */}
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
                                Tambah proyek
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        </>
    );
}
Choose.layout = (page) => <App children={page}></App>;
