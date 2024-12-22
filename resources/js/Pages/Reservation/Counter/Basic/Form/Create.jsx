import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog,cars}) {
    console.log(cars)
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });
    console.log('ini 1')
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data, cars, setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
