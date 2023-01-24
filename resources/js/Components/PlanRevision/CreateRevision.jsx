import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormRevision from "./FormRevision";

export default function CreateRevision({
    setIsOpenAddDialog,
}) {
    const { data, setData, post, reset, errors } = useForm({
        username: "",
        name: "",
        email: "",
        password: "",
        address: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormRevision {...{ errors, data, setData, submit: "Save", closeButton }} />
        </form>
    );
}
