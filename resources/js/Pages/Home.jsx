import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import RadioCard from "@/Components/RadioCard";
import Hero from "@/Components/Hero";
import HideScrollBar from "@/Components/HideScrollBar";
import Feature from "@/Components/Feature";
import CTA from "@/Components/CTA";
import Feature2 from "@/Components/Feature2";
import SocialShare from "@/Components/SocialShare";
import Marquee from "@/Components/Marquee";
import Footer from "@/LandingPageFunding/Footer";
import TrueFalseImage from "../../img/LandingPageFunding/true-false.png";
import GirlWithBooksImage from "../../img/LandingPageFunding/girl-with-books.png";
import TeacherExplainingImage from "../../img/LandingPageFunding/teacher-explaining.png";
import VCallImage from "../../img/LandingPageFunding/vcall.png";
import GradeBookImage from "../../img/LandingPageFunding/gradebook.png";
import DiscussionImage from "../../img/LandingPageFunding/discussion.png";
import TestimonialImage from "../../img/LandingPageFunding/testimonials.png";
import DefaultUserImage from "../../img/LandingPageFunding/defaultuser.jpg";
import Typewriter from "typewriter-effect";
import Logo from "../../img/Tawarin.png";
import {
    IconBuildingSkyscraper,
    IconBuildingStore,
    IconCash,
    IconHomeEdit,
    IconTools,
    IconUserSearch,
} from "@tabler/icons";
import EmptyCard from "@/Components/EmptyCard";
import InfoModal from "@/Components/Modal/InfoModal";

