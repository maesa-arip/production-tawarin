import React, { useCallback, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import AppReservasi from "@/Layouts/AppReservasi";
import NavLink from "@/Components/NavLink";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CopyButton from "@/Components/CopyButton";
import ThirdButton from "@/Components/ThirdButton";
import InfoModal from "@/Components/Modal/InfoModal";
import Button from "@/Components/Button";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { Inertia } from "@inertiajs/inertia";
import { IconChecks, IconCirclePlus, IconDotsVertical, IconLoader, IconX } from "@tabler/icons";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import EditModal from "@/Components/Modal/EditModal";
import { debounce, pickBy } from "lodash";
import Header from "@/Components/Header";
import Dropdown from "@/Components/Dropdown";
import DropdownMobile from "@/Components/DropdownMobile";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import Container from "@/Components/Container";
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
export default function MyDayOffBreak(props) {
    const {
        data: reservationEmployeeDayOff,
        meta,
        filtered,
        attributes,
    } = props.reservationEmployeeDayOff;
    const reservationEmployeeBreak = props.reservationEmployeeBreak;
    const reservationEmployee = props.reservationEmployee;
    // console.log(reservationEmployeeBreak)
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route(route().current()),
                // route("riskRegisterKlinis.index"),
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
    // const onChange = (event) =>
    //     setParams({ ...params, [event.target.name]: event.target.value });
    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == "asc" ? "desc" : "asc",
        });
    };
    const [state, setState] = useState([]);
    const [isOpenConfirmationDialog, setIsOpenConfirmationDialog] = useState(false);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({});
    // console.log(reservationEmployee.company.id)
    useEffect(() => {
        const company_id = reservationEmployee?.company.id;
        setData("reservation_company_id", company_id);
    }, [data.reason,data.start,data.end]);

    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
    };
    const closeInfoDialog2 = () => {
        setIsOpenInfoDialog2(false);
    };
    const [isOpenJoinDialog, setIsOpenJoinDialog] = useState(false);
    const openJoinDialog = (result) => {
        setState(result);
        setIsOpenJoinDialog(true);
    };
    const openConfirmationDialog = (employee) => {
        setState(employee);
        // console.log(state)
        setIsOpenConfirmationDialog(true);
    };
    const closeConfirmationDialog = () => {
        setIsOpenConfirmationDialog(false);
    }
    const submit = (e) => {
        e.preventDefault();
        post(route("reservationemployeedayoff.store"), {
            onSuccess: () => {
                return Promise.all([setIsOpenJoinDialog(false), reset()]);
            },
        });
    };

    const [isOpenBreakDialog, setIsOpenBreakDialog] = useState(false);
    const openBreakDialog = (result) => {
        setState(result);
        setIsOpenBreakDialog(true);
    };
    const submit_break = (e) => {
        e.preventDefault();
        post(route("reservationemployeebreak.store_break"), {
            onSuccess: () => {
                return Promise.all([setIsOpenBreakDialog(false), reset()]);
            },
        });
    };

    const cancel_dayoff = (e) => {
        e.preventDefault();
        // console.log(state)
        patch(route("reservationemployee_cancel.cancel_dayoff",state.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenConfirmationDialog(false), reset()]);
            },
        });
    };

    return (
        <>
            <Header title="Jadwal" description="Jadwal Libur dan Istirahat." />
            <Container>
                <EditModal
                    isOpenEditDialog={isOpenJoinDialog}
                    setIsOpenEditDialog={setIsOpenJoinDialog}
                    size="2xl"
                    title={"Masukan Jadwal Libur"}
                >
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal Libur
                                </label>

                                <Input
                                    type="date"
                                    name="date"
                                    value={data.date}
                                    className="block w-full mt-1"
                                    autoComplete="date"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("date", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.date}
                                    className="mt-2"
                                />
                            </div>{" "}
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Alasan
                                </label>

                                <Input
                                    type="text"
                                    name="reason"
                                    value={data.reason}
                                    className="block w-full mt-1"
                                    autoComplete="reason"
                                    isFocused={true}
                                    onChange={(e) => {
                                        setData("reason", e.target.value);
                                    }}
                                />

                                <InputError
                                    message={errors.reason}
                                    className="mt-2"
                                />
                            </div>{" "}
                        </div>

                        <ThirdButtonNoLink
                            className="mt-4"
                            disabled={processing}
                        >
                            Simpan
                        </ThirdButtonNoLink>
                    </form>
                </EditModal>
                <EditModal
                    isOpenEditDialog={isOpenBreakDialog}
                    setIsOpenEditDialog={setIsOpenBreakDialog}
                    size="2xl"
                    title={"Masukan Jam Istirahat"}
                >
                    <form onSubmit={submit_break}>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="start"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Jam Mulai Istirahat
                                </label>
                                <Input
                                    type="time"
                                    name="start"
                                    value={data.start}
                                    className="block w-full mt-1"
                                    autoComplete="start"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("start", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.start}
                                    className="mt-2"
                                />
                            </div>{" "}
                            <div className="col-span-12 md:col-span-6">
                                <label
                                    htmlFor="end"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Jam Berakhir Istirahat
                                </label>
                                <Input
                                    type="time"
                                    name="end"
                                    value={data.end}
                                    className="block w-full mt-1"
                                    autoComplete="end"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("end", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.end}
                                    className="mt-2"
                                />
                            </div>{" "}
                            
                        </div>

                        <ThirdButtonNoLink
                            className="mt-4"
                            disabled={processing}
                        >
                            Simpan
                        </ThirdButtonNoLink>
                    </form>
                </EditModal>
                <InfoModal
                    isOpenInfoDialog={isOpenInfoDialog}
                    setIsOpenInfoDialog={setIsOpenInfoDialog}
                    size="2xl"
                    closeButton="false"
                    title={"Yakin Mulai Pelayanan ?"}
                >
                    {/* <ThirdButtonNoLink onClick={startService}>
                    Mulai
                </ThirdButtonNoLink> */}
                    <ThirdButtonNoLink
                        className="mx-2 mt-2"
                        color="gray"
                        onClick={closeInfoDialog}
                    >
                        Close
                    </ThirdButtonNoLink>
                </InfoModal>
                <InfoModal
                    isOpenInfoDialog={isOpenInfoDialog2}
                    setIsOpenInfoDialog={setIsOpenInfoDialog2}
                    size="2xl"
                    closeButton="false"
                    title={"Yakin Selesaikan Pelayanan ?"}
                >
                    {/* <ThirdButtonNoLink color="teal" onClick={finishService}>
                    Selesai
                </ThirdButtonNoLink> */}

                    <ThirdButtonNoLink
                        className="mx-2 mt-2"
                        color="gray"
                        onClick={closeInfoDialog2}
                    >
                        Close
                    </ThirdButtonNoLink>
                </InfoModal>

                <InfoModal
                    isOpenInfoDialog={isOpenConfirmationDialog}
                    setIsOpenInfoDialog={setIsOpenConfirmationDialog}
                    size="2xl"
                    closeButton="false"
                    title={"Yakin Batalkan Libur ?"}
                >
                    <ThirdButtonNoLink color="tawarin" onClick={cancel_dayoff}>
                    Yakin
                </ThirdButtonNoLink>

                    <ThirdButtonNoLink
                        className="mx-2 mt-2"
                        color="secondary"
                        onClick={closeConfirmationDialog}
                    >
                        Close
                    </ThirdButtonNoLink>
                </InfoModal>

                <Head title="Profile" />

                <div className="hidden lg:block">
                    {/* <div className="mx-auto max-w-8xl sm:px-6 lg:px-8"> */}
                    <div className="flex items-center justify-end">
                        <div className="w-1/2">
                            <div className="flex items-center justify-start mb-6 gap-x-2">
                                <ThirdButtonNoLink
                                    onClick={() => openJoinDialog()}
                                >
                                    Tambah Hari Libur
                                </ThirdButtonNoLink>
                                <ThirdButtonNoLink
                                    onClick={() => openJoinDialog()}
                                >
                                    Tambah Jam Istirahat
                                </ThirdButtonNoLink>
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
                                                    <div
                                                        className="flex items-center cursor-pointer gap-x-2"
                                                        onClick={() =>
                                                            sort(
                                                                "jumlah_revisi"
                                                            )
                                                        }
                                                    >
                                                        {params.field ==
                                                            "media" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "media" &&
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
                                                        Nama Perencanaan
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
                                                                "jumlah_revisi"
                                                            )
                                                        }
                                                    >
                                                        Jumlah Revisi
                                                        {params.field ==
                                                            "jumlah_revisi" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "jumlah_revisi" &&
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
                                                                "anggaran_proyek"
                                                            )
                                                        }
                                                    >
                                                        Anggaran Proyek
                                                        {params.field ==
                                                            "anggaran_proyek" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "anggaran_proyek" &&
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
                                                            sort("is_approved")
                                                        }
                                                    >
                                                        Status
                                                        {params.field ==
                                                            "is_approved" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "is_approved" &&
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
                                                                "employee_bids_count"
                                                            )
                                                        }
                                                    >
                                                        Jumlah Penawar
                                                        {params.field ==
                                                            "employee_bids_count" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "employee_bids_count" &&
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
                                                        Dibuat
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
                                            {reservationEmployeeDayOff.map(
                                                (employee, index) => (
                                                    <tr key={employee.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {meta.from + index}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <img
                                                                className="object-cover w-16 h-12 border rounded-lg"
                                                                src={
                                                                    employee.media
                                                                        ? employee.media
                                                                        : "storage/files/default/NoImage.svg"
                                                                }
                                                                alt={
                                                                    employee.slug
                                                                }
                                                            ></img>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                employee.company
                                                                    .name
                                                            }
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        employee.jumlah_revisi
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    Kali
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                    Rp
                                                                </span>
                                                                <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    employee.anggaran_proyek
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {employee.approved ==
                                                            1 ? (
                                                                <ThirdButtonSmallNoLink>
                                                                   <IconChecks className="w-4 h-4 mr-2"></IconChecks> Diterima
                                                                </ThirdButtonSmallNoLink>
                                                            ) : (
                                                                <ThirdButtonSmallNoLink color="secondary">
                                                                    <IconLoader className="w-4 h-4 mr-2"></IconLoader>Menunggu
                                                                    Konfirmasi
                                                                </ThirdButtonSmallNoLink>
                                                            )}
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex mt-1 rounded-md shadow-sm">
                                                                <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                    {
                                                                        employee.employee_bids_count
                                                                    }
                                                                </div>
                                                                <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                    Penawaran
                                                                </span>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                employee.created_at
                                                            }
                                                        </td>
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
                                                                    {employee.approved ==
                                                                    1 ? (
                                                                        ""
                                                                    ) : (
                                                                        <>
                                                                            <Dropdown.Link>
                                                                                Edit
                                                                            </Dropdown.Link>
                                                                            <button
                                                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                                onClick={() =>
                                                                                    openDestroyDialog(
                                                                                        employee
                                                                                    )
                                                                                }
                                                                            >
                                                                                Hapus
                                                                            </button>
                                                                        </>
                                                                    )}

                                                                    <Dropdown.Link>
                                                                        Lihat
                                                                        Detail
                                                                    </Dropdown.Link>
                                                                    <Dropdown.Link>
                                                                        Lihat
                                                                        Penawaran
                                                                    </Dropdown.Link>
                                                                    {/* {employee.employee_bids_count >
                                                                    0 && (
                                                                    <Dropdown.Link
                                                                        href={route(
                                                                            "bidemployees.listpenawar",
                                                                            `${employee.id}`
                                                                        )}
                                                                    >
                                                                        Lihat
                                                                        Penawaran
                                                                    </Dropdown.Link>
                                                                )} */}
                                                                    {employee.employee_bids_sum_is_approved ==
                                                                        "1" && (
                                                                        <Dropdown.Link
                                                                            href={route(
                                                                                "employee.tahapan",
                                                                                `${employee.slug}`
                                                                            )}
                                                                        >
                                                                            Tahapan
                                                                            Perencanaan
                                                                        </Dropdown.Link>
                                                                    )}
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

                    {/* <Pagination meta={meta} /> */}
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
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <div className="flex items-center justify-start mt-2 mb-0 gap-x-1">
                                {reservationEmployee ? <><ThirdButtonNoLink
                                    onClick={() => openJoinDialog()}
                                >
                                    Libur <IconCirclePlus className="w-4 h-4" />
                                </ThirdButtonNoLink>
                                <ThirdButtonNoLink
                                    onClick={() => openBreakDialog()}
                                >
                                    Istirahat{" "}
                                    <IconCirclePlus className="w-4 h-4" />
                                </ThirdButtonNoLink></> : <ThirdButtonSmallNoLink
                                    color="secondary"
                                >
                                    Belum Menjadi Karyawan
                                </ThirdButtonSmallNoLink> }
                                
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
                        {reservationEmployeeBreak.map((employee, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col bg-amber-200 border border-amber-400 shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-4 col-start-1">
                                                <p className="text-base font-semibold">
                                                    {employee.company.name}
                                                </p>
                                                <p className="text-xs font-medium text-gray-500">
                                                    {employee.email}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end col-span-6 col-end-13">
                                                
                                                    <ThirdButtonSmallNoLink color="secondary">
                                                        Jam Istirahat
                                                    </ThirdButtonSmallNoLink>
                                                
                                            </div>

                                            <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                            
                                            <div className="col-span-10 col-start-1">
                                                <Link className="text-base font-semibold">
                                                    Istirahat  : {employee.start} - {employee.end}
                                                </Link>
                                            </div>
                                            <div className="col-span-5 col-end-13">
                                                <div className="flex items-center justify-end col-span-3 col-end-6 "></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {reservationEmployeeDayOff.map((employee, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-4 col-start-1">
                                                <p className="text-base font-semibold">
                                                    {employee.company.name}
                                                </p>
                                                <p className="text-xs font-medium text-gray-500">
                                                    {employee.email}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end col-span-6 col-end-13">
                                            {employee.batal == 1 ? (<ThirdButtonSmallNoLink color="red">
                                                        <IconX className="w-4 h-4 mr-2"></IconX> Sudah Batal
                                                    </ThirdButtonSmallNoLink>) : employee.approved == 1 ? (
                                                    <ThirdButtonSmallNoLink>
                                                        <IconChecks className="w-4 h-4 mr-2"></IconChecks>Diterima
                                                    </ThirdButtonSmallNoLink>
                                                ) : (
                                                    <ThirdButtonSmallNoLink color="secondary">
                                                        <IconLoader className="w-4 h-4 mr-2"></IconLoader> Menunggu Konfirmasi
                                                    </ThirdButtonSmallNoLink>
                                                )}

                                                
                                            </div>
                                            <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                            <div className="col-span-10 col-start-1">
                                                <Link className="text-base font-semibold">
                                                    Libur : {employee.date}
                                                </Link>
                                            </div>
                                            <div className="col-span-2 col-end-13">
                                                <div className="flex items-center justify-end col-span-3 col-end-6 ">
                                                {employee.batal == 1 ? (
                                                    <></>
                                                    // <ThirdButtonSmallNoLink color="red">Sudah Batal</ThirdButtonSmallNoLink>
                                                ) : (
                                                    <ThirdButtonSmallNoLink onClick={() => openConfirmationDialog(employee)} color="primary">Batal</ThirdButtonSmallNoLink>
                                                )}
                                                    
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
        // </AuthenticatedLayout>
    );
}
MyDayOffBreak.layout = (page) => <AppReservasi children={page}></AppReservasi>;
