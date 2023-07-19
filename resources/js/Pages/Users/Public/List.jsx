import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";

export default function List(props) {
    const { data: people, meta, filtered, attributes } = props.users;
    const roles = props.roles;
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
    return (
        <div>
            <Head title="User" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-full">
                            <div className="flex items-center justify-end px-4 mt-2 mb-0 gap-x-1">
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

                    <div className="flex flex-col">
                        <div className="-my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="border-b border-gray-200 shadow sm:rounded-lg">
                                    <div className="flex items-center justify-center min-h-screen py-2 bg-white">
                                        <div className="flex flex-col">
                                            <div className="flex flex-col mt-8">
                                                {/* Meet the Team */}
                                                <div className="container px-4 max-w-7xl">
                                                    <div className="flex flex-wrap justify-center mb-24 text-center">
                                                        <div className="w-full px-4 lg:w-6/12">
                                                            {/* Header */}
                                                            <h1 className="mb-8 text-4xl font-bold text-gray-900">
                                                                Pengguna Tawarin
                                                            </h1>
                                                            {/* Description */}
                                                            <p className="text-lg font-light text-gray-700">
                                                                Selamat datang
                                                                di Tawarin!
                                                                Bersama-sama,
                                                                mari kita
                                                                jelajahi dunia
                                                                baru dengan
                                                                aplikasi ini
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap">
                                                        {people.map(
                                                            (person, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="w-full px-6 mb-6 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4"
                                                                >
                                                                    <div className="flex flex-col">
                                                                        {/* Avatar */}
                                                                        <a
                                                                            href="#"
                                                                            className="mx-auto"
                                                                        >
                                                                            <img
                                                                                className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
                                                                                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                                                                            />
                                                                        </a>
                                                                        {/* Details */}
                                                                        <div className="mt-6 text-center">
                                                                            {/* Name */}
                                                                            <Link
                                                                                href={route(
                                                                                    "user.detail",
                                                                                    person.username
                                                                                )}
                                                                                className="mb-1 text-xl font-bold text-gray-900"
                                                                            >
                                                                                {
                                                                                    person.name
                                                                                }
                                                                            </Link>
                                                                            {/* Title */}
                                                                            <div className="mb-2 font-light text-gray-700">
                                                                                {person.roles.map(
                                                                                    (
                                                                                        role,
                                                                                        index
                                                                                    ) => (
                                                                                        <span
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                            className="px-2 py-1 mx-1 text-xs uppercase"
                                                                                        >
                                                                                            {
                                                                                                role.name
                                                                                            }
                                                                                        </span>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                            {/* Social Icons */}
                                                                            <div className="flex items-center justify-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                                                                                {/* Linkedin */}
                                                                                <a
                                                                                    href="#"
                                                                                    className="flex w-10 h-10 rounded-full hover:bg-indigo-50"
                                                                                >
                                                                                    <i className="mx-auto mt-2 text-indigo-500 mdi mdi-linkedin" />
                                                                                </a>
                                                                                {/* Twitter */}
                                                                                <a
                                                                                    href="#"
                                                                                    className="flex w-10 h-10 rounded-full hover:bg-blue-50"
                                                                                >
                                                                                    <i className="mx-auto mt-2 text-blue-300 mdi mdi-twitter" />
                                                                                </a>
                                                                                {/* Instagram */}
                                                                                <a
                                                                                    href="#"
                                                                                    className="flex w-10 h-10 rounded-full hover:bg-orange-50"
                                                                                >
                                                                                    <i className="mx-auto mt-2 text-orange-400 mdi mdi-instagram" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    {/* <Pagination meta={meta} /> */}
                                                    <ul className="flex items-center w-full px-6 mb-6 gap-x-1 md:w-6/12 lg:w-3/12 sm:px-6 lg:px-4">
                                                        {meta.links.map(
                                                            (item, index) => (
                                                                <button
                                                                    key={index}
                                                                    disabled={
                                                                        item.url ==
                                                                        null
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    className={`${
                                                                        item.url ==
                                                                        null
                                                                            ? "text-gray-500"
                                                                            : "text-gray-800"
                                                                    } w-12 h-9 rounded-lg flex items-center justify-center border bg-white`}
                                                                    onClick={() =>
                                                                        setParams(
                                                                            {
                                                                                ...params,
                                                                                page: new URL(
                                                                                    item.url
                                                                                ).searchParams.get(
                                                                                    "page"
                                                                                ),
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </button>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
List.layout = (page) => <App children={page} />;
