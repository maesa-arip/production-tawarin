import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import Form from './Form';

export default function Edit({ setIsOpenEditDialog, model,cars }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        email: model.email,
        password: model.password,
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
    console.log('ini 2')
    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            email: model.email,
            password: model.password,
        });
    }, [model]);
  return (
    <form onSubmit={onSubmit}>
            <Form
                errors={errors}
                data={data}
                model={model}
                cars={cars}
                setData={setData}
                submit={"Update"}
                closeButton = {closeButton}
            />
        </form>
  )
}
