import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import { numberFormat } from "@/Libs/helper";
import { IconCash, IconChecks } from "@tabler/icons";



export default function DepositSummary(props) {
    // const {
    //     data: transactions,
    //     meta,
    //     filtered,
    //     attributes,
    // } = props.transactions;
    // console.log(transaction);
    const transactions = props.transactions;
    // const [pageNumber, setPageNumber] = useState([]);
    // const [params, setParams] = useState(filtered);
    // const [isInitialRender, setIsInitialRender] = useState(true);
    // const reload = useCallback(
    //     debounce((query) => {
    //         Inertia.get(
    //             route(route().current()),
    //             // route("riskRegisterKlinis.index"),
    //             { ...pickBy(query), page: query.page },
    //             {
    //                 preserveState: true,
    //                 preserveScroll: true,
    //             }
    //         );
    //     }, 150),
    //     []
    // );
    // useEffect(() => {
    //     if (!isInitialRender) {
    //         reload(params);
    //     } else {
    //         setIsInitialRender(false);
    //     }
    // }, [params]);
    // useEffect(() => {
    //     let numbers = [];
    //     for (
    //         let i = attributes.per_page;
    //         i < attributes.total / attributes.per_page;
    //         i = i + attributes.per_page
    //     ) {
    //         numbers.push(i);
    //     }
    //     setPageNumber(numbers);
    // }, []);
    // const onChange = (event) =>
    //     setParams({ ...params, [event.target.name]: event.target.value });
    // const sort = (item) => {
    //     setParams({
    //         ...params,
    //         field: item,
    //         direction: params.direction == "asc" ? "desc" : "asc",
    //     });
    // };
    // // console.log(transaction)
    return (
        <>
            <Head title="History" />
            <Container> </Container>

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-full px-4">
                            <div className="flex items-center justify-end mb-6 gap-x-2">
                                {/* <select
                                    name="load"
                                    id="load"
                                    onChange={onChange}
                                    value={params.load}
                                    className="transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                                >
                                    {pageNumber.map((page, index) => (
                                        <option key={index}>{page}</option>
                                    ))}
                                </select> */}
                                {/* <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
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
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col px-4 ">
                        <div className="overflow-x-auto rounded sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden sm:rounded-lg">
                                            {transactions.map(
                                                (transaction, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start p-4 my-4 bg-white border rounded-xl"
                                                    >
                                                        <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-full bg-orange-50">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-6 h-6 text-orange-400 icon icon-tabler icon-tabler-cash"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                                                                <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                                                            </svg>
                                                        </div>
                                                        <div className="ml-4">
                                                            <h2 className="text-base font-semibold">
                                                                Rp{" "}
                                                                {numberFormat(
                                                                    transaction.total_amount
                                                                )}
                                                            </h2>
                                                            <p className="mt-2 text-sm text-gray-500">
                                                                Deposit dari{" "}
                                                                {
                                                                    transaction.user_name
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                </div>
                                {/* <ul className="flex items-center mt-4 gap-x-1">
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
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
DepositSummary.layout = (page) => <App children={page} />;
