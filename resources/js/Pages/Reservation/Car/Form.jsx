import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import TextInputCheckbox from "@/Components/TextInputCheckbox";
import { set } from "lodash";
import React, { useEffect, useState } from "react";

export default function Form({
    errors,
    submit,
    data,
    setData,
    model,
    closeButton,
}) {
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    
    return (
        <>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <InputLabel for="name" value="Nama" />
                        <TextInput
                            id="name"
                            value={data.name}
                            handleChange={(e) =>
                                setData("name", e.target.value)
                            }
                            // onChange={onChange}
                            type="text"
                            className="block w-full mt-1"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <InputLabel for="merk" value="Merk" />
                        <TextInput
                            id="merk"
                            value={data.merk}
                            handleChange={(e) =>
                                setData("merk", e.target.value)
                            }
                            // handleChange={onChange}
                            type="text"
                            className="block w-full mt-1"
                        />
                        <InputError message={errors.merk} className="mt-2" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <InputLabel for="standar_kategori" value="Kategori" />
                        <TextInput
                            id="standar_kategori"
                            value={data.standar_kategori}
                            handleChange={(e) =>
                                setData("standar_kategori", e.target.value)
                            }
                            // handleChange={onChange}
                            type="text"
                            className="block w-full mt-1"
                        />
                        <InputError message={errors.standar_kategori} className="mt-2" />
                    </div>
                    
                </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <PrimaryButton>{submit}</PrimaryButton>
                <SecondaryButton className="mx-2" onClick={closeButton}>
                    Batal
                </SecondaryButton>
            </div>
        </>
    );
}
