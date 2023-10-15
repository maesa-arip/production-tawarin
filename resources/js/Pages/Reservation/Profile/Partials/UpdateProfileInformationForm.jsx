import React, { useEffect, useRef, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Transition } from "@headlessui/react";
import TextAreaInput from "@/Components/TextAreaInput";
import Map from "@/Components/Map";
import ListBoxPage from "@/Components/ListBoxPage";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    company,
    reservation_categories,
    className,
}) {
    // console.log(company)
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locationDetails, setLocationDetails] = useState({
        formattedAddress: "",
        street: "",
        village: "",
        subdistrict: "",
        district: "",
        regency: "",
        country: "",
    });
    const lat = company ? parseFloat(company.lat) || -8.670458 : -8.670458 ;
    const lng = company ? parseFloat(company.lng) || 115.212629 : 115.212629;

    const handleLocationSelect = ({
        location,
        updatedLocationDetails,
        formattedAddress,
    }) => {
        setSelectedLocation(location);
        setLocationDetails((prevLocationDetails) => ({
            ...prevLocationDetails,
            ...updatedLocationDetails,
            formattedAddress,
        }));

        setData((prevData) => ({
            ...prevData,
            ...updatedLocationDetails,
            formattedAddress,
            lat: location.lat,
            lng: location.lng,
        }));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocationDetails({
            ...locationDetails,
            [name]: value,
        });

        setData({
            ...data,
            [name]: value,
        });
    };
    const [selectedCategory, setSelectedCategory] = useState(() => {
        return company ? reservation_categories.find((x) => x.id === company.reservation_category_id) : '';
    });
    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);
    const onChangeReservationCategoryId = (e) => {
        setData({ ...data, ["reservation_category_id"]: e.id });
    };

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        company ?   useForm({
            name: company.name,
            open_at: company.open_at,
            close_at: company.close_at,
            lat: company.lat,
            lng: company.lng,
            reservation_category_id: company.reservation_category_id,
            formattedAddress: company.formattedAddress,
        }) : useForm({
            name: '',
            open_at: '',
            close_at: '',
            lat: '',
            lng: '',
            reservation_category_id: '',
            formattedAddress: '',
        }) ;

    const submit = (e) => {
        e.preventDefault();
        patch(route("reservationprofile.update"));
    };
    return (
        <section className={className}>
            <header className="p-4 mt-4 border rounded-lg">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Company Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's company information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-5 md:col-span-12 md:mt-0">
                        <div className="shadow sm:rounded-md">
                            <div className="p-4 mt-6 space-y-6 bg-white md:px-6">
                                <div>
                                    <InputLabel for="name" value="Nama" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="block w-full mt-1"
                                        value={data.name}
                                        handleChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        autofocus
                                        autocomplete="name"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="reservation_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={reservation_categories}
                                                    selected={selectedCategory}
                                                    onChange={(e) => {
                                                        onChangeReservationCategoryId(
                                                            e
                                                        );
                                                        setSelectedCategory(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.reservation_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                             <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jam Buka
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="time"
                                                            name="open_at"
                                                            value={
                                                                data.open_at ??
                                                                ""
                                                            }
                                                            handleChange={(e) =>
                                                                setData("open_at", e.target.value)
                                                            }
                                                            required
                                                            id="open_at"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.open_at}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jam Tutup
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <input
                                                            type="time"
                                                            name="close_at"
                                                            value={
                                                                data.close_at ??
                                                                ""
                                                            }
                                                            handleChange={(e) =>
                                                                setData("close_at", e.target.value)
                                                            }
                                                            id="close_at"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.close_at}
                                                    </span>
                                                )}
                                            </div>

                                
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 mt-5 md:col-span-12 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="p-4 bg-white md:px-6">
                                <div className="w-full">
                                <InputLabel for="alamat" value="Alamat" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 mx-auto text-gray-400 icon icon-tabler icon-tabler-map-2"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                        <path d="M9 4v13" />
                                        <path d="M15 7v5.5" />
                                        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                        <path d="M19 18v.01" />
                                    </svg>

                                    <Map
                                        onLocationSelect={handleLocationSelect}
                                        lat={lat}
                                        lng={lng}
                                    />
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="col-span-12">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Lokasi Otomatis
                                            </label>
                                            <div className="flex rounded-md">
                                                <textarea
                                                    type="text"
                                                    name="formattedAddress"
                                                    value={locationDetails.formattedAddress ? locationDetails.formattedAddress : data.formattedAddress}
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.formattedAddress}
                                                </span>
                                            )}
                                        </div>
                                        {/* <div className="col-span-12 mt-2 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Nomor
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="street"
                                                    value={
                                                        locationDetails.street
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.street}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 mt-2 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Jalan/Gang
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="route"
                                                    value={
                                                        locationDetails.route
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.route}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Desa
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="village"
                                                    value={
                                                        locationDetails.village
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.village}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Kecamatan
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="subdistrict"
                                                    value={
                                                        locationDetails.subdistrict
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.subdistrict}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Kabupaten/Kota
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="district"
                                                    value={
                                                        locationDetails.district
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.district}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Provinsi
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="regency"
                                                    value={
                                                        locationDetails.regency
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.regency}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Negara
                                            </label>
                                            <div className="flex rounded-md">
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={
                                                        locationDetails.country
                                                    }
                                                    onChange={handleInputChange}
                                                    readOnly
                                                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                            </div>
                                            {errors && (
                                                <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                    {errors.country}
                                                </span>
                                            )}
                                        </div> */}
                                    </div>

                                    {/* <p className="text-xs text-gray-500">
                                                                        Alamat proyek akan langsung tampil setelah klik "Pilih Lokasi"
                                                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
