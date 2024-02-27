// src/components/PieChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  const options = {
    labels: data.map(item => item.label),
  };

  const series = data.map(item => item.value);

  return (
    <Chart options={options} series={series} type="pie" width="380" />
  );
};

export default PieChart;
