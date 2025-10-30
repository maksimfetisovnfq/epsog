import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, LineElement, PointElement } from "chart.js"
import { Chart } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { ChartBgWrapper } from "@/ui/charts/chart-bg-wrapper.tsx"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels, LineElement, PointElement)

export interface StackedBarChartProps {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor?: string
    }[]
    lineDatasets?: {
        label: string
        data: number[]
        borderColor?: string
        backgroundColor?: string
        pointBackgroundColor?: string | string[]
        pointBorderColor?: string | string[]
        labels?: string[]
    }[]
}

export const StackedBarChart = ({ labels, datasets, lineDatasets }: StackedBarChartProps) => {
    const getBarColors = (data: number[]) => data.map((v) => (v > 0 ? "#87E6B9" : "#FF7070"))

    const coloredDatasets = datasets.map((ds) => ({
        ...ds,
        backgroundColor: getBarColors(ds.data),
        borderSkipped: false,
        borderWidth: 0,
        type: 'bar' as const,
        order: 1
    }))

    const lineChartDatasets = lineDatasets ? lineDatasets.map((ds) => ({
        ...ds,
        type: 'line' as const,
        borderColor: ds.borderColor || "#4A90E2",
        backgroundColor: ds.backgroundColor || "#4A90E2",
        pointBorderColor: ds.pointBorderColor || ds.borderColor || "#4A90E2",
        pointBackgroundColor: ds.pointBackgroundColor || ds.backgroundColor || "#4A90E2",
        pointRadius: 4,
        pointBorderWidth: 2,
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        order: 0,
    })) : []

    const data = {
        labels: labels,
        datasets: [...coloredDatasets, ...lineChartDatasets],
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
                ticks: { display: true },
                grid: { display: false },
                barPercentage: 1.0,
                categoryPercentage: 1.0,
                title: {
                    display: true,
                    text: "Projekto metai",
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
                    text: "Diskontuotų pinigų srautai (tūkst. Eur)",
                    font: {
                        size: 12,
                    },
                },
            },
        },
    }
    return (
        <div style={{ width: 768, maxWidth: "100%" }}>
            <ChartBgWrapper>
                <div
                    style={{
                        position: "relative",
                        width: 768,
                        maxWidth: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Chart type="bar" data={data} options={options} style={{ width: "100%", maxWidth: 768 }} />
                </div>
            </ChartBgWrapper>
        </div>
    )
}
