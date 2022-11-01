import React from "react";
import Button from "../../Button";

export default function FormRole({
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
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name ?? ""}
                            onChange={onChange}
                            id="name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="guard_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Guard Name
                        </label>
                        <input
                            type="text"
                            name="guard_name"
                            value={data.guard_name ?? ""}
                            onChange={onChange}
                            id="guard_name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.guard_name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button>{submit}</Button>
                <Button color="pink" type="button" onClick={closeButton}>
                    Cancel
                </Button>
            </div>
        </>
    );
}
