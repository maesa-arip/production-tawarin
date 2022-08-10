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
                <div>
                    <div className="z-10 w-full overflow-y-scroll bg-white">
                        <div
                            className="sticky top-0 z-10 object-cover w-full bg-center shadow-lg cursor-pointer realtive h-36 rounded-b-3xl"
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                            }}
                        >
                            <nav className="relative z-10 flex items-center justify-between flex-grow p-2 mx-auto h-18">
                                <div className="relative inline">
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center mr-3 text-gray-300 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h8m-8 6h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="inline-flex">
                                    <a href="/">
                                        <div className="hidden">
                                            <svg
                                                width={102}
                                                height={32}
                                                fill="currentcolor"
                                                style={{ display: "block" }}
                                            >
                                                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex-initial">
                                    <div className="relative flex items-center justify-end">
                                        <div className="relative inline">
                                            <div className="flex-grow-0 flex-shrink-0 block">
                                                <img
                                                    className="w-8 h-8 border border-yellow-300 shadow rounded-xl"
                                                    src="https://media-exp1.licdn.com/dms/image/C5603AQGEQ6ydraNeww/profile-displayphoto-shrink_200_200/0/1623517758261?e=1629331200&v=beta&t=mhUiw4p21E9okkvInvM0ry8lmLsT6s5ppWMKo6kFs2M"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="flex flex-col w-full px-3 rounded-lg">
                                <h4 className="text-xl font-semibold leading-tight text-white truncate">
                                    Loremipsum Title
                                </h4>
                                <div className="flex items-center justify-between ">
                                    <div className="flex flex-col">
                                        <h2 className="flex items-center text-sm font-normal text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            Massive Dynamic
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 flex items-center justify-between px-3 mt-3">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="w-full p-3 border-0 shadow bg-purple-white rounded-xl"
                                        placeholder="Search somthing..."
                                    />
                                    <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="z-0 p-3 space-y-4 ">
                            <h4 className="mt-2 font-semibold">Category</h4>
                            <div className="flex items-center justify-between space-x-3 overflow-y-scroll text-gray-500 cursor-pointer">
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-green-600 transition duration-300 ease-in bg-white bg-green-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
                                    <i className="far fa-hotel" />
                                    <p className="mt-1 text-sm">Hotel</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-yellow-600 transition duration-300 ease-in bg-white bg-yellow-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
                                    <i className="far fa-bus" />
                                    <p className="mt-1 text-sm">Bus</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-indigo-500 transition duration-300 ease-in bg-white bg-indigo-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
                                    <i className="far fa-mountains" />
                                    <p className="mt-1 text-sm">Hills</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-1 mb-2 text-pink-500 transition duration-300 ease-in bg-white bg-pink-200 shadow cursor-pointer rounded-2xl hover:shadow-md">
                                    <i className="far fa-umbrella-beach" />
                                    <p className="mt-1 text-sm">Beach</p>
                                </div>
                            </div>
                            <h4 className="font-semibold">Recomented Hotels</h4>
                            <div className="flex grid items-center justify-center w-full grid-cols-2 m-0 space-x-4 overflow-y-scroll ">
                                <div
                                    className="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded-lg shadow-md cursor-pointer rounded-3xl"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")',
                                    }}
                                >
                                    <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-t from-green-400 to-blue-400" />
                                    <div className="relative flex flex-row items-end w-full h-72 ">
                                        <div className="absolute top-0 right-0 m-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="p-2 text-gray-200 transition duration-200 ease-in rounded-full h-9 w-9 hover:text-blue-400 hover:bg-white "
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="z-10 flex flex-col w-full p-6 rounded-lg ">
                                            <h4 className="mt-1 text-xl font-semibold leading-tight text-white truncate">
                                                Loremipsum..
                                            </h4>
                                            <div className="flex items-center justify-between ">
                                                <div className="flex flex-col">
                                                    <h2 className="flex items-center text-sm font-normal text-gray-300">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            ></path>
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                        </svg>
                                                        Dubai
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex pt-4 text-sm text-gray-300">
                                                <div className="flex items-center mr-auto">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-1 text-yellow-500"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <p className="font-normal">
                                                        4.5
                                                    </p>
                                                </div>
                                                <div className="flex items-center font-medium text-white ">
                                                    $1800
                                                    <span className="text-sm font-normal text-gray-300">
                                                        {" "}
                                                        /wk
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded-lg shadow-md cursor-pointer rounded-3xl"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80")',
                                    }}
                                >
                                    <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-t from-blue-500 to-yellow-400" />
                                    <div className="relative flex flex-row items-end w-full h-72 ">
                                        <div className="absolute top-0 right-0 m-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="p-2 text-gray-200 transition duration-200 ease-in rounded-full h-9 w-9 hover:text-blue-400 hover:bg-white "
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="z-10 flex flex-col w-full p-5 rounded-lg ">
                                            <h4 className="mt-1 text-xl font-semibold leading-tight text-white truncate">
                                                Loremipsum..
                                            </h4>
                                            <div className="flex items-center justify-between ">
                                                <div className="flex flex-col">
                                                    <h2 className="flex items-center text-sm font-normal text-gray-300">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 mr-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            ></path>
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                        </svg>
                                                        India
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex pt-4 text-sm text-gray-300">
                                                <div className="flex items-center mr-auto">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-1 text-yellow-500"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <p className="font-normal">
                                                        4.5
                                                    </p>
                                                </div>
                                                <div className="flex items-center font-medium text-white ">
                                                    $1800
                                                    <span className="text-sm font-normal text-gray-300">
                                                        {" "}
                                                        /wk
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-semibold">Suggested By</h4>
                            <div className="grid grid-cols-1">
                                <div>
                                    <div className="flex p-2 bg-white shadow-md rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                                            alt="Just a flower"
                                            className="object-cover w-16 h-16 rounded-xl"
                                        />
                                        <div className="flex flex-col justify-center w-full px-2 py-1">
                                            <div className="flex items-center justify-between ">
                                                <div className="flex flex-col">
                                                    <h2 className="text-sm font-medium">
                                                        Massive Dynamic
                                                    </h2>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex pt-2 text-sm text-gray-400">
                                                <div className="flex items-center mr-auto">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-1 text-yellow-500"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <p className="font-normal">
                                                        4.5
                                                    </p>
                                                </div>
                                                <div className="flex items-center font-medium text-gray-900 ">
                                                    $1800
                                                    <span className="text-sm font-normal text-gray-400">
                                                        {" "}
                                                        /wk
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="sticky flex items-center justify-between p-5 px-6 m-2 text-gray-400 bg-gray-900 cursor-pointer bottom-2 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center transition duration-200 ease-in hover:text-blue-400 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center transition duration-200 ease-in hover:text-blue-400 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center hover:text-blue-400 ">
                                <div className="absolute flex items-center justify-center w-20 h-20 p-2 text-3xl text-center text-white transition duration-200 ease-in bg-blue-500 border-4 rounded-full shadow-2xl bottom-5 border-gray-50 hover:border-blue-500 ">
                                    <i className="fas fa-phone-alt" />
                                    <span className="absolute inline-flex w-full h-full border-4 rounded-full opacity-50 animate-ping" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center transition duration-200 ease-in hover:text-blue-400 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center transition duration-200 ease-in hover:text-blue-400 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                        </div> */}
                    </div>

                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n\t::-webkit-scrollbar {\n\t\twidth: 0;\n\t}\n\n\t::-webkit-scrollbar-track {\n\t\t-webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: transparent;\n\t\toutline: 1px solid transparent;\n\t}\n",
                        }}
                    />
                </div>
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page}></App>;
