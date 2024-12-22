import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Form from './Form';

export default function Create({setIsOpenAddDialog,teamheader,counters}) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
    });
    const closeButton = (e) => setIsOpenAddDialog(false);
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("reservation.store_team_layanan"), {
            data,
            onSuccess: () => {
                reset(), setIsOpenAddDialog(false);
            },
        });
    };
  return (
    <form onSubmit={onSubmit}>
            <Form {...{ errors, data, teamheader,counters, setData, submit: "Simpan", closeButton }} />
        </form>
  )
}
