import React, { useCallback, useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";

import { numberFormat } from "@/Libs/helper";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import EmptyCard from "@/Components/EmptyCard";
import InfoModal from "@/Components/Modal/InfoModal";
import { IconHourglass } from "@tabler/icons";

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
    // console.log(reservations);
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
                // route(route().current()),
                route("reservations.show",reservations[0].company_slug),
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
    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);
    const onChangeReservationCategoryId = (e) => {
        // setData({ ...data, ["reservation_category_id"]: e.id });
    };

    return (
        <div>
            <Head title="Reservations Cars" />
            <Header
                title="Pelayanan"
                description={"List layanan yang ada di " + reservationCompany.name}
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
                    {/* <div className="w-2/3">
                        <div className="flex items-center justify-start gap-x-2">
                        <div className="w-2/3">
                                <label
                                    htmlFor="reservation_category_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Cari Kategori Coompany
                                </label>
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
                    </div> */}
                    <div className="w-full md:w-1/3">
                        <div className="items-center justify-end md:flex gap-x-2">
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
                    <div className="grid w-full grid-cols-2 gap-1 mt-4 sm:grid-cols-2">
                        {reservations.map((reservation, index) => (
                            <>
                            {/* <div
                                key={index}
                                className="relative w-full pb-4 mx-auto"
                            >
                                <Link
                                    href={`/public/reservationCounters/${reservation.company_slug}/${reservation.counter_slug}/car`}
                                    className="relative inline-block w-full transition-transform duration-300 ease-in-out"
                                >
                                    <div className="p-1 bg-white border rounded-lg">
                                        <div className="">
                                        <div className="flex items-center justify-between mb-1 space-x-1">
                                            <span className="items-center w-full px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-100 rounded-md md:justify-between md:flex ">
                                                <p className="md:ml-1 text-[9px] text-base font-semibold">
                                                {reservation.car_name}
                                                </p>
                                            </span>
                                        </div>
                                       
                                        
                                        
                                        

                                        
                                        <div className="flex items-center justify-between space-x-1">
                                            <span className="items-center w-full px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md md:flex md:justify-between">
                                               
                                                <p className="justify-end text-[9px] text-xs font-semibold md:flex">
                                                    Rp{" "}
                                                    {numberFormat(
                                                        reservation.price
                                                    )} ( {reservation.service_duration}{" "}Menit)
                                                </p>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-1 space-x-1">
                                            <span className="flex items-center px-1 py-1 text-xs font-semibold ">
                                            <p className="text-[10px] md:text-xs">
                                                 {reservation.category_counter_name} ({reservation.counter_name})
                                                </p>
                                            </span>
                                            
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div> */}
                            <div key={index} className="">
                            <Link
                                    href={`/public/reservationCounters/${reservation.company_slug}/${reservation.counter_slug}/car`}
                                    className="relative inline-block w-full transition-transform duration-300 ease-in-out"
                                >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                              {/* Contoh Item */}
                              <div className="flex flex-col items-start p-3 bg-white border rounded-lg">
                                <h2 className="text-xl font-semibold text-gray-900">{reservation.car_name}</h2>
                                <p className="text-xs font-bold text-blue-600">Rp{" "}
                                                    {numberFormat(
                                                        reservation.price
                                                    )}</p>
                                {/* <p className="flex items-center text-gray-600"><IconHourglass className="items-center justify-center w-4 h-4 -ml-0.5 text-center text-yellow-500"/>{reservation.service_duration}{" "}Menit</p> */}
                                <span className="text-xs text-gray-500">{reservation.category_counter_name}</span>
                                {/* <span className="text-sm text-gray-500">{reservation.counter_name}</span> */}
                              </div>
                              
                            </div>
                            </Link>
                          </div>
                          </>
                          
                            
                        ))}
                    </div>
                ) : (
                    <EmptyCard />
                )}

                <Pagination meta={meta} />
            </Container>
        </div>
    );
}

List.layout = (page) => <AppReservasi children={page}></AppReservasi>;
