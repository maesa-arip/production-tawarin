import React, { useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import InfoModal from "@/Components/Modal/InfoModal";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";

export default function Show({ transaction }) {
    const { data, setData, patch, clearErrors, processing, reset, errors } =
        useForm({});
    const confirmedHandler = (e) => {
        e.preventDefault();
        patch(route("owneradmindeposits.confirmed", transaction.id));
    };
    const [isOpenDeclineDialog, setIsOpenDeclineDialog] = useState(false);
    const [isOpenAcceptDialog, setIsOpenAcceptDialog] = useState(false);
    const [state, setState] = useState([]);
    const openDeclineDialog = (data) => {
        setIsOpenDeclineDialog(true);
        setState(data);
    };
    const closeDeclineDialog = () => {
        setIsOpenDeclineDialog(false);
    };
    const openAcceptDialog = (data) => {
        setIsOpenAcceptDialog(true);
        setState(data);
    };
    const closeAcceptDialog = () => {
        setIsOpenAcceptDialog(false);
    };
    const acceptWithdrawHandler = (e) => {
        e.preventDefault();
        patch(route("owneradmindeposits.confirmed", transaction.id));
    };
    const declineWithdrawHandler = (e) => {
        e.preventDefault();
        patch(route("owneradmindeposits.decline", transaction.id));
    };
    return (
        <div>
            <Head title="Transactions" />
            <InfoModal
                isOpenInfoDialog={isOpenDeclineDialog}
                setIsOpenInfoDialog={setIsOpenDeclineDialog}
                size="2xl"
                closeButton="false"
                title={"Yakin Tolak Top Up ?"}
            >
                <InputLabel className={"text-left mt-4"}>
                    Masukan Alasan
                </InputLabel>
                <TextAreaInput
                    type="text"
                    name="reason"
                    value={data.reason}
                    className="block w-full mt-1"
                    autoComplete="reason"
                    isFocused={true}
                    handleChange={(e) => setData("reason", e.target.value)}
                />
                <InputError
                    message={errors.reason}
                    className="mt-2 mb-2 text-left"
                />
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={declineWithdrawHandler}
                >
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
                title={"Yakin Terima Withdraw ?"}
            >
                <ThirdButtonNoLink
                    processing={processing}
                    onClick={acceptWithdrawHandler}
                >
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
            <Container>
                <div className="bg-white">
                    <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Detail Penarikan Deposit
                            </h2>

                            <p className="mt-4 text-gray-500"></p>

                            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {/* <div className="pt-4 border-t border-gray-200">
                                    <dt className="font-medium text-gray-900">
                                        Jenis
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        {transaction.payable_type}
                                    </dd>
                                </div> */}
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
                                        {transaction.confirmed == 0 &&
                                        transaction.meta?.type == "decline_deposit_withdraw" ? (
                                            <ThirdButtonSmallNoLink color="red">
                                                Ditolak
                                            </ThirdButtonSmallNoLink>
                                        ) : transaction.confirmed == 1 ? (
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
                                        Alasan
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                        <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
                                            <div className="flex">
                                                <p>{
                                                        transaction.meta
                                                            ?.reason
                                                    }</p>
                                                
                                            </div>
                                            
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                    <div>
                                    {transaction.confirmed == 0 &&
                                    transaction.meta?.type == "decline_deposit_withdraw" ? (
                                        <div className="px-1 py-3 text-right sm:px-6">
                                            <p className="text-sm font-medium text-left text-red-500">
                                            {transaction.meta?.message}
                                        </p>
                                        </div>
                                    ) : transaction.confirmed == 1 ? (
                                        <></>
                                    ) : (
                                        <>
                                            
                                        </>
                                    )}
                                        
                                    </div>
                                </div>
                                <div className="flex justify-end bg-gray-50">
                                    {transaction.confirmed == 0 &&
                                    transaction.meta?.type == "decline_deposit_withdraw" ? (
                                        <div className="px-4 py-3 text-right sm:px-6">
                                            <ThirdButtonNoLink color="red">
                                                Withdraw Sudah Ditolak
                                            </ThirdButtonNoLink>
                                        </div>
                                    ) : transaction.confirmed == 1 ? (
                                        <div className="px-4 py-3 text-right sm:px-6">
                                            <ThirdButtonNoLink color="teal">
                                                Withdraw Sudah Diterima
                                            </ThirdButtonNoLink>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <Button
                                                    color="pink"
                                                    onClick={openDeclineDialog}
                                                >
                                                    Tolak
                                                </Button>
                                            </div>
                                            <div className="px-4 py-3 text-right sm:px-6">
                                                <Button
                                                    onClick={openAcceptDialog}
                                                >
                                                    Konfirmasi
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <AppReservasi children={page}></AppReservasi>;
