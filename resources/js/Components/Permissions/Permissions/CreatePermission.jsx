import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormPermission from "./FormPermission";

export default function CreatePermission({
    setIsOpenAddDialog,
}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        guard_name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("permissions.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormPermission {...{ errors, data, setData, submit: "Save", closeButton }} />
        </form>
    );
}
