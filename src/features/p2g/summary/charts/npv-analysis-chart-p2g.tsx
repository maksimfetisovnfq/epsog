import { NpvAnalysisChart } from "@/components/charts/npv-analysis-chart"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const NpvAnalysisChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} />
}
