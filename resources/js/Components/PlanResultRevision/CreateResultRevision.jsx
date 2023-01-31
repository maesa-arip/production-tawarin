import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormResultRevision from "./FormResultRevision";

export default function CreateResultRevision({
    setIsOpenAddDialog,result, result_all
}) {
    const { data, setData, post, reset, errors } = useForm({
        description: "",
        plan_result_id: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("plan.simpanrevisionresult",result), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormResultRevision {...{ errors, data, result_all, setData, submit: "Simpan", closeButton }} />
        </form>
    );
}
