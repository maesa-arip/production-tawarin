import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import PlanItem from "@/Components/PlanItem";
import { IconCirclePlus, IconMapPin, IconUserCircle } from "@tabler/icons";
import { numberFormat } from "@/Libs/helper";
import NavLink from "@/Components/NavLink";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import EmptyCard from "@/Components/EmptyCard";
import InfoModal from "@/Components/Modal/InfoModal";

export default function List(props) {
    const { data: plans, meta, links, filtered, attributes } = props.plans;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const { permissions } = usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route("plan.list"),
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
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [state, setState] = useState([]);
    const openInfoDialog = () => {
        setState();
        setIsOpenInfoDialog(true);
    };

    return (
        <div>
            <Head title="Plans" />
            <Header
                title="Perencanaan"
                description="List perencanaan yang ada di Tawarin."
            />
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                title={"Info"}
                header={""}
            >
                Anda harus memiliki akun owner terlebih dahulu sebelum bisa
                membuat perencanaan
            </InfoModal>
            <Container>
                <div className="flex items-center justify-end">
                    <div className="w-2/3">
                        <div className="flex items-center justify-start gap-x-2">
                            {permission_name.indexOf("membuat perencanaan") >
                            -1 ? (
                                <div className="flex items-center justify-start gap-x-2">
                                    <NavLink
                                        type="button"
                                        className={
                                            "justify-start px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        }
                                        href={"/plans/create"}
                                    >
                                        Tambah
                                        {/* <IconCirclePlus className="w-4 h-4"/> */}
                                    </NavLink>
                                    <NavLink
                                        type="button"
                                        className={
                                            "justify-start px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        }
                                        href={route('plans.index')}
                                    >
                                        Perencanaan Saya
                                        {/* <IconUserCircle className="w-4 h-4"/> */}
                                    </NavLink>
                                </div>
                            ) : (
                                <button
                                    className="justify-start px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => openInfoDialog()}
                                >
                                    Tambah
                                </button>
                            )}
                            {permission_name.indexOf(
                                "melakukan penawaran perencanaan"
                            ) > -1 ? (
                                <NavLink
                                    type="button"
                                    className={
                                        "justify-start px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    }
                                    href={"/planbids"}
                                >
                                    Penawaran Saya
                                    {/* <IconCirclePlus className="w-4 h-4"/> */}
                                </NavLink>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex items-center justify-end gap-x-2">
                            <select
                                    name="load"
                                    id="load"
                                    onChange={onChange}
                                    value={params.load}
                                    className="hidden transition duration-150 ease-in-out border-gray-300 rounded-lg md:flex focus:ring-blue-200 focus:ring form-select"
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
                {plans.length ? (
                    <div className="grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative w-full pb-4 mx-auto"
                            >
                                <Link
                                    href={`/public/plans/${plan.slug}`}
                                    className="relative inline-block w-full transition-transform duration-300 ease-in-out"
                                >
                                    <div className="p-2 bg-white border rounded-lg">
                                        <div className="relative flex justify-center overflow-hidden border rounded-lg h-52">
                                            <div className="w-full transition-transform duration-500 ease-in-out">
                                                <div className="absolute inset-0 ">
                                                    <img
                                                        className="object-cover object-top w-full h-full lg:h-full lg:w-full"
                                                        src={
                                                            plan.media
                                                                ? plan.media
                                                                : "/storage/files/default/NoImage.svg"
                                                        }
                                                        alt={plan.slug}
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 flex justify-center mb-3">
                                                <div className="flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg md:px-5 md:space-x-5">
                                                    <p className="flex items-center text-sm font-medium text-gray-800">
                                                        <IconUserCircle className="w-5 h-5 text-gray-800 bg-transparent" />
                                                        {plan.owner.name}
                                                    </p>
                                                </div>
                                            </div>
                                            {plan.plan_bids_sum_is_approved == 1 ? (
                                <span className="absolute top-0 left-0 inline-flex justify-end px-2 py-1 mt-3 ml-3 text-xs font-medium text-white bg-yellow-500 rounded-lg select-none z-9">
                                Sudah Ada Pemenang
                            </span>
                            ) : <span className="absolute top-0 left-0 inline-flex justify-end px-2 py-1 mt-3 ml-3 text-xs font-medium text-white bg-blue-500 rounded-lg select-none z-9">
                            {plan.until} Hari Lagi
                        </span>}
                                            
                                        </div>
                                        <div className="mt-4">
                                            <h2
                                                className="text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                                                title="New York"
                                            >
                                                {plan.name}
                                            </h2>
                                            <Link
                                                className="mt-2 text-sm text-gray-800 line-clamp-1"
                                                href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                                            >
                                                {plan.plan_category.name}
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between my-2 space-x-4">
                                            <span className="items-center w-full px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-md md:justify-between md:flex ">
                                                <p className="text-[10px] md:text-xs">
                                                    Anggaran Proyek
                                                </p>
                                                <p className="md:ml-1 text-[9px] md:text-xs">
                                                    Rp{" "}
                                                    {numberFormat(
                                                        plan.anggaran_proyek
                                                    )}
                                                </p>
                                            </span>
                                        </div>

                                        {/* <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div className="h-full text-xs text-center text-white bg-blue-500 rounded-full" style={{width: (100)+'%'}}></div>
                                        </div> */}
                                        <div className="flex items-center justify-between space-x-4">
                                            <span className="items-center w-full px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md md:flex md:justify-between">
                                                <p className="text-[10px] md:text-xs">
                                                    Anggaran Perencanaan
                                                </p>
                                                <p className="justify-end text-[9px] md:text-xs md:flex">
                                                    Rp{" "}
                                                    {numberFormat(
                                                        plan.dari_anggaran
                                                    )}{" "}
                                                    -{/* <div> */}
                                                    Rp{" "}
                                                    {numberFormat(
                                                        plan.sampai_anggaran
                                                    )}
                                                    {/* </div> */}
                                                </p>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between my-2 space-x-4">
                                            <span className="flex items-center px-2 py-1 mt-2 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-md w-36">
                                                {plan.jangka_waktu_pelaksanaan}{" "}
                                                Hari Pengerjaan
                                            </span>
                                            <span className="flex items-center px-2 py-1 mt-2 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                                {plan.jumlah_revisi} Kali Revisi
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyCard />
                )}

                <Pagination meta={meta} links={links} />
            </Container>
        </div>
    );
}

List.layout = (page) => <App children={page}></App>;
