import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormPermission from "./FormPermission";

export default function EditPermission({ setIsOpenEditDialog, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        guard_name: model.guard_name,
    });
    const closeButton = (e) => setIsOpenEditDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("permissions.update", model.id), {
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
            <FormPermission
                errors={errors}
                data={data}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
    );
}
