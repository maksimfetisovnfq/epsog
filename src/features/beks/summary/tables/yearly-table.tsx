import { Table } from "@/ui/tables"
import { useYearlyTable } from "../hooks/use-yearly-table"
import { useForm, FormProvider, Controller } from "react-hook-form"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import LineChart from "@/ui/charts/lineChart/line-chart"
import { type ChartOptions } from "chart.js"
import { Box } from "@mui/material"

interface FormValues {
    selectedColumn: string
}

export const YearlySummary = () => {
    const tableData = useYearlyTable()

    const methods = useForm<FormValues>({
        defaultValues: {
            selectedColumn: "CYCLES",
        },
    })
    const { control } = methods

    if (!tableData) return null

    const selectedColumn = methods.watch("selectedColumn")

    const chartColumns = [
        { value: "CYCLES", label: "Ciklai" },
        { value: "CAPEX (tūkst. EUR)", label: "CAPEX (tūkst. EUR)" },
        { value: "OPEX (tūkst. EUR)", label: "OPEX (tūkst. EUR)" },
        { value: "CF (tūkst. EUR)", label: "CF (tūkst. EUR)" },
        { value: "NPV (tūkst. EUR)", label: "NPV (tūkst. EUR)" },
    ]

    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
            },
        },
    }

    const labels = tableData.dataSource.map((row) => row.YEAR)
    const datasets = [
        {
            label: chartColumns.find((c) => c.value === selectedColumn)?.label || selectedColumn,
            // @ts-expect-error error
            data: tableData.dataSource.map((row) => Number(row[selectedColumn]) || 0),
        },
    ]
    const chartData = { labels, datasets }

    return (
        <FormProvider {...methods}>
            <Box sx={{ width: { sm: "768px" }, marginTop: "24px" }}>
                <Box sx={{ marginTop: "24px" }}>
                    <Table
                        dataSource={tableData.dataSource}
                        columns={tableData.columns}
                        title={tableData.title}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ fontSize: "18px" }}>Pasirinkite stulpelį</Box>
                    <Controller
                        name="selectedColumn"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                sx={{ height: "40px", width: { sm: "230px" }, overflow: "hidden" }}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                {chartColumns.map((col) => (
                                    <MenuItem key={col.value} value={col.value}>
                                        {col.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </Box>
                <Box
                    sx={{
                        marginTop: "24px",
                        border: "1px solid #CFD5DA",
                        width: { sm: "768px" },
                        boxSizing: "border-box",
                        display: "flex",
                    }}
                >
                    <Box sx={{ width: { sm: 768 } }}>
                        <LineChart
                            data={chartData}
                            options={chartOptions}
                            leftAxisLabel={chartColumns.find((c) => c.value === selectedColumn)?.label || ""}
                            bottomAxisLabel="Metai"
                        />
                    </Box>
                </Box>
            </Box>
        </FormProvider>
    )
}
