import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import PlanItem from "@/Components/PlanItem";
import { numberFormat } from "@/Libs/helper";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-hot-toast";

export default function Show({ plan,media }) {
    return (
        <div>
            <Head title={PlanItem.name} />
            <Container>
            <div className="bg-white">
                <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {plan.name}
                        </h2>
                        
                        
                        <Link
                            className="inline-flex px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded"
                            href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                        >
                            {plan.plan_category.name}
                        </Link>
                        <p className="mt-4 text-gray-500">{plan.description}</p>

                        <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                    {/* {media.name} */}
                                    {/* {plan.getFirstMediaUrl()} */}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <dt className="font-medium text-gray-900">
                                    {plan.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {numberFormat(plan.anggaran_proyek)}
                                </dd>
                            </div>
                        </dl>
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
                        {media.map((plan) => (
                            <img key={plan.id}
                            src={`/storage/${plan.id}/${plan.file_name}`}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="bg-gray-100 rounded-lg"
                        />
                        ))}
                        
                    </div>
                </div>
                
            </div>
            </Container>
            
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
