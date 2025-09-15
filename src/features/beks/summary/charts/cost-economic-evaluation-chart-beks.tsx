import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { CostChart } from "@/features/charts/cost-economic-evaluation-chart.tsx"

export const CostChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <CostChart data={data.aggregated.economic_results.cost_table} />
}
