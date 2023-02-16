import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import Form from './Form';

export default function Edit({ setIsOpenEditDialog, model,roles }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
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
        });
    }, [model]);
  return (
    <form onSubmit={onSubmit}>
            <Form
                errors={errors}
                data={data}
                model={model}
                roles={roles}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
  )
}
