import { YearlySummaryChart } from "@/features/charts/yearly-summary-chart.tsx"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const YearlySummaryChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <YearlySummaryChart data={data.aggregated.summary.yearly_summary_table} />
}
