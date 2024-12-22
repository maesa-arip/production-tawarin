import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import Form from './Form';

export default function Edit({ setIsOpenEditDialog, model,cars }) {
    const { data, setData, put, reset, errors } = useForm({
        id: model.id,
        email: model.email,
        password: model.password,
    });
   console.log(model.id)
    const closeButton = (e) => setIsOpenEditDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        put(route("reservationCounters.update_set_cars", model.id), {
            data,
            onSuccess: () => {
                reset(), setIsOpenEditDialog(false);
            },
        });
    };
    // console.log('ini 2')
    useEffect(() => {
        setData({
            ...data,
            id: model.id,
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
