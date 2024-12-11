import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog,employees,counters,reservationRatingCategories}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("reservationRatingCategories.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data, employees,counters,reservationRatingCategories, setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
