import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { NpvAnalysisChart } from "@/components/charts/npv-analysis-chart.tsx"
import type { RefObject } from "react"

type Props = {
    ref: RefObject<HTMLDivElement | null>
}

export const NpvAnalysisChartBeks = ({ref}: Props) => {
    const data = useSummaryBeks()

    if (!data) return null

    return <div ref={ref}><NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} /></div>
}
