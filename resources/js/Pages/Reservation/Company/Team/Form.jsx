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
    employees,
    counters,
    submit,
    data,
    setData,
    model,
    closeButton,
    reservationCounterTeams,
}) {
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };
    const [options, setOptions] = useState([]);
    const [optionLeaders, setOptionLeaders] = useState([]);
    // console.log(model,employees.length)
    useEffect(() => {
        if (!employees.length) return; // Pastikan data tersedia
    
        // Ambil ID employee dari model
        const employeesCompany = model?.details ? model.details.map((obj) => obj.user.id) : [];
        const employeesLeader = model?.details ? model.details.filter(obj => obj.leader === 1).map(obj => obj.user.id) : [];
        // console.log(employeesCounter)
         // Semua employees tidak terpilih jika Create
    const updatedOptions = employees.map((option) => ({
        ...option,
        isSelected: employeesCompany.includes(option.user.id), // Hanya true jika di model.details
    }));

    // Semua leaders tidak terpilih jika Create
    const updatedOptionLeaders = employees.map((option) => ({
        ...option,
        isSelected: employeesLeader.includes(option.user.id), // Hanya true jika leader === 1 di model
    }));
    
        setOptions(updatedOptions);
        setOptionLeaders(updatedOptionLeaders);
    }, [model, employees]); // Gunakan model & employees sebagai dependency
    
    // Handle perubahan checkbox employee
    const handleCheckboxChange = (optionId) => {
        setOptions((prevOptions) =>
            prevOptions.map((option) => ({
                ...option,
                isSelected: option.user.id === optionId ? !option.isSelected : option.isSelected,
            }))
        );
    };
    
    // Handle perubahan checkbox leader
    const handleCheckboxChangeLeader = (optionLeaderId) => {
        setOptionLeaders((prevOptionLeaders) =>
            prevOptionLeaders.map((optionLeader) => ({
                ...optionLeader,
                isSelected: optionLeader.user.id === optionLeaderId ? !optionLeader.isSelected : optionLeader.isSelected,
            }))
        );
    };
    
    // Ambil hanya ID yang dipilih
    const selectedOptionIds = options.filter((option) => option.isSelected).map((option) => option.user.id);
    const selectedOptionLeaderIds = optionLeaders.filter((optionLeader) => optionLeader.isSelected).map((optionLeader) => optionLeader.user.id);
    
    // Update state data
    useEffect(() => {
        setData((prevData) => {
            // Hindari update jika data tidak berubah
            if (
                JSON.stringify(prevData.employees) === JSON.stringify(selectedOptionIds) &&
                JSON.stringify(prevData.leader) === JSON.stringify(selectedOptionLeaderIds)
            ) {
                return prevData;
            }
            return {
                ...prevData,
                employees: selectedOptionIds,
                leader: selectedOptionLeaderIds,
            };
        });
    }, [selectedOptionIds, selectedOptionLeaderIds]);
    
    

    // const handleCheckboxChangeLeader = (optionIdLeader) => {
    //     setData({ ...data, ["leader"]: optionIdLeader });
    // };

    const optionsFromDB2 = counters;
    // console.log(optionsFromDB2)
    const countercompany = reservationCounterTeams ? reservationCounterTeams.filter(obj => obj.reservation_team_header_id === model.details[0].reservation_team_header_id).map(obj => obj.reservation_counter_id) : [];
    // let countercompany = model ? model.counters.map((obj) => obj.id) : [];
    // let countercompany = [];
    // console.log(countercompany)
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
    // console.log(model,state)
    return (
        <>
            <div className="px-2 py-2 bg-white sm:p-0">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12">
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

                    <div className="col-span-10 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Karyawan
                        </p>
                        {options.map((option) => (
                            <div
                                className="flex justify-between col-span-12 px-3 py-4 my-4 border rounded-md"
                                key={option.user.id}
                            >
                                <InputLabel
                                    for={option.user.name}
                                    value={option.user.name}
                                    className="uppercase"
                                />
                                <div className="flex flex-col items-start">
                                    <TextInputCheckbox
                                        key={option.user.id}
                                        id={option.user.name}
                                        value={option.user.id}
                                        name={option.user.name}
                                        checked={option.isSelected}
                                        onChange={(e) => {
                                            handleCheckboxChange(
                                                option.user.id
                                            );
                                        }}
                                        className="block w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-2 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Leader
                        </p>
                        {optionLeaders.map((option) => (
                            <div
                                className="flex justify-between col-span-12 px-3 py-4 my-4 border rounded-md"
                                key={option.user.id}
                            >
                                <InputLabel
                                    for={option.user.name}
                                    className="uppercase"
                                />
                                <div className="flex flex-col items-start">
                                    <TextInputCheckbox
                                        key={option.user.id}
                                        id={"pilih"}
                                        value={option.user.id}
                                        name={"pilih"}
                                        checked={option.isSelected}
                                        onChange={(e) => {
                                            handleCheckboxChangeLeader(
                                                option.user.id
                                            );
                                        }}
                                        className="block w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-12 mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                            Pilih Layanan
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
            <div className="px-2 py-2 sm:px-2 sm:flex sm:flex-row-reverse">
                <PrimaryButton>{submit}</PrimaryButton>
                <SecondaryButton className="mx-2" onClick={closeButton}>
                    Batal
                </SecondaryButton>
            </div>
        </>
    );
}
