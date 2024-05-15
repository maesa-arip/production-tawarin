import React from "react";
import App from "@/Layouts/App";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";

export default function Show({ transaction }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
    });
    const confirmedHandler = (e) => {
        e.preventDefault();
        patch(route('adminwithdraw.confirmed', transaction.id));
    };
    return (
        <div>
            <Head title="Transactions" />
            <Container>
                <div className="bg-white">
                    <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Detail Transfer
                            </h2>

                            <p className="mt-4 text-gray-500"></p>

                            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jenis
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {transaction.payable_type}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Tipe
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {transaction.type}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Status
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                    {transaction.confirmed == 1 ? (
                                                    <ThirdButtonSmallNoLink color="teal">
                                                        Diterima
                                                    </ThirdButtonSmallNoLink>
                                                ) : (
                                                    <ThirdButtonSmallNoLink color="secondary">
                                                        Menunggu Konfirmasi
                                                    </ThirdButtonSmallNoLink>
                                                )}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jumlah Withdraw
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp {numberFormat(transaction.amount)}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Informasi Bank
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                    <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
                            
                            <div className="flex"><p>Nama Bank</p><p className="ml-9">: {transaction.meta?.bank_name}</p></div>
                            <div className="flex"><p>Nomor Rekening</p><p className="ml-9">: {transaction.meta?.account_number}</p></div>
                            <div className="flex"><p>Nama Pemilik</p><p className="ml-9">: {transaction.meta?.account_name}</p></div>
                            
                            
                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Bukti Transfer
                                        </label>
                                        
                                    </div>
                                </div>
                                <div className="flex justify-end bg-gray-50">
                                <div className="px-4 py-3 text-right sm:px-6">
                                    <Button color="pink">Tolak</Button>
                                </div>
                                <div className="px-4 py-3 text-right sm:px-6">
                                    <Button  onClick={confirmedHandler}>Konfirmasi</Button>
                                </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
