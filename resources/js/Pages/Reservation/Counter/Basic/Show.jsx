import React, { useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
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
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


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
            const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format as dd/mm/yyyy
            datesArray.push(formattedDate);
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
        setState({ reservationCompany, date, reservationCounter,team });
        setIsOpenTimeDialog(true);
    };

    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date

    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (dates.includes(date.toLocaleDateString('en-GB'))) {
            // Check if the selected date is in your dates array
            openTimeDialog(
                reservationCompany,
                date.toLocaleDateString('en-GB'),
                reservationCounter,
                team
            );
        }
    };

    // Function to disable dates that are not in the dates array
    const tileDisabled = ({ date }) => {
        return !dates.includes(date.toLocaleDateString('en-GB'));
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
                        {/* ... your reservationCounter info ... */}
                    </div>
                    {/* Display the react-calendar component */}
                </div>
            </Container>

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
                            <p>
                                Deskripsi :{" "}
                                {/* {reservationCounter.service_duration} minutes */}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center w-full my-4 text-center">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={tileDisabled}
                            className={"rounded-lg border-none p-4"}
                            calendarClassName={"bg-red-500"}
                            tileClassName={({ date }) => {
                                const dateStr = date.toDateString('en-US');
                                return dates.includes(dateStr)
                                    ? "p-2 my-1 text-center border text-blue-500 rounded-full bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 focus:ring-blue-100"
                                    : "p-2 my-1 text-center border text-[#d10000] rounded-full bg-red-50 hover:bg-red-100 focus:bg-red-100 active:bg-red-100 focus:ring-red-100";
                            }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <AppReservasi children={page}></AppReservasi>;