export default function Home(props) {
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
            {/* <Head title="Home" /> */}
            <Container>
                {/* <div className="py-20 overflow-hidden sm:py-32 lg:pb-32 xl:pb-36"> */}
                <div className="py-12 overflow-hidden lg:pb-32 xl:pb-36">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                            <div className="relative z-10 mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                                <h1 className="text-2xl font-medium tracking-tight text-gray-900 md:text-4xl">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Mari bergabung bersama",
                                                "Ekosistem Konstruksi Digital",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />

                                    <span className="block pb-2 -mt-2 text-2xl tracking-tight text-transparent md:text-4xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text lg:mt-4">
                                        <span>Super Ekosistem Tawarin.</span>
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg text-gray-600">
                                    Mari berkembang bersama kami melalui
                                    ekosistem Tawarin yang luas, amankan
                                    projekmu, amankan uangmu melalui aplikasi
                                    kami.
                                </p>
                                <div className="flex flex-wrap mt-8 gap-x-6 gap-y-4">
                                    <a
                                        aria-label="Download on the Play Store"
                                        className="text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
                                        href="https://play.google.com/store/apps/details?id=com.tawarin.net"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10"
                                            viewBox="0 0 135 40"
                                            aria-hidden="true"
                                        >
                                            <path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"></path>
                                            <path
                                                fill="#a6a6a6"
                                                d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                stroke="#fff"
                                                strokeMiterlimit="10"
                                                strokeWidth="0.2"
                                                d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64V13zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z"
                                            ></path>
                                            <linearGradient
                                                id="a"
                                                x1="21.8"
                                                x2="5.017"
                                                y1="33.29"
                                                y2="16.508"
                                                gradientTransform="matrix(1 0 0 -1 0 42)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#00a0ff"
                                                ></stop>
                                                <stop
                                                    offset="0.007"
                                                    stopColor="#00a1ff"
                                                ></stop>
                                                <stop
                                                    offset="0.26"
                                                    stopColor="#00beff"
                                                ></stop>
                                                <stop
                                                    offset="0.512"
                                                    stopColor="#00d2ff"
                                                ></stop>
                                                <stop
                                                    offset="0.76"
                                                    stopColor="#00dfff"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#00e3ff"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#a)"
                                                d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z"
                                            ></path>
                                            <linearGradient
                                                id="b"
                                                x1="33.834"
                                                x2="9.637"
                                                y1="21.999"
                                                y2="21.999"
                                                gradientTransform="matrix(1 0 0 -1 0 42)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#ffe000"
                                                ></stop>
                                                <stop
                                                    offset="0.409"
                                                    stopColor="#ffbd00"
                                                ></stop>
                                                <stop
                                                    offset="0.775"
                                                    stopColor="orange"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#ff9c00"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#b)"
                                                d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"
                                            ></path>
                                            <linearGradient
                                                id="c"
                                                x1="24.827"
                                                x2="2.069"
                                                y1="19.704"
                                                y2="-3.054"
                                                gradientTransform="matrix(1 0 0 -1 0 42)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#ff3a44"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#c31162"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#c)"
                                                d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4"
                                            ></path>
                                            <linearGradient
                                                id="d"
                                                x1="7.297"
                                                x2="17.46"
                                                y1="41.824"
                                                y2="31.661"
                                                gradientTransform="matrix(1 0 0 -1 0 42)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#32a071"
                                                ></stop>
                                                <stop
                                                    offset="0.069"
                                                    stopColor="#2da771"
                                                ></stop>
                                                <stop
                                                    offset="0.476"
                                                    stopColor="#15cf74"
                                                ></stop>
                                                <stop
                                                    offset="0.801"
                                                    stopColor="#06e775"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#00f076"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#d)"
                                                d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z"
                                            ></path>
                                            <path
                                                d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z"
                                                opacity="0.2"
                                            ></path>
                                            <path
                                                d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z"
                                                opacity="0.12"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z"
                                                opacity="0.25"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                                        target="_blank"
                                        href="https://www.youtube.com/watch?v=mustJBJfYDw"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                            className="flex-none w-6 h-6"
                                        >
                                            <circle
                                                cx={12}
                                                cy={12}
                                                r="11.5"
                                                stroke="#D4D4D4"
                                            />
                                            <path
                                                d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                                                fill="#A3A3A3"
                                                stroke="#A3A3A3"
                                            />
                                        </svg>
                                        <span className="ml-2.5">
                                            Watch the video
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                                <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                                    <svg
                                        viewBox="0 0 1026 1026"
                                        fill="none"
                                        aria-hidden="true"
                                        className="absolute inset-0 w-full h-full animate-spin-slow"
                                    >
                                        <path
                                            d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                            stroke="#D4D4D4"
                                            strokeOpacity="0.7"
                                        />
                                        <path
                                            d="M513 1025C230.23 1025 1 795.77 1 513"
                                            stroke="url(#:R65m:-gradient-1)"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient
                                                id=":R65m:-gradient-1"
                                                x1={1}
                                                y1={513}
                                                x2={1}
                                                y2={1025}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#06b6d4" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#06b6d4"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg
                                        viewBox="0 0 1026 1026"
                                        fill="none"
                                        aria-hidden="true"
                                        className="absolute inset-0 w-full h-full animate-spin-reverse-slower"
                                    >
                                        <path
                                            d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                                            stroke="#D4D4D4"
                                            strokeOpacity="0.7"
                                        />
                                        <path
                                            d="M913 513c0 220.914-179.086 400-400 400"
                                            stroke="url(#:R65m:-gradient-2)"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient
                                                id=":R65m:-gradient-2"
                                                x1={913}
                                                y1={513}
                                                x2={913}
                                                y2={913}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#06b6d4" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#06b6d4"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="h-auto px-4 -mx-4 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                                    <div className="w-full h-auto col-span-2 mx-auto md::w-[700px] lg:w-[400px] lg overflow-hidden shadow rounded-xl">
                                        <video
                                        className="w-full"
                                            autoPlay
                                            muted
                                            loop
                                            src={`storage/files/default/Intro_Tawarin.mp4`}
                                        ></video>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                                <p className="text-sm font-semibold text-center text-gray-900 lg:text-left">
                                    As featured in
                                </p>
                                <ul
                                    role="list"
                                    className="flex flex-wrap justify-center max-w-xl mx-auto mt-8 gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
                                >
                                    <li className="flex">
                                        <img
                                            alt="Forbes"
                                            src="/_next/static/media/forbes.c4b4b0dd.svg"
                                            width={82}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex">
                                        <img
                                            alt="TechCrunch"
                                            src="/_next/static/media/techcrunch.fe121d74.svg"
                                            width={181}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex">
                                        <img
                                            alt="Wired"
                                            src="/_next/static/media/wired.42c588dc.svg"
                                            width={121}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex hidden xl:block">
                                        <img
                                            alt="CNN"
                                            src="/_next/static/media/cnn.eaae184a.svg"
                                            width={68}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex">
                                        <img
                                            alt="BBC"
                                            src="/_next/static/media/bbc.9cfc75a9.svg"
                                            width={83}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex">
                                        <img
                                            alt="CBS"
                                            src="/_next/static/media/cbs.aa596395.svg"
                                            width={101}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex">
                                        <img
                                            alt="Fast Company"
                                            src="/_next/static/media/fast-company.8fba32a5.svg"
                                            width={124}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                    <li className="flex hidden xl:block">
                                        <img
                                            alt="HuffPost"
                                            src="/_next/static/media/huffpost.eeec742f.svg"
                                            width={142}
                                            height={32}
                                            decoding="async"
                                            data-nimg="future"
                                            className="h-8"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>

                <section
                    id="secondary-features"
                    aria-label="Features for building a portfolio"
                    className=""
                >
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mx-auto sm:text-center">
                            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                                Mari mulai projekmu disini
                            </h2>
                            <p className="mt-2 text-lg text-gray-600">
                                Ada fitur apa saja di Tawarin, mari lihat fitur
                                kami satu persatu.
                            </p>
                        </div>
                        <ul
                            role="list"
                            className="grid grid-cols-1 gap-6 mx-auto mt-16 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
                        >
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconCash className="w-8 h-8" />
                                <Link href={route("fundings.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Pendanaan
                                    </h3>
                                </Link>

                                <p className="mt-2 text-gray-700">
                                    Mari bersama-sama mendukung proyek hebat dan
                                    berikan kontribusi melalui pendanaan
                                    Tawarin.
                                </p>
                            </li>
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconHomeEdit className="w-8 h-8" />
                                <Link href={route("plans.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Perencanaan
                                    </h3>
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    Tunjukkan rencanamu dan dapatkan dukungan
                                    untuk pembangunan masa depan melalui
                                    platform Tawarin.
                                </p>
                            </li>
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconBuildingSkyscraper className="w-8 h-8" />
                                <Link href={route("projects.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Proyek
                                    </h3>
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    Buat proyekmu di Tawarin, temukan pekerja
                                    ahli serta fasilitas lengkap dan mudah.
                                </p>
                            </li>
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconUserSearch className="w-8 h-8" />
                                <Link href={route("projects.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Keahlian
                                    </h3>
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    Cari pekerja konstruksi yang berkualitas dan
                                    terpercaya dengan mudah di Tawarin!
                                </p>
                            </li>
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconBuildingStore className="w-8 h-8" />
                                <Link href={route("projects.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Toko
                                    </h3>
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    Temukan beragam produk konstruksi dan
                                    jualanmu sendiri di Tawarin dengan mudah dan
                                    aman.
                                </p>
                            </li>
                            <li className="p-8 border border-gray-200 rounded-2xl">
                                <IconTools className="w-8 h-8" />
                                <Link href={route("projects.choose")}>
                                    <h3 className="mt-6 font-semibold text-gray-900">
                                        Alat
                                    </h3>
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    Sewakan alat konstruksi dan industri di
                                    Tawarin, kembangkan bisnismu dan jangkau
                                    lebih banyak pelanggan.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="grid grid-cols-12 mx-auto my-10">
                    <section className="w-full h-full col-span-12 px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mx-auto mb-6 md:text-center">
                            <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
                                Perencanaan
                            </h2>
                            <p className="mt-4 text-lg tracking-tight text-slate-700">
                                Ini adalah daftar perencanaan di tawarin
                            </p>
                        </div>

                        <div className="grid sm:gap-y-12 lg:grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 2xl:gap-16 2xl:gap-y-16">
                            {plans.map ? (
                                plans.map((plan, index) => (
                                    <div
                                        className="p-4 text-left border border-gray-200 focus:outline-none rounded-2xl"
                                        key={index}
                                    >
                                        <Link
                                            href={route(
                                                "plans.show",
                                                `${plan.slug}`
                                            )}
                                        >
                                            <div className="LazyLoad is-visible">
                                                <img
                                                    className="object-cover min-w-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg h-44 max-w-96"
                                                    src={
                                                        plan.media
                                                            ? plan.media
                                                            : "storage/files/default/NoImage.svg"
                                                    }
                                                    alt={plan.slug}
                                                    style={{
                                                        opacity: 1,
                                                        transform: "none",
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                        <div className="mt-2.5 lg:mt-3 flex items-center justify-between">
                                            <div className="flex flex-wrap items-center text-xs font-medium text-blue-600 md:text-sm md:gap-x-3 hover:text-blue-700">
                                                <Link
                                                    href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                                                >
                                                    {plan.plan_category.name}
                                                </Link>
                                            </div>
                                        </div>
                                        <Link
                                            className="mt-2.5 lg:mt-3 flex gap-x-8 flex-row-reverse justify-between"
                                            href={route(
                                                "plans.show",
                                                `${plan.slug}`
                                            )}
                                        >
                                            <span className="block w-px h-6 bg-orange-500" />
                                            <div>
                                                <span className="block leading-tight tracking-tighter">
                                                    <span className="font-medium text-slate-800">
                                                        {plan.name}
                                                    </span>
                                                </span>
                                                <span className="flex items-center mt-2 space-x-2 text-xs lg:mt-3 text-slate-500">
                                                    <span>
                                                        {
                                                            plan.jangka_waktu_pelaksanaan
                                                        }{" "}
                                                        Hari Pengerjaan
                                                    </span>
                                                    <span>
                                                        {plan.jumlah_revisi}{" "}
                                                        Kali Revisi
                                                    </span>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>

                                    // <li className="relative">
                                    //     <div className="text-left focus:outline-none">
                                    //         <Link
                                    //             href={route(
                                    //                 "plans.show",
                                    //                 `${plan.slug}`
                                    //             )}
                                    //         >
                                    //             <div className="LazyLoad is-visible">
                                    //                 <img
                                    //                     className="object-cover mb-1 transition-shadow duration-500 ease-in-out border rounded-lg shadow-none w-96 h-52"
                                    //                     src={plan.media}
                                    //                     alt={plan.slug}
                                    //                     style={{
                                    //                         opacity: 1,
                                    //                         transform: "none",
                                    //                     }}
                                    //                 />
                                    //             </div>
                                    //         </Link>
                                    //         <span className="flex items-center justify-between">
                                    //             <span className="space-x-2 font-medium">
                                    //                 <Link
                                    //                     className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 decoration-skip-ink decoration-2"
                                    //                     href={route(
                                    //                         "plans.show",
                                    //                         `${plan.slug}`
                                    //                     )}
                                    //                 >
                                    //                     {plan.name}
                                    //                 </Link>
                                    //             </span>
                                    //             <span className="inline-block w-4 h-1 bg-orange-500 rounded-full" />
                                    //         </span>
                                    //         <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                    //             <Link
                                    //                 className="font-medium text-shark-800 line-clamp-1"
                                    //                 href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                                    //             >
                                    //                 {plan.plan_category.name}
                                    //             </Link>
                                    //         </span>
                                    //         <span className="flex items-center justify-between text-xs">
                                    //             <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                    //                 <span>
                                    //                     {
                                    //                         plan.jangka_waktu_pelaksanaan
                                    //                     }{" "}
                                    //                     Hari Pengerjaan
                                    //                 </span>
                                    //                 <span>
                                    //                     {plan.jumlah_revisi}{" "}
                                    //                     Kali Revisi
                                    //                 </span>
                                    //             </span>
                                    //         </span>
                                    //     </div>
                                    // </li>
                                ))
                            ) : (
                                <EmptyCard />
                            )}
                        </div>
                        <div className="mt-10 lg:mt-12" />
                        <div className="flex justify-center md:justify-end">
                            <Link
                                color="black"
                                className="group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition text-white bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2"
                                href="/public/plans/list"
                            >
                                Lihat lebih banyak
                                <svg
                                    className="mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]"
                                    fill="none"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 10 10"
                                    aria-hidden="true"
                                >
                                    <path
                                        className="transition opacity-0 group-hover:opacity-100"
                                        d="M0 5h7"
                                    />
                                    <path
                                        className="transition group-hover:translate-x-[3px]"
                                        d="M1 1l4 4-4 4"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="grid grid-cols-12 mx-auto md:mt-10">
                    <section className="w-full col-span-12 px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mx-auto mb-6 md:text-center">
                            <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
                                Proyek
                            </h2>
                            <p className="mt-4 text-lg tracking-tight text-slate-700">
                                Ini adalah daftar Proyek di tawarin
                            </p>
                        </div>

                        <div className="flex flex-col mt-10 bg-white border shadow-sm rounded-xl">
                            <div className="flex flex-col items-center justify-center flex-auto p-4 md:p-5">
                                <svg
                                    className="max-w-[5rem]"
                                    viewBox="0 0 375 428"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M254.509 253.872L226.509 226.872"
                                        className="stroke-gray-400"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                                        className="stroke-gray-400"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                    <rect
                                        x="270.524"
                                        y="221.872"
                                        width="137.404"
                                        height="73.2425"
                                        rx="36.6212"
                                        transform="rotate(40.8596 270.524 221.872)"
                                        className="fill-gray-400"
                                        fill="currentColor"
                                    />
                                    <ellipse
                                        cx="133.109"
                                        cy="404.372"
                                        rx="121.5"
                                        ry="23.5"
                                        className="fill-gray-400"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                                        className="stroke-gray-400"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx="96.6084"
                                        cy="116.872"
                                        rx={9}
                                        ry={12}
                                        className="fill-gray-400"
                                        fill="currentColor"
                                    />
                                    <ellipse
                                        cx="172.608"
                                        cy="117.872"
                                        rx={9}
                                        ry={12}
                                        className="fill-gray-400"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                                        className="fill-gray-400"
                                        fill="currentColor"
                                    />
                                </svg>
                                <p className="mt-5 text-sm text-gray-500">
                                    No data to show
                                </p>
                            </div>
                        </div>
                        {/* <ul className="grid sm:gap-y-12 lg:grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 2xl:gap-16 2xl:gap-y-16">
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/belajar-queue-di-laravel-klqu1">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/belajar-queue-di-laravel-klqu1.jpg?tr=n-thumbnail"
                                                alt="Belajar Laravel Queues"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/queues"
                                            >
                                                Queues
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/belajar-queue-di-laravel-klqu1"
                                        >
                                            Belajar Laravel Queues
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>12 Episodes</span>
                                            <span>168 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/amazon-s3-dengan-laravel-odnkg">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/amazon-s3-dengan-laravel-odnkg.jpg?tr=n-thumbnail"
                                                alt="Amazon S3 Dengan Laravel"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/amazon-s3"
                                            >
                                                Amazon S3
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/amazon-s3-dengan-laravel-odnkg"
                                        >
                                            Amazon S3 Dengan Laravel
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>7 Episodes</span>
                                            <span>58 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/tailwind-css-uncovered-drzna">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/tailwind-css-uncovered-drzna.jpg?tr=n-thumbnail"
                                                alt="Tailwind CSS Uncovered"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/tailwind-css"
                                            >
                                                Tailwind CSS
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 bg-orange-500 rounded-full" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/tailwind-css-uncovered-drzna"
                                        >
                                            Tailwind CSS Uncovered
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>2 Episodes</span>
                                            <span>16 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/blog-dengan-inertia-react-ssr-adhfl">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/blog-dengan-inertia-react-ssr-adhfl.jpg?tr=n-thumbnail"
                                                alt="Blog Dengan Laravel Inertia dan React (SSR)"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/inertia"
                                            >
                                                Inertia
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/reactjs"
                                            >
                                                React.js
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/tailwind-css"
                                            >
                                                Tailwind CSS
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/blog-dengan-inertia-react-ssr-adhfl"
                                        >
                                            Blog Dengan Laravel Inertia dan
                                            React (SSR)
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>28 Episodes</span>
                                            <span>303 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/membangun-toko-online-dengan-payment-gateway-dtmdj">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/membangun-toko-online-dengan-payment-gateway-dtmdj.jpg?tr=n-thumbnail"
                                                alt="Membangun Toko Online Dengan Payment Gateway"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel-9"
                                            >
                                                Laravel 9
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/inertia"
                                            >
                                                Inertia
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/reactjs"
                                            >
                                                React.js
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/membangun-toko-online-dengan-payment-gateway-dtmdj"
                                        >
                                            Membangun Toko Online Dengan Payment
                                            Gateway
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>24 Episodes</span>
                                            <span>246 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/multi-bahasa-dengan-laravel-1i4yb">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/multi-bahasa-dengan-laravel-1i4yb.jpg?tr=n-thumbnail"
                                                alt="Multi Bahasa Dengan Laravel"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/reactjs"
                                            >
                                                React.js
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/js"
                                            >
                                                Javascript
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/multi-bahasa-dengan-laravel-1i4yb"
                                        >
                                            Multi Bahasa Dengan Laravel
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>4 Episodes</span>
                                            <span>53 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/new-in-laravel-9-bkygy">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/new-in-laravel-9-bkygy.jpg?tr=n-thumbnail"
                                                alt="New in Laravel 9"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel"
                                            >
                                                Laravel
                                            </a>
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/laravel-9"
                                            >
                                                Laravel 9
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 bg-orange-500 rounded-full" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/new-in-laravel-9-bkygy"
                                        >
                                            New in Laravel 9
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>8 Episodes</span>
                                            <span>64 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            <li className="relative">
                                <div className="text-left focus:outline-none">
                                    <a href="/series/javascript-dari-awal-bpiyg">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="w-full h-full mb-1 transition-shadow duration-500 ease-in-out rounded-lg shadow-none group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/javascript-dari-awal-bpiyg.jpg?tr=n-thumbnail"
                                                alt="Javascript Dari Awal"
                                                style={{
                                                    opacity: 1,
                                                    transform: "none",
                                                }}
                                            />
                                        </div>
                                    </a>
                                    <span className="flex items-center justify-between">
                                        <span className="space-x-2 font-medium">
                                            <a
                                                className="mr-1 text-[12px] font-medium text-primary-500 decoration-primary-500/30 underline-offset-[-1.5px] decoration-skip-ink decoration-2 underline"
                                                href="/topics/js"
                                            >
                                                Javascript
                                            </a>
                                        </span>
                                        <span className="inline-block w-4 h-1 rounded-full bg-emerald-500" />
                                    </span>
                                    <span className="block max-w-sm mt-1 mb-2 leading-tight tracking-tighter">
                                        <a
                                            className="font-medium text-shark-800 line-clamp-1"
                                            href="/series/javascript-dari-awal-bpiyg"
                                        >
                                            Javascript Dari Awal
                                        </a>
                                    </span>
                                    <span className="flex items-center justify-between text-xs">
                                        <span className="flex items-center space-x-2 text-shark-600 text-[11px]">
                                            <span>17 Episodes</span>
                                            <span>133 mins</span>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul> */}
                        <div className="mt-10 lg:mt-12" />
                        <div className="flex justify-center md:justify-end">
                            <Link
                                color="black"
                                className="group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition text-white bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2"
                                href="/public/plans/list"
                            >
                                Lihat lebih banyak
                                <svg
                                    className="mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]"
                                    fill="none"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 10 10"
                                    aria-hidden="true"
                                >
                                    <path
                                        className="transition opacity-0 group-hover:opacity-100"
                                        d="M0 5h7"
                                    />
                                    <path
                                        className="transition group-hover:translate-x-[3px]"
                                        d="M1 1l4 4-4 4"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </section>
                </div>

                <section
                    id="testimonials"
                    aria-label="What our customers are saying"
                    className="relative py-20 sm:py-32"
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

                <Footer />
                <HideScrollBar />
            </Container>
            {/* <Marquee/> */}
        </>
    );
}

Home.layout = (page) => <App children={page}></App>;
