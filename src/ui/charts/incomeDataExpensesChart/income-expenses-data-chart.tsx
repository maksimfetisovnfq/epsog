import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js"
import { Bar } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Box } from "@mui/material"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)

export interface IncomeExpensesDataChart {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor?: string
    }[]
}

export const IncomeChart = ({ labels, datasets }: IncomeExpensesDataChart) => {
    const getBarColors = (data: number[]) => data.map((v) => (v > 0 ? "#87E6B9" : "#FF7070"))

    const coloredDatasets = datasets.map((ds) => ({
        ...ds,
        backgroundColor: getBarColors(ds.data),
        borderSkipped: false,
        borderWidth: 0,
    }))

    const data = {
        labels: labels,
        datasets: coloredDatasets,
    }
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
                    maxRotation: 0,
                    minRotation: 0,
                    padding: 0,
                },

                grid: { display: false },
                barPercentage: 0.9,
                categoryPercentage: 0.9,
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
                    text: "Pajamos (tūkst. Eur)",
                    font: {
                        size: 12,
                    },
                },
            },
        },
    }
    return (
        <Box sx={{ width: {sm: 768}, maxWidth: "100%", margin: "16px 0px" }}>
            <Box
                sx={{
                    position: "relative",
                    width: {sm: 768},
                    overflow: "visible",
                }}
            >
                <Bar data={data} options={options} style={{ width: "100%", maxWidth: 768 }} />
            </Box>
        </Box>
    )
}
