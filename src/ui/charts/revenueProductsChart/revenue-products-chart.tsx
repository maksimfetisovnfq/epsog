import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export interface RevenueProductsChartProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string;
    }[];
}

export const RevenueProductsChart = ({ labels, datasets }: RevenueProductsChartProps) => {
    const getBarColors = (labels: string[]) =>
        labels.map((label) => {
            const upperLabel = label.toUpperCase();
            if (upperLabel.includes("DA")) return "#0FCD73";
            if (upperLabel.includes("CAP")) return "#0B9051";
            if (upperLabel.includes("ID")) return "#06522E";
            return "#032917";
        });

    const coloredDatasets = datasets.map((ds) => ({
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
                    maxRotation: 90,
                    minRotation: 0,
                },
                grid: { display: false },
                barPercentage: 1,
                categoryPercentage: 1,
                title: {
                    display: true,
                    text: "Produktas",
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
                    text: "Pajamos",
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return (
        <Box sx={{ width: "100%", maxWidth: {sm: 768 } }}>
            <Box
                sx={{
                    position: "relative",
                    height: {xs: 180, sm: 400 },
                }}
            >
                <Bar data={data} options={options} />
            </Box>
        </Box>
    );
};