import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog,roles}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("permissions.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data, roles, setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
