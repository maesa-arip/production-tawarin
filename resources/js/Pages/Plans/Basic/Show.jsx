import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import PlanItem from "@/Components/PlanItem";
import { numberFormat } from "@/Libs/helper";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";
import { toast } from 'react-hot-toast'

export default function Show({ plan }) {
    return (
        <div>
            <Head title={PlanItem.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-lg shadow-sm"
                            src={'https://source.unsplash.com/200x320?building'}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between w-2/3 min-h-full">
                        <div className="flex-1">
                            <Link
                                className="inline-flex px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded"
                                href={`/plans?plan_category=${plan.plan_category.slug}`}
                            >
                                {plan.plan_category.name}
                            </Link>
                            <h1 className="text-3xl font-semibold">
                                {plan.name}
                            </h1>
                            <div className="my-4 leading-relaxed text-gray-500">
                                {plan.description}
                            </div>
                            <div className="text-4xl font-semibold"><sup>Rp </sup>{numberFormat(plan.anggaran_proyek)}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
