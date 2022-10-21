import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import { numberFormat, Terbilang } from "@/Libs/helper";
import Container from "@/Components/Container";
import FundingItem from "@/Components/FundingItem";
import { Tab } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/solid";
import Input from "@/Components/Input";

export default function Show({ funding, media, balance }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const [simulasiLembar, setSimulasiLembar] = useState("");

    const onChangeHandler = (e) => {
        setSimulasiLembar(e.target.value);
    };
    const formatAngkaSimulasiLembar = new Intl.NumberFormat("id-ID", {}).format(
        simulasiLembar
    );
    const formatRupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(simulasiLembar * funding.harga_perlembar);
    const formatRupiahROI = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(simulasiLembar * funding.harga_perlembar * funding.roi / 100 );
    return (
        <div>
            <Head title={FundingItem.name} />
            <Container>
                <div className="px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="p-1 space-x-4 overflow-x-auto bg-white md:flex whitespace-nowrap rounded-xl">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Finansial
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Tentang Bisnis
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Kategori
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Lokasi
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-32 md:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                                        "ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 transition-all duration-300",
                                        selected
                                            ? "bg-blue-300 text-white ring-2 ring-blue-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2"
                                            : "bg-gray-300 text-white ring-2 ring-gray-300 ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 hover:ring-blue-300"
                                    )
                                }
                            >
                                Simulasi
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Informasi Finansial
                                        </h3>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Total saham yang dibagikan
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    70%
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Return On Investment
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {funding.roi}%
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Periode dividen
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {funding.jadwal_deviden} Bulan
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Attachments
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul
                                                        role="list"
                                                        className="border border-gray-200 divide-y divide-gray-200 rounded-md"
                                                    >
                                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                            <div className="flex items-center flex-1 w-0">
                                                                <PaperClipIcon
                                                                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="flex-1 w-0 ml-2 truncate">
                                                                    prospektus.pdf
                                                                </span>
                                                            </div>
                                                            <div className="flex-shrink-0 ml-4">
                                                                <a
                                                                    href="#"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    Download
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="bg-white">
                                    <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-8 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                                        <div>
                                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                {funding.name}
                                            </h2>
                                            
                                            <Link
                                                className="inline-flex px-2 py-1 text-xs font-semibold text-white bg-gray-500 rounded"
                                                href={`/public/fundings/list?funding_category=${funding.funding_category.slug}`}
                                            >
                                                {funding.funding_category.name}
                                            </Link>
                                            <div className="inline-flex px-2 py-1 ml-4 text-xs font-semibold text-white rounded bg-sky-500">{funding.until} Hari Lagi</div>
                                            <p className="mt-4 text-gray-500">
                                                {funding.description}
                                            </p>

                                            <div className="pt-4 border-t border-gray-200">
                                                <div className="flex justify-between">
                                                <dt className="font-medium text-gray-900">
                                                        Persentase Terkumpul
                                                    </dt>
                                                    <dt className="font-medium text-gray-900">
                                                        {Math.floor(balance / funding.anggaran * 100)} %
                                                    </dt>
                                                </div>
                                                    
                                                    <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                                        <div
                                                            className="h-full text-xs text-center text-white bg-blue-500 rounded-full"
                                                            style={{
                                                                width:
                                                                    (balance /
                                                                        funding.anggaran) *
                                                                        100 +
                                                                    "%",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                                <div className="pt-4 border-t border-gray-200">
                                                    <dt className="font-medium text-gray-900">
                                                        Nilai Bisnis
                                                    </dt>
                                                    <dd className="mt-2 text-sm text-gray-500">
                                                        Rp {numberFormat(
                                                            funding.anggaran
                                                        )}
                                                    </dd>
                                                </div>
                                                <div className="pt-4 border-t border-gray-200">
                                                    <dt className="font-medium text-gray-900">
                                                        Total Terkumpul
                                                    </dt>
                                                    <dd className="mt-2 text-sm text-gray-500">
                                                    Rp {numberFormat(
                                                            balance
                                                        )}
                                                    </dd>
                                                </div>
                                                
                                                <div className="pt-4 border-t border-gray-200">
                                                    <dt className="font-medium text-gray-900">
                                                        Jumlah Lembar
                                                    </dt>
                                                    <dd className="mt-2 text-sm text-gray-500">
                                                        {numberFormat(
                                                            funding.total_lembar
                                                        )}
                                                    </dd>
                                                </div>
                                                <div className="pt-4 pb-4 border-t border-gray-200">
                                                    <dt className="font-medium text-gray-900">
                                                        Harga Perlembar
                                                    </dt>
                                                    <dd className="mt-2 mb-2 text-sm text-gray-500">
                                                        Rp {numberFormat(
                                                            funding.harga_perlembar
                                                        )}
                                                    </dd>
                                                </div>
                                                
                                               
                                            </dl>
                                            <div className="pt-4 mt-4 border-t border-gray-200">
                                                <div className="flex justify-between">
                                                <dt className="font-medium text-gray-900">
                                                        Tentang Bisnis
                                                    </dt>
                                                    
                                                </div>
                                                    
                                                <p className="mt-4 text-gray-500">
                                                {funding.tentang_bisnis}
                                            </p>
                                                </div>
                                        </div>
                                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 rounded-lg"
                                            />
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 rounded-lg"
                                            />
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 rounded-lg"
                                            />
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                className="bg-gray-100 rounded-lg"
                                            />
                                            {media.map((funding) => (
                                                <img
                                                    key={funding.id}
                                                    src={`/storage/${funding.id}/${funding.file_name}`}
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 rounded-lg"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Informasi Kategori
                                        </h3>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Kategori Bisnis
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <Link
                                                className="inline-flex px-2 py-1 text-xs font-semibold text-white bg-gray-500 rounded"
                                                href={`/public/fundings/list?funding_category=${funding.funding_category.slug}`}
                                            >
                                                {funding.funding_category.name}
                                            </Link>
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Penerbit
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    PT Tawarin Dimana Saja
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Sistem Pengelolaan
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    Auto Pilot
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Target Investasi
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Rp {numberFormat(
                                                            funding.anggaran
                                                        )}
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Minimum Investasi / Lembar
                                                    Saham
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Rp {numberFormat(
                                                            funding.harga_perlembar
                                                        )}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="mapouter">
                                    <div className="mb-4 gmap_canvas">
                                        <iframe
                                            className="w-full h-96 rounded-xl"
                                            id="gmap_canvas"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15776.155420991337!2d115.1771986!3d-8.687855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9125691d552561f!2sWasco%20Garage%20Carwash!5e0!3m2!1sid!2sid!4v1665880331383!5m2!1sid!2sid"
                                            frameBorder={0}
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                        />
                                        
                                    </div>
                                    {funding.alamat}
                                </div>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    "rounded-xl bg-white p-3",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                                )}
                            >
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Kalkulator Simulasi
                                        </h3>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Jumlah Lembar Saham
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <Input type="number" min="0" onChange={onChangeHandler}/>
                                                    <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {simulasiLembar &&
                                                        formatAngkaSimulasiLembar + " Lembar Saham "}
                                                </div>
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Nilai Investasi
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-gray-900">
                                                    {simulasiLembar &&
                                                        formatRupiah}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-gray-900">
                                                        {simulasiLembar &&
                                                            "(" +
                                                                Terbilang(
                                                                    simulasiLembar * funding.harga_perlembar
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Total Keuntungan
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-gray-900">
                                                    {simulasiLembar &&
                                                        formatRupiahROI}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-gray-900">
                                                        {simulasiLembar &&
                                                            "(" +
                                                                Terbilang(
                                                                    simulasiLembar * funding.harga_perlembar * funding.roi / 100
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Target Investasi
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Rp {numberFormat(
                                                            funding.anggaran
                                                        )}
                                                </dd>
                                            </div>
                                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Minimum Investasi / Lembar
                                                    Saham
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                Rp {numberFormat(
                                                            funding.harga_perlembar
                                                        )}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
