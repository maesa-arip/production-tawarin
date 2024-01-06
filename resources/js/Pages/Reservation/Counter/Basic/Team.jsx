import Input from "@/Components/Input";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function Team({ setIsOpenDialog, model }) {
    const { auth } = usePage().props;
    const [state, setState] = useState({});
    const model2 = model.model;
    // console.log(model)
    const { data, setData, post, processing, reset, errors } = useForm({});
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isDescription, setIsDescription] = useState("");
    const [isIDTeam, setIsIDTeam] = useState("");
    const openInfoDialog = (team) => {
        setState(team);
        setIsIDTeam(team.id);
        setIsDescription("Jadwal Anda Pada Tanggal : " + model2.date + " Untuk Layanan " + model2.reservationCounter.name + " Jam " + model.timeRange.timeRange + " Dengan Tim " + team.id )   
        setData({
            reservation_team_id: team.id,
            ["user_id"]: auth.user.id,
            ["date"]: model2.date,
            ["time"]: model.timeRange.timeRange,
        }); 
        setIsOpenInfoDialog(true);
    };
    const pilihLayanan = () => {
        post(route("reservationCounters.storecustomer"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    console.log(data)
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                title={"Yakin ?"}

            > {isDescription}
                <ThirdButtonNoLink onClick={pilihLayanan}>
                    Simpan
                </ThirdButtonNoLink>
            </InfoModal>
            <div className="p-4 mb-4 text-left border rounded-lg">
                <h2>Team: {model2.reservationCounter.name}</h2>
                <p>Tanggal: {model2.date}</p>
                <p>Waktu: {model.timeRange.timeRange}</p>
                <p>
                    Service duration:{" "}
                    {model2.reservationCounter.service_duration} minutes
                </p>
            </div>
            <p>Team Tersedia:</p>
            {model2.team.map((team, index) => (
                <div key={index} className="relative w-full mx-auto">
                    <div className="flex flex-col my-4 bg-white border shadow-lg rounded-xl">
                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                            <div className="grid w-full grid-cols-12 gap-4">
                                <div className="col-span-8 lg:col-span-10">
                                    <p>{team.name}</p>
                                </div>
                                <div className="col-span-4 lg:col-span-2">
                                    <ThirdButtonNoLink
                                        onClick={() => openInfoDialog(team)}
                                        // onClick={() => handleOnClick(team)}
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