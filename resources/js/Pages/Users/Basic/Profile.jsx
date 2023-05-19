import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Profile({ media, portofolios, count, dataplan, referral }) {
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleClick = (portofolios) => {
        setCurrentImage(portofolios);
        setOpen(true);
    };
    return (
        <div>
            <Head title="Profil" />
            {/* component */}
            <div className="bg-gray-100 app">
                <main className="container grid grid-cols-1 gap-6 px-2 mx-auto my-12 lg:grid-cols-2 w-2xl">
                    <aside className="">
                        <div className="p-10 bg-white rounded-lg shadow">
                            <div className="flex flex-col items-center gap-1 text-center">
                                <img
                                    className="w-32 h-32 p-2 mb-4 bg-white rounded-full shadow"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                    alt=""
                                />
                                <p className="font-semibold"></p>
                                <div className="flex items-center justify-center text-sm leading-normal text-gray-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="mr-1"
                                        width={16}
                                        height={16}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx={12} cy={10} r={3} />
                                    </svg>
                                    Denpasar, Bali
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 my-3">
                                <div className="mx-4 font-semibold text-center">
                                    <p className="text-black">{count}</p>
                                    <span className="text-gray-400">
                                        Perencanaan
                                    </span>
                                </div>
                                <div className="mx-4 font-semibold text-center">
                                    <p className="text-black">0</p>
                                    <span className="text-gray-400">
                                        Proyek
                                    </span>
                                </div>
                                <div className="mx-4 font-semibold text-center">
                                    <p className="text-black">0</p>
                                    <span className="text-gray-400">
                                        Pendanaan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 mt-6 bg-white rounded-lg shadow">
                            <h3 className="mb-4 text-sm font-semibold text-gray-600">
                                Referral
                            </h3>
                            <ul className="flex items-center justify-center space-x-2">
                            {referral.length > 0 ? referral.map(
                                                            (person, index) => (
                                <li className="flex flex-col items-center space-y-2">
                                    {/* Ring */}
                                    <Link
                                        className="block p-1 bg-white rounded-full"
                                        href={route(
                                            "user.detail",
                                            person.username
                                        )}
                                    >
                                        <div className="flex items-center justify-center h-16 text-2xl font-semibold bg-indigo-200 w-16 rounded-full">
                                {Array.from(person.name)[0]}
                            </div>
                                        {/* <img
                                            className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        /> */}
                                    </Link>
                                    {/* <div className="flex items-center justify-center w-full h-full text-2xl font-semibold bg-indigo-200 rounded-full">
                                {Array.from(person.name)[0]}
                            </div> */}
                                    {/* Username */}
                                    <Link href={route(
                                            "user.detail",
                                            person.username
                                        )}>
                                    <span className="text-xs text-gray-500">
                                        {person.name}
                                    </span>
                                    </Link>
                                </li>
                                )
                                ) : 'Belum Ada Referral'}
                            </ul>
                        </div>
                        {/* <div className="flex p-2 mt-6 bg-white rounded-lg shadow">
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
                                        <p className="font-normal">4.5</p>
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
                        </div> */}
                        {/* <div className="flex grid items-center justify-center w-full grid-cols-2 mt-5 space-x-4 overflow-y-scroll ">
                            <div
                                className="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded shadow-md cursor-pointer rounded-3xl"
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
                                className="relative flex flex-col justify-between object-cover object-center w-full h-64 my-2 overflow-hidden text-gray-800 bg-white bg-cover rounded shadow-md cursor-pointer rounded-3xl"
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
                        </div> */}
                    </aside>
                    <article className="">
                        {/* <form className="p-4 mb-6 bg-white rounded-lg shadow">
                            <textarea
                                name="message"
                                placeholder="Type something..."
                                className="w-full p-2 text-sm placeholder-gray-400 bg-gray-100 border border-transparent rounded-lg appearance-none rounded-tg"
                                defaultValue={""}
                            />
                            <footer className="flex justify-between mt-2">
                                <div className="flex gap-2">
                                    <span className="flex items-center w-8 h-8 px-2 text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="css-i6dzq1"
                                        >
                                            <rect
                                                x={3}
                                                y={3}
                                                width={18}
                                                height={18}
                                                rx={2}
                                                ry={2}
                                            />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <polyline points="21 15 16 10 5 21" />
                                        </svg>
                                    </span>
                                    <span className="flex items-center w-8 h-8 px-2 text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="css-i6dzq1"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx={12} cy={10} r={3} />
                                        </svg>
                                    </span>
                                    <span className="flex items-center w-8 h-8 px-2 text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="css-i6dzq1"
                                        >
                                            <polyline points="4 17 10 11 4 5" />
                                            <line
                                                x1={12}
                                                y1={19}
                                                x2={20}
                                                y2={19}
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <button className="flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-lg shadow-lg">
                                    Send
                                    <svg
                                        className="ml-1"
                                        viewBox="0 0 24 24"
                                        width={16}
                                        height={16}
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1={22} y1={2} x2={11} y2={13} />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>
                            </footer>
                        </form> */}

                        {portofolios.length > 0 ? <></> : <div className="flex flex-col mb-6 bg-white border shadow-sm rounded-xl">
                                <div className="flex flex-col items-center justify-center flex-auto p-4 md:p-5">
                                    <svg
                                        className="max-w-[5rem]"
                                        viewBox="0 0 375 428"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M254.509 253.872L226.509 226.872"
                                            className="stroke-gray-400"
                                            stroke="currentColor"
                                            strokeWidth={7}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                                            className="stroke-gray-400"
                                            stroke="currentColor"
                                            strokeWidth={7}
                                            strokeLinecap="round"
                                        />
                                        <rect
                                            x="270.524"
                                            y="221.872"
                                            width="137.404"
                                            height="73.2425"
                                            rx="36.6212"
                                            transform="rotate(40.8596 270.524 221.872)"
                                            className="fill-gray-400"
                                            fill="currentColor"
                                        />
                                        <ellipse
                                            cx="133.109"
                                            cy="404.372"
                                            rx="121.5"
                                            ry="23.5"
                                            className="fill-gray-400"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                                            className="stroke-gray-400"
                                            stroke="currentColor"
                                            strokeWidth={7}
                                            strokeLinecap="round"
                                        />
                                        <ellipse
                                            cx="96.6084"
                                            cy="116.872"
                                            rx={9}
                                            ry={12}
                                            className="fill-gray-400"
                                            fill="currentColor"
                                        />
                                        <ellipse
                                            cx="172.608"
                                            cy="117.872"
                                            rx={9}
                                            ry={12}
                                            className="fill-gray-400"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                                            className="fill-gray-400"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <p className="mt-5 text-sm text-gray-500">
                                        Belum memiliki portofolio
                                    </p>
                                </div>
                            </div>}
                            
                        
                        {portofolios.map((portofolio, index) => (
                            <div
                                key={index}
                                className="mb-6 bg-white rounded-lg shadow"
                            >
                                <div className="flex flex-row px-2 py-3 mx-3">
                                    <div className="w-auto h-auto rounded-full">
                                        <img
                                            className="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
                                            alt="User avatar"
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                        />
                                    </div>
                                    <div className="flex flex-col mt-1 mb-2 ml-4">
                                        <div className="text-sm font-semibold text-gray-600">
                                            {portofolio.name}
                                        </div>
                                        <div className="flex w-full mt-1">
                                            <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                                {/* {portofolio.plan_category.name} */}
                                            </div>
                                            <div className="text-xs font-thin text-gray-400">
                                                • {portofolio.owner}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-gray-100" />
                                <div className="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                                    <div className="grid grid-cols-6 col-span-2 gap-2 ">
                                        {dataplan[portofolio.slug].map(
                                            (portofolio, index) =>
                                                index < 2 && (
                                                    <>
                                                        {portofolio.mime_type ==
                                                        "video/mp4" ? (
                                                            <></>
                                                        ) : (
                                                            <div
                                                                key={index}
                                                                className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                            >
                                                                <img
                                                                    onClick={() =>
                                                                        handleClick(
                                                                            portofolio
                                                                        )
                                                                    }
                                                                    className="object-cover w-full h-full "
                                                                    src={`/storage/${portofolio.id}/${portofolio.file_name}`}
                                                                    alt={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                        )}
                                        {dataplan[portofolio.slug].map(
                                            (portofolio, index) =>
                                                index > 1 &&
                                                index < 6 && (
                                                    <>
                                                        {portofolio.mime_type ==
                                                        "video/mp4" ? (
                                                            <></>
                                                        ) : (
                                                            <div
                                                                key={index}
                                                                className="max-h-[10rem] col-span-2 overflow-hidden shadow rounded-xl"
                                                            >
                                                                <img
                                                                    onClick={() =>
                                                                        handleClick(
                                                                            portofolio
                                                                        )
                                                                    }
                                                                    className="object-cover w-full h-full "
                                                                    src={`/storage/${portofolio.id}/${portofolio.file_name}`}
                                                                    alt={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                        )}

                                        {open && currentImage && (
                                            <Transition
                                                appear
                                                show={open}
                                                as={Fragment}
                                            >
                                                <Dialog
                                                    as="div"
                                                    className="relative z-10"
                                                    open={open}
                                                    onClose={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                                    </Transition.Child>

                                                    <div className="fixed inset-0 overflow-y-auto">
                                                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-out duration-300"
                                                                enterFrom="opacity-0 scale-95"
                                                                enterTo="opacity-100 scale-100"
                                                                leave="ease-in duration-200"
                                                                leaveFrom="opacity-100 scale-100"
                                                                leaveTo="opacity-0 scale-95"
                                                            >
                                                                <Dialog.Panel
                                                                    className={`relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full`}
                                                                >
                                                                    <div className="bg-white">
                                                                        <div className="sm:flex sm:items-start">
                                                                            <div className="text-center sm:mt-0 sm:text-left">
                                                                                <Dialog.Title
                                                                                    as="h3"
                                                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                                                >
                                                                                    {/* {title} */}
                                                                                </Dialog.Title>
                                                                                <div className="mx-2 my-2 md:mx-4 md:my-4">
                                                                                    <p className="text-sm text-gray-500">
                                                                                        {/* {header} */}
                                                                                    </p>
                                                                                    {currentImage.mime_type ==
                                                                                    "video/mp4" ? (
                                                                                        <div className="w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl">
                                                                                            <div className="">
                                                                                                <video
                                                                                                    controls
                                                                                                    src={`/storage/${currentImage.id}/${currentImage.file_name}`}
                                                                                                ></video>
                                                                                            </div>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <>
                                                                                            <img
                                                                                                className="rounded-lg"
                                                                                                src={`/storage/${currentImage.id}/${currentImage.file_name}`}
                                                                                                alt={
                                                                                                    currentImage.collection_name
                                                                                                }
                                                                                            />
                                                                                            <p className="text-sm text-gray-500">
                                                                                                {
                                                                                                    currentImage.collection_name
                                                                                                }
                                                                                            </p>
                                                                                        </>
                                                                                    )}

                                                                                    <button
                                                                                        onClick={() =>
                                                                                            setOpen(
                                                                                                false
                                                                                            )
                                                                                        }
                                                                                        type="button"
                                                                                        className="absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none"
                                                                                        data-carousel-prev
                                                                                    >
                                                                                        <span className="inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 icon icon-tabler icon-tabler-x"
                                                                                                width={
                                                                                                    24
                                                                                                }
                                                                                                height={
                                                                                                    24
                                                                                                }
                                                                                                viewBox="0 0 24 24"
                                                                                                strokeWidth={
                                                                                                    2
                                                                                                }
                                                                                                stroke="currentColor"
                                                                                                fill="none"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="none"
                                                                                                    d="M0 0h24v24H0z"
                                                                                                    fill="none"
                                                                                                />
                                                                                                <path d="M18 6l-12 12" />
                                                                                                <path d="M6 6l12 12" />
                                                                                            </svg>
                                                                                        </span>
                                                                                    </button>

                                                                                    <button
                                                                                        onClick={() =>
                                                                                            handleClick(
                                                                                                media[
                                                                                                    (media.indexOf(
                                                                                                        currentImage
                                                                                                    ) -
                                                                                                        1) %
                                                                                                        media.length
                                                                                                ]
                                                                                            )
                                                                                        }
                                                                                        type="button"
                                                                                        className="absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none"
                                                                                        data-carousel-prev
                                                                                    >
                                                                                        <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                                                            <svg
                                                                                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 24 24"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                    strokeWidth="2"
                                                                                                    d="M15 19l-7-7 7-7"
                                                                                                ></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={() =>
                                                                                            handleClick(
                                                                                                media[
                                                                                                    (media.indexOf(
                                                                                                        currentImage
                                                                                                    ) +
                                                                                                        1) %
                                                                                                        media.length
                                                                                                ]
                                                                                            )
                                                                                        }
                                                                                        type="button"
                                                                                        className="absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none"
                                                                                    >
                                                                                        <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                                                            <svg
                                                                                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 24 24"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                    strokeWidth="2"
                                                                                                    d="M9 5l7 7-7 7"
                                                                                                ></path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </button>
                                                                                    {/* {children} */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition>
                                        )}
                                    </div>
                                </div>
                                <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
                                    {portofolio.description}
                                </div>
                                {/* <div className="flex justify-start mb-4 border-t border-gray-100">
                                    <div className="flex w-full pt-2 pl-5 mt-1">
                                        <span className="w-8 h-8 px-2 pt-2 mr-2 text-center text-gray-400 transition duration-300 ease-out bg-white border rounded-full cursor-pointer hover:text-red-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                width="14px"
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
                                        </span>
                                        <img
                                            className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-end w-full pt-2 pr-5 mt-1">
                                        <span className="w-8 h-8 px-2 py-2 mr-2 text-center text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                width="14px"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="h-8 px-2 py-2 text-center text-gray-100 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50">
                                            <svg
                                                className="w-4 h-4 text-red-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full border-t border-gray-100">
                                    <div className="flex flex-row mx-5 mt-3 text-xs">
                                        <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                                            Comments:
                                            <div className="ml-1 text-gray-400 text-ms">
                                                {" "}
                                                30
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                                            Views:{" "}
                                            <div className="ml-1 text-gray-400 text-ms">
                                                {" "}
                                                60k
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full mx-5 mt-3 text-xs">
                                        <div className="flex items-center mb-2 mr-4 text-gray-700 rounded-md">
                                            Likes:{" "}
                                            <div className="ml-1 text-gray-400 text-ms">
                                                {" "}
                                                120k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex p-4 antialiased text-black">
                                    <img
                                        className="w-8 h-8 mt-1 mr-2 rounded-full "
                                        src="https://picsum.photos/id/1027/200/200"
                                    />
                                    <div>
                                        <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                                            <div className="text-sm font-semibold leading-relaxed">
                                                Sara Lauren
                                            </div>
                                            <div className="text-xs leading-snug md:leading-normal">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </div>
                                        </div>
                                        <div className="text-xs  mt-0.5 text-gray-500">
                                            14 w
                                        </div>
                                        <div className="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
                                            <svg
                                                className="p-0.5 h-5 w-5 rounded-full z-20 bg-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 16 16"
                                            >
                                                <defs>
                                                    <linearGradient
                                                        id="a1"
                                                        x1="50%"
                                                        x2="50%"
                                                        y1="0%"
                                                        y2="100%"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#18AFFF"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#0062DF"
                                                        />
                                                    </linearGradient>
                                                    <filter
                                                        id="c1"
                                                        width="118.8%"
                                                        height="118.8%"
                                                        x="-9.4%"
                                                        y="-9.4%"
                                                        filterUnits="objectBoundingBox"
                                                    >
                                                        <feGaussianBlur
                                                            in="SourceAlpha"
                                                            result="shadowBlurInner1"
                                                            stdDeviation={1}
                                                        />
                                                        <feOffset
                                                            dy={-1}
                                                            in="shadowBlurInner1"
                                                            result="shadowOffsetInner1"
                                                        />
                                                        <feComposite
                                                            in="shadowOffsetInner1"
                                                            in2="SourceAlpha"
                                                            k2={-1}
                                                            k3={1}
                                                            operator="arithmetic"
                                                            result="shadowInnerInner1"
                                                        />
                                                        <feColorMatrix
                                                            in="shadowInnerInner1"
                                                            values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"
                                                        />
                                                    </filter>
                                                    <path
                                                        id="b1"
                                                        d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"
                                                    />
                                                </defs>
                                                <g fill="none">
                                                    <use
                                                        fill="url(#a1)"
                                                        xlinkHref="#b1"
                                                    />
                                                    <use
                                                        fill="black"
                                                        filter="url(#c1)"
                                                        xlinkHref="#b1"
                                                    />
                                                    <path
                                                        fill="white"
                                                        d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
                                                    />
                                                </g>
                                            </svg>
                                            <svg
                                                className="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 16 16"
                                            >
                                                <defs>
                                                    <linearGradient
                                                        id="a2"
                                                        x1="50%"
                                                        x2="50%"
                                                        y1="0%"
                                                        y2="100%"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#FF6680"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#E61739"
                                                        />
                                                    </linearGradient>
                                                    <filter
                                                        id="c2"
                                                        width="118.8%"
                                                        height="118.8%"
                                                        x="-9.4%"
                                                        y="-9.4%"
                                                        filterUnits="objectBoundingBox"
                                                    >
                                                        <feGaussianBlur
                                                            in="SourceAlpha"
                                                            result="shadowBlurInner1"
                                                            stdDeviation={1}
                                                        />
                                                        <feOffset
                                                            dy={-1}
                                                            in="shadowBlurInner1"
                                                            result="shadowOffsetInner1"
                                                        />
                                                        <feComposite
                                                            in="shadowOffsetInner1"
                                                            in2="SourceAlpha"
                                                            k2={-1}
                                                            k3={1}
                                                            operator="arithmetic"
                                                            result="shadowInnerInner1"
                                                        />
                                                        <feColorMatrix
                                                            in="shadowInnerInner1"
                                                            values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"
                                                        />
                                                    </filter>
                                                    <path
                                                        id="b2"
                                                        d="M8 0a8 8 0 100 16A8 8 0 008 0z"
                                                    />
                                                </defs>
                                                <g fill="none">
                                                    <use
                                                        fill="url(#a2)"
                                                        xlinkHref="#b2"
                                                    />
                                                    <use
                                                        fill="black"
                                                        filter="url(#c2)"
                                                        xlinkHref="#b2"
                                                    />
                                                    <path
                                                        fill="white"
                                                        d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="text-sm ml-1 pr-1.5 text-gray-500">
                                                3
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                                    {/* <img
                                        className="object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer"
                                        alt="User avatar"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                                    /> */}
                                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                        <button
                                            type="submit"
                                            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </button>
                                    </span> */}
                                    {/* <input
                                        type="search"
                                        className="w-full py-2 pl-4 pr-10 text-sm placeholder-gray-400 bg-gray-100 border border-transparent appearance-none rounded-tg"
                                        style={{ borderRadius: "25px" }}
                                        placeholder="Post a comment..."
                                        autoComplete="off"
                                    /> */}
                                </div>
                            </div>
                        ))}
                    </article>
                </main>
            </div>
        </div>
    );
}

Profile.layout = (page) => <App children={page}></App>;
