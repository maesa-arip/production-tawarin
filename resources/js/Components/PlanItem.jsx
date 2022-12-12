import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";

export default function PlanItem({ plan }) {
    return (
        <div>
            <div className="w-full p-4 bg-white shadow-lg rounded-2xl">
                <div className="flex items-center justify-between mb-6 overflow-hidden">
                    <div className="flex items-center">
                        <span className="relative p-2 bg-blue-100 rounded-xl">
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 256 262"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                            >
                                <path
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                    fill="#4285F4"
                                ></path>
                                <path
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                    fill="#34A853"
                                ></path>
                                <path
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                    fill="#FBBC05"
                                ></path>
                                <path
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                    fill="#EB4335"
                                ></path>
                            </svg>
                        </span>
                        <div className="flex flex-col">
                            <Link
                                className="ml-2 text-xs font-semibold text-black truncate"
                                href={`/public/plans/${plan.slug}`}
                            >
                                {plan.name}
                            </Link>
                            <Link
                                className="ml-2 text-xs text-gray-500"
                                href={`/public/plans/list?plan_category=${plan.plan_category.slug}`}
                            >
                                {plan.plan_category.name}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4 space-x-auto">
                    <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                        PROGRESS
                    </span>
                    <span className="flex items-center px-1 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                        HIGH
                    </span>
                </div>
                <div className="block m-auto">
                    <div>
                        <span className="inline-block text-sm text-gray-500">
                            
                            <span className="font-bold text-gray-700">
                            Rp  {numberFormat(plan.anggaran_proyek)}
                            </span>
                        </span>
                    </div>
                    <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-start my-4 space-x-4">
                    <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                        IOS APP
                    </span>
                    <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                        UI/UX
                    </span>
                </div>
                <div className="flex -space-x-2">
                    <a href="#">
                        <img
                            className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                            src="https://source.unsplash.com/200x320?person"
                            alt="Guy"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                            src="https://source.unsplash.com/200x320?person"
                            alt="Max"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                            src="https://source.unsplash.com/200x320?person"
                            alt="Charles"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                            src="https://source.unsplash.com/200x320?person"
                            alt="Jade"
                        />
                    </a>
                </div>
                <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                    DUE DATE : 18 JUN
                </span>
            </div>
        </div>
    );
}
