import Button from "@/Components/Button";
import Container from "@/Components/Container";
import App from "@/Layouts/App";
import Filepond from "@/Pages/Uploads/Filepond";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function UploadResult({ plan_details, plan }) {
    const { data, setData, post, processing, reset, errors } = useForm({});
    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("plan.simpanhasil", plan.slug), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };
    
    return (
        <div>
            <Head title="Upload Hasil" />
            {/* <Container> */}
            <form onSubmit={onSubmitHandler}>
            <div className="bg-white">
                <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-4 mx-auto gap-y-8 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    {plan_details.map((plan_detail, i) => (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div key={i}>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label
                                                        htmlFor={
                                                            plan_detail.slug
                                                        }
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        {plan_detail.name}
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            <svg
                                                                className="w-12 h-12 mx-auto text-gray-400"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                            <Filepond
                                                                inputname={
                                                                    plan_detail.slug
                                                                }
                                                                allowMultiple={
                                                                    true
                                                                }
                                                                maxFiles={"5"}
                                                                required={false}
                                                            />
                                                            <div className="flex justify-center text-sm text-gray-600">
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                >
                                                                    <span>
                                                                        Upload a
                                                                        file
                                                                    </span>
                                                                </label>
                                                                <p className="pl-1">
                                                                    or drag and
                                                                    drop
                                                                </p>
                                                            </div>
                                                            <p className="text-xs text-gray-500">
                                                                PNG, JPG, GIF up
                                                                to 10MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            key={i}
                                                            id={
                                                                plan_detail.slug
                                                            }
                                                            name={
                                                                plan_detail.slug
                                                            }
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Masukan Keterangan{" "}
                                                        {plan_detail.name} Bila
                                                        diperlukan.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-5 ">
                        <div className="bg-white ">
                            <div>
                                <div className="mt-5 md:mt-0">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700"></label>
                                                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"></div>
                                                <div className="mt-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                <Button processing={processing}>Simpan</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            {/* </Container> */}
        </div>
    );
}

UploadResult.layout = (page) => <App children={page}></App>;
