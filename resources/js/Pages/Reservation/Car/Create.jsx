import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        merk: "",
        standar_kategori: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("reservationCar.store"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data,setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
