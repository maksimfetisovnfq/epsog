import { NpvAnalysisChart } from "@/components/charts/npv-analysis-chart"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const NpvAnalysisChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} />
}
