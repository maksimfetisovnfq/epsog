import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export interface MarketProductsChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
}

export const MarketProductsChart = ({ labels, datasets } : MarketProductsChartProps) => {
  const getBarColors = (labels: string[]) =>
    labels.map(label => {
      const upperLabel = label.toUpperCase();
      if (upperLabel.includes('DA')) return '#0FCD73';
      if (upperLabel.includes('CAP')) return '#0B9051';
      if (upperLabel.includes('ID')) return '#06522E';
      return '#032917';
    });

  const coloredDatasets = datasets.map(ds => ({
    ...ds,
    backgroundColor: getBarColors(labels),
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
      tooltip: { enabled: true },
      datalabels: { display: false },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { 
              display: true,
          maxRotation: -75,
          minRotation: -75,
          padding: 90,
        },
        grid: { display: false },
        barPercentage: 0.9,
        categoryPercentage: 0.9,
        title: {
          display: true,
          text: 'Produktas',
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
          text: 'Pasiskirstymas pagal rinkos produktus (%)',
          font: {
            size: 12,
          },
        },
      },
    },
  };
  
  return (
    <div style={{ width: 768, maxWidth: '100%' }}>
      <div style={{ marginTop: 24, position: 'relative', width: 768, maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', overflow: 'visible' }}>
        <Bar data={data} options={options} style={{ width: '100%', maxWidth: 768 }} />
      </div>
      
      <div style={{ height: 48 }} />
    </div>
  );
};
