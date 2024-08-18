import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { numberFormat, Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import { IconEdit, IconPencil, IconPlus } from "@tabler/icons";
import ThirdButtonSmallNoLink from "@/Components/ThirdButtonSmallNoLink";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import EditModal from "@/Components/Modal/EditModal";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import ListBoxPage from "@/Components/ListBoxPage";
import ThirdButton from "@/Components/ThirdButton";
import ApplicationLogo from "@/Components/ApplicationLogo";
export default function Create(props) {
    const banks = props.banks;
    const balance = props.balance;
    const onhold = props.onhold;
    const userBank = props.userBank;
    const [amount, setAmount] = useState("");
    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(amount);
    const { data, setData, post, processing, reset, errors } = useForm({});
    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("withdraws.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onBankChange = (e) => {
        setData({ ...data, ["bank_id"]: e.id });
    };
    const [state, setState] = useState([]);
    const [isOpenJoinDialog, setIsOpenJoinDialog] = useState(false);
    const openJoinDialog = (result) => {
        setState(result);
        setIsOpenJoinDialog(true);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("userBanks.store"), {
            onSuccess: () => {
                return Promise.all([setIsOpenJoinDialog(false), reset(), setSelected(defaultValue[0])]);
            },
        });
    };
    // console.log(userBank)
    return (
        <div>
            <EditModal
                isOpenEditDialog={isOpenJoinDialog}
                setIsOpenEditDialog={setIsOpenJoinDialog}
                size="2xl"
                title={"Masukan Data Bank"}
            >
                <form onSubmit={submit}>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                        <label
                            htmlFor="id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Pilih Bank
                        </label>
                        <ListBoxPage
                            ShouldMap={banks}
                            selected={selected}
                            onChange={(e) => {
                                onBankChange(e);
                                setSelected(e);
                            }}
                        />
                        {errors && (
                            <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                {errors.id}
                            </span>
                        )}
                    </div>
                    <label
                            htmlFor="id"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nomor Rekening
                        </label>
                    <Input
                        type="text"
                        name="account_number"
                        value={data.account_number}
                        className="block w-full mt-1"
                        autoComplete="account_number"
                        isFocused={true}
                        onChange={(e) => setData("account_number", e.target.value)}
                    />
                    <InputError message={errors.account_number} className="mt-2" />
                    <label
                            htmlFor="id"
                            className="block mt-2 text-sm font-medium text-gray-700"
                        >
                            Nama Pemilik Rekening
                        </label>
                    <Input
                        type="text"
                        name="account_name"
                        value={data.account_name}
                        className="block w-full mt-1"
                        autoComplete="account_name"
                        isFocused={true}
                        onChange={(e) => setData("account_name", e.target.value)}
                    />
                    <InputError message={errors.account_name} className="mt-2" />
                    <ThirdButtonNoLink className="mt-4" disabled={processing}>
                        Tambah
                    </ThirdButtonNoLink>
                </form>
            </EditModal>
            <Head title="Withdraw" />
            <Container>
            <div className="flex flex-col w-full space-y-8">
                                <div className="w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="text-xl font-semibold tracking-tigh">
                                                SALDO UTAMA
                                            </div>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <ApplicationLogo />
                                            </div>
                                        </div>
                                        <div className="inline-block w-12 h-8 overflow-hidden rounded-md shadow-inner bg-gradient-to-tl from-yellow-200 to-yellow-100">
                                            <div className="relative grid w-full h-full grid-cols-2 gap-1">
                                                <div className="absolute w-4 h-6 border border-gray-900 rounded left-4 top-1" />
                                                <div className="border-b border-r border-gray-900 rounded-br" />
                                                <div className="border-b border-l border-gray-900 rounded-bl" />
                                                <div className="border-t border-r border-gray-900 rounded-tr" />
                                                <div className="border-t border-l border-gray-900 rounded-tl" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-6">
                                                <div className="text-xs font-semibold tracking-tight">
                                                    Saldo
                                                </div>
                                                <div className="text-2xl font-semibold">
                                                    Rp {numberFormat(balance)}
                                                </div>
                                            </div>
                                            {onhold ? <div className="col-span-6">
                                                <div className="text-xs font-semibold tracking-tight">
                                                    Penarikan Pending
                                                </div>
                                                <div className="text-2xl font-semibold">
                                                    Rp {numberFormat(onhold)}
                                                </div>
                                            </div> : <></>}
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="relative">
                                    <div className="absolute flex items-start px-2 py-3 space-x-2 text-gray-900 bg-white border-gray-200 rounded-lg shadow-2xl -right-4 lg:right-36 -mt-14 md:-mt-16 w-72">
                                        <div className="flex-initial">
                                            <div className="inline-flex items-center justify-center bg-green-300 rounded-lg bg-gradient-tl from-green-400 via-green-400">
                                                <div className="p-2">
                                                    <svg
                                                        className="w-4 h-4 text-white opacity-90"
                                                        width={24}
                                                        height={24}
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-start justify-between flex-1">
                                            <div>
                                                <h2 className="text-xs font-semibold tracking-tight">
                                                    Tawarin Gotong Royong
                                                </h2>
                                                <p className="text-xs font-light text-gray-500">
                                                    Kamu mendapat saldo tambahan
                                                    Rp 50.000
                                                </p>
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                17:15
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
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
                                <circle cx={12} cy={12} r={9} />
                                <line x1={12} y1={8} x2="12.01" y2={8} />
                                <polyline points="11 12 12 12 12 16 13 16" />
                            </svg>
                            {userBank ? <>{userBank.bank.name}<p className="ml-9">{userBank.account_number}</p><p className="ml-9">{userBank.account_name}</p></> : <p className="ml-9">Belum Setting Bank untuk Penarikan</p>}
                            
                            
                        </div>
                        <div className="md:col-span-1">
                            <div className="flex justify-between ">
                                <h3 className="flex items-center text-lg font-medium leading-6 text-gray-900 ">
                                    Data Withdraw
                                </h3>
                                {userBank ? <ThirdButtonSmallNoLink
                                    onClick={() => openJoinDialog()}
                                >
                                    
                                    Edit Rekening Penarikan{" "}
                                    <IconEdit className="w-3 h-3 font-semibold" />
                                </ThirdButtonSmallNoLink> : <ThirdButtonSmallNoLink
                                    onClick={() => openJoinDialog()}
                                >
                                    
                                    Tambah Rekening Penarikan{" "}
                                    <IconPlus className="w-3 h-3 font-semibold" />
                                </ThirdButtonSmallNoLink>}
                                
                            </div>
                            <p className="mt-1 text-sm text-gray-600">
                                Pastikan nomor rekening dan nama yang dimasukan
                                sudah benar.
                            </p>
                        </div>
                        <div className="px-3 py-4 mb-6 text-sm font-semibold text-gray-500 border rounded shadow border-amber-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
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
                                                        <circle
                                                            cx={12}
                                                            cy={12}
                                                            r={9}
                                                        />
                                                        <line
                                                            x1={12}
                                                            y1={8}
                                                            x2="12.01"
                                                            y2={8}
                                                        />
                                                        <polyline points="11 12 12 12 12 16 13 16" />
                                                    </svg>
                                                    Jumlah penarikan minimal adalah Rp 20.000 dan setiap transaksi penarikan akan dibebankan biaya admin sebesar Rp 2.500.
                                                </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                        
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="amount"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Penarikan
                                                </label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    id="amount"
                                                    onChange={
                                                        onChangeAmountHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.amount && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.amount}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {amount &&
                                                        formatRupiahAmount}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {amount &&
                                                            "(" +
                                                                Terbilang(
                                                                    amount
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        {userBank ? <form onSubmit={onSubmitHandler}><Button processing={processing}>
                                            Save
                                        </Button></form> : <ThirdButtonNoLink disabled={true} color="secondary">Silakan Tambah Nomor Rekening</ThirdButtonNoLink>}
                                        
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
