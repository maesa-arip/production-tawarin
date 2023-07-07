import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import NavLink from "@/Components/NavLink";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        // <AuthenticatedLayout
        //     auth={auth}
        //     header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Profile</h2>}
        // >
        <>
            <Head title="Profile" />
            <div className="py-12">
                
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                    <div className="flex justify-center text-lg mb-2">Kode Referral</div>
                    <div className="flex justify-center text-lg items-center px-2 py-1 font-semibold rounded"><PrimaryButton>{auth.user.referral}</PrimaryButton></div>
                    </div>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <NavLink className="inline-flex items-center py-1 text-xs font-semibold tracking-normal text-white uppercase transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md px-7 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </NavLink>
                    </div>


                    {/* <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </>
        // </AuthenticatedLayout>
    );
}
Edit.layout = (page) => <App children={page}></App>;
