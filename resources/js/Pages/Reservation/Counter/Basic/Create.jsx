import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";
import CurrencyInput from "react-currency-input-field";
import ThirdButton from "@/Components/ThirdButton";
import DangerButton from "@/Components/DangerButton";
import { IconTrash } from "@tabler/icons";
import Map from "@/Components/Map";
import TimeInput from "@/Components/TimeInput";
import RadioCard from "@/Components/RadioCard";
import InputError from "@/Components/InputError";
import RadioCard2 from "@/Components/RadioCard2";

export default function Create({ onOff }) {
    const set_dayoff = [
        { id: 1, name: "OFF" },
        { id: 2, name: "ON" },
    ];

    // console.log(onOff);
    // console.log(set_dayoff);

    const { data, setData, post, processing, reset, errors } = useForm({});
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]:
                e.target.type === "checkbox" || e.target.type === "radio"
                    ? e.target.checked
                    : e.target.value,
        });
    };
    const [selectedSetDayOff, setSelectedSetDayOff] = useState();
    const onChangeRadio = (e) => {
        setData({ ...data, ["set_dayoff"]: e.value });
        // console.log(e);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("reservationCounters.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <div>
            <Head title="Plan Create" />
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Perencanaan
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap perencanaanmu
                                        disini.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12 md:col-span-8">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Counter
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                data.name ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="name"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jam Buka
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="time"
                                                            name="open_at"
                                                            value={
                                                                data.open_at ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="open_at"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.open_at}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jam Tutup
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="time"
                                                            name="close_at"
                                                            value={
                                                                data.close_at ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="close_at"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.close_at}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="service_duration"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Lama Pelayanan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="service_duration"
                                                            value={
                                                                data.service_duration ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="service_duration"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.service_duration
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="period"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Batas Waktu Reservasi
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="number"
                                                            name="period"
                                                            value={
                                                                data.period ??
                                                                ""
                                                            }
                                                            onChange={onChange}
                                                            id="period"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.period}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-4 mt-6">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Counter Setting Hari Libur
                                                    Sendiri
                                                </label>
                                                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="w-full text-center">
                                                        <RadioCard2
                                                            ShouldMap={onOff}
                                                            selected={
                                                                selectedSetDayOff
                                                            }
                                                            onChange={(e) => {
                                                                onChangeRadio(
                                                                    e
                                                                );
                                                                setSelectedSetDayOff(
                                                                    e
                                                                );
                                                            }}
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.set_dayoff
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-4 mt-6">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Counter Setting Hari Libur
                                                    Sendiri
                                                </label>
                                                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="w-full text-center">
                                                        <RadioCard2
                                                            ShouldMap={onOff}
                                                            selected={
                                                                selectedSetDayOff
                                                            }
                                                            onChange={(e) => {
                                                                onChangeRadio(
                                                                    e
                                                                );
                                                                setSelectedSetDayOff(
                                                                    e
                                                                );
                                                            }}
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.set_dayoff
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-4 mt-6">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Counter Setting Hari Libur
                                                    Sendiri
                                                </label>
                                                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="w-full text-center">
                                                        <RadioCard2
                                                            ShouldMap={onOff}
                                                            selected={
                                                                selectedSetDayOff
                                                            }
                                                            onChange={(e) => {
                                                                onChangeRadio(
                                                                    e
                                                                );
                                                                setSelectedSetDayOff(
                                                                    e
                                                                );
                                                            }}
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.set_dayoff
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <Button processing={processing}>
                                            Simpan
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
