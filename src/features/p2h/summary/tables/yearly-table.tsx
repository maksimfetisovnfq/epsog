
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
            <div style={{ width: "768px", marginTop: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "18px" }}>Pasirinkite stulpelius</div>
                    <div>
                        <Controller
                            name="selectedColumns"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    multiple
                                    style={{ height: "40px", width: "230px" }}
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
                    </div>
                </div>
                <div style={{ marginTop: "24px" }}>
                    <DetailedAnualResultsTable data={transformedData} visibleColumns={selectedColumns} />
                </div>
                <div
                    style={{
                        marginTop: "24px",
                        border: "1px solid #CFD5DA",
                        width: "768px",
                        height: "382px",
                        boxSizing: "border-box",
                        display: "flex",
                    }}
                >
                    <LineChart data={chartData} options={chartOptions} width={768} height={382} />
                </div>
            </div>
        </FormProvider>
    )
}
