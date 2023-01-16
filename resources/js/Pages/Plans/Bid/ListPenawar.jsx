import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
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
import EmptyCard from "@/Components/EmptyCard";

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
    const { data: bidplans, meta, filtered, attributes } = props.bidplans;
    const planRejectCount = props.planRejectCount;
    const sum_is_approved = props.sum_is_approved;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route("bidplans.listpenawar"),
                { ...pickBy(query), page: query.page },
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        }, 150),
        []
    );

    useEffect(() => reload(params), [params]);
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

    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });
    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == "asc" ? "desc" : "asc",
        });
    };

    // CRUD

    const openDestroyDialog = (plan) => {
        setState(plan);
        setIsOpenDestroyDialog(true);
    };

    const destroyPlan = () => {
        Inertia.get(route("bidplans.selectwinnerplan", state.id), {
            onSuccess: () => setIsOpenDestroyDialog(false),
        });
    };

    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
    const [state, setState] = useState([]);
    return (
        <>
            <Head title="List Penawar" />
            <Header
                title="Penawaran"
                description="List Penawaran dari Konsultan."
            />
            <Container>
                <DestroyModal
                    isOpenDestroyDialog={isOpenDestroyDialog}
                    setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                    size="2xl"
                    title={"Pilih Sebagai Pemenang"}
                >
                    <Button onClick={destroyPlan}>Terima</Button>
                </DestroyModal>
                {bidplans.length > 0 ?
                <div>
                <div className="hidden lg:block">
                    {/* <div className="mx-auto max-w-8xl sm:px-6 lg:px-8"> */}
                    <div className="flex items-center justify-end">
                        <div className="w-1/2">
                            <div className="flex items-center justify-start mb-6 gap-x-2"></div>
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
                                                            sort("name")
                                                        }
                                                    >
                                                        Nama Konsultan
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
                                                            sort("bid_price")
                                                        }
                                                    >
                                                        Jumlah Penawaran
                                                        {params.field ==
                                                            "bid_price" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "bid_price" &&
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
                                                            sort("deskripsi")
                                                        }
                                                    >
                                                        Deskripsi
                                                        {params.field ==
                                                            "deskripsi" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "deskripsi" &&
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
                                                            sort("created_at")
                                                        }
                                                    >
                                                        Ditawar Pada
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
                                            {bidplans.map((plan, index) => (
                                                <tr key={plan.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {meta.from + index}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {plan.konsultan.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex mt-1 rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                Rp
                                                            </span>
                                                            <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                {numberFormat(
                                                                    plan.bid_price
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <img
                                                            className="object-cover w-16 h-12 border rounded-lg"
                                                            src={
                                                                plan.media
                                                                    ? plan.media
                                                                    : "/storage/files/default/NoImage.svg"
                                                            }
                                                            alt={plan.slug}
                                                        ></img>
                                                        {plan.description}
                                                    </td>

                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {sum_is_approved == 1 &&
                                                            plan.is_approved ==
                                                                1 && (
                                                                <Button>
                                                                    Pemenang
                                                                </Button>
                                                            )}
                                                        {sum_is_approved !=
                                                            1 && (
                                                            <Button color="yellow">
                                                                Belum Memilih
                                                                Pemenang
                                                            </Button>
                                                        )}
                                                        {sum_is_approved == 1 &&
                                                            plan.is_approved ==
                                                                0 && (
                                                                <Button color="pink">
                                                                    Gagal
                                                                </Button>
                                                            )}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {plan.created_at}
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
                                                                {sum_is_approved ==
                                                                    1 &&
                                                                    plan.is_approved ==
                                                                        1 && (
                                                                        <Dropdown.Link
                                                                            href={route(
                                                                                "plan.tahapan",
                                                                                `${plan.plan.slug}`
                                                                            )}
                                                                        >
                                                                            Tahapan
                                                                        </Dropdown.Link>
                                                                    )}
                                                                {sum_is_approved !=
                                                                    1 && (
                                                                    <>
                                                                        <Dropdown.Link
                                                                            href={route(
                                                                                "plans.show",
                                                                                `${plan.plan.slug}`
                                                                            )}
                                                                        >
                                                                            Lihat
                                                                        </Dropdown.Link>
                                                                        <button
                                                                            className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                            onClick={() =>
                                                                                openDestroyDialog(
                                                                                    plan
                                                                                )
                                                                            }
                                                                        >
                                                                            Pilih
                                                                            Sebagai
                                                                            Pemenang
                                                                        </button>
                                                                    </>
                                                                )}
                                                                {sum_is_approved ==
                                                                    1 &&
                                                                    plan.is_approved ==
                                                                        0 && (
                                                                        <Dropdown.Link
                                                                            href={route(
                                                                                "plans.show",
                                                                                `${plan.plan.slug}`
                                                                            )}
                                                                        >
                                                                            Lihat
                                                                        </Dropdown.Link>
                                                                    )}
                                                            </Dropdown.Content>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            ))}
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
                        <div className="w-full">
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
                        {bidplans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-4 col-start-1">
                                                <p className="text-sm font-semibold">
                                                    {plan.konsultan.name}
                                                </p>
                                                <p className="text-xs font-medium text-gray-500">
                                                    {/* {plan.plan_category.name} */}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end col-span-6 col-end-12">
                                                {sum_is_approved == 1 &&
                                                    plan.is_approved == 1 && (
                                                        <p className="px-1 py-1 text-xs font-semibold text-blue-900 rounded bg-sky-200">
                                                            Pemenang
                                                        </p>
                                                    )}
                                                {sum_is_approved != 1 && (
                                                    <p className="px-1 py-1 text-xs font-semibold text-red-500 bg-yellow-200 rounded">
                                                        Belum Memilih Pemenang
                                                    </p>
                                                )}
                                                {sum_is_approved == 1 &&
                                                    plan.is_approved == 0 && (
                                                        <p className="px-1 py-1 text-xs font-semibold text-pink-900 bg-pink-200 rounded">
                                                            Gagal
                                                        </p>
                                                    )}
                                            </div>
                                            <div className="flex items-center justify-center col-span-1 col-end-13">
                                                {/* <IconDotsVertical> */}
                                                <span className="items-center justify-center px-1 ml-1 text-xs font-thin rounded-lg select-none ">
                                                    <DropdownMobile>
                                                        <DropdownMobile.Trigger>
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
                                                        </DropdownMobile.Trigger>
                                                        <DropdownMobile.Content>
                                                            {sum_is_approved ==
                                                                1 &&
                                                                plan.is_approved ==
                                                                    1 && (
                                                                    <Dropdown.Link
                                                                        href={route(
                                                                            "plan.tahapan",
                                                                            `${plan.plan.slug}`
                                                                        )}
                                                                    >
                                                                        Tahapan
                                                                    </Dropdown.Link>
                                                                )}
                                                            {sum_is_approved !=
                                                                1 && (
                                                                <>
                                                                    <Dropdown.Link
                                                                        href={route(
                                                                            "plans.show",
                                                                            `${plan.plan.slug}`
                                                                        )}
                                                                    >
                                                                        Lihat
                                                                    </Dropdown.Link>
                                                                    <button
                                                                        className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                        onClick={() =>
                                                                            openDestroyDialog(
                                                                                plan
                                                                            )
                                                                        }
                                                                    >
                                                                        Pilih
                                                                        Sebagai
                                                                        Pemenang
                                                                    </button>
                                                                </>
                                                            )}
                                                            {sum_is_approved ==
                                                                1 &&
                                                                plan.is_approved ==
                                                                    0 && (
                                                                    <Dropdown.Link
                                                                        href={route(
                                                                            "plans.show",
                                                                            `${plan.plan.slug}`
                                                                        )}
                                                                    >
                                                                        Lihat
                                                                    </Dropdown.Link>
                                                                )}
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
                                                        plan.media
                                                            ? plan.media
                                                            : "/storage/files/default/NoImage.svg"
                                                    }
                                                    alt="0"
                                                ></img>
                                            </div>
                                            <div className="col-span-10 col-start-3 mb-2">
                                                <Link
                                                    className="text-base font-semibold"
                                                    href={route(
                                                        "plans.show",
                                                        `${plan.slug}`
                                                    )}
                                                >
                                                    Deskripsi
                                                </Link>

                                                <p className="text-xs font-medium text-gray-500">
                                                    {plan.description}
                                                </p>
                                            </div>
                                            <div className="col-span-4 col-start-1">
                                                <p className="text-xs font-medium text-gray-500">
                                                    Nilai Penawaran
                                                </p>
                                                <p className="text-sm font-semibold">
                                                    Rp.{" "}
                                                    {numberFormat(
                                                        plan.bid_price
                                                    )}
                                                </p>
                                            </div>
                                            <div className="col-span-8 col-end-13">
                                                <div className="flex items-center justify-end col-span-3 col-end-6 gap-x-1">
                                                    {sum_is_approved == 1 &&
                                                        plan.is_approved ==
                                                            1 && (
                                                            <Link
                                                                href={route(
                                                                    "plan.tahapan",
                                                                    `${plan.plan.slug}`
                                                                )}
                                                                className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                            >
                                                                Tahapan
                                                            </Link>
                                                        )}
                                                    {sum_is_approved != 1 && (
                                                        <>
                                                            <Link
                                                                href={route(
                                                                    "plans.show",
                                                                    `${plan.plan.slug}`
                                                                )}
                                                                className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                            >
                                                                Lihat
                                                            </Link>
                                                            <button
                                                                className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                                onClick={() =>
                                                                    openDestroyDialog(
                                                                        plan
                                                                    )
                                                                }
                                                            >
                                                                Pilih Sebagai
                                                                Pemenang
                                                            </button>
                                                        </>
                                                    )}
                                                    {sum_is_approved == 1 &&
                                                        plan.is_approved ==
                                                            0 && (
                                                            <Link
                                                                href={route(
                                                                    "plans.show",
                                                                    `${plan.plan.slug}`
                                                                )}
                                                                className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                            >
                                                                Lihat
                                                            </Link>
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
                </div>
                :
                <div className="mt-10 min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl">
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
                    Belum ada penawaran untuk perencanaan ini
                </p>
            </div>
        </div>
                }
                
            </Container>
        </>
    );
}
Index.layout = (page) => <App children={page} />;
