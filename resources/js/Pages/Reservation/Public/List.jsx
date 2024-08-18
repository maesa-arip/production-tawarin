import React, { useCallback, useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
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
                {/* <ThirdButton href={route("reservationprofile.edit")}>Atur Perusahaan</ThirdButton>
                <ThirdButton color="teal" className="m-4" href={route("reservationCounters.index")}>Atur Layanan</ThirdButton>
                <ThirdButton color="yellow" className="mr-4">Atur Jadwal</ThirdButton>
                <ThirdButton color="red" className="mb-4">Atur Pegawai</ThirdButton> */}
                <div className="flex items-center justify-end gap-x-2">
                    <div className="w-2/3 ">
                        <div className="flex items-center justify-start ">
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
                                        </div>
                                        <div className="col-span-9 my-2">
                                            <div className="flex items-start cursor-pointer">
                                                {[1, 2, 3, 4, 5].map(
                                                    (index) => (
                                                        <div
                                                            key={index}
                                                            className={`w-5 h-5 relative`}
                                                        >
                                                            {index <= reservation.average_rating ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-auto text-yellow-500 fill-current"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            ) : index - 0.95 <
                                                            reservation.average_rating ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-auto text-yellow-500 fill-current"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-auto text-yellow-500 fill-current"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <span className="flex items-start text-xs font-medium text-left text-slate-400">
                                                {reservation.average_rating
                                                    ? Math.round(
                                                          reservation.average_rating *
                                                              100
                                                      ) / 100
                                                    : 0}{" "}
                                                out of 5 stars
                                                <br />
                                                ({reservation.reviews_count.toLocaleString('id-ID')} reviews)
                                            </span>
                                        </div>
                                        <div className="mt-4">
                                            <h2
                                                className="text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                                                title="New York"
                                            >
                                                {reservation.name}
                                            </h2>
                                            <Link
                                                className="mt-2 text-sm text-gray-800 line-clamp-2"
                                                href={``}
                                            >
                                                {reservation.formattedAddress}
                                            </Link>
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

List.layout = (page) => <AppReservasi children={page}></AppReservasi>;
