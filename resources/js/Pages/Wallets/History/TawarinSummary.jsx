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

export default function TawarinSummary(props) {
    // const {
    //     data: transactions,
    //     meta,
    //     filtered,
    //     attributes,
    // } = props.transactions;
    const topUpBelumKonfirmasi = props.topUpBelumKonfirmasi;
    const topUpSudahKonfirmasi = props.topUpSudahKonfirmasi;
    const topUpSudahKonfirmasiNULL = props.topUpSudahKonfirmasiNULL;
    const totalTopUp = props.totalTopUp;
    const topUpDitolak = props.topUpDitolak;
    const withdrawBelumKonfirmasi = props.withdrawBelumKonfirmasi;
    const withdrawSudahKonfirmasi = props.withdrawSudahKonfirmasi;
    const withdrawDitolak = props.withdrawDitolak;
    const referral = props.referral;
    const fee = props.fee;
    const bonus = props.bonus;

    return (
        <>
            <Head title="History" />
            <Container> </Container>

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-full px-4">
                            <div className="flex items-center justify-end mb-6 gap-x-2">
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
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    topUpBelumKonfirmasi
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                TopUp Belum Konfirmasi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    totalTopUp
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                TopUp Sudah Konfirmasi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    topUpSudahKonfirmasiNULL
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                TopUp Sudah Konfirmasi NULL
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    withdrawBelumKonfirmasi
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Withdraw Belum Konfirmasi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    withdrawSudahKonfirmasi
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Withdraw Sudah Konfirmasi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    referral
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Referral
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    bonus
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Bonus
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden sm:rounded-lg">
                                    <div className="flex items-start p-4 my-4 bg-white border rounded-xl">
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
                                                    fee
                                                )}
                                            </h2>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Fee
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="flex items-center mt-4 gap-x-1">
                                    {/* {meta.links.map((item, index) => (
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
                                    ))} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
TawarinSummary.layout = (page) => <App children={page} />;
