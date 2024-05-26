import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import { numberFormat } from "@/Libs/helper";
import { IconCash, IconChecks } from "@tabler/icons";

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

export default function HistoryDeposit(props) {
    const {
        data: transaction,
        meta,
        filtered,
        attributes,
    } = props.transactions;
    console.log(transaction)
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
    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });
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
            <Head title="History" />
            <Container> </Container>

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-full px-4">
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

                    <div className="flex flex-col p-1">
                        <div className="-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                >
                                                    <div className="flex items-center cursor-pointer gap-x-2">
                                                        
                                                    </div>
                                                </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {transaction.map(
                                                (transaction, index) => (
                                                    <tr key={transaction.id}>
                                                        <td className="px-3 py-2 whitespace-nowrap">
                                                            {/* File Uploading Progress Form */}
                                                            <div className="px-3 py-2 border rounded-xl">
                                                                {/* Uploading File Content */}
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <div className="flex items-center gap-x-3">
                                                                        <span className="flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg size-8 ">
                                                                        <IconCash className="flex-shrink-0 w-6 h-6 text-teal-500"/>
                                                                        </span>
                                                                        <div>
                                                                            <p className="flex-wrap text-sm font-medium text-gray-800 whitespace-break-spaces ">
                                                                                {transaction.meta?.message}
                                                                            </p>
                                                                            
                                                                            {transaction.meta?.type == 'uang masuk' ? <><p className="text-xs text-teal-500 ">
                                                                                Rp{" "}
                                                                                {numberFormat(
                                                                                    transaction.amount
                                                                                )}
                                                                            </p></> :<><p className="text-xs text-gray-500 ">
                                                                                Rp{" "}
                                                                                {numberFormat(
                                                                                    transaction.amount
                                                                                )}
                                                                            </p></> }
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div className="inline-flex items-center gap-x-2">
                                                                        {/* <IconCash className="flex-shrink-0 w-4 h-4 text-teal-500 size-4"/> */}
                                                                        <div>
                                                                            <p className="text-xs text-gray-800 ">
                                                                                {transaction.created_at_date}
                                                                            </p>
                                                                            <p className="text-xs text-teal-500 ">
                                                                            <IconChecks className="flex-shrink-0 w-4 h-4 text-teal-500 size-4"/>
                                                                            </p>
                                                                            
                                                                        </div>
                                                                        
                                                                        </div>
                                                                </div>
                                                                {/* End Uploading File Content */}
                                                            </div>
                                                            {/* End File Uploading Progress Form */}
                                                        </td>
                                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                transaction.meta?.message
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {transaction.meta?.type}
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
                                                        </td> */}
                                                        {/* <td>
                                                            <Link
                                                                href={`/admindeposits/${transaction.id}`}
                                                            >
                                                                <div className="flex items-center gap-x-2">
                                                                    Lihat
                                                                </div>
                                                            </Link>
                                                        </td> */}
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <Pagination meta={meta} /> */}
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
                    </div>
                </div>
            </div>
        </>
    );
}
HistoryDeposit.layout = (page) => <App children={page} />;
