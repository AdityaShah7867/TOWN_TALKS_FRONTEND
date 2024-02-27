// src/components/PieChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  console.log('data', data)
  const options = {
    labels: data?.map(item => item.label),
  };

  const series = data?.map(item => item.value);

  return (

    <Chart options={options} series={series} type="pie" width="450" />
  );
};

export default PieChart;
