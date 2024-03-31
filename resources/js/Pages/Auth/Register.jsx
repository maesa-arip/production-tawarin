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
    const pathArray = window.location.pathname.split("/");
    const referral = pathArray[2];
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            from_referral: referral ? referral : prevData.from_referral,
        }));
    }, [referral]);

    const onChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]:
                event.target.type === "checkbox" ||
                event.target.type === "radio"
                    ? event.target.checked
                    : event.target.value,
        }));
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
                    <Label forInput="from_referral" value="Referral" />
                    <Input
                        type="text"
                        name="from_referral"
                        readOnly={referral ? true : false}
                        defaultValue={referral ? referral : data.from_referral}
                        // value={referral ? referral : data.from_referral}
                        className={
                            referral
                                ? "block w-full mt-1 cursor-not-allowed"
                                : "block w-full mt-1"
                        }
                        autoComplete="from_referral"
                        isFocused={true}
                        onChange={onChange}
                    />
                    {referral ? (
                        <div className="flex justify-center mt-4 text-sm text-gray-600">
                            <div className="relative px-3 py-4 text-sm text-gray-500 rounded shadow ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute justify-center inline mr-3 -mt-1 text-center text-white rounded-full w-7 h-7 -left-3 -top-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <circle cx={12} cy={12} r={9} />
                                    <line x1={12} y1={8} x2="12.01" y2={8} />
                                    <polyline points="11 12 12 12 12 16 13 16" />
                                </svg>
                                <p className="text-justify">
                                    Anda sudah menggunakan referral, kolom ini
                                    tidak bisa dirubah.
                                </p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
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
                {/* <div className="mt-4">
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
                </div> */}

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
                {/* <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 mt-2 mb-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Roles
                        </p>
                    </div>
                </div> */}

                {/* <RadioCard
                    ShouldMap={joinas}
                    selected={selected}
                    onChange={(e) => {
                        onChangeRadio(e);
                        setSelected(e);
                    }}
                /> */}

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
                <div class="flex items-center justify-center mt-4">
                <a
                            href="/auth/google"
                            class="mr-2 inline-block items-center px-4 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-300 focus:outline-none   disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            Register Google
                        </a>
                    {/* <a
                        href="/auth/google"
                        class="mr-2 inline-block items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-400 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                        Register Google
                    </a> */}
                    {/* <a
                        href="/auth/github"
                        class="px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500"
                    >
                        Register GitHub
                    </a> */}
                </div>
            </form>
        </>
    );
}
Register.layout = (page) => <GuestDefault children={page} />;
