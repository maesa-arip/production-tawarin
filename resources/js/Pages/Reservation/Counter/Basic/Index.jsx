import React, { useCallback, useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
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
import ThirdButton from "@/Components/ThirdButton";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";

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

export default function Index(props) {
    const {
        data: reservationCounters,
        meta,
        filtered,
        attributes,
    } = props.reservationCounters;
    const reservationCounterRejectCount = props.reservationCounterRejectCount;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route(route().current()),
                { ...pickBy(query), page: query.page },
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        }, 150),
        []
    );
    useEffect(() => {
        if (!isInitialRender) {
            reload(params);
        } else {
            setIsInitialRender(false);
        }
    }, [params]);
    useEffect(() => {
        let numbers = [];
        for (
            let i = attributes.per_page;
            i < attributes.total / attributes.per_page;
            i = i + attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);
    const onChange = (event) => {
        const updatedParams = {
            ...params,
            [event.target.name]: event.target.value,
            page: 1, // Set page number to 1
        };
        setParams(updatedParams);
    };
    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == "asc" ? "desc" : "asc",
        });
    };

    // CRUD

    const openDestroyDialog = (reservationCounter) => {
        setState(reservationCounter);
        setIsOpenDestroyDialog(true);
    };

    const destroyReservationCounter = () => {
        Inertia.delete(route("reservationCounters.destroy", state.id), {
            onSuccess: () => setIsOpenDestroyDialog(false),
        });
    };

    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
    const [state, setState] = useState([]);
    return (
        <>
            <Head title="Reservation Counter" />
            <Header title="Layanan" description="List Layanan Saya." />
            <Container>
                <DestroyModal
                    isOpenDestroyDialog={isOpenDestroyDialog}
                    setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                    size="2xl"
                    title={"Hapus Layanan"}
                >
                    <Button color={"pink"} onClick={destroyReservationCounter}>
                        Non Aktifkan
                    </Button>
                </DestroyModal>
                <div className="hidden lg:block">
                    {/* <div className="mx-auto max-w-8xl sm:px-6 lg:px-8"> */}
                    <div className="flex items-center justify-end">
                        <div className="w-1/2">
                            <div className="flex items-center justify-start mb-6 gap-x-2">
                                <ThirdButton
                                    type="button"
                                    href={"reservationCounters/create"}
                                >
                                    Tambah Layanan
                                </ThirdButton>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-end mb-6 gap-x-2">
                                <select
                                    name="load"
                                    id="load"
                                    onChange={onChange}
                                    value={params.load}
                                    className="transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                                >
                                    {pageNumber.map((page, index) => (
                                        <option key={index}>{page}</option>
                                    ))}
                                </select>
                                <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                    <svg
                                        className="inline w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        name="q"
                                        id="q"
                                        onChange={onChange}
                                        value={params.q}
                                        className="w-full border-0 focus:ring-0 form-text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="border-b border-gray-200 shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div className="flex items-center cursor-pointer gap-x-2">
                                                        #
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div className="flex items-center cursor-pointer gap-x-2"></div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("name")
                                                        }
                                                    >
                                                        Nama Layanan
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("name")
                                                        }
                                                    >
                                                        Harga Tawarin
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("name")
                                                        }
                                                    >
                                                        Harga
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "name" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort(
                                                                "service_duration"
                                                            )
                                                        }
                                                    >
                                                        Waktu Pelayanan
                                                        {params.field ==
                                                            "service_duration" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "service_duration" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("period")
                                                        }
                                                    >
                                                        Batas Waktu Reservasi
                                                        {params.field ==
                                                            "period" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "period" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("created_at")
                                                        }
                                                    >
                                                        Persentase Owner
                                                        {params.field ==
                                                            "created_at" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "created_at" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort("created_at")
                                                        }
                                                    >
                                                        Persentase Pegawai
                                                        {params.field ==
                                                            "created_at" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "created_at" &&
                                                            params.direction ==
                                                                "desc" && (
                                                                <DownIcon />
                                                            )}
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative px-6 py-3"
                                                >
                                                    <span className="sr-only">
                                                        Edit
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {reservationCounters.map(
                                                (reservationCounter, index) => (
                                                    <tr
                                                        key={
                                                            reservationCounter.id
                                                        }
                                                    >
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {meta.from + index}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <img
                                                                className="object-cover w-16 h-12 border rounded-lg"
                                                                src={
                                                                    reservationCounter.media
                                                                        ? reservationCounter.media
                                                                        : "storage/files/default/NoImage.svg"
                                                                }
                                                                alt={
                                                                    reservationCounter.name
                                                                }
                                                            ></img>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                reservationCounter.name
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex mt-1 rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                Rp
                                                            </span>
                                                            <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                {numberFormat(
                                                                    reservationCounter.price
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex mt-1 rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                Rp
                                                            </span>
                                                            <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                {numberFormat(
                                                                    reservationCounter.price_user
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        reservationCounter.service_duration
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    Menit
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        reservationCounter.period
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    Hari
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        reservationCounter.percent_owner
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    %
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        reservationCounter.percent_employe
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    %
                                                                </span>
                                                            </div>
                                                        </td>


                                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                                        {reservationCounter.created_at}
                                                    </td> */}
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Trigger>
                                                                    <button>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-4 h-4 text-gray-400"
                                                                            viewBox="0 0 20 20"
                                                                            fill="currentColor"
                                                                        >
                                                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                        </svg>
                                                                    </button>
                                                                </Dropdown.Trigger>
                                                                <Dropdown.Content>
                                                                    {reservationCounter.is_active ==
                                                                    1 ? (
                                                                        ""
                                                                    ) : (
                                                                        <>
                                                                            <Dropdown.Link
                                                                                href={route(
                                                                                    "reservationCounters.edit",
                                                                                    `${reservationCounter.slug}`
                                                                                )}
                                                                            >
                                                                                Edit
                                                                            </Dropdown.Link>
                                                                            <button
                                                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                                onClick={() =>
                                                                                    openDestroyDialog(
                                                                                        reservationCounter
                                                                                    )
                                                                                }
                                                                            >
                                                                                Non
                                                                                Aktif
                                                                            </button>
                                                                        </>
                                                                    )}
                                                                    <Dropdown.Link
                                                                    // href={route(
                                                                    //     "reservationCounters.show",
                                                                    //     `${reservationCounter.slug}`
                                                                    // )}
                                                                    >
                                                                        Atur Tim
                                                                    </Dropdown.Link>
                                                                    <Dropdown.Link
                                                                    // href={route(
                                                                    //     "reservationCounters.show",
                                                                    //     `${reservationCounter.slug}`
                                                                    // )}
                                                                    >
                                                                        Lihat
                                                                        Detail
                                                                    </Dropdown.Link>
                                                                    <Dropdown.Link
                                                                    // href={route(
                                                                    //     "bidreservationCounters.listpenawar",
                                                                    //     `${reservationCounter.id}`
                                                                    // )}
                                                                    >
                                                                        Lihat
                                                                        Penawaran
                                                                    </Dropdown.Link>
                                                                </Dropdown.Content>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <Pagination meta={meta} />
                    
                </div>
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <div className="flex items-center justify-start mt-2 mb-0 gap-x-1">
                                <ThirdButton
                                    type="button"
                                    href={"reservationCounters/create"}
                                >
                                    Tambah
                                    <IconCirclePlus className="w-3 h-3" />
                                </ThirdButton>
                                {/* <ThirdButton type="button" color="red" href={"#"}>Ditolak({reservationCounterRejectCount})</ThirdButton> */}
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between mt-2 mb-0 gap-x-1">
                                <select
                                    name="load"
                                    id="load"
                                    onChange={onChange}
                                    value={params.load}
                                    className="transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                                >
                                    {pageNumber.map((page, index) => (
                                        <option key={index}>{page}</option>
                                    ))}
                                </select>
                                <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                    <svg
                                        className="inline w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        name="q"
                                        id="q"
                                        onChange={onChange}
                                        value={params.q}
                                        className="w-full border-0 focus:ring-0 form-text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {reservationCounters.map(
                            (reservationCounter, index) => (
                                <div
                                    key={index}
                                    className="relative w-full mx-auto"
                                >
                                    <div className="flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                                            <div className="grid w-full grid-cols-12 gap-1">
                                                <div className="flex col-span-11 col-start-1">
                                                    {/* <p className="text-sm font-semibold">
                                                        {
                                                            reservationCounter.name
                                                        }
                                                    </p> */}
                                                    <p className="p-1 text-sm font-semibold rounded-full">
                                                        {reservationCounter.name}
                                                    </p>
                                                    
                                                    <p className="p-1 ml-4 text-sm font-semibold text-white bg-yellow-700 rounded-full">
                                                        {"Kode : " + reservationCounter.code}
                                                    </p>
                                                </div>
                                                {/* <div className="flex items-center justify-end col-span-6 col-end-12">
                                                {reservationCounter.reservationCounter_bids_sum_is_active ==
                                                "1" ? (
                                                    <p className="px-1 py-1 text-xs font-semibold text-blue-900 rounded bg-sky-200">
                                                        Sudah Memilih Pemenang
                                                    </p>
                                                ) : (
                                                    <>
                                                        {reservationCounter.is_active ==
                                                        1 ? (
                                                            <p className="px-1 py-1 text-xs font-semibold text-blue-900 rounded bg-sky-200">
                                                                Diterima
                                                            </p>
                                                        ) : (
                                                            <p className="px-1 py-1 text-xs font-semibold text-red-500 bg-yellow-200 rounded">
                                                                Menunggu
                                                                Konfirmasi
                                                            </p>
                                                        )}
                                                    </>
                                                )}
                                            </div> */}
                                                <div className="flex items-center justify-center col-span-1 col-end-13">
                                                    {/* <IconDotsVertical> */}
                                                    <span className="items-center justify-center px-1 ml-1 text-xs font-thin rounded-lg select-none ">
                                                        <DropdownMobile>
                                                            <DropdownMobile.Trigger>
                                                                <button>
                                                                    <IconDotsVertical />
                                                                </button>
                                                            </DropdownMobile.Trigger>
                                                            <DropdownMobile.Content>
                                                                {reservationCounter.is_active ==
                                                                0 ? (
                                                                    ""
                                                                ) : (
                                                                    <>
                                                                        <DropdownMobile.Link
                                                                            href={route(
                                                                                "reservationCounters.edit",
                                                                                `${reservationCounter.slug}`
                                                                            )}
                                                                        >
                                                                            EditLayanan
                                                                        </DropdownMobile.Link>
                                                                        <button
                                                                            className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                            onClick={() =>
                                                                                openDestroyDialog(
                                                                                    reservationCounter
                                                                                )
                                                                            }
                                                                        >
                                                                            Non
                                                                            Aktif
                                                                        </button>
                                                                    </>
                                                                )}

                                                                <DropdownMobile.Link
                                                                href={route(
                                                                    "reservationCounters.settingteam",
                                                                    `${reservationCounter.slug}`
                                                                )}
                                                                >
                                                                    Atur Tim
                                                                </DropdownMobile.Link>
                                                                
                                                            </DropdownMobile.Content>
                                                        </DropdownMobile>
                                                    </span>
                                                    {/* </IconDotsVertical> */}
                                                </div>
                                                <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                                <div className="flex items-center justify-center col-span-2 col-start-1 mb-2">
                                                    <img
                                                        className="object-cover w-12 h-12 border rounded-lg"
                                                        src={
                                                            reservationCounter.media
                                                                ? reservationCounter.media
                                                                : "storage/files/default/NoImage.svg"
                                                        }
                                                        alt="0"
                                                    ></img>
                                                </div>
                                                <div className="col-span-10 col-start-3 mb-2">
                                                    <Link
                                                        className="text-base font-semibold"
                                                        // href={route(
                                                        //     "reservationCounters.show",
                                                        //     `${reservationCounter.slug}`
                                                        // )}
                                                    >
                                                        {
                                                            reservationCounter.name
                                                        }
                                                    </Link>

                                                    <p className="text-xs font-medium text-gray-500">
                                                        Jam Buka{" "}
                                                        {
                                                            reservationCounter.company.open_at
                                                        }
                                                        {" - "}
                                                        {
                                                            reservationCounter.company.close_at
                                                        }
                                                    </p>
                                                </div>
                                                <div className="col-span-6 col-start-1">
                                                    <p className="text-xs font-medium text-gray-500">
                                                        Lama Layanan
                                                    </p>
                                                    <p className="text-sm font-semibold">
                                                        {
                                                            reservationCounter.service_duration
                                                        }
                                                        {" Menit"}
                                                    </p>
                                                </div>
                                                <div className="col-span-5 col-end-13">
                                                    <div className="flex items-center justify-end col-span-3 col-end-6 ">
                                                        {reservationCounter.reservationCounter_bids_sum_is_active ==
                                                        "1" ? (
                                                            <Link
                                                                // href={route(
                                                                //     "reservationCounter.tahapan",
                                                                //     `${reservationCounter.slug}`
                                                                // )}
                                                                className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                            >
                                                                Tahapan
                                                            </Link>
                                                        ) : (
                                                            <>
                                                                {reservationCounter.is_active ==
                                                                1 ? (
                                                                    <Link
                                                                    href={route(
                                                                        "reservationCounters.settingteam",
                                                                        `${reservationCounter.slug}`
                                                                    )}
                                                                        className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                                    >
                                                                        Atur Tim
                                                                    </Link>
                                                                ) : (
                                                                    <Link className="px-2 py-1 text-xs font-semibold text-white bg-yellow-700 rounded">
                                                                        Edit
                                                                    </Link>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <ul className="flex items-center mt-10 gap-x-1">
                        {meta.links.map((item, index) => (
                            <button
                                key={index}
                                disabled={item.url == null ? true : false}
                                className={`${
                                    item.url == null
                                        ? "text-gray-500"
                                        : "text-gray-800"
                                } w-12 h-9 rounded-lg flex items-center justify-center border bg-white`}
                                onClick={() =>
                                    setParams({
                                        ...params,
                                        page: new URL(
                                            item.url
                                        ).searchParams.get("page"),
                                    })
                                }
                            >
                                {item.label}
                            </button>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    );
}
Index.layout = (page) => <AppReservasi children={page} />;
