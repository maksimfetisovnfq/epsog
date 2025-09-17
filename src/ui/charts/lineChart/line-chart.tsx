import { Line } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export interface LineChartProps {
    data: ChartData<"line">
    options?: ChartOptions<"line">
    height?: number
    width?: number
}

const LineChart = ({ data, options, height, width }: LineChartProps) => {
    const npvDataset = data.datasets.find((ds) => ds.label?.toLowerCase().includes("npv")) || data.datasets[0]
    const customData = {
        labels: data.labels,
        datasets: [
            {
                ...npvDataset,
                label: "NPV",
                borderColor: "#87E6B9",
                backgroundColor: "#87E6B9",
                pointBorderColor: "#87E6B9",
                pointBackgroundColor: "#87E6B9",
            },
        ],
    }
    const customOptions = {
        ...options,
        plugins: {
            ...options?.plugins,
            legend: { display: false },
            tooltip: { enabled: true },
            datalabels: { display: false },
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 2,
                backgroundColor: "#87E6B9",
                borderColor: "#87E6B9",
                pointStyle: "circle",
            },
            line: {
                borderWidth: 2,
            },
        },
        scales: {
            x: {
                ...options?.scales?.x,
                grid: {
                    ...options?.scales?.x?.grid,
                    display: false,
                },
            },
            y: {
                ...options?.scales?.y,
                grid: {
                    ...options?.scales?.y?.grid,
                },
            },
        },
    }
    return <Line data={customData} options={customOptions} height={height} width={width} />
}

export default LineChart
