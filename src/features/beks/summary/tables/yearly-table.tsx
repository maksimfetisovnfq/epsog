import { useSummaryBeks } from "../use-summary-beks.ts"
import {
    DetailedAnualResultsTable,
    type DetailedAnualResultsTableRow,
} from "@/ui/tables/DetailedAnualResultsTable/DetailedAnualResultsTable.tsx"
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
    const data = useSummaryBeks()

    const methods = useForm<FormValues>({
        defaultValues: {
            selectedColumn: "cf",
        },
    })
    const { control } = methods

    if (!data) return null

    const selectedColumn = methods.watch("selectedColumn")

    const columns = [
        { value: "ciklai", label: "Ciklai" },
        { value: "capex", label: "CAPEX (tūkst. EUR)" },
        { value: "opex", label: "OPEX (tūkst. EUR)" },
        { value: "cf", label: "CF (tūkst. EUR)" },
        { value: "npv", label: "NPV (tūkst. EUR)" },
    ]

    const transformedData: DetailedAnualResultsTableRow[] = data.aggregated.economic_results.yearly_table.map(
        (item) => ({
            metai: item.YEAR,
            ciklai: item.CYCLES,
            soh: item["SOH (%)"].toString(),
            capex: item["CAPEX (tūkst. EUR)"].toString(),
            opex: item["OPEX (tūkst. EUR)"].toString(),
            cf: item["CF (tūkst. EUR)"].toString(),
            npv: item["NPV (tūkst. EUR)"].toString(),
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

    const labels = transformedData.map((row) => row.metai)
    const datasets = [
        {
            label: columns.find((c) => c.value === selectedColumn)?.label || selectedColumn,
            data: transformedData.map((row) => Number(row[selectedColumn as keyof DetailedAnualResultsTableRow]) || 0),
        },
    ]
    const chartData = { labels, datasets }

    return (
        <FormProvider {...methods}>
            <Box sx={{ width: { sm: "768px" }, marginTop: "24px" }}>
                <Box sx={{ marginTop: "24px" }}>
                    <DetailedAnualResultsTable data={transformedData} />
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
                                {columns.map((col) => (
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
                            leftAxisLabel={columns.find((c) => c.value === selectedColumn)?.label || ""}
                            bottomAxisLabel="Metai"
                        />
                    </Box>
                </Box>
            </Box>
        </FormProvider>
    )
}
