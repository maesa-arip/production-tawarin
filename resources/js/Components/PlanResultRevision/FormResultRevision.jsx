import Filepond from "@/Pages/Uploads/Filepond";
import React from "react";
import Button from "../Button";

export default function FormResultRevision({
    errors,
    submit,
    data,
    result,
    result_all,
    setData,
    closeButton,
}) {
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
    return (
        <>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Keterangan Revisi Dari Owner
                        </label>
                        <div className="mt-1">
                            <textarea
                                readOnly
                                value={
                                    result_all.description ??
                                    "Belum ada permintaan revisi"
                                }
                                onChange={onChange}
                                rows={3}
                                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Masukan Deskripsi Revisi"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {result_all.jumlah_pengajuan_revisi > 0 && (
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Masukan Keterangan Revisi
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="description"
                                    name="description"
                                    value={data.description ?? ""}
                                    onChange={onChange}
                                    rows={3}
                                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Masukan Deskripsi Revisi"
                                />
                            </div>
                            {errors && (
                                <div className="mt-1 text-pink-500">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {result_all.jumlah_pengajuan_revisi > 0 && (
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Masukan Hasil Revisimu (Max 5)
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
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <Filepond
                                    inputname={"document"}
                                    allowMultiple={true}
                                    maxFiles={"5"}
                                    // required={true}
                                />
                                <div className="flex justify-center text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {result_all.jumlah_pengajuan_revisi > 0 && (
                    <Button>{submit}</Button>
                )}

                <Button color="pink" type="button" onClick={closeButton}>
                    Cancel
                </Button>
            </div>
        </>
    );
}
