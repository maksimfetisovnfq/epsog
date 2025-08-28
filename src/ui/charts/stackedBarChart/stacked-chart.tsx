import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export interface StackedBarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
}

export const StackedBarChart = ({ labels, datasets } : StackedBarChartProps) => {
  const getBarColors = (data: number[]) =>
    data.map(v => (v > 0 ? '#87E6B9' : '#FF7070'));

  const coloredDatasets = datasets.map(ds => ({
    ...ds,
    backgroundColor: getBarColors(ds.data),
    borderSkipped: false,
    borderWidth: 0,
  }));

  const data = {
    labels: labels,
    datasets: coloredDatasets,
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { display: true },
        grid: { display: false },
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        title: {
          display: true,
          text: 'Projekto metai',
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        grid: { display: true },
        title: {
          display: true,
          text: 'Diskontuotų pinigų srautai (tūkst. Eur)',
          font: {
            size: 12,
          },
        },
      },
    },
  };
  return (
    <div style={{ width: 768, maxWidth: '100%' }}>
      <div style={{ marginTop: 24, position: 'relative', width: 768, maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Bar data={data} options={options} style={{ width: '100%', maxWidth: 768 }} />
      </div>
    </div>
  );
};

