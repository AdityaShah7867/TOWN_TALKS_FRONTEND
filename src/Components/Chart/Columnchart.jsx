// src/components/ColumnChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data, categories }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: categories,
    },
  };

  const series = [
    {
      name: 'Data',
      data: data,
    },
  ];

  return (
    <Chart options={options} series={series} type="bar" height="300" />
  );
};

export default ColumnChart;
