import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { NpvAnalysisChart } from "@/components/charts/npv-analysis-chart.tsx"

export const NpvAnalysisChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} />
}
