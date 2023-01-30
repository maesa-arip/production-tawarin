import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormRevision from "./FormRevision";

export default function CreateRevision({
    setIsOpenAddDialog,result
}) {
    const { data, setData, post, reset, errors } = useForm({
        description: "",
        plan_result_id: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("plan.simpanrevisi",result), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormRevision {...{ errors, data, setData, submit: "Simpan", closeButton }} />
        </form>
    );
}
