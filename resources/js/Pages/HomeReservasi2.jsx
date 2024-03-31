import React, { useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import HeroHome from "../LandingPageFunding/HeroHome";
import Features from "../LandingPageFunding/Features";
import DefaultUserImage from "../../img/LandingPageFunding/defaultuser.jpg";
import Footer from "@/LandingPageFunding/Footer";
import InfoModal from "@/Components/Modal/InfoModal";
import "../../css/static/style.css";
import "../../css/static/index_responsive.css";
import Typewriter from "typewriter-effect";
import NavLink from "@/Components/NavLink";
import Logo from "../../img/Tawarin.png";
import mockup_laptop from "../../img/mockup_laptop.png";
import mockup_pc from "../../img/mockup_pc.png";
import mockup_phone from "../../img/mockup_phone.png";
import mockup_tablet from "../../img/mockup_tablet.png";
import DropdownMenu from "@/Components/DropdownMenu";
import Dropdown from "@/Components/Dropdown";
import Header from "@/Layouts/Header";
import Aside from "@/Layouts/Aside";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import AsideReservasi from "@/Layouts/AsideReservasi";
export default function HomeReservasi(props) {
    const { data: plans } = props.plans;
    const {
        auth,
        categories_global,
        carts_global_count,
        notifications_count,
        permissions,
    } = usePage().props;

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
                <p className="text-justify">
                    Selamat datang di tawarin.id, rekan konstruksi yang kreatif
                    yang siap membantu perkembangan ekosistem konstruksi,
                    meningkatkan produktivitas dan efisiensi, juga mewujudkan
                    ide-ide Anda. Coba Tawarin sekarang Karena masih dalam tahap
                    eksperimen awal, saat ini kami ada pada tahap pengumpulan
                    user dimana pada tahap ini kami butuh bantuan rekan
                    konstruksi untuk dapat ikut share dan mengenalkan tawarin.Id
                    ke rekan konstruksi lainnya. Kami mengakui Tawarin.id masih
                    banyak kekurangan dan mungkin tidak selalu benar, tetapi
                    dengan bantuan dan masukan Anda, Tawarin.id akan menjadi
                    lebih baik. Untuk informasi, masukan dan saran rekan
                    konstruksi dapat menghubungi kami di Wa : 081818277844 Fb :
                    tawarin.id Atau chat personal di menu chat pada web tawarin,
                    dengan id : tawarin Terima kasih telah bergabung dalam
                    eksperimen awal penggunaan tawarin.id. SEMUA PASTI BERES
                </p>
            </InfoModal>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Membuat perencanaan, proyek dan belanja dengan mudah."
                />
            </Head>
            <div>
                <Header/>
                <AsideReservasi/>
                <main>
                    <section id="title" className="py-12">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full text-left lg:w-1/2 title-col-1">
                                    <p className="title-text">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Mari Bergabung",
                                                    "Ekosistem Digital",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </p>
                                    <p className="title-text text-yellow-gradient">
                                        Super Ekosistem Tawarin.
                                    </p>
                                    <p className="title-paragraph">
                                        Kembangkan bisnismu, mari berkolaborasi
                                        untuk market yang lebih luas lagi
                                    </p>
                                    <div className="mt-6 text-left title-button">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.tawarin.net"
                                            target="_blank"
                                        >
                                            <img
                                                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                                                width={150}
                                                height={60}
                                                alt="Get it on Google Play"
                                                border={0}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full text-right rounded lg:w-1/2">
                                    <video className="rounded"
                                        controls
                                        style={{ margin: "0 auto" }}
                                        autoPlay
                                        muted
                                        loop
                                        src={`storage/files/default/Intro_Tawarin.mp4`}
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="our-product" className="py-12">
                        <div className="container mx-auto">
                            <div className="flex justify-center mb-8">
                                <div className="text-center">
                                    <p className="our-product-title">
                                        <span
                                            style={{
                                                borderBottom: "1px solid black",
                                            }}
                                        >
                                            Produk Kami
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8 our-product-wrapper md:grid-cols-2 lg:grid-cols-4">
                                <div className="our-product-box">
                                    <div className="our-product-content-left">
                                        <b className="our-product-content-title">
                                            Reservasi
                                        </b>
                                        <p className="our-product-content-text">
                                            <span>
                                                Temukan solusi reservasimu,
                                                Lebih efesien tanpa antri,
                                                memudahkan pelanggan dan
                                                tingkatkan omset usahamu.
                                            </span>
                                        </p>
                                        <a
                                            style={{
                                                textDecoration: "none",
                                                color: "orange",
                                            }}
                                            href="#"
                                        >
                                            More &gt;
                                        </a>
                                    </div>
                                    <div className="our-product-content-right">
                                        <img
                                            src={mockup_laptop}
                                            className="our-product-content-image"
                                        />
                                    </div>
                                </div>
                                <div className="our-product-box">
                                    <div className="our-product-content-left">
                                        <b className="our-product-content-title">
                                            Konstruksi
                                        </b>
                                        <p className="our-product-content-text">
                                            <span>
                                                Mari bersama-sama mendukung
                                                proyek hebat dan berikan
                                                kontribusi melalui ekosistem
                                                konstruksi Tawarin.
                                            </span>
                                        </p>
                                        <a
                                            style={{
                                                textDecoration: "none",
                                                color: "orange",
                                            }}
                                            href="#"
                                        >
                                            More &gt;
                                        </a>
                                    </div>
                                    <div className="our-product-content-right">
                                        <img
                                            src={mockup_phone}
                                            className="our-product-content-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="benefit" className>
                        <div className="feature-extended-wrapper">
                            <div className="container mx-auto">
                                <div className="flex justify-center">
                                    <div className="max-w-3xl mb-12 text-center">
                                        <div className="section-title">
                                            <h2
                                                className="mb-6 wow fadeInUp"
                                                data-wow-delay=".2s"
                                            >
                                                Why Choose Tawarin
                                            </h2>
                                            <p
                                                className="wow fadeInUp"
                                                data-wow-delay=".4s"
                                            >
                                                Lebih efesien tanpa antri,
                                                memudahkan pelanggan dan
                                                tingkatkan omset usahamu.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="single-feature-extended">
                                        <div className="icon">
                                            <i className="fa-solid fa-3x fa-chart-line" />
                                        </div>
                                        <div className="content">
                                            <h3>Cari dan Pesan</h3>
                                            <p>
                                                Cari dan pesan tempat
                                                reservasimu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-feature-extended">
                                        <div className="icon">
                                            <i className="fa-solid fa-3x fa-arrows-spin" />
                                        </div>
                                        <div className="content">
                                            <h3>Pilih tempat favorit</h3>
                                            <p>
                                                Pilih tempat favoritmu dan mulai
                                                reservasi online.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-feature-extended">
                                        <div className="icon">
                                            <i className="fa-solid fa-3x fa-arrows-spin" />
                                        </div>
                                        <div className="content">
                                            <h3>Pembayaran Mudah</h3>
                                            <p>
                                                Pembayaran yang sangat mudah
                                                dengan dompet digital Tawarin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-12 blog" data-scroll-index={4}>
                        <div className="container mx-auto">
                            {/* header of section */}
                            <div className="mb-8 text-center blog-head">
                                <h2>Blog</h2>
                                <h6>latest news</h6>
                            </div>
                            {/* blog items */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div className="item">
                                    <div className="img">
                                        <img
                                            src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>
                                                05 <br /> Nov
                                            </span>
                                        </div>
                                        <a href>
                                            <h5>Lorem Ipsum is simply dummy</h5>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet conse
                                            ctetur, adipi sicing elit. Nisi
                                            sapiente hic fugiat delectus dicta
                                            delectus dicta.
                                        </p>
                                        <a href="#0" className="user">
                                            <i className="fas fa-user" />
                                            Admin
                                        </a>
                                        <a href="#0" className="more">
                                        <ArrowCircleRightIcon/>
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img
                                            src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>
                                                19 <br /> Dec
                                            </span>
                                        </div>
                                        <a href>
                                            <h5>Lorem Ipsum is simply dummy</h5>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet conse
                                            ctetur, adipi sicing elit. Nisi
                                            sapiente hic fugiat delectus dicta
                                            delectus dicta.
                                        </p>
                                        <a href="#0" className="user">
                                            <i className="fas fa-user" />
                                            Admin
                                        </a>
                                        <a href="#0" className="more">
                                        <ArrowCircleRightIcon/>
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img
                                            src="https://i.ibb.co/YXV3zmh/blog3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <span>
                                                25 <br /> Dec
                                            </span>
                                        </div>
                                        <a href>
                                            <h5>Lorem Ipsum is simply dummy</h5>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet conse
                                            ctetur, adipi sicing elit. Nisi
                                            sapiente hic fugiat delectus dicta
                                            delectus dicta.
                                        </p>
                                        <a href="#0" className="user">
                                            <i className="fas fa-user" />
                                            Admin
                                        </a>
                                        <a href="#0" className="more">
                                            <ArrowCircleRightIcon/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="py-12 footer-bs">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="footer-brand animated fadeInLeft">
                                <h2>PT. Tawarin Dimana Saja</h2>
                                <p>
                                    Suspendisse hendrerit tellus laoreet luctus
                                    pharetra. Aliquam porttitor vitae orci nec
                                    ultricies. Curabitur vehicula, libero eget
                                    faucibus faucibus, purus erat eleifend enim,
                                    porta pellentesque ex mi ut sem.
                                </p>
                                <p>©2024, All rights reserved</p>
                            </div>
                            <div className="footer-nav animated fadeInUp">
                                <h4>Menu —</h4>
                                <div className="grid grid-cols-2">
                                    <ul className="list">
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Contacts</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Terms &amp; Condition
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-social animated fadeInDown">
                                <h4>Follow Us</h4>
                                <ul>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#">RSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-ns animated fadeInRight">
                                <h4>Newsletter</h4>
                                <p>
                                    A rover wearing a fuzzy suit doesn't alarm
                                    the real penguins
                                </p>
                                <p></p>
                                <div className="flex">
                                    <button
                                        className="btn btn-default"
                                        type="button"
                                    >
                                        <span className="glyphicon glyphicon-envelope" />
                                    </button>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

// HomeReservasi.layout = (page) => <AppReservasi children={page}></AppReservasi>;
