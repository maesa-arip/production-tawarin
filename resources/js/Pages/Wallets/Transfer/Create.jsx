import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";

export default function Create({ users }) {
    // const [enabled, setEnabled] = useState(false);
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

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onContactChange = (e) => {
        setData({ ...data, ["id"]: e.id });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("wallet.transferstore"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <div>
            <Head title="Transfer" />
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Transfer
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Use a permanent address where you can
                                        receive mail.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kontak
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={users}
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onContactChange(e);
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.id}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="amount"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Amount
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
                                            {/* <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                                                <label
                                                    htmlFor="berita"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Catatan
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="berita"
                                                        name="berita"
                                                        rows={3}
                                                        onChange={onChange}
                                                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        placeholder=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Masukan Penjelasan Tentang
                                                    Bisnis Anda
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <Button processing={processing}>
                                            Transfer
                                        </Button>
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
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
