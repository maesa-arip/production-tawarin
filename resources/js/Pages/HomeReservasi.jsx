import React, { useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link } from "@inertiajs/inertia-react";


import HeroHome from "../LandingPageFunding/HeroHome";
import Features from "../LandingPageFunding/Features";
import DefaultUserImage from "../../img/LandingPageFunding/defaultuser.jpg";






import Footer from "@/LandingPageFunding/Footer";
import TrueFalseImage from "../../img/LandingPageFunding/true-false.png";
import GirlWithBooksImage from "../../img/LandingPageFunding/girl-with-books.png";
import TeacherExplainingImage from "../../img/LandingPageFunding/teacher-explaining.png";
import VCallImage from "../../img/LandingPageFunding/vcall.png";
import GradeBookImage from "../../img/LandingPageFunding/gradebook.png";
import DiscussionImage from "../../img/LandingPageFunding/discussion.png";
import TestimonialImage from "../../img/LandingPageFunding/testimonials.png";

import InfoModal from "@/Components/Modal/InfoModal";
import Header from "@/Components/Header";

export default function HomeReservasi(props) {
    const { data: plans } = props.plans;

    const openInfoDialog = () => {
        setState();
        setIsOpenInfoDialog(true);
    };
    // useEffect(() => {
    //     openInfoDialog()
    // }, [])
    
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [state, setState] = useState([]);

    return (
        <>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="max-w-6xl"
                title={"Info"}
                header={""}
            > 
            <p className="text-justify">Selamat datang di tawarin.id, rekan konstruksi yang kreatif yang siap membantu perkembangan ekosistem konstruksi, meningkatkan produktivitas dan efisiensi, juga mewujudkan ide-ide Anda. Coba Tawarin sekarang Karena masih dalam tahap eksperimen awal, saat ini kami ada pada tahap pengumpulan user dimana pada tahap ini kami butuh bantuan rekan konstruksi untuk dapat ikut share dan mengenalkan tawarin.Id ke rekan konstruksi lainnya. Kami mengakui Tawarin.id masih banyak kekurangan dan mungkin tidak selalu benar, tetapi dengan bantuan dan masukan Anda, Tawarin.id akan menjadi lebih baik. Untuk informasi, masukan dan saran rekan konstruksi dapat menghubungi kami di Wa : 081818277844 Fb : tawarin.id Atau chat personal di menu chat pada web tawarin, dengan id : tawarin Terima kasih telah bergabung dalam eksperimen awal penggunaan tawarin.id. SEMUA PASTI BERES</p>
            </InfoModal>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Membuat perencanaan, proyek dan belanja dengan mudah."
                />
            </Head>
            <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            {/* <Head title="Home" /> */}
            {/* <Header /> */}

            {/*  Page content */}
            <main className="flex-grow">
                {/*  Page sections */}
                <HeroHome />
                <Features />
            </main>
            {/* <div className="max-w-6xl px-4 mx-auto overflow-x-hidden text-gray-700 lg:px-8">
                <div
                    data-aos="flip-up"
                    className="max-w-xl mx-auto mt-24 text-center"
                >
                    <h1 className="my-3 text-2xl font-bold text-darken">
                        All-In-One{" "}
                        <span className="text-yellow-500">Place.</span>
                    </h1>
                    <p className="leading-relaxed text-gray-500">
                        We combine all needed, like clinic, garden, recreation place.
                    </p>
                </div>
                <div className="grid mt-20 md:grid-cols-3 gap-14 md:gap-5">
                    <div
                        data-aos="fade-up"
                        className="p-6 text-center bg-white shadow-xl rounded-xl"
                    >
                        <div
                            style={{ background: "#5B72EE" }}
                            className="flex items-center justify-center w-16 h-16 mx-auto transform -translate-y-12 rounded-full shadow-lg"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                viewBox="0 0 33 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h1 className="mb-3 text-xl font-medium lg:px-14 text-darken">
                            Just Pay Once & Relax
                        </h1>
                        <p className="px-4 text-gray-500">
                            Just pay once, and you can use all our facilities free
                            and legal transactions. Send customized
                            invoices and contracts
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay={150}
                        className="p-6 text-center bg-white shadow-xl rounded-xl"
                    >
                        <div
                            style={{ background: "#F48C06" }}
                            className="flex items-center justify-center w-16 h-16 mx-auto transform -translate-y-12 rounded-full shadow-lg"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
                                    fill="#F5F5FC"
                                />
                                <path
                                    d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
                                    fill="#F5F5FC"
                                />
                            </svg>
                        </div>
                        <h1 className="mb-3 text-xl font-medium lg:px-14 text-darken">
                            Easy Scheduling &amp; Attendance Tracking
                        </h1>
                        <p className="px-4 text-gray-500">
                            Schedule and reserve room at one building or
                            multiple buildings.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay={300}
                        className="p-6 text-center bg-white shadow-xl rounded-xl"
                    >
                        <div
                            style={{ background: "#29B9E7" }}
                            className="flex items-center justify-center w-16 h-16 mx-auto transform -translate-y-12 rounded-full shadow-lg"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                viewBox="0 0 55 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h1 className="pt-3 mb-3 text-xl font-medium lg:px-14 text-darken lg:h-14">
                            Customer Tracking
                        </h1>
                        <p className="px-4 text-gray-500">
                            Automate and track emails to individuals or groups.
                            Skilline’s built-in system helps organize your
                            organization{" "}
                        </p>
                    </div>
                </div>

                <div className="items-center sm:flex sm:space-x-8 mt-36">
                    <div data-aos="fade-right" className="relative sm:w-1/2">
                        <div className="absolute z-0 w-12 h-12 bg-yellow-500 rounded-full -left-4 -top-3 animate-pulse" />
                        <h1 className="relative z-0 text-2xl font-semibold text-darken lg:pr-10">
                            Everything you can do in a physical classroom,{" "}
                            <span className="text-yellow-500">
                                you can do with Skilline
                            </span>
                        </h1>
                        <p className="py-5 lg:pr-32">
                            Skilline’s school management software helps
                            traditional and online schools manage scheduling,
                            attendance, payments and virtual classrooms all in
                            one secure cloud-based system.
                        </p>
                        <a className="underline">Learn More</a>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="relative mt-10 sm:w-1/2 sm:mt-0"
                    >
                        <div
                            style={{ background: "#23BDEE" }}
                            className="absolute z-0 w-24 h-24 rounded-lg floating -top-3 -left-3"
                        />
                        <img
                            className="relative z-0 rounded-xl"
                            src={TeacherExplainingImage}
                            alt=""
                        />
                        <button className="absolute z-10 flex items-center justify-center transition duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-14 h-14 top-1/2 left-1/2 focus:outline-none hover:scale-110">
                            <svg
                                className="w-5 h-5 ml-1"
                                viewBox="0 0 24 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                                    fill="#23BDEE"
                                />
                            </svg>
                        </button>
                        <div className="absolute z-10 w-40 h-40 bg-yellow-500 rounded-lg floating -bottom-3 -right-3" />
                    </div>
                </div>
                <div className="items-start mt-40 md:flex md:space-x-10">
                    <div data-aos="fade-down" className="relative md:w-7/12">
                        <div
                            style={{ background: "#33EFA0" }}
                            className="absolute z-0 w-32 h-32 rounded-full left-4 -top-12 animate-pulse"
                        />
                        <div
                            style={{ background: "#33D9EF" }}
                            className="absolute z-0 w-5 h-5 rounded-full left-36 -top-12 animate-ping"
                        />
                        <img
                            className="relative z-0 floating motion-safe:animate-pulse"
                            src={VCallImage}
                            alt=""
                        />
                        <div
                            style={{ background: "#5B61EB" }}
                            className="absolute z-0 rounded-full w-36 h-36 right-16 -bottom-1 animate-pulse"
                        />
                        <div
                            style={{ background: "#F56666" }}
                            className="absolute z-0 w-5 h-5 rounded-full right-52 bottom-1 animate-ping"
                        />
                    </div>
                    <div
                        data-aos="fade-down"
                        className="mt-20 text-gray-500 md:w-5/12 md:mt-0"
                    >
                        <h1 className="text-2xl font-semibold text-darken lg:pr-40">
                            A{" "}
                            <span className="text-yellow-500">
                                user interface
                            </span>{" "}
                            designed for the classroom
                        </h1>
                        <div className="flex items-center my-5 space-x-5">
                            <div className="flex items-center justify-center flex-shrink p-3 bg-white rounded-full shadow-lg">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="11.8182"
                                        height="11.8182"
                                        rx={2}
                                        fill="#2F327D"
                                    />
                                    <rect
                                        y="14.1816"
                                        width="11.8182"
                                        height="11.8182"
                                        rx={2}
                                        fill="#2F327D"
                                    />
                                    <rect
                                        x="14.7727"
                                        width="11.8182"
                                        height="11.8182"
                                        rx={2}
                                        fill="#2F327D"
                                    />
                                    <rect
                                        x="14.7727"
                                        y="14.1816"
                                        width="11.8182"
                                        height="11.8182"
                                        rx={2}
                                        fill="#F48C06"
                                    />
                                </svg>
                            </div>
                            <p>
                                Teachers don’t get lost in the grid view and
                                have a dedicated Podium space.
                            </p>
                        </div>
                        <div className="flex items-center my-5 space-x-5">
                            <div className="flex items-center justify-center flex-shrink p-3 bg-white rounded-full shadow-lg">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 28 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x={8}
                                        y={6}
                                        width={20}
                                        height={20}
                                        rx={2}
                                        fill="#2F327D"
                                    />
                                    <rect
                                        width="21.2245"
                                        height="21.2245"
                                        rx={2}
                                        fill="#F48C06"
                                    />
                                </svg>
                            </div>
                            <p>
                                TA’s and presenters can be moved to the front of
                                the class.
                            </p>
                        </div>
                        <div className="flex items-center my-5 space-x-5">
                            <div className="flex items-center justify-center flex-shrink p-3 bg-white rounded-full shadow-lg">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 30 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
                                        fill="#2F327D"
                                    />
                                </svg>
                            </div>
                            <p>
                                Teachers can easily see all students and class
                                data at one time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-16 md:flex-row md:space-x-10">
                    <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
                        <h1 className="text-3xl font-semibold text-darken lg:pr-56">
                            <span className="text-yellow-500">Tools</span> For
                            Teachers And Learners
                        </h1>
                        <p className="my-4 text-gray-500 lg:pr-32">
                            Class has a dynamic set of teaching tools built to
                            be deployed and used during class. Teachers can
                            handout assignments in real-time for students to
                            complete and submit.
                        </p>
                    </div>
                    <img
                        data-aos="fade-left"
                        className="md:w-1/2"
                        src={GirlWithBooksImage}
                    />
                </div>
                <div className="flex flex-col-reverse items-center mt-20 md:flex-row md:space-x-10">
                    <div data-aos="fade-right" className="md:w-6/12">
                        <img className="md:w-11/12" src={TrueFalseImage} />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="md:w-6/12 md:transform md:-translate-y-20"
                    >
                        <h1 className="text-3xl font-semibold text-darken lg:pr-64">
                            Assessments,{" "}
                            <span className="text-yellow-500">Quizzes</span>,
                            Tests
                        </h1>
                        <p className="my-5 text-gray-500 lg:pr-52">
                            Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the
                            online gradebook.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-12 md:flex-row">
                    <div data-aos="fade-right" className="md:w-5/12">
                        <h1 className="text-3xl font-semibold leading-tight text-darken lg:pr-32">
                            <span className="text-yellow-500">
                                Class Management
                            </span>{" "}
                            Tools for Educators
                        </h1>
                        <p className="my-5 lg:pr-14">
                            Class provides tools to help run and manage the
                            class such as Class Roster, Attendance, and more.
                            With the Gradebook, teachers can review and grade
                            tests and quizzes in real-time.
                        </p>
                    </div>
                    <img
                        data-aos="fade-left"
                        className="md:w-7/12"
                        src={GradeBookImage}
                    />
                </div>
                <div className="flex flex-col-reverse items-center mt-24 md:flex-row md:space-x-10">
                    <div data-aos="fade-right" className="md:w-7/12">
                        <img className="md:w-11/12" src={DiscussionImage} />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="md:w-5/12 md:transform md:-translate-y-6"
                    >
                        <h1 className="text-3xl font-semibold text-darken lg:pr-64">
                            One-on-One{" "}
                            <span className="text-yellow-500">Discussions</span>
                        </h1>
                        <p className="my-5 text-gray-500 lg:pr-24">
                            Teachers and teacher assistants can talk with
                            students privately without leaving the Zoom
                            environment.
                        </p>
                    </div>
                </div>
                <button
                    data-aos="flip-up"
                    className="block px-5 py-3 mx-auto font-medium text-yellow-500 transition duration-300 ease-in-out transform border border-yellow-500 rounded-full my-14 focus:outline-none hover:scale-110"
                >
                    See more features
                </button>

                <div className="flex flex-col-reverse items-start mt-24 md:flex-row md:space-x-10">
                    <div data-aos="zoom-in-right" className="md:w-5/12">
                        <div className="flex items-center mb-5 space-x-20">
                            <span className="absolute border border-gray-300 w-14" />
                            <h1 className="text-sm tracking-widest text-gray-400">
                                TESTIMONIAL
                            </h1>
                        </div>
                        <h1 className="text-2xl font-semibold text-darken lg:pr-40">
                            What They Say?
                        </h1>
                        <p className="my-5 text-gray-500 lg:pr-36">
                            Skilline has got more than 100k positive ratings
                            from our users around the world.
                        </p>
                        <p className="my-5 text-gray-500 lg:pr-36">
                            Some of the students and teachers were greatly
                            helped by the Skilline.
                        </p>
                        <p className="my-5 text-gray-500 lg:pr-36">
                            Are you too? Please give your assessment
                        </p>
                        <button className="flex items-center pl-3 my-4 space-x-3 font-medium text-yellow-500 transition duration-300 ease-in-out transform border-t border-b border-l border-yellow-500 rounded-full focus:outline-none hover:scale-110">
                            <span>Write your assessment</span>
                            <div className="flex items-center justify-center border border-yellow-500 rounded-full h-14 w-14">
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 26 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                                        fill="#F48C06"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div data-aos="zoom-in-left" className="md:w-7/12">
                        <img
                            className="mx-auto md:w-10/12"
                            src={TestimonialImage}
                        />
                    </div>
                </div>
            </div> */}
            <section
                    id="testimonials"
                    aria-label="What our customers are saying"
                    className="relative"
                >
                    <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
                        <svg
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full"
                        >
                            <defs>
                                <pattern
                                    id=":Rem:"
                                    width="64"
                                    height="64"
                                    patternUnits="userSpaceOnUse"
                                    x="50%"
                                    y="100%"
                                >
                                    <path
                                        d="M0 128V.5H128"
                                        fill="none"
                                        stroke="currentColor"
                                    ></path>
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#:Rem:)"
                            ></rect>
                        </svg>
                    </div>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mx-auto md:text-center">
                            <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
                                Testimonials
                            </h2>
                            <p className="mt-4 text-lg tracking-tight text-slate-700">
                                Mari dengarkan pendapat mereka yang sudah
                                bergabung dengan ekosistem kami.
                            </p>
                        </div>
                        <ul
                            role="list"
                            className="grid grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                        >
                            <li>
                                <ul
                                    role="list"
                                    className="flex flex-col gap-y-6 sm:gap-y-8"
                                >
                                    <li>
                                        <figure className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-slate-900/10">
                                            <svg
                                                aria-hidden="true"
                                                width={105}
                                                height={78}
                                                className="absolute top-6 left-6 fill-slate-100"
                                            >
                                                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                            </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    Aplikasi sangat membantu,
                                                    membuat transaksi sangat
                                                    aman dengan konsultan
                                                    terpercaya
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                                                <div>
                                                    <div className="text-base font-display text-slate-900">
                                                        Maesa Ari Palguna
                                                    </div>
                                                    <div className="mt-1 text-sm text-slate-500">
                                                        Owner
                                                    </div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img
                                                        alt=""
                                                        srcSet={
                                                            DefaultUserImage
                                                        }
                                                        src={DefaultUserImage}
                                                        width={56}
                                                        height={56}
                                                        decoding="async"
                                                        data-nimg="future"
                                                        className="object-cover h-14 w-14"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                        }}
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul
                                    role="list"
                                    className="flex flex-col gap-y-6 sm:gap-y-8"
                                >
                                    <li>
                                        <figure className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-slate-900/10">
                                            <svg
                                                aria-hidden="true"
                                                width={105}
                                                height={78}
                                                className="absolute top-6 left-6 fill-slate-100"
                                            >
                                                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                            </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    Aplikasi ini sangat bagus,
                                                    dengan sistem saldo yang
                                                    jelas, tidak perlu takut
                                                    dalam melakukan transaksi
                                                    disini.
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                                                <div>
                                                    <div className="text-base font-display text-slate-900">
                                                        I Nyoman Wisnu Bawa
                                                    </div>
                                                    <div className="mt-1 text-sm text-slate-500">
                                                        Konsultan
                                                    </div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img
                                                        alt=""
                                                        srcSet={
                                                            DefaultUserImage
                                                        }
                                                        src={DefaultUserImage}
                                                        width={56}
                                                        height={56}
                                                        decoding="async"
                                                        data-nimg="future"
                                                        className="object-cover h-14 w-14"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                        }}
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul
                                    role="list"
                                    className="flex flex-col gap-y-6 sm:gap-y-8"
                                >
                                    <li>
                                        <figure className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-slate-900/10">
                                            <svg
                                                aria-hidden="true"
                                                width={105}
                                                height={78}
                                                className="absolute top-6 left-6 fill-slate-100"
                                            >
                                                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                            </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    Sangat mudah dalam
                                                    mengoperasikan aplikasi,
                                                    fitur lengkap dan mudah
                                                    dalam mencari apapun.
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                                                <div>
                                                    <div className="text-base font-display text-slate-900">
                                                        Agus Suryawan
                                                    </div>
                                                    <div className="mt-1 text-sm text-slate-500">
                                                        Owner
                                                    </div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img
                                                        alt=""
                                                        srcSet={
                                                            DefaultUserImage
                                                        }
                                                        src={DefaultUserImage}
                                                        width={56}
                                                        height={56}
                                                        decoding="async"
                                                        data-nimg="future"
                                                        className="object-cover h-14 w-14"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                        }}
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

            {/*  Site footer */}
            <Footer />
            
          {/* <Parsinta/> */}
        </div>
        </>
    );
}

HomeReservasi.layout = (page) => <AppReservasi children={page}></AppReservasi>;
