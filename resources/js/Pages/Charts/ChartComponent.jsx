import React from 'react';
import { Bar  } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { usePage } from '@inertiajs/inertia-react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
const ChartComponent = () => {
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
    <div>
      <h2>Bar Example</h2>
      <Bar  data={data} />
    </div>
  );
};

export default ChartComponent;
