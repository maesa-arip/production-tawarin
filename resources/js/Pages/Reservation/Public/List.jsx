import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import PlanItem from "@/Components/PlanItem";
import {
    IconCirclePlus,
    IconCodePlus,
    IconHomeEdit,
    IconHomeHand,
    IconMapPin,
    IconUserCircle,
} from "@tabler/icons";
import { numberFormat } from "@/Libs/helper";
import NavLink from "@/Components/NavLink";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import EmptyCard from "@/Components/EmptyCard";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButton from "@/Components/ThirdButton";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import ListBoxPage from "@/Components/ListBoxPage";

export default function List(props) {
    const {
        data: reservations,
        meta,
        links,
        filtered,
        attributes,
    } = props.reservations;
    
    const reservation_categories = props.reservation_categories;
    const reservationCompany = props.reservationCompany;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const { permissions } = usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
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
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [state, setState] = useState([]);
    const openInfoDialog = () => {
        setState();
        setIsOpenInfoDialog(true);
    };
    // const [selectedCategory, setSelectedCategory] = useState(() => {
    //     return reservation_categories.find((x) => x.id === company.reservation_category_id);
    // });
    const defaultValue = [{ name: "Pilih Kategori" }];
    const [selected, setSelected] = useState(defaultValue[0]);
    const onChangeReservationCategoryId = (e) => {
        // setData({ ...data, ["reservation_category_id"]: e.id });
    };

    return (
        <div>
            <Head title="Reservations" />
            <Header
                title="Reservasi"
                description="List reservasi yang ada di Tawarin."
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
                <ThirdButton href={route("reservationprofile.edit")}>Atur Perusahaan</ThirdButton>
                <ThirdButton color="teal" className="m-4" href={route("reservationCounters.index")}>Atur Layanan</ThirdButton>
                <ThirdButton color="yellow" className="mr-4">Atur Jadwal</ThirdButton>
                <ThirdButton color="red" className="mb-4">Atur Pegawai</ThirdButton>
                <div className="flex items-center justify-end gap-x-2">
                    <div className="w-2/3 ">
                        <div className="flex items-center justify-start  ">
                       
                                <ListBoxPage
                                    ShouldMap={reservation_categories}
                                    selected={selected}
                                    onChange={(e) => {
                                        onChangeReservationCategoryId(e);
                                        setSelected(e);
                                    }}
                                />
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
                {reservations.length ? (
                    <div className="grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {reservations.map((reservation, index) => (
                            <div
                                key={index}
                                className="relative w-full pb-4 mx-auto"
                            >
                                <Link
                                    href={`/public/reservations/${reservation.slug}`}
                                    className="relative inline-block w-full transition-transform duration-300 ease-in-out"
                                >
                                    <div className="p-2 bg-white border rounded-lg">
                                        <div className="relative flex justify-center overflow-hidden border rounded-lg h-52">
                                            <div className="w-full transition-transform duration-500 ease-in-out">
                                                <div className="absolute inset-0 ">
                                                    <img
                                                        className="object-cover object-top w-full h-full lg:h-full lg:w-full"
                                                        src={
                                                            reservation.media
                                                                ? reservation.media
                                                                : "/storage/files/default/NoImage.svg"
                                                        }
                                                        alt={reservation.slug}
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 flex justify-center mb-3">
                                                <div className="flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg md:px-5 md:space-x-5">
                                                    <p className="flex items-center text-sm font-medium text-gray-800">
                                                        <IconUserCircle className="w-5 h-5 text-gray-800 bg-transparent" />
                                                        {reservation.name}
                                                        {/* {reservation.owner.name} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            {/* <h2
                                                className="text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                                                title="New York"
                                            >
                                                {reservation.name}
                                            </h2> */}
                                            {/* <Link
                                                className="mt-2 text-sm text-gray-800 line-clamp-1"
                                                href={`/public/reservations/list?reservation_category=${reservation.reservation_category.slug}`}
                                            >
                                                {
                                                    reservation
                                                        .reservation_category
                                                        .name
                                                }
                                            </Link> */}
                                            <p
                                                className="mt-2 text-base font-thin text-gray-800 md:text-xs line-clamp-1"
                                                title="New York"
                                            >
                                                {reservation.formattedAddress}
                                            </p>
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
