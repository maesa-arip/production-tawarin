import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import TextInputCheckbox from "@/Components/TextInputCheckbox";
import ThirdButton from "@/Components/ThirdButton";
import { set } from "lodash";
import React, { useEffect, useState } from "react";

export default function Form({
    errors,
    cars,
    submit,
    data,
    setData,
    model,
    closeButton,
}) {
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    console.log(cars);
    const optionsFromDB = cars;
    let userrole = model ? model.cars.map((obj) => obj.id) : [];
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const selectedOptionsFromDB = userrole;
        const updatedOptions = optionsFromDB.map((option) => {
            if (selectedOptionsFromDB.includes(option.id)) {
                return { ...option, isSelected: true };
            }
            return option;
        });
        setOptions(updatedOptions);
    }, []);
    const handleCheckboxChange = (optionId) => {
        setOptions((prevOptions) =>
            prevOptions.map((option) => {
                if (option.id === optionId) {
                    return { ...option, isSelected: !option.isSelected };
                }
                return option;
            })
        );
    };
    const selectedOptionIds = options
        .filter((option) => option.isSelected)
        .map((option) => option.id);
    useEffect(() => {
        setData({ ...data, ["cars"]: selectedOptionIds });
    }, [options]);

    console.log(userrole, selectedOptionIds);

    return (
        <>
            <div className="p-2 bg-white sm:p-2">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-9">
                        <p className="mb-4 text-lg font-semibold text-gray-700">
                            Pilih Mobil
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                            {options.map((option) => (
                                <div
                                    className="flex items-center justify-between p-2 transition-shadow border rounded-lg shadow-sm hover:shadow-md"
                                    key={option.id}
                                >
                                    <InputLabel
                                        for={option.name}
                                        value={option.name}
                                        className="text-xs font-medium text-gray-700 uppercase"
                                    />
                                    <TextInputCheckbox
                                        id={option.name}
                                        value={option.id}
                                        name={option.name}
                                        checked={option.isSelected}
                                        onChange={(e) => {
                                            handleCheckboxChange(option.id);
                                        }}
                                        className="w-5 h-5 text-blue-600 rounded form-checkbox "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3">
                        <p className="mb-4 text-lg font-semibold text-gray-700">
                            Kategori
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                            {options.map((option) => (
                                <div
                                    className="flex items-center justify-between p-2 transition-shadow border rounded-lg shadow-sm hover:shadow-md"
                                    key={option.id}
                                >
                                    <InputLabel
                                        for={option.standar_kategori}
                                        value={option.standar_kategori}
                                        className="text-sm font-medium text-gray-700 uppercase"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ThirdButton
                    href={route("reservationCar.index")}
                    className="my-2"
                >
                    Tambah Kendaraan
                </ThirdButton>
            </div>

            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <PrimaryButton className="ml-2">{submit}</PrimaryButton>
                <SecondaryButton className="mx-2" onClick={closeButton}>
                    Batal
                </SecondaryButton>
            </div>
        </>
    );
}
