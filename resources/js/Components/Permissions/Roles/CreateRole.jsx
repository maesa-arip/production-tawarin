import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormRole from "./FormRole";

export default function CreateRole({
    setIsOpenAddDialog,
}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        guard_name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("roles.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormRole {...{ errors, data, setData, submit: "Save", closeButton }} />
        </form>
    );
}
