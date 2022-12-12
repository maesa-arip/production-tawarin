import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import NavLink from "@/Components/NavLink";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        // <AuthenticatedLayout
        //     auth={auth}
        //     header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Profile</h2>}
        // >
        <>
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
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
                        <NavLink
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </NavLink>
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </>
        // </AuthenticatedLayout>
    );
}
Edit.layout = (page) => <App children={page}></App>;
