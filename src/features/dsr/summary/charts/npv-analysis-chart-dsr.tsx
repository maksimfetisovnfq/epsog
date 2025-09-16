import { NpvAnalysisChart } from "@/components/charts/npv-analysis-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr"

export const NpvAnalysisChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} />
}
