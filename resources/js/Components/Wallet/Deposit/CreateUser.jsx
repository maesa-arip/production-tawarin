import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormDeposit from "./FormDeposit";

export default function CreateDeposit({
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
        post(route("admin.deposit.update"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormDeposit {...{ errors, data, setData, submit: "Save", closeButton }} />
        </form>
    );
}
