import React from "react";
import Button from "../Button";

export default function FormRevision({
    errors,
    submit,
    data,
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
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Keterangan
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="address"
                                name="address"
                                value={data.address ?? ""}
                                onChange={onChange}
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Masukan Deskripsi Revisi"
                               
                            />
                        </div>
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.address}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {/* <Button>{submit}</Button> */}
                <Button color="pink" type="button" onClick={closeButton}>
                    Cancel
                </Button>
            </div>
        </>
    );
}
