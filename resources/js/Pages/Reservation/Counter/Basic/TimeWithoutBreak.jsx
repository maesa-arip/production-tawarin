import BaseModal from "@/Components/Modal/BaseModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import React, { useState } from "react";
import Team from "./Team";

export default function Time({ setIsOpenDialog, model }) {
    const [isOpenTeamDialog, setIsOpenTeamDialog] = useState(false);
    const [state, setState] = useState([]);

    const handleOnClick = (timeRange) => {
        openTeamDialog(timeRange);
    };

    const openTeamDialog = (timeRange) => {
        setState({ model, timeRange });
        setIsOpenTeamDialog(true);
    };

    return (
        <>
            <BaseModal
                isOpenInfoDialog={isOpenTeamDialog}
                setIsOpenInfoDialog={setIsOpenTeamDialog}
                size="max-w-2xl"
                title={"Pilih Team"}
            >
                <Team
                    model={state}
                    setIsOpenDialog={setIsOpenTeamDialog}
                    isOpenDialog={isOpenTeamDialog}
                ></Team>
            </BaseModal>
            <div className="p-4 mb-4 text-left border rounded-lg">
                <h2>Counter: {model.reservationCounter.name}</h2>
                <p>Tanggal: {model.date}</p>
                <p>Open at: {model.reservationCompany.open_at}</p>
                <p>Close at: {model.reservationCompany.close_at}</p>
                <p>Service duration: {model.reservationCounter.service_duration} minutes</p>
            </div>
            <p>Jam Tersedia:</p>
            {calculateAvailableTimes(
                model.reservationCompany.open_at,
                model.reservationCompany.close_at,
                model.reservationCounter.service_duration,
                "12:00:00",
                "13:50:00"
            ).map((timeRange, index) => (
                <div key={index} className="relative w-full mx-auto">
                    <div className="flex flex-col my-4 bg-white border rounded-lg">
                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                            <div className="grid w-full grid-cols-12 gap-4">
                                <div className="col-span-8 lg:col-span-10">
                                    <p>{timeRange}</p>
                                </div>
                                <div className="col-span-4 lg:col-span-2">
                                    <ThirdButtonNoLink
                                        disabled={isDisabled(timeRange, model.reservationCompany.break_work_start, model.reservationCompany.break_work_end)}
                                        onClick={() => handleOnClick(timeRange)}
                                    >
                                        Pilih
                                    </ThirdButtonNoLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <hr />
        </>
    );
}

function calculateAvailableTimes(openAt, closeAt, serviceDuration, breakWorkStart, breakWorkEnd) {
    const availableTimes = [];
    const currentDate = new Date(); // Use today's date as the base date

    // Parse openAt and closeAt as Date objects with the current date
    const openTime = new Date(currentDate.toDateString() + " " + openAt);
    const closeTime = new Date(currentDate.toDateString() + " " + closeAt);

    let currentTime = new Date(openTime);

    while (currentTime <= closeTime) {
        // Skip break work period
        if (
            currentTime >= new Date(currentDate.toDateString() + " " + breakWorkStart) &&
            currentTime <= new Date(currentDate.toDateString() + " " + breakWorkEnd)
        ) {
            currentTime.setMinutes(currentTime.getMinutes() + serviceDuration);
            continue;
        }

        const endTime = new Date(currentTime);
        endTime.setMinutes(endTime.getMinutes() + serviceDuration);

        // Check if endTime exceeds closeTime
        if (endTime > closeTime) {
            break; // Exit the loop if endTime exceeds closeTime
        }

        // Format time in 24-hour format
        const startTime = currentTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        });
        const endTimeFormatted = endTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        });

        availableTimes.push(`${startTime} - ${endTimeFormatted}`);

        // Move currentTime to the next available slot
        currentTime = endTime;
    }

    return availableTimes;
}

function isDisabled(timeRange, breakWorkStart, breakWorkEnd) {
    const [startTime, endTime] = timeRange.split(" - ");
    const currentTime = new Date();
    const start = new Date(currentTime.toDateString() + " " + startTime);
    const end = new Date(currentTime.toDateString() + " " + endTime);
    const breakStart = new Date(currentTime.toDateString() + " " + breakWorkStart);
    const breakEnd = new Date(currentTime.toDateString() + " " + breakWorkEnd);

    return start >= breakStart && end <= breakEnd;
}



