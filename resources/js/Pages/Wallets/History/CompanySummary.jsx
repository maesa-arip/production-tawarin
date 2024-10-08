import React, { useCallback, useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import { numberFormat } from "@/Libs/helper";
import { IconCash, IconChecks } from "@tabler/icons";
import DatePicker from "@/Components/DatePicker/DatePicker";
import ListBoxPage from "@/Components/ListBoxPage";
import Header from "@/Components/Header";

const UpIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
        />
    </svg>
);
const DownIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

export default function CompanySummary(props) {
    const {
        data: transactions,
        meta,
        filtered,
        attributes,
    } = props.transactions;
    // console.log(transactions)
    const { data: sumTransactions } = props.sumTransactions;
    const employees = props.employees;
    const counters = props.counters;
    // console.log(employees);
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route(route().current()),
                // route("riskRegisterKlinis.index"),
                { ...pickBy(query), page: query.page },
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        }, 150),
        []
    );
    useEffect(() => {
        if (!isInitialRender) {
            reload(params);
        } else {
            setIsInitialRender(false);
        }
    }, [params]);
    useEffect(() => {
        let numbers = [];
        for (
            let i = attributes.per_page;
            i < attributes.total / attributes.per_page;
            i = i + attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);
    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });
    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == "asc" ? "desc" : "asc",
        });
    };
    // console.log(transaction)
    const date = new Date();
    const defaultValue = date.toLocaleDateString("en-CA");
    // const defaultValue = [{ name: "Pilih" }];
    const [selected, setSelected] = useState(defaultValue[0]);

    const onChangePlanCategoryId = (e) => {
        setData({ ...data, ["plan_category_id"]: e.id });
    };


// Function to format the number
const numberFormat = (value) => {
    return new Intl.NumberFormat('id-ID').format(value);
};

