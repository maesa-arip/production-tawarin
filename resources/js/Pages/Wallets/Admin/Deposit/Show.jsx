import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";

export default function Show({ transaction, media }) {
    const { data, setData, patch, clearErrors, processing, reset, errors } = useForm({
    });
    const [isOpenDeclineDialog,setIsOpenDeclineDialog] = useState(false);
    const [isOpenAcceptDialog,setIsOpenAcceptDialog] = useState(false);
    const [state, setState] = useState([]);
    const openDeclineDialog = (data) => {
        setIsOpenDeclineDialog(true);
        setState(data);
    }
    const closeDeclineDialog = () => {
        setIsOpenDeclineDialog(false);
    }
    const openAcceptDialog = (data) => {
        setIsOpenAcceptDialog(true);
        setState(data);
    }
    const closeAcceptDialog = () => {
        setIsOpenAcceptDialog(false);
    }
    const acceptDepositHandler = (e) => {
        e.preventDefault();
        patch(route('admindeposit.confirmed', transaction.id));
    };
    const declineDepositHandler = (e) => {
        e.preventDefault();
        patch(route('admindeposit.decline', transaction.id));
    };
    
    return (
        <div>
            <InfoModal
                isOpenInfoDialog={isOpenDeclineDialog}
                setIsOpenInfoDialog={setIsOpenDeclineDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Tolak Top Up ?"}
            >
                <InputLabel className={'text-left mt-4'}>Masukan Alasan</InputLabel>
                    <TextAreaInput
                        type="text"
                        name="reason"
                        value={data.reason}
                        className="block w-full mt-1"
                        autoComplete="reason"
                        isFocused={true}
                        handleChange ={(e) => setData("reason", e.target.value)}
                    />
                    <InputError message={errors.reason} className="mt-2 text-left mb-2" />
                <ThirdButtonNoLink processing={processing} onClick={declineDepositHandler}>
                    Tolak
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeDeclineDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenAcceptDialog}
                setIsOpenInfoDialog={setIsOpenAcceptDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Terima Top Up ?"}
            >
                <ThirdButtonNoLink processing={processing} onClick={acceptDepositHandler}>
                    Terima
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="secondary"
                    onClick={closeAcceptDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
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
                                        {transaction.type}
                                    </dd>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Nama
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {transaction.holder_name}
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
                                        Jumlah Top Up
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        Rp {numberFormat(transaction.amount)}
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
                                        <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                            {media.map((transaction) => (
                                                <img
                                                    key={transaction.id}
                                                    src={`/storage/${transaction.id}/${transaction.file_name}`}
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 rounded-lg"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end bg-gray-50">
                                <div className="px-4 py-3 text-right sm:px-6">
                                    <Button color="pink" onClick={openDeclineDialog}>Tolak</Button>
                                </div>
                                <div className="px-4 py-3 text-right sm:px-6">
                                    <Button  onClick={openAcceptDialog}>Konfirmasi</Button>
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
