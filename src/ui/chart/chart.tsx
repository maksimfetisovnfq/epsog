import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export interface StackedBarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return <Bar data={data} options={options} style={{ width: '100%', maxWidth: 768 }} />;
};

export const VerticalBarChart: React.FC<StackedBarChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { stacked: false },
      y: { stacked: false },
    },
  };

  return <Bar data={data} options={options} style={{ width: '100%', maxWidth: 768 }} />;
};
