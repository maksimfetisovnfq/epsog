import { CostChart } from "@/features/charts/cost-economic-evaluation-chart.tsx"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const CostChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <CostChart data={data.aggregated.economic_results.cost_table} />
}
