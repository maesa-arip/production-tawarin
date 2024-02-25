import Input from "@/Components/Input";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function Team({ setIsOpenDialog, model }) {
    const { auth } = usePage().props;
    const [state, setState] = useState({});
    const model2 = model.model;
    console.log(model2)
    const { data, setData, post, processing, reset, errors } = useForm({});
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isDescription, setIsDescription] = useState("");
    const [isIDTeam, setIsIDTeam] = useState("");
    const openInfoDialog = (team) => {
        setState(team);
        setIsIDTeam(team.id);
        setIsDescription(
            "Jadwal Reservasi Anda Pada : " +
                model2.date +
                " Untuk Layanan " +
                model2.reservationCounter.name +
                " Jam " +
                model.timeRange.timeRange +
                " Dengan Pekerja " +
                team.name
        );
        setData({
            reservation_team_id: team.id,
            ["user_id"]: auth.user.id,
            ["date"]: model2.date,
            ["time"]: model.timeRange.timeRange,
        });
        setIsOpenInfoDialog(true);
        // console.log(team)
    };
    const pilihLayanan = () => {
        post(route("reservationCounters.storecustomer"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    // console.log(data)
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
    };
    const [rating, setRating] = useState(5);
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Sudah Yakin dengan Pilihan Anda ?"}
            >
                {" "}
                <div className="p-4 mb-4 text-left border rounded-lg">
                    <p className="mb-2 text-lg font-medium text-left">
                        {isDescription}
                    </p>
                </div>
                <ThirdButtonNoLink onClick={pilihLayanan}>
                    Simpan
                </ThirdButtonNoLink>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialog}
                >
                    Close
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
                    <div className="flex flex-col my-4 bg-white border rounded-lg">
                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                            <div className="grid w-full grid-cols-12 gap-2">
                                <div className="col-span-12 mx-2">
                                    <p className="flex items-start">
                                        {team.name}
                                    </p>
                                </div>
                                <div className="col-span-9 mx-2">
                                    <div className="flex items-start">
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <div
                                                key={index}
                                                className={`w-5 h-5 relative`}
                                            >
                                                {index <=
                                                team.ratings_avg_star_rating ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                ) : index - 0.95 <
                                                  team.ratings_avg_star_rating ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="flex items-start text-xs font-medium text-left text-slate-400">
                                        {team.ratings_avg_star_rating
                                            ? Math.round(
                                                  team.ratings_avg_star_rating *
                                                      10
                                              ) / 10
                                            : 0}{" "}
                                        out of 5 stars 
                                        <br />
                                        (
                                        {team.ratings_count
                                            ? team.ratings_count
                                            : 0}{" "}
                                        Reviews dari{" "}
                                        {team.customers_count
                                            ? team.customers_count
                                            : 0}{" "}
                                        Customer)
                                    </span>

                                    {/* <span class="flex text-slate-400 font-medium text-xs">
                            ({team.ratings_count ? team.ratings_count : 0} reviews)
                        </span> */}
                                </div>
                                <div className="col-span-3">
                                    <img
                                        className="flex-shrink-0 inline-block rounded-full"
                                        src={`/storage/${team.media_id}/${team.file_name}`}
                                        // src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                        alt="Image Description"
                                    />
                                </div>
                                <div className="col-span-12">
                                    <ThirdButtonNoLink
                                        onClick={() => openInfoDialog(team)}
                                        // onClick={() => handleOnClick(team)}
                                    >
                                        Pilih
                                    </ThirdButtonNoLink>
                                </div>

                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <hr />
        </>
    );
}
