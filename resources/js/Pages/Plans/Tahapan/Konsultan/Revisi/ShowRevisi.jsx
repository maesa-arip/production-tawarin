import Button from "@/Components/Button";
import App from "@/Layouts/App";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import AddModal from "@/Components/Modal/AddModal";
import EditModal from "@/Components/Modal/EditModal";
import DestroyModal from "@/Components/Modal/DestroyModal";
import CreateResultRevision from "@/Components/PlanResultRevision/CreateResultRevision";
import EditResultRevision from "@/Components/PlanResultRevision/EditResultRevision";
import InfoModal from "@/Components/Modal/InfoModal";

export default function ShowResult({
    plan,
    dataplan,
    plan_master,
    plan_details,
    plan_revisions,
    datarevisionresult,
    datadescriptionrevisionresult,
}) {
    // console.log(plan_details);

    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const openInfoDialog = (result) => {
        setState(result);
        // console.log(result);
        setIsOpenInfoDialog(true);
    };

    const openAddDialog = (result) => {
        setState(result);
        setIsOpenAddDialog(true);
    };
    const openEditDialog = (person) => {
        setState(person);
        setIsOpenEditDialog(true);
    };
    const openDestroyDialog = (result) => {
        setState(result);
        setIsOpenDestroyDialog(true);
    };

    const { data, setData, put, clearErrors, reset, errors } = useForm({});
    // console.log(dataplan);

    const finishRevision = (e) => {
        e.preventDefault();
        put(route("planresult.finish", state.result_id), {
            data,
            onSuccess: () => {
                reset(), setIsOpenDestroyDialog(false);
            },
        });
    };

    const [isOpenInfoModal, setIsOpenInfoModal] = useState(false);
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
                title={"Revisi " + state.name}
            >
                <CreateResultRevision
                    isOpenAddDialog={isOpenAddDialog}
                    setIsOpenAddDialog={setIsOpenAddDialog}
                    result={state.revision_id}
                    result_all={state}
                />
            </AddModal>
            <EditModal
                isOpenEditDialog={isOpenEditDialog}
                setIsOpenEditDialog={setIsOpenEditDialog}
                size="2xl"
                title={"Edit User"}
            >
                <EditResultRevision
                    model={state}
                    isOpenEditDialog={isOpenEditDialog}
                    setIsOpenEditDialog={setIsOpenEditDialog}
                />
            </EditModal>
            <DestroyModal
                isOpenDestroyDialog={isOpenDestroyDialog}
                setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                size="2xl"
                title={"Tidak ada revisi untuk " + state.name + " ?"}
            >
                <Button onClick={finishRevision}>Selesai</Button>
            </DestroyModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="6xl"
                title={
                    "Hasil Revisi Ke-" +
                    state.jumlah_pengajuan_revisi +
                    " dari " +
                    state.name
                }
                header={""}
            >
                {datadescriptionrevisionresult[state.revision_id] ? (
                    <div className="mt-1">
                        <textarea
                            rows={3}
                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                            placeholder=""
                            disabled
                            defaultValue={
                                datadescriptionrevisionresult[state.revision_id]
                            }
                        />
                    </div>
                ) : (
                    ""
                )}
                {datarevisionresult[state.revision_id] ? (
                    <>
                        <div className="relative flex justify-center px-6 pt-5 pb-6 mt-1 overflow-hidden border-2 border-gray-300 border-dashed rounded-md">
                            <div className="w-full text-center">
                                {datarevisionresult[state.revision_id].map(
                                    (result, index) => (
                                        <div
                                            key={{ state }}
                                            className=" shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                        >
                                            <img
                                                className="object-cover w-full h-full "
                                                src={`/storage/${result.id}/${result.file_name}`}
                                                alt={index}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </InfoModal>

            <div className="bg-white">
                <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-4 mx-auto gap-y-8 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    {plan_details.map((result, index) => (
                        <>
                            {dataplan[result.slug] ? (
                                <div className="mt-5 " key={index}>
                                    <div className="bg-white ">
                                        <div>
                                            <div className="mt-5 md:mt-0">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                {result.name}
                                                            </label>
                                                            <div className="py-3 sm:flex sm:flex-row-reverse">
                                                                <button
                                                                    onClick={() =>
                                                                        openInfoDialog(
                                                                            result
                                                                        )
                                                                    }
                                                                    type="submit"
                                                                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-pink-900 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md hover:bg-pink-200 active:bg-pink-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    tabIndex={0}
                                                                >
                                                                    Lihat
                                                                    Revisiiiiii
                                                                </button>
                                                            </div>

                                                            <div className="relative flex justify-center px-6 pt-5 pb-6 mt-1 overflow-hidden border-2 border-gray-300 border-dashed rounded-md">
                                                                {result.is_finish ==
                                                                    1 && (
                                                                    <div className="absolute top-0 right-0 w-16 h-16">
                                                                        <div className="absolute right-[-44px] top-[22px] w-[170px] transform rotate-45 bg-sky-100 text-center text-sky-900 font-semibold py-1">
                                                                            Selesai
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <div className="w-full text-center">
                                                                    {dataplan[
                                                                        result
                                                                            .slug
                                                                    ].map(
                                                                        (
                                                                            result,
                                                                            index
                                                                        ) =>
                                                                            index == 0 && (
                                                                                <div
                                                                                    key={
                                                                                        result.id
                                                                                    }
                                                                                    className=" shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
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
                                                                    {/* {dataplan[
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
                                                                    )} */}
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

                                                            {result.is_finish ==
                                                                1 &&
                                                            result.jumlah_pengajuan_revisi ==
                                                                0 ? (
                                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md text-sky-900 bg-sky-100 hover:bg-sky-200 active:bg-sky-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    >
                                                                        Tidak
                                                                        Ada
                                                                        Revisi
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {result.is_finish ==
                                                                1 &&
                                                            result.jumlah_pengajuan_revisi >
                                                                0 ? (
                                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md text-sky-900 bg-sky-100 hover:bg-sky-200 active:bg-sky-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    >
                                                                        Revisi
                                                                        Selesai
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}

                                                            {result.is_finish ==
                                                                0 &&
                                                            result.jumlah_pengajuan_revisi >=
                                                                result.jumlah_revisi ? (
                                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md text-sky-900 bg-sky-100 hover:bg-sky-200 active:bg-sky-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    >
                                                                        Pengajuan
                                                                        Revisi
                                                                        Sudah{" "}
                                                                        {
                                                                            result.jumlah_pengajuan_revisi
                                                                        }{" "}
                                                                        Kali
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {result.is_finish ==
                                                                0 &&
                                                            result.jumlah_pengajuan_revisi <
                                                                result.jumlah_revisi ? (
                                                                <div className="py-3 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        onClick={() =>
                                                                            openAddDialog(
                                                                                result
                                                                            )
                                                                        }
                                                                        type="submit"
                                                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-pink-900 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md hover:bg-pink-200 active:bg-pink-300 sm:ml-3 sm:w-auto sm:text-sm"
                                                                        tabIndex={
                                                                            0
                                                                        }
                                                                    >
                                                                        Lihat
                                                                        Permintaan
                                                                        Ke-
                                                                        {
                                                                            result.jumlah_pengajuan_revisi
                                                                        }
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
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
