import Button from "@/Components/Button";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import CreateUser from "@/Components/Users/CreateUser";
import EditeUser from "@/Components/Users/EditUser";
import AddModal from "@/Components/Modal/AddModal";
import EditModal from "@/Components/Modal/EditModal";
import DestroyModal from "@/Components/Modal/DestroyModal";
import CreateRevision from "@/Components/PlanRevision/CreateRevision";
import EditeRevision from "@/Components/PlanRevision/EditRevision";
import EditRevision from "@/Components/PlanRevision/EditRevision";
import { Inertia } from "@inertiajs/inertia";

export default function ShowResult({ plan, data, plan_master, plan_details }) {

    // console.log(plan_details);
    // console.log(plan_master);
    const openAddDialog = (result) => {
        setState(result);
        setIsOpenAddDialog(true);
        // console.log(result);
    };
    const openEditDialog = (person) => {
        setState(person);
        setIsOpenEditDialog(true);
    };
    const openDestroyDialog = (result) => {
        setState(result);
        setIsOpenDestroyDialog(true);
    };

    const storeRevision = () => {
        Inertia.post(route("plan.simpanrevisi", state.id), {
            onSuccess: () => setIsOpenDestroyDialog(false),
        });
        // console.log(state.result_id)
    };
    const handleClick = (e) => {
        const id = e.target.id;
        console.log(id);
      }
     

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
                <CreateRevision
                    isOpenAddDialog={isOpenAddDialog}
                    setIsOpenAddDialog={setIsOpenAddDialog}
                />
                <Button onClick={storeRevision}>
                    Simpan
                </Button>
            </AddModal>
            <EditModal
                isOpenEditDialog={isOpenEditDialog}
                setIsOpenEditDialog={setIsOpenEditDialog}
                size="2xl"
                title={"Edit User"}
            >
                <EditRevision
                    model={state}
                    isOpenEditDialog={isOpenEditDialog}
                    setIsOpenEditDialog={setIsOpenEditDialog}
                />
            </EditModal>
            <DestroyModal
                isOpenDestroyDialog={isOpenDestroyDialog}
                setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                size="2xl"
                title={"Delete User 123"} 
            >
                <Button color={"pink"} onClick={storeRevision}>
                    Delete
                </Button>
            </DestroyModal>
            <div className="bg-white">
                <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-4 mx-auto gap-y-8 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    {plan_details.map((result, index) => (
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
                                                                    onClick={() =>
                                                                        openAddDialog(
                                                                            result
                                                                        )
                                                                    }
                                                                    type="submit"
                                                                    className="w-full inline-flex justify-center items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 active:bg-pink-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                                                                    tabIndex={0}
                                                                >
                                                                    Add Revisi
                                                                </button>
                                                                <button 
                                                                onClick={() =>
                                                                openDestroyDialog(
                                                                    result
                                                                )
                                                            }
                                                                    type="button"
                                                                    name={result.slug}
                                                                    id={result.slug}
                                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                >
                                                                    Selesai {result.name}
                                                                </button>
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
