import React from "react";
import Button from "../Button";

export default function FormUser({
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
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={data.username ?? ""}
                            onChange={onChange}
                            id="username"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.username}
                            </div>
                        )}
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={data.email ?? ""}
                            onChange={onChange}
                            id="email"
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="col-span-6">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="address"
                                name="address"
                                value={data.address ?? ""}
                                onChange={onChange}
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Address"
                                defaultValue={""}
                            />
                        </div>
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.address}
                            </div>
                        )}
                    </div>
                    <div className="col-span-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={data.password ?? ""}
                            onChange={onChange}
                            id="password"
                            autoComplete="password"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {errors && (
                            <div className="text-pink-500 mt-1">
                                {errors.password}
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
