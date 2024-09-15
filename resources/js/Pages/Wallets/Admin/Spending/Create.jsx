import Container from '@/Components/Container';
import ThirdButtonNoLink from '@/Components/ThirdButtonNoLink';
import { Terbilang } from '@/Libs/helper';
import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

export default function Create() {
    const { data, setData, post, processing, reset, errors } = useForm({});
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const [amount, setAmount] = useState("");

    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(amount);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("adminspendings.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    console.log(data)
  return (
    <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Pengeluaran
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap pengeluaranmu
                                        disini.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                        <div className="col-span-12 sm:col-span-6">
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
                                                onChange={onChangeAmountHandler}
                                                onWheel={(e) => e.target.blur()}
                                                autoComplete="off"
                                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {errors.amount && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.amount}
                                                </span>
                                            )}
                                            <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                {amount && formatRupiahAmount}{" "}
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                    {amount &&
                                                        "(" +
                                                            Terbilang(amount) +
                                                            " Rupiah)"}
                                                </span>
                                            </div>
                                        </div>
                                            
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="description"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Deskripsi
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <textarea
                                                            type="text"
                                                            name="description"
                                                            value={
                                                                data.description ??
                                                                ""
                                                            }
                                                            rows={3}
                                                            onChange={onChange}
                                                            id="description"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.description
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <ThirdButtonNoLink processing={processing}>
                                            Simpan
                                        </ThirdButtonNoLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
  )
}
