import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js"
import { Bar } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)

export interface MarketProductsChartProps {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor?: string
    }[]
}

export const MarketProductsChart = ({ labels, datasets }: MarketProductsChartProps) => {
    const getBarColors = (labels: string[]) =>
        labels.map((label) => {
            const words = label.toUpperCase().split(/\s+/)
            if (words.includes("DA")) return "#0FCD73"
            if (words.includes("CAP")) return "#0B9051"
            if (words.includes("ID")) return "#06522E"
            return "#032917"
        })

    const coloredDatasets = datasets.map((ds) => ({
        ...ds,
        backgroundColor: getBarColors(labels),
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
                    display: true,
                    padding: 10,
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
                    text: "Pasiskirstymas pagal rinkos produktus (%)",
                    font: {
                        size: 12,
                    },
                },
            },
        },
    }

    return (
        <div style={{ width: 768, maxWidth: "100%" }}>
            <div
                style={{
                    marginTop: 24,
                    marginBottom: 16,
                    position: "relative",
                    width: 768,
                    maxWidth: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    overflow: "visible",
                }}
            >
                <Bar data={data} options={options} style={{ width: "100%", maxWidth: 768 }} />
            </div>
        </div>
    )
}
