import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import TextInputCheckbox from "@/Components/TextInputCheckbox";
import TextInputRadio from "@/Components/TextInputRadio";
import { set } from "lodash";
import React, { useEffect, useState } from "react";

export default function Form({
    errors,
    teamheader,
    counters,
    submit,
    data,
    setData,
    model,
    closeButton,
}) {
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const optionsFromDB = teamheader;
    let teamheadercompany = model ? model.teamheader.map((obj) => obj.id) : [];
    const [options, setOptions] = useState([]);
    const [optionsLeader, setOptionsLeader] = useState([]);
    useEffect(() => {
        const selectedOptionsFromDB = teamheadercompany;
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
        setData({ ...data, ["teamheader"]: selectedOptionIds });
    }, [options]);

    const optionsFromDB2 = counters;
    // console.log(optionsFromDB2)
    let countercompany = model ? model.counters.map((obj) => obj.id) : [];
    const [options2, setOptions2] = useState([]);

    useEffect(() => {
        const selectedOptionsFromDB2 = countercompany;
        const updatedOptions2 = optionsFromDB2.map((option2) => {
            if (selectedOptionsFromDB2.includes(option2.id)) {
                return { ...option2, isSelected: true };
            }
            return option2;
        });
        setOptions2(updatedOptions2);
    }, []);
    const handleCheckboxChange2 = (optionId2) => {
        setOptions2((prevOptions) =>
            prevOptions.map((option2) => {
                if (option2.id === optionId2) {
                    return { ...option2, isSelected: !option2.isSelected };
                }
                return option2;
            })
        );
    };
    const selectedOptionIds2 = options2
        .filter((option2) => option2.isSelected)
        .map((option2) => option2.id);
    useEffect(() => {
        setData({ ...data, ["counters"]: selectedOptionIds2 });
    }, [options2]);
    // console.log(data);
    return (
        <>
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih TIM
                        </p>
                        {options.map((option) => (
                            <div
                                className="flex justify-between col-span-12 px-3 py-4 my-4 border rounded-md"
                                key={option.id}
                            >
                                <InputLabel
                                    for={option.name}
                                    value={option.name}
                                    className="uppercase"
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
                                <div className="flex flex-col items-start">
                                    {option.details.map((detail, index) => (
                                        <span
                                            key={index}
                                            className="block px-2 py-1 mx-1 my-2 text-xs text-blue-500 uppercase rounded-full bg-blue-50"
                                        >
                                            {detail.user.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-12 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Counter
                        </p>
                    </div>
                    {options2.map((option) => (
                        <div
                            className="flex justify-between col-span-12 px-3 py-4 border rounded-md"
                            key={option.id}
                        >
                            <InputLabel
                                for={option.name}
                                value={
                                    option.category.name + " - " + option.name
                                }
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
                                        handleCheckboxChange2(option.id);
                                    }}
                                    className="block w-full"
                                />
                            </div>
                        </div>
                    ))}
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
