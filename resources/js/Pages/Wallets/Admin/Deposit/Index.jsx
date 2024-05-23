import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import CreateUser from "@/Components/Users/CreateUser";
import EditeUser from "@/Components/Users/EditUser";
import AddModal from "@/Components/Modal/AddModal";
import EditModal from "@/Components/Modal/EditModal";
import DestroyModal from "@/Components/Modal/DestroyModal";
import Button from "@/Components/Button";
import { numberFormat } from "@/Libs/helper";
import Pagination from "@/Components/Pagination";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import ThirdButtonSmall from "@/Components/ThirdButtonSmall";
import Header from "@/Components/Header";

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
        data: transaction,
        meta,
        filtered,
        attributes,
    } = props.transactions;
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
    // console.log(transaction)
    return (
        <>
            <Head title="Deposit" />
            <Header
                title="Deposit"
                description={"List uang deposit yang ada di Tawarin"}
            />
            <Container>

            <div className="">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-1/2">
                            <div className="flex items-center justify-end gap-x-2">
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

                    
                    <div className="hidden lg:block">
                    <div className="flex items-center justify-end">
                       
                    </div>
                    <div className="flex flex-col p-1">
                        <div className="-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
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
                                                            sort("payable_type")
                                                        }
                                                    >
                                                        Type
                                                        {params.field ==
                                                            "payable_type" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "payable_type" &&
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
                                                            sort("type")
                                                        }
                                                    >
                                                        Type
                                                        {params.field ==
                                                            "type" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "type" &&
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
                                                            sort("amount")
                                                        }
                                                    >
                                                        amount
                                                        {params.field ==
                                                            "amount" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "amount" &&
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
                                                            sort("confirmed")
                                                        }
                                                    >
                                                        confirmed
                                                        {params.field ==
                                                            "confirmed" &&
                                                            params.direction ==
                                                                "asc" && (
                                                                <UpIcon />
                                                            )}
                                                        {params.field ==
                                                            "confirmed" &&
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
                                                        Created_at
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
                                            {transaction.map(
                                                (transaction, index) => (
                                                    <tr key={transaction.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {meta.from + index}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                transaction.payable_type
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {transaction.type}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            Rp{" "}
                                                            {numberFormat(
                                                                transaction.amount
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                transaction.confirmed
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                transaction.created_at
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link
                                                                href={`/admindeposits/${transaction.id}`}
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    Lihat
                                                                </div>
                                                            </Link>
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
                </div>
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                    </div>


                    <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {transaction.map((transaction, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-6 col-start-1">
                                                <p className="text-base font-semibold">
                                                    {transaction.type} dari {transaction.holder_name}
                                                </p>
                                                <p className="text-xs text-red-600 font-medium ">
                                                    {transaction.confirmed==0 && transaction.meta?.type == 'decline' ?  <> {transaction.meta?.message} </> : ''}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end col-span-6 col-end-13">
                                                {transaction.confirmed == 0 && transaction.meta?.type == 'decline' ? 
                                                <ThirdButtonSmallNoLink color="red">
                                                        Ditolak
                                                </ThirdButtonSmallNoLink> : transaction.confirmed == 1 ? (
                                                    <ThirdButtonSmallNoLink color="teal">
                                                        Diterima
                                                    </ThirdButtonSmallNoLink>
                                                ) : (
                                                    <ThirdButtonSmallNoLink color="secondary">
                                                        Menunggu Konfirmasi
                                                    </ThirdButtonSmallNoLink>
                                                )}
                                                {/* // {transaction.confirmed == 1 ? (
                                                //     <ThirdButtonSmallNoLink color="teal">
                                                //         Diterima
                                                //     </ThirdButtonSmallNoLink>
                                                // ) : (
                                                //     <ThirdButtonSmallNoLink color="secondary">
                                                //         Menunggu Konfirmasi
                                                //     </ThirdButtonSmallNoLink>
                                                // )} */}
                                            </div>

                                            <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                            {/* <div className="flex items-center justify-center col-span-2 col-start-1 mb-2">
                                                <img
                                                    className="object-cover w-12 h-12 border rounded-lg"
                                                    src={
                                                        transaction.media
                                                            ? transaction.media
                                                            : "storage/files/default/NoImage.svg"
                                                    }
                                                    alt="0"
                                                ></img>
                                            </div> */}
                                            <div className="col-span-10 col-start-1">
                                                <Link className="text-base font-semibold">
                                                Rp{" "}
                                                            {numberFormat(
                                                                transaction.amount
                                                            )}
                                                </Link>

                                                <p className="text-xs font-medium text-gray-500">
                                                {
                                                                transaction.created_at
                                                            }
                                                </p>
                                            </div>
                                            
                                            <div className="col-span-5 col-end-13">
                                                <div className="flex items-center justify-end col-span-3 col-end-6 ">
                                                    <ThirdButtonSmall href={`/admindeposits/${transaction.id}`}>Lihat</ThirdButtonSmall>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <ul className="flex items-center mt-10 gap-x-1">
                                    {meta.links.map((item, index) => (
                                        <button
                                            key={index}
                                            disabled={
                                                item.url == null ? true : false
                                            }
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
            </Container>
        </>
    );
}
Index.layout = (page) => <App children={page} />;
