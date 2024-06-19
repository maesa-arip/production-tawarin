import React, { useCallback, useEffect, useState } from "react";
import AppReservasi from "@/Layouts/AppReservasi";
import { Head, Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import { numberFormat } from "@/Libs/helper";
import { IconCash, IconChecks } from "@tabler/icons";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Bar  } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { usePage } from '@inertiajs/inertia-react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Header from "@/Components/Header";

Chart.register(ChartDataLabels);

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

export default function EmployeeChart(props) {
    
    // console.log(transaction)
    const date = new Date();
    const defaultValue = date.toLocaleDateString('en-CA');
    const { dates, employees, salesData } = usePage().props;

  const generateColor = (index) => {
    const colors = [
      'rgba(255,99,132,0.2)',
      'rgba(54,162,235,0.2)',
      'rgba(255,206,86,0.2)',
      'rgba(75,192,192,0.2)',
      'rgba(153,102,255,0.2)',
      'rgba(255,159,64,0.2)',
      'rgba(199,199,199,0.2)',
      'rgba(83,102,255,0.2)',
      'rgba(104,132,245,0.2)',
      'rgba(232,102,245,0.2)',
      'rgba(150,92,235,0.2)',
      'rgba(90,132,100,0.2)',
      'rgba(111,111,111,0.2)',
      'rgba(205,92,92,0.2)',
      'rgba(75,192,100,0.2)',
      // Add more colors if needed
    ];
    const borders = [
      'rgba(255,99,132,1)',
      'rgba(54,162,235,1)',
      'rgba(255,206,86,1)',
      'rgba(75,192,192,1)',
      'rgba(153,102,255,1)',
      'rgba(255,159,64,1)',
      'rgba(199,199,199,1)',
      'rgba(83,102,255,1)',
      'rgba(104,132,245,1)',
      'rgba(232,102,245,1)',
      'rgba(150,92,235,1)',
      'rgba(90,132,100,1)',
      'rgba(111,111,111,1)',
      'rgba(205,92,92,1)',
      'rgba(75,192,100,1)',
      // Add more borders if needed
    ];
    return {
      backgroundColor: colors[index % colors.length],
      borderColor: borders[index % borders.length],
    };
  };

  const data = {
    labels: dates,
    datasets: employees.map((employee, index) => {
      const color = generateColor(index);
      return {
        label: employee,
        backgroundColor: color.backgroundColor,
        borderColor: color.borderColor,
        borderWidth: 1,
        hoverBackgroundColor: color.backgroundColor.replace('0.2', '0.4'),
        hoverBorderColor: color.borderColor,
        data: salesData.map(day => day[index]),
      };
    }),
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: Math.round,
        font: {
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
    return (
        <>
            <Head title="Chart" />
            <Header title="Grafik" description="Grafik Layanan Seminggu Terakhir." />
            <Container>
           
        {/* <DatePicker></DatePicker> */}
            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-full px-4">
                            <div className="flex items-center justify-end mb-6 gap-x-2">
                                {/* <select
                                    name="load"
                                    id="load"
                                    onChange={onChange}
                                    value={params.load}
                                    className="transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select"
                                >
                                    {pageNumber.map((page, index) => (
                                        <option key={index}>{page}</option>
                                    ))}
                                </select> */}
                                {/* <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                    
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
                                <div className="flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring">
                                    
                                    <input
                                        type="date"
                                        name="endDate"
                                        id="endDate"
                                        defaultValue={defaultValue}
                                        onChange={onChange}
                                        value={params.endDate}
                                        className="w-full border-0 focus:ring-0 form-text"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                <Bar  data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </Container>
        </>
    );
}
EmployeeChart.layout = (page) => <AppReservasi children={page} />;
