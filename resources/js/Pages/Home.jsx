import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";

export default function Home() {
    return (
        <div>
            <Head title="Home" />

            <Container>
                Home
                <div className="relative overflow-hidden bg-white rounded dark:bg-gray-800 lg:flex lg:items-center">
                    <div className="z-20 w-full px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                Mother hearth host your travel
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-400 text-md">
                            The state of Utah in the united states is home to
                            lots of beautiful National parks, Bryce national
                            canion park ranks as three of the most magnificient
                            &amp; awe inspiring.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex mt-12 rounded-md shadow">
                                <button
                                    type="button"
                                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 p-8 lg:p-24">
                        <img
                            src="https://source.unsplash.com/200x320?building"
                            className="w-1/2 rounded-lg"
                            alt="Tree"
                        />
                        <div>
                            <img
                                src="https://source.unsplash.com/200x320?building"
                                className="mb-8 rounded-lg"
                                alt="Tree"
                            />
                            <img
                                src="https://source.unsplash.com/200x320?building"
                                className="rounded-lg"
                                alt="Tree"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
                    <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
                    <div className="flex flex-col flex-1 gap-5 sm:p-2">
                        <div className="flex flex-col flex-1 gap-3">
                            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="flex flex-wrap p-12 mx-auto md:flex-nowrap">
                        <a href="">
                            <div className="flex w-full">
                                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                                    <img
                                        className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                        src="https://source.unsplash.com/200x320?building"
                                        alt="blog"
                                    />
                                    <div className="px-6 py-8">
                                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                            <span>Entry</span>
                                        </h4>
                                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                            Install Tailwind CSS without any
                                            Javascript Framewrok locally with
                                            purgeCSS, enable the dark mode
                                            option, prefferences or class is upt
                                            to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex w-full">
                                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                                    <img
                                        className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                        src="https://source.unsplash.com/200x320?construction"
                                        alt="blog"
                                    />
                                    <div className="px-6 py-8">
                                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                            <span>Entry</span>
                                        </h4>
                                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                            Install Tailwind CSS without any
                                            Javascript Framewrok locally with
                                            purgeCSS, enable the dark mode
                                            option, prefferences or class is upt
                                            to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex w-full">
                                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                                    <img
                                        className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                        src="https://source.unsplash.com/200x320?computer"
                                        alt="blog"
                                    />
                                    <div className="px-6 py-8">
                                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                            <span>Entry</span>
                                        </h4>
                                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                            Install Tailwind CSS without any
                                            Javascript Framewrok locally with
                                            purgeCSS, enable the dark mode
                                            option, prefferences or class is upt
                                            to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex w-full">
                                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                                    <img
                                        className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                        src="https://source.unsplash.com/200x320?computer"
                                        alt="blog"
                                    />
                                    <div className="px-6 py-8">
                                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                            <span>Entry</span>
                                        </h4>
                                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                                            Install Tailwind CSS without any
                                            Javascript Framewrok locally with
                                            purgeCSS, enable the dark mode
                                            option, prefferences or class is upt
                                            to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                <svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 256 262"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <path
                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                        fill="#EB4335"
                                    ></path>
                                </svg>
                            </span>
                            <div className="flex flex-col">
                                <span className="ml-2 font-bold text-black text-md dark:text-white">
                                    Google
                                </span>
                                <span className="ml-2 text-sm text-gray-500 dark:text-white">
                                    Google Inc.
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="p-1 border border-gray-200 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                </svg>
                            </button>
                            <button className="text-gray-200">
                                <svg
                                    width={25}
                                    height={25}
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4 space-x-12">
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                            PROGRESS
                        </span>
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                            HIGH PRIORITY
                        </span>
                    </div>
                    <div className="block m-auto">
                        <div>
                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                Task done :
                                <span className="font-bold text-gray-700 dark:text-white">
                                    25
                                </span>
                                /50
                            </span>
                        </div>
                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                            <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start my-4 space-x-4">
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                            IOS APP
                        </span>
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                            UI/UX
                        </span>
                    </div>
                    <div className="flex -space-x-2">
                        <a href="#" className="">
                            <img
                                className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                src="https://source.unsplash.com/200x320?person"
                                alt="Guy"
                            />
                        </a>
                        <a href="#" className="">
                            <img
                                className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                src="https://source.unsplash.com/200x320?person"
                                alt="Max"
                            />
                        </a>
                        <a href="#" className="">
                            <img
                                className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                src="https://source.unsplash.com/200x320?person"
                                alt="Charles"
                            />
                        </a>
                        <a href="#" className="">
                            <img
                                className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                src="https://source.unsplash.com/200x320?person"
                                alt="Jade"
                            />
                        </a>
                    </div>
                    <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                        DUE DATE : 18 JUN
                    </span>
                </div>
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page}></App>;
