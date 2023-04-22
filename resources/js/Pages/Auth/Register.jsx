import React, { useEffect, useState } from "react";
import Button from "@/Components/Button";
import GuestDefault from "@/Layouts/GuestDefault";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import TextInputCheckbox from "@/Components/TextInputCheckbox";
import InputLabel from "@/Components/InputLabel";
import RadioCard from "@/Components/RadioCard";

export default function Register({ joinas }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        username: "",
        phone: "",
        password: "",
        password_confirmation: "",
        join_as_id: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onChange = (event) => {
        setData(
            event.target.name,
            (event.target.type === "checkbox") | (event.target.type === "radio")
                ? event.target.checked
                : event.target.value
        );
    };
    const [selected, setSelected] = useState();
    const onChangeRadio = (e) => {
        setData({ ...data, ["join_as_id"]: e.id });
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="username" value="Username" />
                    <Input
                        type="text"
                        name="username"
                        value={data.username}
                        className="block w-full mt-1"
                        autoComplete="username"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="phone" value="Phone" />
                    <Input
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="block w-full mt-1"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="address" value="Address" />
                    <Input
                        type="text"
                        name="address"
                        value={data.address}
                        className="block w-full mt-1"
                        autoComplete="address"
                        isFocused={true}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="Confirm Password"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 mt-2 mb-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Roles
                        </p>
                    </div>
                </div>

                <RadioCard
                    ShouldMap={joinas}
                    selected={selected}
                    onChange={(e) => {
                        onChangeRadio(e);
                        setSelected(e);
                    }}
                />

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                    >
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </>
    );
}
Register.layout = (page) => <GuestDefault children={page} />;
