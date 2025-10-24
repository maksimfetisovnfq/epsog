import { Controller, FormProvider, useForm } from "react-hook-form"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Checkbox from "@mui/material/Checkbox"
import LineChart from "@/ui/charts/lineChart/line-chart"
import { type ChartOptions } from "chart.js"
import { Table } from "@/ui/tables"
import { useYearlyTable } from "../use-yearly-table"
import { Box } from "@mui/material"

interface FormValues {
    selectedColumns: string[]
}

export const YearlySummary = () => {
    const tableData = useYearlyTable()

    const methods = useForm<FormValues>({
        defaultValues: {
            selectedColumns: [],
        },
    })
    const { control } = methods

    if (!tableData) return null

    const selectedColumns = methods.watch("selectedColumns")

    const chartColumns = [
        { value: "YEAR", label: "Metai" },
        { value: "CAPEX (tūkst. EUR)", label: "CAPEX" },
        { value: "OPEX (tūkst. EUR)", label: "OPEX" },
        { value: "CF (tūkst. EUR)", label: "CF" },
        { value: "NPV (tūkst. EUR)", label: "NPV" },
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

    const chartColumnsToShow = selectedColumns.length > 0 ? selectedColumns.filter((col) => col !== "YEAR") : ["CF (tūkst. EUR)", "NPV (tūkst. EUR)"]
    const labels = tableData.dataSource.map((row) => row.YEAR)
    const datasets = chartColumnsToShow.map((col) => ({
        label: chartColumns.find((c) => c.value === col)?.label || col,
        // @ts-expect-error dynamic key access
        data: tableData.dataSource.map((row) => Number(row[col]) || 0),
    }))
    const chartData = { labels, datasets }

    // Filter visible columns for the table
    const visibleColumns = selectedColumns.length > 0 
        ? tableData.columns.filter(col => selectedColumns.includes(col.dataIndex || ""))
        : tableData.columns

    return (
        <FormProvider {...methods}>
            <Box sx={{ width: { sm: "768px" }, marginTop: "24px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ fontSize: "18px" }}>Pasirinkite stulpelius</Box>
                    <Controller
                        name="selectedColumns"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                multiple
                                sx={{ height: "40px", width: { sm: "230px" } }}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                renderValue={(selected) =>
                                    selected.length === 0
                                        ? "Pasirinkite stulpelius"
                                        : selected
                                              .map((val) => chartColumns.find((col) => col.value === val)?.label)
                                              .join(", ")
                                }
                            >
                                {chartColumns.map((col) => (
                                    <MenuItem key={col.value} value={col.value}>
                                        <Checkbox checked={field.value.indexOf(col.value) > -1} />
                                        {col.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </Box>
                <Box sx={{ marginTop: "24px" }}>
                    <Table
                        dataSource={tableData.dataSource}
                        columns={visibleColumns}
                        title={tableData.title}
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
                        <LineChart data={chartData} options={chartOptions}/>
                    </Box>
                </Box>
            </Box>
        </FormProvider>
    )
}
