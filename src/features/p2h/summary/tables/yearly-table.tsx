import { useForm, FormProvider, Controller } from "react-hook-form"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Checkbox from "@mui/material/Checkbox"
import LineChart from "@/ui/charts/lineChart/line-chart"
import { type ChartOptions } from "chart.js"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"
import {
    DetailedAnualResultsTable,
    type DetailedAnualResultsTableRow,
} from "@/features/p2h/summary/tables/detailed-annual-results-table.tsx"
import { Box } from "@mui/material"

interface FormValues {
    selectedColumns: string[]
}

export const YearlySummary = () => {
    const data = useSummaryP2h()

    const methods = useForm<FormValues>({
        defaultValues: {
            selectedColumns: [],
        },
    })
    const { control } = methods

    if (!data) return null

    const selectedColumns = methods.watch("selectedColumns")

    const columns = [
        { value: "metai", label: "Metai" },
        { value: "capex", label: "CAPEX" },
        { value: "opex", label: "OPEX" },
        { value: "cf", label: "CF" },
        { value: "npv", label: "NPV" },
    ]

    const transformedData: DetailedAnualResultsTableRow[] = data.aggregated.economic_results.yearly_table.map(
        (item) => ({
            metai: item.YEAR,
            capex: item["CAPEX"].toString(),
            opex: item["OPEX"].toString(),
            cf: item["CF"].toString(),
            npv: item["NPV"].toString(),
        })
    )

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

    const chartColumns = selectedColumns.length > 0 ? selectedColumns.filter((col) => col !== "metai") : ["cf", "npv"]
    const labels = transformedData.map((row) => row.metai)
    const datasets = chartColumns.map((col) => ({
        label: columns.find((c) => c.value === col)?.label || col,
        data: transformedData.map((row) => Number(row[col as keyof DetailedAnualResultsTableRow]) || 0),
    }))
    const chartData = { labels, datasets }

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
                                              .map((val) => columns.find((col) => col.value === val)?.label)
                                              .join(", ")
                                }
                            >
                                {columns.map((col) => (
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
                    <DetailedAnualResultsTable data={transformedData} visibleColumns={selectedColumns} />
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
                        <LineChart data={chartData} options={chartOptions} />
                    </Box>
                </Box>
            </Box>
        </FormProvider>
    )
}
