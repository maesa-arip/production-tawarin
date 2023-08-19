import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import FeatureCard from "@/Components/FeatureCard";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import DestroyModal from "@/Components/Modal/DestroyModal";
import Button from "@/Components/Button";
import { numberFormat } from "@/Libs/helper";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import DropdownMobile from "@/Components/DropdownMobile";
import { IconBan, IconCirclePlus, IconDotsVertical } from "@tabler/icons";
import Header from "@/Components/Header";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButton from "@/Components/ThirdButton";
import { Tab } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/solid";
import Input from "@/Components/Input";

const UpIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
        />
    </svg>
);
const DownIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

export default function Reservasi(props) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    // const { data: plans, meta, filtered, attributes } = props.plans;
    const planRejectCount = props.planRejectCount;
    const permissions = props.permissions;
    const portofolio = props.portofolio;
    const { auth } = usePage().props;
    const [pageNumber, setPageNumber] = useState([]);
    // const [params, setParams] = useState(filtered);

    // CRUD
    // console.log(plans);

    // const openDestroyDialog = (plan) => {
    //     setState(plan);
    //     setIsOpenDestroyDialog(true);
    // };

    // const destroyPlan = () => {
    //     Inertia.delete(route("plans.destroy", state.id), {
    //         onSuccess: () => setIsOpenDestroyDialog(false),
    //     });
    // };

    // const openInfoDialog = () => {
    //     setState();
    //     setIsOpenInfoDialog(true);
    // };

    // const openInfoDialog2 = () => {
    //     setState();
    //     setIsOpenInfoDialog2(true);
    // };

    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const [state, setState] = useState([]);
    return (
        <>
            <Head title="Reservasi" />
            <Container>
                <div className="px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="p-1 space-x-4 overflow-x-auto bg-white md:flex whitespace-nowrap rounded-xl">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Barber
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Cuci Mobil
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Cuci Motor
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Klinik
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Hotel
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="flex flex-col w-full h-full overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                                        <div className="px-10 mt-6">
                                            <h1 className="text-2xl font-bold">
                                                Barber
                                            </h1>
                                        </div>
                                        <div className="px-10 mt-4 space-x-6 grid overflow-auto">
                                            <div className="">
                                                <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                    <span className="block text-sm font-semibold">
                                                        Doing
                                                    </span>
                                                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                                                        2
                                                    </span>
                                                    <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col pb-2 overflow-auto">
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                                                            Design
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/women/26.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                                                            Dev
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="flex flex-col w-full h-full overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                                        <div className="px-10 mt-6">
                                            <h1 className="text-2xl font-bold">
                                                Cuci Mobil
                                            </h1>
                                        </div>
                                        <div className="px-10 mt-4 space-x-6 grid overflow-auto">
                                            <div className="">
                                                <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                    <span className="block text-sm font-semibold">
                                                        Doing
                                                    </span>
                                                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                                                        2
                                                    </span>
                                                    <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col pb-2 overflow-auto">
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                                                            Design
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/women/26.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                                                            Dev
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="flex flex-col w-full h-full overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                                        <div className="px-10 mt-6">
                                            <h1 className="text-2xl font-bold">
                                                Cuci Motor
                                            </h1>
                                        </div>
                                        <div className="px-10 mt-4 space-x-6 grid overflow-auto">
                                            <div className="">
                                                <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                    <span className="block text-sm font-semibold">
                                                        Doing
                                                    </span>
                                                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                                                        2
                                                    </span>
                                                    <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col pb-2 overflow-auto">
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                                                            Design
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/women/26.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                                                            Dev
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="flex flex-col w-full h-full overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                                        <div className="px-10 mt-6">
                                            <h1 className="text-2xl font-bold">
                                                Klinik
                                            </h1>
                                        </div>
                                        <div className="px-10 mt-4 space-x-6 grid overflow-auto">
                                            <div className="">
                                                <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                    <span className="block text-sm font-semibold">
                                                        Doing
                                                    </span>
                                                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                                                        2
                                                    </span>
                                                    <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col pb-2 overflow-auto">
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                                                            Design
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/women/26.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                                                            Dev
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                               <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="flex flex-col w-full h-full overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                                        <div className="px-10 mt-6">
                                            <h1 className="text-2xl font-bold">
                                                Hotel
                                            </h1>
                                        </div>
                                        <div className="px-10 mt-4 space-x-6 grid overflow-auto">
                                            <div className="">
                                                <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                    <span className="block text-sm font-semibold">
                                                        Doing
                                                    </span>
                                                    <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                                                        2
                                                    </span>
                                                    <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col pb-2 overflow-auto">
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
                                                            Design
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/women/26.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <button className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                                            <svg
                                                                className="w-4 h-4 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                            </svg>
                                                        </button>
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                                                            Dev
                                                        </span>
                                                        <h4 className="mt-3 text-sm font-medium">
                                                            This is the title of
                                                            the card for the
                                                            thing that needs to
                                                            be done.
                                                        </h4>
                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="flex items-center">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    Dec 12
                                                                </span>
                                                            </div>
                                                            <div className="relative flex items-center ml-4">
                                                                <svg
                                                                    className="relative w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    4
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg
                                                                    className="w-4 h-4 text-gray-300 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="ml-1 leading-none">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="w-6 h-6 ml-auto rounded-full"
                                                                src="https://randomuser.me/api/portraits/men/64.jpg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 w-6" />
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
                <div>
                    <a
                        className="fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-blue-600 rounded-full shadow-lg hover:bg-blue-600"
                        href="#"
                        target="_top"
                    >
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-whatsapp w-5 h-5"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
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
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </div>
                        <span className="ml-1 text-sm leading-none">
                            @Tawarin
                        </span>
                    </a>
                </div>
            </Container>
        </>
    );
}
Reservasi.layout = (page) => <App children={page} />;
