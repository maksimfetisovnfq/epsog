import { YearlySummaryChart } from "@/features/charts/yearly-summary-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const YearlySummaryChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <YearlySummaryChart data={data.aggregated.summary.yearly_summary_table} />
}
