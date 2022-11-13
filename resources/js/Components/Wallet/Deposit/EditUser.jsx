import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormUser from "./FormUser";

export default function EditeUser({ setIsOpenEditDialog, model }) {
    const { data, setData, put, reset, errors } = useForm({
        username: model.username,
        name: model.name,
        email: model.email,
        password: model.password,
        address: model.address,
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
            username: model.username,
            name: model.name,
            email: model.email,
            password: model.password,
            address: model.address,
        });
    }, [model]);

    return (
        <form onSubmit={onSubmit}>
            <FormUser
                errors={errors}
                data={data}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
    );
}
