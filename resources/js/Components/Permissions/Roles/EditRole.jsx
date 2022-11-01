import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormRole from "./FormRole";

export default function EditRole({ setIsOpenEditDialog, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        guard_name: model.guard_name,
    });
    const closeButton = (e) => setIsOpenEditDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("roles.update", model.id), {
            data,
            onSuccess: () => {
                reset(), setIsOpenEditDialog(false);
            },
        });
    };
    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            guard_name: model.guard_name,
        });
    }, [model]);

    return (
        <form onSubmit={onSubmit}>
            <FormRole
                errors={errors}
                data={data}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
    );
}
