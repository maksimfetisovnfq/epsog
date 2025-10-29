import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js"
import { Bar } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Box } from "@mui/material"
import { ChartBgWrapper } from "@/ui/charts/chart-bg-wrapper.tsx"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)

export interface VerticalBarChartProps {
    labels?: string[]
    datasets: {
        label: string
        data: number[] | [number, number][]
        backgroundColor?: string | string[]
    }[]
    showYAxis?: boolean
}

export const VerticalBarChart = ({ labels, datasets, showYAxis = true }: VerticalBarChartProps) => {
    const chartLabels = labels || [
        "Vidutinės metinės išlados",
        "Vidutinės metinis pelnas/nuostolis",
        "Vidutinės metinės įplaukos",
    ]

    const chartDatasets = datasets

    const options = {
        responsive: true,
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
            datalabels: {
                display: true,
                anchor: "end" as const,
                align: "end" as const,
                offset: 8,
                color: "#222",
                font: {
                    weight: "bold" as const,
                    size: 13,
                },
                formatter: function (value: number | [number, number]) {
                    let num: number
                    if (Array.isArray(value)) {
                        num = value[1] - value[0]
                    } else {
                        num = value
                    }
                    return num.toFixed(2)
                },
                clip: false,
            },
        },
        scales: {
            x: {
                stacked: false,
                grid: { display: false, drawBorder: false },
                ticks: { display: false },
                barPercentage: 1.0,
                categoryPercentage: 0.95,
                min: 0,
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: true,
                    drawBorder: showYAxis,
                },
                ticks: { display: false },
                border: {
                    display: showYAxis,
                },
            },
        },
    }

    const barData = {
        labels: chartLabels,
        datasets: chartDatasets,
    }

    let filteredChartLabels = chartLabels
    if (Array.isArray(chartLabels) && chartLabels.every((l) => !isNaN(Number(l)))) {
        filteredChartLabels = chartLabels.filter((l) => Number(l) % 2 === 0)
    }

    return (
        <div>
            <ChartBgWrapper>
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: { sm: 768 },
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Bar data={barData} options={options} plugins={[ChartDataLabels]} />
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${filteredChartLabels.length}, 1fr)`,
                            maxWidth: { sm: 768 },
                            left: 0,
                            right: 0,
                            bottom: -36,
                            pointerEvents: "none",
                        }}
                    >
                        {filteredChartLabels.map((label, i) => (
                            <div
                                key={i}
                                style={{
                                    fontSize: 12,
                                    textAlign: "center",
                                    wordBreak: "break-word",
                                    pointerEvents: "auto",
                                    color: "#3F576B",
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </Box>
                </Box>
            </ChartBgWrapper>
        </div>
    )
}
