import Button from "@/Components/Button";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import CreateUser from "@/Components/Users/CreateUser";
import EditeUser from "@/Components/Users/EditUser";
import AddModal from "@/Components/Modal/AddModal";
import EditModal from "@/Components/Modal/EditModal";
import DestroyModal from "@/Components/Modal/DestroyModal";

export default function ShowResult({ plan, data, plan_master }) {
    const openAddDialog = () => {
        setIsOpenAddDialog(true);
    };
    const openEditDialog = (person) => {
        setState(person);
        setIsOpenEditDialog(true);
    };
    const openDestroyDialog = (person) => {
        setState(person);
        setIsOpenDestroyDialog(true);
    };

    // const destroyUser = () => {
    //     Inertia.delete(route("users.destroy", state.id), {
    //         onSuccess: () => setIsOpenDestroyDialog(false),
    //     });
    // };
    const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
    const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
    const [state, setState] = useState([]);
    return (
        <div>
            <Head title="Upload Hasil" />
            <AddModal
                isOpenAddDialog={isOpenAddDialog}
                setIsOpenAddDialog={setIsOpenAddDialog}
                size="2xl"
                title={"Revisi"}
            >
                <CreateUser
                    isOpenAddDialog={isOpenAddDialog}
                    setIsOpenAddDialog={setIsOpenAddDialog}
                />
            </AddModal>
            <EditModal
                isOpenEditDialog={isOpenEditDialog}
                setIsOpenEditDialog={setIsOpenEditDialog}
                size="2xl"
                title={"Edit User"}
            >
                <EditeUser
                    model={state}
                    isOpenEditDialog={isOpenEditDialog}
                    setIsOpenEditDialog={setIsOpenEditDialog}
                />
            </EditModal>
            <div className="bg-white">
                <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-4 mx-auto gap-y-8 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    {/* {data.gambar_arsitektur ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Gambar Arsitektur
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.gambar_arsitektur.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.gambar_arsitektur.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Gambar Arsitektur dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.gambar_3d_interior ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Gambar 3D Interior
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.gambar_3d_interior.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.gambar_3d_interior.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Gambar 3D Interior dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.gambar_3d_exterior ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Gambar 3D Exterior
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.gambar_3d_exterior.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.gambar_3d_exterior.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Gambar 3D Exterior dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.animasi_3d ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Animasi 3D
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.animasi_3d.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.animasi_3d.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Animasi 3D dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.gambar_struktur ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Gambar Struktur
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.gambar_struktur.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.gambar_struktur.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Gambar Struktur dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.gambar_mep ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Gambar MEP
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.gambar_mep.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.gambar_mep.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Gambar MEP dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.rab_dan_spesifikasi_teknis ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        RAB dan Spesifikasi
                                                        Teknis
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.rab_dan_spesifikasi_teknis.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.rab_dan_spesifikasi_teknis.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil RAB dan Spesifikasi Teknis dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.time_schedule_dan_bobot_pembayaran ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Time Schedule dan Bobot
                                                        Pembayaran
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.time_schedule_dan_bobot_pembayaran.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.time_schedule_dan_bobot_pembayaran.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Time Schedule dan Bobot Pembayaran dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {data.lainnya ? (
                        <div className="mt-5 ">
                            <div className="bg-white ">
                                <div>
                                    <div className="mt-5 md:mt-0">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Lainnya
                                                    </label>
                                                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="w-full text-center">
                                                            {data.lainnya.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index <
                                                                        2 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                            {data.lainnya.map(
                                                                (
                                                                    result,
                                                                    index
                                                                ) =>
                                                                    index > 1 &&
                                                                    index <
                                                                        6 && (
                                                                        <div
                                                                            key={
                                                                                result.id
                                                                            }
                                                                            className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                        >
                                                                            <img
                                                                                className="object-cover w-full h-full "
                                                                                src={`/storage/${result.id}/${result.file_name}`}
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            rows={3}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                            placeholder=""
                                                            disabled
                                                            defaultValue={
                                                                "Ini adalah hasil Lainnya dari konsultan"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <Link
                                                            type="submit"
                                                            className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                            tabIndex={0}
                                                        >
                                                            Revisi
                                                        </Link>
                                                        <Link
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        >
                                                            Selesai
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )} */}

                    {plan_master.map((result, index) => (
                        <>
                            {data[result.slug] ? (
                                <div className="mt-5 ">
                                    <div className="bg-white ">
                                        <div>
                                            <div className="mt-5 md:mt-0">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                {result.name}
                                                            </label>
                                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                <div className="w-full text-center">
                                                                    {data[
                                                                        result
                                                                            .slug
                                                                    ].map(
                                                                        (
                                                                            result,
                                                                            index
                                                                        ) =>
                                                                            index <
                                                                                2 && (
                                                                                <div
                                                                                    key={
                                                                                        result.id
                                                                                    }
                                                                                    className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                                                                >
                                                                                    <img
                                                                                        className="object-cover w-full h-full "
                                                                                        src={`/storage/${result.id}/${result.file_name}`}
                                                                                        alt={
                                                                                            index
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            )
                                                                    )}
                                                                    {data[
                                                                        result
                                                                            .slug
                                                                    ].map(
                                                                        (
                                                                            result,
                                                                            index
                                                                        ) =>
                                                                            index >
                                                                                1 &&
                                                                            index <
                                                                                6 && (
                                                                                <div
                                                                                    key={
                                                                                        result.id
                                                                                    }
                                                                                    className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                                                                >
                                                                                    <img
                                                                                        className="object-cover w-full h-full "
                                                                                        src={`/storage/${result.id}/${result.file_name}`}
                                                                                        alt={
                                                                                            index
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            )
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    rows={3}
                                                                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                                                    placeholder=""
                                                                    disabled
                                                                    defaultValue={
                                                                        "Ini adalah hasil " +
                                                                        result.name +
                                                                        " dari konsultan"
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                                <button
                                                                    onClick={
                                                                        openAddDialog
                                                                    }
                                                                    type="submit"
                                                                    className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    tabIndex={0}
                                                                >
                                                                    Revisi
                                                                </button>
                                                                <Link
                                                                    type="button"
                                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                >
                                                                    Selesai
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
ShowResult.layout = (page) => <App children={page}></App>;
