import React, { useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper";
import Button from "@/Components/Button";
import Filepond from "@/Pages/Uploads/Filepond";
import ListBoxPage from "@/Components/ListBoxPage";
import CurrencyInput from "react-currency-input-field";
import ThirdButton from "@/Components/ThirdButton";
import DangerButton from "@/Components/DangerButton";
import { IconTrash } from "@tabler/icons";
import Map from "@/Components/Map";

export default function Create({
    plan_master_checkboxs,
    plan_master_texts,
    plan_categories,
    plan_master_rooms,
}) {
    const {allSessions} = usePage().props;
    // const [enabled, setEnabled] = useState(false);
    const [anggaran, setAnggaran] = useState("");
    const [acuanAnggaran, setAcuanAnggaran] = useState("");
    const [acuanDariAnggaran, setAcuanDariAnggaran] = useState("");
    const [acuanSampaiAnggaran, setAcuanSampaiAnggaran] = useState("");
    const [dariAnggaran, setDariAnggaran] = useState("");
    const [sampaiAnggaran, setSampaiAnggaran] = useState("");
    const [luasBangunan, setLuasBangunan] = useState(0);
    const [panjang, setPanjang] = useState(0);
    const [lebar, setLebar] = useState(0);

    console.log(allSessions)
    const onChangePanjangBangunanHandler = (e) => {
        setPanjang(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const onChangeLebarBangunanHandler = (e) => {
        setLebar(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    useEffect(() => {
        setData({
            ...data,
            ["luas_tanah"]: (parseFloat(panjang) * parseFloat(lebar)).toFixed(
                2
            ),
        });
    }, [panjang, lebar]);

    const onChangeLuasBangunanHandler = (e) => {
        setLuasBangunan(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    useEffect(() => {
        setAcuanAnggaran(luasBangunan * 4000000);
        setAcuanDariAnggaran((luasBangunan * 4000000 * 1) / 100);
        setAcuanSampaiAnggaran((luasBangunan * 4000000 * 3) / 100);
    }, [luasBangunan]);

    const formatRupiahAcuanAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(acuanAnggaran);
    const formatRupiahAcuanDariAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(acuanDariAnggaran);
    const formatRupiahAcuanSampaiAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(acuanSampaiAnggaran);

    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);

    const onChangeDariAnggaranHandler = (e) => {
        setDariAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahDariAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(dariAnggaran);

    const onChangeSampaiAnggaranHandler = (e) => {
        setSampaiAnggaran(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const formatRupiahSampaiAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(sampaiAnggaran);

    const { data, setData, post, processing, reset, errors } = useForm({});

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onChangePlanCategoryId = (e) => {
        setData({ ...data, ["plan_category_id"]: e.id });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        post(route("plans.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    };

    const [inputFields, setInputFields] = useState([{ name: "", count: "" }]);
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
        // console.log(data);
    };
    const addFields = (e) => {
        e.preventDefault();
        let newfield = { name: "", count: "" };
        setInputFields([...inputFields, newfield]);
    };
    // const submit = (e) => {
    //     e.preventDefault();
    //     console.log(inputFields);
    // };
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };
    useEffect(() => {
        setData({ ...data, ["rooms"]: inputFields });
    }, [inputFields]);

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locationDetails, setLocationDetails] = useState({
        formattedAddress: "",
        street: "",
        village: "",
        subdistrict: "",
        district: "",
        regency: "",
        country: "",
    });
    const lat = ''; 
    const lng = ''; 

    const handleLocationSelect = ({
        location,
        updatedLocationDetails,
        formattedAddress,
    }) => {
        setSelectedLocation(location);
        setLocationDetails((prevLocationDetails) => ({
            ...prevLocationDetails,
            ...updatedLocationDetails,
            formattedAddress,
        }));

        setData((prevData) => ({
            ...prevData,
            ...updatedLocationDetails,
            formattedAddress,
            lat: location.lat,
            lng: location.lng,
        }));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocationDetails({
            ...locationDetails,
            [name]: value,
        });

        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <div>
            <Head title="Plan Create" />
            <Container>
                <form onSubmit={onSubmitHandler}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Data Perencanaan
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap perencanaanmu
                                        disini.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Perencanaan
                                                </label>
                                                <div className="flex mt-1 rounded-md">
                                                    <div className="flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1">
                                                        <div className="inline-flex items-center text-sm text-gray-500 rounded-l-md">
                                                            Perencanaan
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                data.name ?? ""
                                                            }
                                                            onChange={onChange}
                                                            id="name"
                                                            autoComplete="off"
                                                            className="w-full border-0 focus:ring-0 form-text"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.name}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="plan_category_id"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Pilih Kategori
                                                </label>
                                                <ListBoxPage
                                                    ShouldMap={plan_categories}
                                                    selected={selected}
                                                    onChange={(e) => {
                                                        onChangePlanCategoryId(
                                                            e
                                                        );
                                                        setSelected(e);
                                                    }}
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.plan_category_id
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="jangka_waktu_penawaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Penawaran
                                                    (Hari)
                                                </label>

                                                <input
                                                    type="number"
                                                    name="jangka_waktu_penawaran"
                                                    id="jangka_waktu_penawaran"
                                                    value={
                                                        data.jangka_waktu_penawaran ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.jangka_waktu_penawaran
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="jangka_waktu_pelaksanaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Pelaksanaan
                                                    (Hari)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jangka_waktu_pelaksanaan"
                                                    id="jangka_waktu_pelaksanaan"
                                                    value={
                                                        data.jangka_waktu_pelaksanaan ??
                                                        ""
                                                    }
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {
                                                            errors.jangka_waktu_pelaksanaan
                                                        }
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="jumlah_revisi"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Revisi
                                                </label>
                                                <input
                                                    type="number"
                                                    name="jumlah_revisi"
                                                    id="jumlah_revisi"
                                                    value={
                                                        data.jumlah_revisi ?? ""
                                                    }
                                                    onChange={onChange}
                                                    min="1"
                                                    max="5"
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.jumlah_revisi}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="panjang"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Panjang Tanah M
                                                </label>
                                                <input
                                                    type="number"
                                                    name="panjang"
                                                    id="panjang"
                                                    value={data.panjang ?? ""}
                                                    onChange={
                                                        onChangePanjangBangunanHandler
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.panjang && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.panjang}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="lebar"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Lebar Tanah M<sup></sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    name="lebar"
                                                    id="lebar"
                                                    value={data.lebar ?? ""}
                                                    onChange={
                                                        onChangeLebarBangunanHandler
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.lebar && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.lebar}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="luas_tanah"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Luas Tanah M<sup>2</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    name="luas_tanah"
                                                    id="luas_tanah"
                                                    readOnly
                                                    value={
                                                        data.luas_tanah ?? ""
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-500 rounded-md shadow-sm ring-gray-500 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                />
                                                {errors.luas_tanah && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.luas_tanah}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-12 md:col-span-4">
                                                <label
                                                    htmlFor="luas_bangunan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Perkiraan Luas Bangunan M
                                                    <sup>2</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    name="luas_bangunan"
                                                    id="luas_bangunan"
                                                    value={
                                                        data.luas_bangunan ?? ""
                                                    }
                                                    onChange={
                                                        onChangeLuasBangunanHandler
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.luas_bangunan && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.luas_bangunan}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="block w-full col-span-12 px-2 py-1 mt-1 border-2 border-gray-500 rounded-md shadow-sm ring-gray-500 sm:text-sm md:col-span-6">
                                                <div className="col-span-12 md:col-span-6">
                                                    <label
                                                        htmlFor="acuan_anggaran"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Acuan Anggaran Proyek
                                                    </label>

                                                    <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                        {acuanAnggaran &&
                                                            formatRupiahAcuanAnggaran}{" "}
                                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                            {acuanAnggaran &&
                                                                "(" +
                                                                    Terbilang(
                                                                        acuanAnggaran
                                                                    ) +
                                                                    " Rupiah)"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <label
                                                        htmlFor="acuan_anggaran"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Acuan Anggaran
                                                        Perencanaan (Dari)
                                                    </label>

                                                    <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                        {acuanDariAnggaran &&
                                                            formatRupiahAcuanDariAnggaran}{" "}
                                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                            {acuanDariAnggaran &&
                                                                "(" +
                                                                    Terbilang(
                                                                        acuanDariAnggaran
                                                                    ) +
                                                                    " Rupiah)"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <label
                                                        htmlFor="acuan_anggaran"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Acuan Anggaran
                                                        Perencanan (Sampai)
                                                    </label>

                                                    <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                        {acuanSampaiAnggaran &&
                                                            formatRupiahAcuanSampaiAnggaran}{" "}
                                                        <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                            {acuanSampaiAnggaran &&
                                                                "(" +
                                                                    Terbilang(
                                                                        acuanSampaiAnggaran
                                                                    ) +
                                                                    " Rupiah)"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 mt-5 md:mt-0 md:col-span-6">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Denah Lokasi
                                                                Beserta Ukuran Lahan
                                                                (Max 5)
                                                            </label>
                                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                <div className="w-full text-center">
                                                                    <svg
                                                                        className="w-12 h-12 mx-auto text-gray-400"
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        viewBox="0 0 48 48"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <Filepond
                                                                        inputname={
                                                                            "denahlokasiukuran"
                                                                        }
                                                                        allowMultiple={
                                                                            true
                                                                        }
                                                                        maxFiles={
                                                                            "5"
                                                                        }
                                                                        // required={
                                                                        //     true
                                                                        // }
                                                                    />
                                                                    <div className="flex justify-center text-sm text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                        >
                                                                            <span>
                                                                                Upload
                                                                                a
                                                                                file
                                                                            </span>
                                                                        </label>
                                                                        <p className="pl-1">
                                                                            or
                                                                            drag
                                                                            and
                                                                            drop
                                                                        </p>
                                                                    </div>
                                                                    <p className="text-xs text-gray-500">
                                                                        PNG,
                                                                        JPG, GIF
                                                                        up to
                                                                        10MB
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 mt-5 md:mt-0 md:col-span-6">
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                Foto Kondisi Lahan Saat Ini (Max 5)
                                                            </label>
                                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                                <div className="w-full text-center">
                                                                    <svg
                                                                        className="w-12 h-12 mx-auto text-gray-400"
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        viewBox="0 0 48 48"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                    <Filepond
                                                                        inputname={
                                                                            "kondisisaatini"
                                                                        }
                                                                        allowMultiple={
                                                                            true
                                                                        }
                                                                        maxFiles={
                                                                            "5"
                                                                        }
                                                                        // required={
                                                                        //     true
                                                                        // }
                                                                    />
                                                                    <div className="flex justify-center text-sm text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                        >
                                                                            <span>
                                                                                Upload
                                                                                a
                                                                                file
                                                                            </span>
                                                                        </label>
                                                                        <p className="pl-1">
                                                                            or
                                                                            drag
                                                                            and
                                                                            drop
                                                                        </p>
                                                                    </div>
                                                                    <p className="text-xs text-gray-500">
                                                                        PNG,
                                                                        JPG, GIF
                                                                        up to
                                                                        10MB
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="anggaran_proyek"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Proyek
                                                </label>
                                                <input
                                                    type="number"
                                                    name="anggaran_proyek"
                                                    id="anggaran_proyek"
                                                    onChange={
                                                        onChangeAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.anggaran_proyek && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.anggaran_proyek}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {anggaran &&
                                                        formatRupiahAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {anggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    anggaran
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="dari_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan (dari)
                                                </label>
                                                {/* <CurrencyInput
                                                    id="dari_anggaran"
                                                    name="dari_anggaran"
                                                    placeholder="Masukan anggaran"
                                                    prefix="Rp "
                                                    decimalSeparator=","
                                                    groupSeparator="."
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    onValueChange={(
                                                        value,
                                                        name
                                                    ) =>
                                                    console.log(value, name)
                                                    }
                                                /> */}
                                                <input
                                                    type="number"
                                                    name="dari_anggaran"
                                                    id="dari_anggaran"
                                                    onChange={
                                                        onChangeDariAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.dari_anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.dari_anggaran}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {dariAnggaran &&
                                                        formatRupiahDariAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {dariAnggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    dariAnggaran
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <label
                                                    htmlFor="sampai_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan
                                                    (sampai)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="sampai_anggaran"
                                                    id="sampai_anggaran"
                                                    onChange={
                                                        onChangeSampaiAnggaranHandler
                                                    }
                                                    onWheel={(e) =>
                                                        e.target.blur()
                                                    }
                                                    autoComplete="off"
                                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {errors.sampai_anggaran && (
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                        {errors.sampai_anggaran}
                                                    </span>
                                                )}
                                                <div className="inline mt-1 ml-1 text-xs font-semibold text-indigo-500">
                                                    {sampaiAnggaran &&
                                                        formatRupiahSampaiAnggaran}{" "}
                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500">
                                                        {sampaiAnggaran &&
                                                            "(" +
                                                                Terbilang(
                                                                    sampaiAnggaran
                                                                ) +
                                                                " Rupiah)"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Alamat Proyek
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukan data lengkap alamat proyekmu
                                        disini.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="p-4 bg-white md:px-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12 mt-5 md:mt-0">
                                                <div>
                                                    <div className="w-full">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-12 h-12 mx-auto text-gray-400 icon icon-tabler icon-tabler-map-2"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
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
                                                            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                                            <path d="M9 4v13" />
                                                            <path d="M15 7v5.5" />
                                                            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                                            <path d="M19 18v.01" />
                                                        </svg>

                                                        <Map
                                                            onLocationSelect={
                                                                handleLocationSelect
                                                            } lat={lat} lng={lng}
                                                        />
                                                        <div className="grid grid-cols-12 gap-x-6">
                                                            <div className="col-span-12">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Lokasi Otomatis
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="formattedAddress"
                                                                        value={
                                                                            locationDetails.formattedAddress
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.formattedAddress
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 mt-2 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Nomor
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="street"
                                                                        value={
                                                                            locationDetails.street
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.street
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 mt-2 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Jalan/Gang
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="route"
                                                                        value={
                                                                            locationDetails.route
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.route
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Desa
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="village"
                                                                        value={
                                                                            locationDetails.village
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.village
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Kecamatan
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="subdistrict"
                                                                        value={
                                                                            locationDetails.subdistrict
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.subdistrict
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Kabupaten/Kota
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="district"
                                                                        value={
                                                                            locationDetails.district
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.district
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Provinsi
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="regency"
                                                                        value={
                                                                            locationDetails.regency
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.regency
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    Negara
                                                                </label>
                                                                <div className="flex rounded-md">
                                                                    <input
                                                                        type="text"
                                                                        name="country"
                                                                        value={
                                                                            locationDetails.country
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                        readOnly
                                                                        className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                {errors && (
                                                                    <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                        {
                                                                            errors.country
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Kebutuhan Perencanaan
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Silakan centang dan isi kebutuhan
                                        perencanaanmu, agar para konsultan yang
                                        menawar bisa menyiapkan data sesuai
                                        dengan kebutuhanmu.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        {plan_master_checkboxs.map(
                                            (plan_master_checkbox, i) => (
                                                <div
                                                    key={
                                                        plan_master_checkbox.id
                                                    }
                                                    className="flex items-center justify-between px-3 py-4 rounded-md shadow"
                                                >
                                                    {plan_master_checkbox.name}
                                                    <label
                                                        htmlFor={
                                                            plan_master_checkbox.slug
                                                        }
                                                        className="relative inline-flex items-center cursor-pointer"
                                                    >
                                                        <input
                                                            key={
                                                                plan_master_checkbox.id
                                                            }
                                                            onChange={onChange}
                                                            value={
                                                                data.name ?? ""
                                                            }
                                                            type="checkbox"
                                                            id={
                                                                plan_master_checkbox.slug
                                                            }
                                                            name={
                                                                plan_master_checkbox.slug
                                                            }
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-600  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 peer-after:ring-indigo-500" />
                                                    </label>
                                                </div>
                                            )
                                        )}
                                        {plan_master_texts.map(
                                            (plan_master_text, i) => (
                                                <div key={plan_master_text.id}>
                                                    <label
                                                        htmlFor={
                                                            plan_master_text.slug
                                                        }
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        {plan_master_text.name}
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            key={
                                                                plan_master_text.id
                                                            }
                                                            id={
                                                                plan_master_text.slug
                                                            }
                                                            name={
                                                                plan_master_text.slug
                                                            }
                                                            rows={3}
                                                            onChange={onChange}
                                                            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            placeholder=""
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Masukan Keterangan{" "}
                                                        {plan_master_text.name}{" "}
                                                        Bila diperlukan.
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Kebutuhan Ruang
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Silakan centang dan isi kebutuhan
                                        perencanaanmu, agar para konsultan yang
                                        menawar bisa menyiapkan data sesuai
                                        dengan kebutuhanmu.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="grid grid-cols-12 py-5 bg-white gap-y-8">
                                        {plan_master_rooms.map(
                                            (plan_master_room, i) => (
                                                <div
                                                    className="col-span-12 px-6 md:col-span-6 lg:col-span-4"
                                                    key={plan_master_room.id}
                                                >
                                                    <label
                                                        htmlFor={
                                                            plan_master_room.slug
                                                        }
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        {plan_master_room.name}
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="number"
                                                            key={
                                                                plan_master_room.id
                                                            }
                                                            id={
                                                                plan_master_room.slug
                                                            }
                                                            name={
                                                                plan_master_room.slug
                                                            }
                                                            onChange={onChange}
                                                            autoComplete="off"
                                                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                        {errors.plan_master_room && (
                                                            <span className="inline mt-1 ml-1 text-xs italic font-semibold text-pink-500">
                                                                {
                                                                    errors.plan_master_room
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                    {/* <p className="mt-0 text-sm text-gray-500">
                                                        Masukan Jumlah{" "}
                                                        {plan_master_room.name}{" "}
                                                        yang diperlukan.
                                                    </p> */}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Kebutuhan Ruang Lainnya
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Silakan masukan kebutuhan ruanganmu jika
                                        belum ada dipilihan diatas.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="mb-4 justify-items-start">
                                            {/* <form onSubmit={submit}> */}
                                            <div className="flex my-2">
                                                <label
                                                    // htmlFor="jangka_waktu_penawaran"
                                                    className="block w-full text-sm font-medium text-gray-700"
                                                >
                                                    Nama Kebutuhan Ruangan
                                                </label>
                                                <label
                                                    // htmlFor="jangka_waktu_penawaran"
                                                    className="block w-full text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Ruangan
                                                </label>
                                                <label
                                                    // htmlFor="jangka_waktu_penawaran"
                                                    className="inline-flex items-center text-sm font-medium text-gray-700 px-7"
                                                ></label>
                                            </div>
                                            {inputFields.map((input, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex my-4"
                                                    >
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={input.name}
                                                            autoComplete="off"
                                                            className="block w-full mr-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            onChange={(event) =>
                                                                handleFormChange(
                                                                    index,
                                                                    event
                                                                )
                                                            }
                                                        />

                                                        <input
                                                            type="number"
                                                            name="count"
                                                            value={input.count}
                                                            autoComplete="off"
                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            onChange={(event) =>
                                                                handleFormChange(
                                                                    index,
                                                                    event
                                                                )
                                                            }
                                                        />
                                                        <ThirdButton
                                                            color="red"
                                                            className="ml-4"
                                                            onClick={() =>
                                                                removeFields(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <IconTrash className="w-4 h-4" />
                                                        </ThirdButton>
                                                    </div>
                                                );
                                            })}
                                            {/* </form> */}
                                        </div>
                                        <ThirdButton onClick={addFields}>
                                            Tambah
                                        </ThirdButton>
                                        {/* <ThirdButton className="mx-2" type="submit">
                                            Save
                                        </ThirdButton> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Gambar Perencanaan
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Sertakan contoh gambar rumah yang
                                        disukai guna memudahkan kondultan
                                        membuat desain sesuai keinginanmu.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Contoh Gambar Rumah yang disukai
                                                (Max 5)
                                            </label>
                                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="w-full text-center">
                                                    <svg
                                                        className="w-12 h-12 mx-auto text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <Filepond
                                                        inputname={"document"}
                                                        allowMultiple={true}
                                                        maxFiles={"5"}
                                                        // required={true}
                                                    />
                                                    <div className="flex justify-center text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <Button processing={processing}>
                                            Simpan
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page}></App>;
