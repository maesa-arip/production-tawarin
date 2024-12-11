import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog,employees,counters,reservationCarCategories}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("reservationCarCategories.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data, employees,counters,reservationCarCategories, setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
