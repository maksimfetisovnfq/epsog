import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { YearlySummaryChart } from "@/features/charts/yearly-summary-chart.tsx"

export const YearlySummaryChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <YearlySummaryChart data={data.aggregated.summary.yearly_summary_table} />
}
