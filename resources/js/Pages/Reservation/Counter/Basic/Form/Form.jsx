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
    // console.log(model);
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

    // console.log(model)

    return (
        <>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-9 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Mobil
                        </p>
                        {options.map((option) => (
                            <div
                                className="flex justify-between col-span-12 px-3 py-4 border rounded-md md:col-span-4"
                                key={option.id}
                            >
                                <InputLabel
                                    for={option.name}
                                    value={option.name}
                                    className={"uppercase"}
                                />
                                <div className="flex flex-col items-start">
                                    <TextInputCheckbox
                                        key={option.id}
                                        id={option.name}
                                        value={option.id}
                                        name={option.name}
                                        checked={option.isSelected}
                                        onChange={(e) => {
                                            handleCheckboxChange(option.id);
                                        }}
                                        className="block w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-3 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Kategori
                        </p>
                        {options.map((option) => (
                            <div
                                className="flex justify-between col-span-12 px-3 py-4 border rounded-md md:col-span-4"
                                key={option.id}
                            >
                                <InputLabel
                                    for={option.standar_kategori}
                                    value={option.standar_kategori}
                                    className={"uppercase"}
                                />
                            </div>
                        ))}
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
