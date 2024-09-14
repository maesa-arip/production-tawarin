import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import AppReservasi from "@/Layouts/AppReservasi";
import NavLink from "@/Components/NavLink";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CopyButton from "@/Components/CopyButton";
import ThirdButton from "@/Components/ThirdButton";
import InfoModal from "@/Components/Modal/InfoModal";
import Button from "@/Components/Button";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { Inertia } from "@inertiajs/inertia";
import { IconChecks, IconCircleCheck, IconX, IconXboxX } from "@tabler/icons";
import { numberFormat } from "@/Libs/helper";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";

export default function MyEmployeeBreakSetting({
    myEmployeeBreakSetting,
}) {
    console.log(myEmployeeBreakSetting)
    const { data, setData, patch, post, put, processing, errors, reset } =
        useForm({
            break_time : myEmployeeBreakSetting.break_time,
        });
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };
    // console.log(myEmployeeBreakSetting)
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("reservation.storesetbreaktime"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <>
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <div className="flex justify-center mb-2 text-lg">
                                Atur Jam Istirahat
                            </div>
                        </div>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:col-span-1">
                                        <div className="px-4 sm:px-0">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                Data Jam Istirahat
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-600">
                                                Masukan berapa jam maksimal
                                                pekerja boleh istirahat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <div className="overflow-hidden shadow sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-12 gap-6">
                                                    <div className="col-span-12 md:col-span-6">
                                                        <label
                                                            htmlFor="break_time"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Lama Istirahat (Jam)
                                                        </label>
                                                        <div className="flex mt-1 rounded-md">
                                                            <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                                <input
                                                                    type="number"
                                                                    name="break_time"
                                                                    value={
                                                                        data.break_time ??
                                                                        ""
                                                                    }
                                                                    onChange={
                                                                        onChange
                                                                    }
                                                                    id="break_time"
                                                                    autoComplete="off"
                                                                    className="w-full border-0 focus:ring-0 form-text"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </div>
                                                        {errors && (
                                                            <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                {
                                                                    errors.break_time
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                                <ThirdButtonNoLink
                                                    processing={processing}
                                                >
                                                    Simpan
                                                </ThirdButtonNoLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        // </AuthenticatedLayout>
    );
}
MyEmployeeBreakSetting.layout = (page) => (
    <AppReservasi children={page}></AppReservasi>
);
