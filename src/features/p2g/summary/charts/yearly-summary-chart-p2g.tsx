import { YearlySummaryChart } from "@/features/charts/yearly-summary-chart"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g"

export const YearlySummaryChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <YearlySummaryChart data={data.aggregated.summary.yearly_summary_table} />
}
