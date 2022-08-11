import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import RadioCard from "@/Components/RadioCard";
import ListBoxPage from "@/Components/ListBoxPage";
import Comboboxpage from "@/Components/Comboboxpage";
import MenuModal from "@/Components/Modal/MenuModal";

export default function Funding({ plan_categories }) {
    const [enabled, setEnabled] = useState(false);
    const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
    let [isOpen, setIsOpen] = useState(true);
    const openMenuModal = () => {
        setIsOpenMenuModal(true);
    };
    return (
        <div>
            <Head title="Form" />

            <Container>
                <button
                    type="button"
                    onClick={openMenuModal}
                    className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Open Modal
                </button>
                <div>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Pilih Paket Funding
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    This information will be displayed publicly
                                    so be careful what you share.
                                </p>
                            </div>
                        </div>
                        <MenuModal isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal}>
                            <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order From Funding.
                    </p>
                        </MenuModal>

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <RadioCard />

                                    {/* <LisNoEdit/> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Personal Information
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Use a permanent address where you can
                                    receive mail.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 mt-5 sm:col-span-3">
                                                <DatePicker />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih
                                                </label>
                                                <ListBoxPage />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>
                                                        United States
                                                    </option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Category
                                                </label>
                                                <Comboboxpage
                                                    plan_categories={
                                                        plan_categories
                                                    }
                                                />
                                            </div>

                                            <div className="col-span-6">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label
                                                    htmlFor="city"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    htmlFor="region"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    htmlFor="postal-code"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Notifications
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Decide which communications you'd like to
                                    receive and how.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <Switch.Group>
                                            <div className="flex items-center">
                                                <Switch.Label className="mr-4">
                                                    Enable notifications
                                                </Switch.Label>
                                                <Switch
                                                    checked={enabled}
                                                    onChange={setEnabled}
                                                    className={`${
                                                        enabled
                                                            ? "bg-blue-600"
                                                            : "bg-gray-200"
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                                >
                                                    <span
                                                        className={`${
                                                            enabled
                                                                ? "translate-x-6"
                                                                : "translate-x-1"
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                                    />
                                                </Switch>
                                            </div>
                                        </Switch.Group>
                                        <fieldset>
                                            <legend className="sr-only">
                                                By Email
                                            </legend>
                                            <div
                                                className="text-base font-medium text-gray-900"
                                                aria-hidden="true"
                                            >
                                                By Email
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="comments"
                                                            name="comments"
                                                            type="checkbox"
                                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="comments"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Comments
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when
                                                            someones posts a
                                                            comment on a
                                                            posting.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="candidates"
                                                            name="candidates"
                                                            type="checkbox"
                                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="candidates"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Candidates
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when a
                                                            candidate applies
                                                            for a job.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="offers"
                                                            name="offers"
                                                            type="checkbox"
                                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="offers"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Offers
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when a
                                                            candidate accepts or
                                                            rejects an offer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend className="text-base font-medium text-gray-900 contents">
                                                Push Notifications
                                            </legend>
                                            <p className="text-sm text-gray-500">
                                                These are delivered via SMS to
                                                your mobile phone.
                                            </p>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor="push-everything"
                                                        className="block ml-3 text-sm font-medium text-gray-700"
                                                    >
                                                        Everything
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor="push-email"
                                                        className="block ml-3 text-sm font-medium text-gray-700"
                                                    >
                                                        Same as email
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                    />
                                                    <label
                                                        htmlFor="push-nothing"
                                                        className="block ml-3 text-sm font-medium text-gray-700"
                                                    >
                                                        No push notifications
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Funding.layout = (page) => <App children={page}></App>;