// Calculate the total sum of transaction.total_price_user
const totalSum = sumTransactions.reduce((acc, transaction) => acc + Number(transaction.total_price_user), 0);
const totalPendapatan = sumTransactions.reduce((acc, transaction) => acc + Number(transaction.total_uang), 0);

    return (
        <>
            <Head title="History" />
            <Header title="Rekapan" description="Rekapan Perusahaan." />
            <Container>
                {/* <DatePicker></DatePicker> */}
                <div className="py-4">
                    {/* <select
                        name="q"
                        id="q"
                        onChange={onChange}
                        value={params.q}
                        className="mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                    >
                        <option selected>Semua Karyawan</option>
                        <option>Putu sumiyasa</option>
                        <option>Steven</option>
                        <option>Semmy</option>
                    </select>
                    <select
                        name="q"
                        id="q"
                        onChange={onChange}
                        value={params.q}
                        className="mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                    >
                        <option selected>Semua Layanan</option>
                        <option>Putu sumiyasa</option>
                        <option>Steven</option>
                        <option>Semmy</option>
                    </select> */}
                    <div className="mx-auto">
                        <div className="flex items-center justify-end ">
                            <div className="w-full">
                                <div className="flex items-center justify-end mb-4 overflow-hidden gap-x-1">
                                    <div className="flex items-center transition duration-150 ease-in-out bg-white ">
                                        <select
                                            name="q"
                                            id="q"
                                            onChange={onChange}
                                            value={params.q}
                                            className="mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg form-select"
                                        >
                                            <option selected>
                                                Semua Karyawan
                                            </option>
                                            {employees.map((employee, index) => (
                                                <option key={index}>{employee.user.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end ">
                            <div className="w-full">
                                <div className="flex items-center justify-end mb-4 overflow-hidden gap-x-1">
                                    <div className="flex items-center transition duration-150 ease-in-out bg-white ">
                                        <select
                                            name="r"
                                            id="r"
                                            onChange={onChange}
                                            value={params.r}
                                            className="mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg form-select"
                                        >
                                            <option selected>
                                                Semua Layanan
                                            </option>
                                            {counters.map((counter, index) => (
                                                <option key={index}>{counter.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end ">
                            <div className="w-full">
                                <div className="flex items-center justify-end mb-4 overflow-hidden gap-x-1">
                                    <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                        <input
                                            type="date"
                                            name="startDate"
                                            id="startDate"
                                            defaultValue={defaultValue}
                                            onChange={onChange}
                                            value={params.startDate}
                                            className="w-full border-0 focus:ring-0 form-text"
                                        />
                                    </div>
                                    <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                        <input
                                            type="date"
                                            name="endDate"
                                            id="endDate"
                                            defaultValue={defaultValue}
                                            onChange={onChange}
                                            value={params.endDate}
                                            className="w-full border-0 focus:ring-0 form-text"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {sumTransactions.map((transaction, index) => (
                            <div key={index} className="py-2">
                                {/* Card Grid */}
                                <div key={index} className="grid grid-cols-3 border border-gray-200 lg:items-center rounded-xl">
                                    {/* Card */}
                                    <div className="flex flex-col p-4">
                                        <h4 className="mb-2 text-gray-800">
                                            {/* Nama */}
                                        </h4>
                                        <div className="flex gap-x-1">
                                            <span className="text-xl font-normal text-gray-800"></span>
                                            <p className="text-base font-semibold text-gray-800">
                                                {transaction.employee_name}
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="flex flex-col p-4">
                                        <div className="flex justify-between">
                                            <h4 className="mb-1 text-gray-800">
                                                Pelanggan
                                            </h4>
                                        </div>
                                        <div className="flex gap-x-1">
                                            <span className="text-xl font-normal text-gray-800"></span>
                                            <p className="text-xl font-semibold text-gray-800">
                                                {transaction.total_customers}
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="flex flex-col p-4">
                                        <h4 className="mb-1 text-gray-800">
                                            Harga
                                        </h4>
                                        <div className="flex gap-x-1">
                                            <span className="text-base font-normal text-gray-800">
                                                Rp
                                            </span>
                                            <p className="text-xl font-semibold text-gray-800">
                                                {numberFormat(
                                                    transaction.total_price_user
                                                )}
                                            </p>
                                            {/* <p className="text-xl font-semibold text-gray-800">
                                            sum += transaction.total_price_user;
                                                {numberFormat(
                                                    transaction.total_price_user
                                                )}
                                            </p> */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* End Card Grid */}
                            </div>
                        ))}
                        <div className="py-2">
            <div className="flex justify-between">
                <div className="flex flex-col p-4 border border-gray-200 rounded-xl">
                    <h4 className="mb-1 text-gray-800">
                        Total Pendapatan
                    </h4>
                    <div className="flex gap-x-1">
                        <span className="text-base font-normal text-gray-800">
                            Rp
                        </span>
                        <p className="text-xl font-semibold text-gray-800">
                            {numberFormat(totalSum)}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-4 border border-gray-200 rounded-xl">
                    <h4 className="mb-1 text-gray-800">
                        Total Bagi Hasil untuk Pekerja
                    </h4>
                    <div className="flex gap-x-1">
                        <span className="text-base font-normal text-gray-800">
                            Rp
                        </span>
                        <p className="text-xl font-semibold text-gray-800">
                            {numberFormat(Math.abs(totalPendapatan))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
                       
                        <div className="flex flex-col mt-4">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            {/* <table className="min-w-full overflow-scroll divide-y divide-gray-200"> */}
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div className="flex items-center cursor-pointer gap-x-2">
                                                            #
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "employee_name"
                                                                )
                                                            }
                                                        >
                                                            Nama Pekerja
                                                            {params.field ==
                                                                "employee_name" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "employee_name" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "counter_name"
                                                                )
                                                            }
                                                        >
                                                            Nama Layanan
                                                            {params.field ==
                                                                "counter_name" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "counter_name" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "total_customers"
                                                                )
                                                            }
                                                        >
                                                            Total Customer
                                                            {params.field ==
                                                                "total_customers" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "total_customers" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "total_price_user"
                                                                )
                                                            }
                                                        >
                                                            Total Harga
                                                            {params.field ==
                                                                "total_price_user" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "total_price_user" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "total_jasa"
                                                                )
                                                            }
                                                        >
                                                            Total Jasa
                                                            {params.field ==
                                                                "total_jasa" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "total_jasa" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase"
                                                    >
                                                        <div
                                                            className="flex items-center cursor-pointer gap-x-2"
                                                            onClick={() =>
                                                                sort(
                                                                    "total_uang"
                                                                )
                                                            }
                                                        >
                                                            Total Bagi Hasil
                                                            {params.field ==
                                                                "total_uang" &&
                                                                params.direction ==
                                                                    "asc" && (
                                                                    <UpIcon />
                                                                )}
                                                            {params.field ==
                                                                "total_uang" &&
                                                                params.direction ==
                                                                    "desc" && (
                                                                    <DownIcon />
                                                                )}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {transactions.map(
                                                    (transaction, index) => (
                                                        <tr
                                                            key={index}
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {meta.from +
                                                                    index}
                                                            </td>

                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    transaction.employee_name
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    transaction.counter_name
                                                                }
                                                            </td>

                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex mt-1 rounded-md shadow-sm">
                                                                    <div className="flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                        {
                                                                            transaction.total_customers
                                                                        }
                                                                    </div>
                                                                    <span className="inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                                                                        Pelanggan
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex mt-1 rounded-md shadow-sm">
                                                                    <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                        Rp
                                                                    </span>
                                                                    <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                        {numberFormat(
                                                                            transaction.total_price_user
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex mt-1 rounded-md shadow-sm">
                                                                    <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                        Rp
                                                                    </span>
                                                                    <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                        {numberFormat(
                                                                            transaction.total_jasa
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex mt-1 rounded-md shadow-sm">
                                                                    <span className="inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                                                        Rp
                                                                    </span>
                                                                    <div className="flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500">
                                                                        {numberFormat(
                                                                            Math.abs(transaction.total_uang)
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <ul className="flex items-center mt-10 gap-x-1">
                            {meta.links.map((item, index) => (
                                <button
                                    key={index}
                                    disabled={item.url == null ? true : false}
                                    className={`${
                                        item.url == null
                                            ? "text-gray-500"
                                            : "text-gray-800"
                                    } w-12 h-9 rounded-lg flex items-center justify-center border bg-white`}
                                    onClick={() =>
                                        setParams({
                                            ...params,
                                            page: new URL(
                                                item.url
                                            ).searchParams.get("page"),
                                        })
                                    }
                                >
                                    {item.label}
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}
CompanySummary.layout = (page) => <AppReservasi children={page} />;
