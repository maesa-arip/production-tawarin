import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import PlanItem from "@/Components/PlanItem";
import { numberFormat } from "@/Libs/helper";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Filepond from "@/Pages/Uploads/Filepond";
import { IconChecks } from "@tabler/icons";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MapShow from "@/Components/MapShow";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import InfoModal from "@/Components/Modal/InfoModal";
import Time from "./Time";
import BaseModal from "@/Components/Modal/BaseModal";

export default function Show({
    reservationCompany,
    reservationCounter,
    team,
    endDate,
}) {
    const { data, setData, post, patch, processing, reset, errors } = useForm(
        {}
    );
    const { permissions } = usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    const [dates, setDates] = useState([]);
    const calculateDates = () => {
        const currentDate = new Date();
        const endDateObj = new Date(endDate);
        const datesArray = [];
        while (currentDate <= endDateObj) {
            datesArray.push(currentDate.toDateString());
            currentDate.setDate(currentDate.getDate() + 1); // Increment current date by one day
        }
        setDates(datesArray);
    };
    useEffect(() => {
        calculateDates();
    }, [endDate]);

    const [isOpenTimeDialog, setIsOpenTimeDialog] = useState(false);
    const [state, setState] = useState([]);
    const openTimeDialog = (reservationCompany, date) => {
        setState({ reservationCompany, date, reservationCounter });
        setIsOpenTimeDialog(true);
    };

    return (
        <div>
            <Head title="Plans" />
            <BaseModal
                isOpenInfoDialog={isOpenTimeDialog}
                setIsOpenInfoDialog={setIsOpenTimeDialog}
                size="max-w-2xl"
                title={"Pilih Jam"}
            >
                <Time
                    model={state}
                    setIsOpenDialog={setIsOpenTimeDialog}
                    isOpenDialog={isOpenTimeDialog}
                ></Time>
            </BaseModal>
            <Container>
                <div className="bg-white">
                    <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        <div className="col-span-12 p-4 mb-4 text-left border rounded-lg">
                            <h2 className="text-lg font-semibold text-center text-gray-700 ">
                                {" "}
                                {reservationCounter.name}
                            </h2>
                            <p>Open at: {reservationCompany.open_at}</p>
                            <p>Close at: {reservationCompany.close_at}</p>
                            <p>
                                Service duration:{" "}
                                {reservationCounter.service_duration} minutes
                            </p>
                        </div>
                    </div>
                    {/* {team.map((reservationCounter, index) => (
                        <div className="col-span-4">
                            <p>{reservationCounter.name}</p>
                        </div>
                    ))} */}

                    <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {dates.map((date, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col bg-white border shadow-lg rounded-xl">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-1">
                                            <div className="col-span-8">
                                                <p>{date}</p>
                                            </div>

                                            <div className="col-span-4">
                                                <ThirdButtonNoLink
                                                    onClick={() =>
                                                        openTimeDialog(
                                                            reservationCompany,
                                                            date,
                                                            reservationCounter
                                                        )
                                                    }
                                                >
                                                    Pilih Jam
                                                </ThirdButtonNoLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
