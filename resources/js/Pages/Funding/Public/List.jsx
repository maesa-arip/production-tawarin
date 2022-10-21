import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import FundingItem from "@/Components/FundingItem";
import { numberFormat } from "@/Libs/helper";
import EmptyCard from "@/Components/EmptyCard";
import { IconMapPin } from "@tabler/icons";

export default function List(props) {
    const { data: fundings, meta, links } = props.fundings;
    return (
        <div>
            <Head title="Fundings" />
            <Header
                title="Our Fundings"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium quam sint repudiandae aliquam rerum nisi eum repellendus minima optio, delectus expedita enim tempore. Aliquam omnis eligendi velit laboriosam suscipit."
            />
            <Container>
                {/* {fundings.length ? (
                    <div className="grid grid-cols-2 gap-2 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {fundings.map((funding) => (
                            <FundingItem funding={funding} key={funding.id} />
                        ))}
                    </div>
                ) : null} */}
                {fundings.length ? (
                    <div className="grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {fundings.map((funding, index) => (
                            <div
                                key={index}
                                className="relative w-full pb-4 mx-auto"
                            >
                                <Link
                                    href={`/fundings/${funding.slug}`}
                                    className="relative inline-block w-full transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                                >
                                    <div className="p-2 bg-white rounded-lg shadow">
                                        <div className="relative flex justify-center overflow-hidden rounded-lg h-52">
                                            <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                                                <div className="absolute inset-0 ">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                                        alt="Front of men's Basic Tee in black."
                                                        className="object-cover object-top w-full h-full lg:h-full lg:w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 flex justify-center mb-3">
                                                <div className="flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg shadow md:px-5 md:space-x-5">
                                                    <p className="flex items-center font-medium text-gray-800">
                                                        <IconMapPin className="h-4 w-4 bg-transparent text-sky-500"/>
                                                        Denpasar, Bali
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="absolute top-0 left-0 z-10 inline-flex justify-end px-2 py-1 mt-3 ml-3 text-xs font-medium text-white bg-blue-500 rounded-lg select-none">
                                                {funding.until} Hari Lagi
                                            </span>
                                        </div>
                                        <div className="mt-4">
                                            <h2
                                                className="text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                                                title="New York"
                                            >
                                                {funding.name}
                                            </h2>
                                            <Link
                                                className="mt-2 text-sm text-gray-800 line-clamp-1"
                                                href={`/public/fundings/list?funding_category=${funding.funding_category.slug}`}
                                            >
                                                {funding.funding_category.name}
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-2">
                                            <p className="inline-flex flex-col text-gray-800 xl:flex-row xl:items-center">
                                                <span className="mt-4 xl:mt-0 text-xs">
                                                    Nilai Bisnis
                                                </span>
                                                <span className="text-sm"></span>
                                            </p>
                                            <p className="inline-flex flex-col font-semibold justify-end text-gray-800 xl:flex-row xl:items-center">
                                                <span className="text-sm">
                                                    Rp{" "}
                                                    {numberFormat(
                                                        funding.anggaran
                                                    )}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div className="h-full text-xs text-center text-white bg-blue-500 rounded-full" style={{width: (25)+'%'}}></div>
                                        </div>
                                        <div className="flex items-center justify-between my-4 space-x-4">
                                            <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                                Rp{" "}
                                                {numberFormat(
                                                    funding.harga_perlembar
                                                )}
                                            </span>
                                            <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            {numberFormat(
                                                    funding.total_lembar
                                                )} Lembar
                                            </span>
                                        </div>
                                        {/* <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                            DUE DATE : 18 JUN
                                        </span> */}

                                        {/* <div className="grid grid-cols-2 mt-4">
                                            <div className="flex items-center">
                                                <div className="relative">
                                                    <div className="w-6 h-6 bg-gray-200 rounded-full md:w-8 md:h-8" />
                                                    <span className="absolute top-0 right-0 inline-block w-3 h-3 rounded-full bg-primary-red" />
                                                    <p className="text-sm text-gray-800 line-clamp-1">
                                                        {funding.owner.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <p className="inline-block font-semibold leading-tight text-primary whitespace-nowrap rounded-xl">
                                                    <span className="text-sm">
                                                        {numberFormat(
                                                            funding.anggaran_proyek
                                                        )}
                                                    </span>
                                                </p>
                                            </div>
                                        </div> */}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyCard />
                )}

                <Pagination meta={meta} links={links} />
            </Container>
        </div>
    );
}

List.layout = (page) => <App children={page}></App>;
