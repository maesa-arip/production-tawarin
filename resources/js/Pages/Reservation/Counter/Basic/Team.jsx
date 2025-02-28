import Input from "@/Components/Input";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButton from "@/Components/ThirdButton";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Team({ setIsOpenDialog, model, resultteam }) {
    const { auth, flash_simple } = usePage().props;
    const [state, setState] = useState({});
    const model2 = model.model;
    console.log(model2);
    // console.log(model.timeRange.timeRange);
    const { data, setData, get, post, processing, reset, errors } = useForm({});
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenRatingDialog, setIsOpenRatingDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const [isDescription, setIsDescription] = useState("");
    const [isIDTeam, setIsIDTeam] = useState("");
    const [employeeRating, setEmployeeRating] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [userID, setUserID] = useState(0);
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

    const openRatingDialog = (resultteam) => {
        setIsOpenRatingDialog(true);
        fetchReviews(resultteam, currentPage);
        setUserID(resultteam.teamdetail[0].user_id);
        // console.log(userID)
    };

    useEffect(() => {
        if (isOpenRatingDialog) {
            fetchReviews(userID, currentPage);
        }
    }, [userID, isOpenRatingDialog, currentPage]);

    const fetchReviews = (resultteam, page) => {
        axios
            .get(route("reservationrating.employeerating", userID), {
                params: { page },
            })
            .then((response) => {
                setEmployeeRating(response.data.data);
                setTotalPages(response.data.last_page);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const closeRatingDialog = () => {
        setIsOpenRatingDialog(false);
    };
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        fetchReviews(resultteam, newPage);
    };
    const pilihLayanan = () => {
        post(route("reservationCounters.storecustomer"), {
            onSuccess: () => {
                // reset();
                if (flash_simple.type_simple === "error_saldo_kurang") {
                    openInfoDialog2();
                    closeInfoDialog();
                }
            },
        });
    };
    // console.log(data)
    const closeInfoDialog = () => {
        setIsOpenInfoDialog(false);
    };
    const openInfoDialog2 = () => {
        setIsOpenInfoDialog2(true);
    };
    const closeInfoDialog2 = () => {
        setIsOpenInfoDialog2(false);
    };

    // useEffect(() => {
    //     if (flash_simple.type_simple === "error_saldo_kurang") {
    //         openInfoDialog2();
    //         closeInfoDialog();
    //     }
    // }, [flash_simple.type_simple]);

    const [rating, setRating] = useState(5);

    const parseDate = (dateString) => {
        if (typeof dateString !== "string") {
            // console.error("Invalid date string:", dateString);
            return null;
        }
        const parts = dateString.split("/");
        if (parts.length !== 3) {
            // console.error("Invalid date format:", dateString);
            return null;
        }
        const year = parts[2];
        const month = parts[1];
        const day = parts[0];
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };
    const dateMatches = (dateString1, dateString2) => {
        const formattedDate1 = parseDate(dateString1);
        const formattedDate2 = parseDate(dateString2);
        const match = formattedDate1 === formattedDate2;
        // console.log(`Date Match Check: ${formattedDate1} === ${formattedDate2} -> ${match}`);
        return match;
    };
    const userMatches = (user, userArray) => {
        const match = userArray.some((userObj) => userObj.user_id === user);
        // console.log(`User ${user} match: ${match}`);
        return match;
    };
    const userDateMatches = (userId, date) => {
        const match = model2.offDay.some(
            (offDay) =>
                offDay.user_id === userId && dateMatches(offDay.date, date)
        );
        // console.log(`User Date Match Check: userId=${userId}, date=${date} -> ${match}`);
        return match;
    };
    const isUserDateMatched = (userId, date) => {
        return userDateMatches(userId, date);
    };
    const timeRangeMatches = (timeRange1, timeRange2) => {
        const [start1, end1] = timeRange1
            .split(" - ")
            .map((t) => new Date(`2000-01-01T${t}`));
        const [start2, end2] = timeRange2
            .split(" - ")
            .map((t) => new Date(`2000-01-01T${t}`));
        const match = start1 < end2 && end1 > start2;
        // console.log(`Time Range Match Check: ${timeRange1} vs ${timeRange2} -> ${match}`);
        return match;
    };

    const userWorkBreakMatches = (userId, timeRange) => {
        const match = model2.workBreak.some(
            (workBreak) =>
                workBreak.user_id === userId &&
                timeRangeMatches(
                    workBreak.start + " - " + workBreak.end,
                    timeRange
                )
        );
        // console.log(`User Work Break Match Check: userId=${userId}, timeRange=${timeRange} -> ${match}`);
        return match;
    };
    const isUserWorkBreakMatched = (userId, timeRange) => {
        return userWorkBreakMatches(userId, timeRange);
    };
    const isDateMatched = model2.offDay.some((date) =>
        dateMatches(date.date, model2.date)
    );
    const isUserMatched = model2.offDay.some((data) =>
        dateMatches(data.user_id, model2.user_id)
    );

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const [isAgree, setIsAgree] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsAgree(event.target.checked);
    };
    useEffect(() => {
        if (model2.reservationCompany.reservation_category_id === 1) {
            setIsAgree(true);
        }
    }, []);

    // console.log(isAgree)
    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenRatingDialog}
                setIsOpenInfoDialog={setIsOpenRatingDialog}
                size="2xl"
                closeButton="false"
                title={"Review"}
            >
                {employeeRating.length > 0 ? (
                    <div>
                        {employeeRating.map((rating, index) => (
                            <div
                                key={index}
                                className="relative w-full mx-auto"
                            >
                                <div className="flex flex-col my-4 bg-white border rounded-lg">
                                    <div className="flex flex-col items-center justify-center flex-auto p-2">
                                        <div className="grid w-full grid-cols-12 gap-2">
                                            <div className="col-span-12 mx-2">
                                                <p className="flex items-start text-left">
                                                    {rating.comments}
                                                </p>
                                            </div>
                                            <div className="col-span-9 mx-2">
                                                <div className="flex items-start cursor-pointer">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (index) => (
                                                            <div
                                                                key={index}
                                                                className={`w-5 h-5 relative`}
                                                            >
                                                                {index <=
                                                                rating.star_rating ? (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                    </svg>
                                                                ) : index -
                                                                      0.95 <
                                                                  rating.star_rating ? (
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
                                                        )
                                                    )}
                                                </div>
                                                <span className="flex items-start text-xs font-medium text-left text-slate-400">
                                                    {rating.star_rating
                                                        ? Math.round(
                                                              rating.star_rating *
                                                                  100
                                                          ) / 100
                                                        : 0}{" "}
                                                    out of 5 stars
                                                    <br />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews available.</p>
                )}

                <div className="flex items-center mt-10 pagination gap-x-1">
                    <button>
                        Page {currentPage} of {totalPages}
                    </button>
                    <button
                        className="flex items-center justify-center w-12 bg-white border rounded-lg h-9"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {"<<"}
                    </button>

                    <button
                        className="flex items-center justify-center w-12 bg-white border rounded-lg h-9"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {">>"}
                    </button>
                </div>

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeRatingDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>

            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="2xl"
                closeButton="false"
                title={"Sudah Yakin dengan Pilihan Anda ?"}
            >
                {model2.reservationCompany.reservation_category_id === 2 && (
                    <>
                        <div className="p-4 mt-8 mb-4 border rounded-lg">
                            <blockquote className="relative">
                                <svg
                                    className="absolute text-gray-100 -top-6 -start-8 size-16 dark:text-neutral-700"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className="relative z-10">
                                    <p className="text-justify text-gray-800 sm:text-xl dark:text-white">
                                        <em>
                                            {model2.reservationCompany
                                                .pernyataan ? (
                                                model2.reservationCompany
                                                    .pernyataan
                                            ) : (
                                                <>
                                                    Dengan klik Simpan, saya
                                                    menyatakan setuju dengan
                                                    kebijakan yang berlaku dan
                                                    mengonfirmasi bahwa tidak
                                                    ada barang berharga atau
                                                    barang pribadi yang
                                                    tertinggal di dalam
                                                    kendaraan. Segala risiko
                                                    yang timbul akibat kelalaian
                                                    pengecekan menjadi tanggung
                                                    jawab saya sepenuhnya.
                                                </>
                                            )}
                                        </em>
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                        {/* Switch/Toggle */}
                        <div className="relative inline-block">
                            <input
                                type="checkbox"
                                id="hs-large-switch-soft-with-icons"
                                className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-red-200 border border-red-300 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-red-600 focus:checked:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-100 checked:border-blue-200 focus:checked:border-blue-200 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-800/30 dark:checked:border-blue-800 dark:focus:ring-offset-gray-600 before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-blue-600 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-500"
                                checked={isAgree}
                                onChange={handleCheckboxChange}
                            />
                            <label
                                htmlFor="hs-large-switch-soft-with-icons"
                                className="sr-only"
                            >
                                Checked
                            </label>

                            <span className="peer-checked:text-blue-600 text-gray-500  size-8 absolute top-1.5 start-1.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </span>
                            <span className="peer-checked:text-white size-8 absolute top-1.5 end-1.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                        </div>
                        <label
                            for="hs-basic-with-description-checked"
                            class="text-lh font-semibold text-gray-900 ms-3 dark:text-neutral-400"
                        >
                            Setuju
                        </label>
                        {/* End Switch/Toggle */}
                        <InputLabel className={"text-left mt-4"}>
                            Masukan Plat Kendaraan
                        </InputLabel>
                        <TextAreaInput
                            type="text"
                            name="plat"
                            value={data.plat}
                            className="block w-full mt-1"
                            autoComplete="plat"
                            isFocused={true}
                            handleChange={(e) =>
                                setData("plat", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.plat}
                            className="mt-2 mb-2 text-left"
                        />

                        {model2.question?.map((question, i) => (
                            <div key={question.id} className="py-3">
                                <label
                                    htmlFor={question.id}
                                    className="block text-sm font-medium text-left text-gray-700"
                                >
                                    {question.question}
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        key={question.id}
                                        id={question.id}
                                        name={question.id}
                                        rows={3}
                                        onChange={onChange}
                                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder=""
                                        required="true"
                                        defaultValue={""}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-left text-gray-500">
                                    Masukan Keterangan {question.question} .
                                </p>
                            </div>
                        ))}
                    </>
                )}

                <div className="p-4 mt-8 mb-4 border rounded-lg">
                    <p className="mb-2 text-lg font-medium text-justify">
                        {isDescription}
                    </p>
                </div>
                {isAgree === true ? (
                    <ThirdButtonNoLink
                        processing={processing}
                        onClick={pilihLayanan}
                    >
                        Simpan
                    </ThirdButtonNoLink>
                ) : (
                    <ThirdButtonNoLink
                        color="gray"
                        className="pointer-events-none"
                    >
                        Klik Setuju Dahulu
                    </ThirdButtonNoLink>
                )}

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialog}
                >
                    Close
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog2}
                setIsOpenInfoDialog={setIsOpenInfoDialog2}
                size="2xl"
                closeButton="false"
                title={"Saldo Tidak Mencukupi, Silakan Lakukan Top Up Saldo"}
            >
                {" "}
                <div className="p-4 mb-4 text-left border rounded-lg">
                    <p className="mb-2 text-lg font-medium text-left">
                        {/* {isDescription} */}
                    </p>
                </div>
                <ThirdButton
                    processing={processing}
                    href={"/deposit/create_auto"}
                >
                    Top Up
                </ThirdButton>
                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialog2}
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
            {model2.team.map((resultteam, index) => (
                <div key={index} className="relative w-full mx-auto">
                    <div className="flex flex-col my-4 bg-white border rounded-lg">
                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                            <div className="grid w-full grid-cols-12 gap-2">
                                <div className="col-span-12 mx-2">
                                    <p className="flex items-start">
                                        {resultteam.name}
                                    </p>
                                </div>
                                <div className="col-span-9 mx-2">
                                    <div
                                        className="flex items-start cursor-pointer"
                                        onClick={() =>
                                            openRatingDialog(resultteam)
                                        }
                                    >
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <div
                                                key={index}
                                                className={`w-5 h-5 relative`}
                                            >
                                                {index <=
                                                resultteam.ratings_avg_star_rating ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-auto text-yellow-500 fill-current"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                ) : index - 0.95 <
                                                  resultteam.ratings_avg_star_rating ? (
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
                                        {resultteam.ratings_avg_star_rating
                                            ? Math.round(
                                                  resultteam.ratings_avg_star_rating *
                                                      100
                                              ) / 100
                                            : 0}{" "}
                                        out of 5 stars
                                        <br />(
                                        {resultteam.ratings_count
                                            ? resultteam.ratings_count
                                            : 0}{" "}
                                        Reviews dari{" "}
                                        {resultteam.customers_count
                                            ? resultteam.customers_count
                                            : 0}{" "}
                                        Customer)
                                    </span>
                                </div>
                                <div className="col-span-3">
                                    <img
                                        className="flex-shrink-0 inline-block rounded-full"
                                        src={
                                            resultteam.media_id
                                                ? `/storage/${resultteam.media_id}/${resultteam.file_name}`
                                                : "/storage/files/default/NoImage.svg"
                                        }
                                        alt="Image Description"
                                    />
                                </div>
                                <div className="col-span-12">
                                    {isUserDateMatched(
                                        resultteam.user_id,
                                        model2.date
                                    ) ? (
                                        <div className="col-span-12">
                                            <ThirdButtonNoLink color="secondary">
                                                Libur
                                            </ThirdButtonNoLink>
                                        </div>
                                    ) : isUserWorkBreakMatched(
                                          resultteam.user_id,
                                          model.timeRange.timeRange
                                      ) ? (
                                        <div className="col-span-12">
                                            <ThirdButtonNoLink color="secondary">
                                                Istirahat
                                            </ThirdButtonNoLink>
                                        </div>
                                    ) : (
                                        <div className="col-span-12">
                                            <ThirdButtonNoLink
                                                onClick={() =>
                                                    openInfoDialog(resultteam)
                                                }
                                            >
                                                Pilih
                                            </ThirdButtonNoLink>
                                        </div>
                                    )}
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
