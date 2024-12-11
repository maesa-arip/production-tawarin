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
import Dialog from "@/Components/Dialog";
import { IconTrash } from "@tabler/icons";
import Filepond from "@/Pages/Uploads/Filepond";
import DestroyModal from "@/Components/Modal/DestroyModal";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    company,
    reservation_categories,
    className,
    media,
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
    const lat = company ? parseFloat(company.lat) || -8.670458 : -8.670458;
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
        return company
            ? reservation_categories.find(
                  (x) => x.id === company.reservation_category_id
              )
            : "";
    });
    // console.log(reservation_categories)
    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);
    const onChangeReservationCategoryId = (e) => {
        setData({ ...data, ["reservation_category_id"]: e.id });
    };

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        company
            ? useForm({
                  name: company.name,
                  open_at: company.open_at,
                  close_at: company.close_at,
                  lat: company.lat,
                  lng: company.lng,
                  reservation_category_id: company.reservation_category_id,
                  formattedAddress: company.formattedAddress,
              })
            : useForm({
                  name: "",
                  open_at: "",
                  close_at: "",
                  lat: "",
                  lng: "",
                  reservation_category_id: "",
                  formattedAddress: "",
              });

    const submit = (e) => {
        e.preventDefault();
        patch(route("reservationprofile.update"));
    };
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const [state, setState] = useState([]);
    const openDestroyDialog = (media) => {
        setState(media);
        setIsOpenDestroyDialog(true);
    };
    const destroyMedia = () => {
        Inertia.delete(route("media.destroy", state.id), {
            onSuccess: () => setIsOpenDestroyDialog(false),
        });
    };
    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
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
            <DestroyModal
                    isOpenDestroyDialog={isOpenDestroyDialog}
                    setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                    size="2xl"
                    title={"Hapus Media"}
                >
                    <Button color={"pink"} onClick={destroyMedia}>
                        Hapus
                    </Button>
                </DestroyModal>

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
                                            onChangeReservationCategoryId(e);
                                            setSelectedCategory(e);
                                        }}
                                    />
                                    {errors && (
                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                            {errors.reservation_category_id}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <InputLabel for="open_at" value="Jam Buka" />
                                    <TextInput
                                        id="open_at"
                                        type="time"
                                        className="block w-full mt-1"
                                        value={data.open_at}
                                        handleChange={(e) =>
                                            setData("open_at", e.target.value)
                                        }
                                        required
                                        autofocus
                                        step="3600"
                                        autocomplete="open_at"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.open_at}
                                    />
                                </div>
                                <div>
                                    <InputLabel for="close_at" value="Jam Tutup" />
                                    <TextInput
                                        id="close_at"
                                        type="time"
                                        className="block w-full mt-1"
                                        value={data.close_at}
                                        handleChange={(e) =>
                                            setData("close_at", e.target.value)
                                        }
                                        required
                                        autofocus
                                        autocomplete="close_at"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.close_at}
                                    />
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
                                                    value={
                                                        locationDetails.formattedAddress
                                                            ? locationDetails.formattedAddress
                                                            : data.formattedAddress
                                                    }
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Gambar Perusahaan
                                            </label>
                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="w-full text-center">
                                                    {media ? <><div className="mx-2 mb-6 bg-white rounded-lg shadow md:mx-4 lg:mx-6">
                                                        <div className="px-2 py-6 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                                                            <div className="grid grid-cols-2 col-span-2 gap-2 md:grid-cols-6 ">
                                                                {media?.map(
                                                                    (
                                                                        company,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="relative w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl "
                                                                        >
                                                                            {company.mime_type ==
                                                                            "video/mp4" ? (
                                                                                <>

                                                                                </>
                                                                            ) : (
                                                                                <img
                                                                                    className="object-cover w-full h-full "
                                                                                    src={`/storage/${company.id}/${company.file_name}`}
                                                                                    alt={
                                                                                        index
                                                                                    }
                                                                                />
                                                                            )}
                                                                             <button
                                                                                        id={company.id}
                                                                                        onClick={() =>
                                                                                            openDestroyDialog(
                                                                                                company
                                                                                            )
                                                                                        }
                                                                                        type="button"
                                                                                        className="absolute top-0 right-0 flex items-center justify-between cursor-pointer group focus:outline-none"
                                                                                        data-carousel-prev
                                                                                    >
                                                                                        <span className="inline-flex items-center justify-center w-5 h-5 bg-pink-300 rounded sm:w-10 sm:h-10 group-hover:bg-pink-400 ring-4 ring-white group-focus:outline-none ">
                                                                                            <IconTrash className="w-3 h-3 text-white md:w-5 md:h-5 sm:w-6 sm:h-6 "/>
                                                                                        </span>
                                                                                    </button>
                                                                        </div>
                                                                    )
                                                                )}

                                                                {open &&
                                                                    currentImage && (
                                                                        <Transition
                                                                            appear
                                                                            show={
                                                                                open
                                                                            }
                                                                            as={
                                                                                Fragment
                                                                            }
                                                                        >
                                                                            <Dialog
                                                                                as="div"
                                                                                className="relative z-10"
                                                                                open={
                                                                                    open
                                                                                }
                                                                                onClose={() =>
                                                                                    setOpen(
                                                                                        false
                                                                                    )
                                                                                }
                                                                            >
                                                                                <Transition.Child
                                                                                    as={
                                                                                        Fragment
                                                                                    }
                                                                                    enter="ease-out duration-300"
                                                                                    enterFrom="opacity-0"
                                                                                    enterTo="opacity-100"
                                                                                    leave="ease-in duration-200"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                >
                                                                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                                                                </Transition.Child>

                                                                                <div className="fixed inset-0 overflow-y-auto">
                                                                                    <div className="flex items-center justify-center min-h-full p-4 text-center">
                                                                                        <Transition.Child
                                                                                            as={
                                                                                                Fragment
                                                                                            }
                                                                                            enter="ease-out duration-300"
                                                                                            enterFrom="opacity-0 scale-95"
                                                                                            enterTo="opacity-100 scale-100"
                                                                                            leave="ease-in duration-200"
                                                                                            leaveFrom="opacity-100 scale-100"
                                                                                            leaveTo="opacity-0 scale-95"
                                                                                        >
                                                                                            <Dialog.Panel
                                                                                                className={`relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full`}
                                                                                            >
                                                                                                <div className="bg-white">
                                                                                                    <div className="sm:flex sm:items-start">
                                                                                                        <div className="text-center sm:mt-0 sm:text-left">
                                                                                                            <Dialog.Title
                                                                                                                as="h3"
                                                                                                                className="text-lg font-medium leading-6 text-gray-900"
                                                                                                            >
                                                                                                                {/* {title} */}
                                                                                                            </Dialog.Title>
                                                                                                            <div className="mx-2 my-2 md:mx-4 md:my-4">
                                                                                                                <p className="text-sm text-gray-500">
                                                                                                                    {/* {header} */}
                                                                                                                </p>
                                                                                                                {currentImage.mime_type ==
                                                                                                                "video/mp4" ? (
                                                                                                                    <div className="w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl">
                                                                                                                        <div className="">
                                                                                                                            <video
                                                                                                                                controls
                                                                                                                                src={`/storage/${currentImage.id}/${currentImage.file_name}`}
                                                                                                                            ></video>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                ) : (
                                                                                                                    <>
                                                                                                                        <img
                                                                                                                            className="rounded-lg"
                                                                                                                            src={`/storage/${currentImage.id}/${currentImage.file_name}`}
                                                                                                                            alt={
                                                                                                                                currentImage.collection_name
                                                                                                                            }
                                                                                                                        />
                                                                                                                    </>
                                                                                                                )}

                                                                                                                <button
                                                                                                                    onClick={() =>
                                                                                                                        setOpen(
                                                                                                                            false
                                                                                                                        )
                                                                                                                    }
                                                                                                                    type="button"
                                                                                                                    className="absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none"
                                                                                                                    data-carousel-prev
                                                                                                                >
                                                                                                                    <span className="inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-pink-300 ring-4 ring-white group-focus:outline-none">
                                                                                                                        <svg
                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                            className="w-5 h-5 text-white sm:w-6 sm:h-6 icon icon-tabler icon-tabler-x"
                                                                                                                            width={
                                                                                                                                24
                                                                                                                            }
                                                                                                                            height={
                                                                                                                                24
                                                                                                                            }
                                                                                                                            viewBox="0 0 24 24"
                                                                                                                            strokeWidth={
                                                                                                                                2
                                                                                                                            }
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
                                                                                                                            <path d="M18 6l-12 12" />
                                                                                                                            <path d="M6 6l12 12" />
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </button>

                                                                                                                <button
                                                                                                                    onClick={() =>
                                                                                                                        handleClick(
                                                                                                                            media[
                                                                                                                                (media.indexOf(
                                                                                                                                    currentImage
                                                                                                                                ) -
                                                                                                                                    1) %
                                                                                                                                    media.length
                                                                                                                            ]
                                                                                                                        )
                                                                                                                    }
                                                                                                                    type="button"
                                                                                                                    className="absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none"
                                                                                                                    data-carousel-prev
                                                                                                                >
                                                                                                                    <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-blue-300 ring-4 ring-white group-focus:outline-none">
                                                                                                                        <svg
                                                                                                                            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
                                                                                                                            fill="none"
                                                                                                                            stroke="currentColor"
                                                                                                                            viewBox="0 0 24 24"
                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                        >
                                                                                                                            <path
                                                                                                                                strokeLinecap="round"
                                                                                                                                strokeLinejoin="round"
                                                                                                                                strokeWidth="2"
                                                                                                                                d="M15 19l-7-7 7-7"
                                                                                                                            ></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    onClick={() =>
                                                                                                                        handleClick(
                                                                                                                            media[
                                                                                                                                (media.indexOf(
                                                                                                                                    currentImage
                                                                                                                                ) +
                                                                                                                                    1) %
                                                                                                                                    media.length
                                                                                                                            ]
                                                                                                                        )
                                                                                                                    }
                                                                                                                    type="button"
                                                                                                                    className="absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none"
                                                                                                                >
                                                                                                                    <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-blue-300 ring-4 ring-white group-focus:outline-none">
                                                                                                                        <svg
                                                                                                                            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
                                                                                                                            fill="none"
                                                                                                                            stroke="currentColor"
                                                                                                                            viewBox="0 0 24 24"
                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                        >
                                                                                                                            <path
                                                                                                                                strokeLinecap="round"
                                                                                                                                strokeLinejoin="round"
                                                                                                                                strokeWidth="2"
                                                                                                                                d="M9 5l7 7-7 7"
                                                                                                                            ></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </button>
                                                                                                                {/* {children} */}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Dialog.Panel>
                                                                                        </Transition.Child>
                                                                                    </div>
                                                                                </div>
                                                                            </Dialog>
                                                                        </Transition>
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div></> : <></>}
                                                    
                                                    <Filepond
                                                        inputname={"reservationcompany"}
                                                        allowMultiple={false}
                                                        maxFiles={"5"}
                                                        required={true}
                                                    />
                                                    <div className="flex justify-center text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
