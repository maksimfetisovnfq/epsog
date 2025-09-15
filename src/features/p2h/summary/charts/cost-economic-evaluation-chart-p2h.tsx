import { CostChart } from "@/features/charts/cost-economic-evaluation-chart.tsx"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const CostChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <CostChart data={data.aggregated.economic_results.cost_table} />
}
