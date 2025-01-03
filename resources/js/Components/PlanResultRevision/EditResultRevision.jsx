import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormResultRevision from "./FormResultRevision";

export default function EditResultRevision({ setIsOpenEditDialog, model }) {
    const { data, setData, put, reset, errors } = useForm({
        description: model.description,
        plan_result_id: model.plan_result_id,
    });
    const closeButton = (e) => setIsOpenEditDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("users.update", model.id), {
            data,
            onSuccess: () => {
                reset(), setIsOpenEditDialog(false);
            },
        });
    };
    useEffect(() => {
        setData({
            ...data,
            description: model.description,
            plan_result_id: model.plan_result_id,
        });
    }, [model]);

    return (
        <form onSubmit={onSubmit}>
            <FormResultRevision
                errors={errors}
                data={data}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
    );
}
