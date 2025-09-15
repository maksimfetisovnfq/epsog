import { CostProductsChart } from "@/features/charts/cost-products-chart.tsx"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const CostProductsChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <CostProductsChart data={data.aggregated.summary.revenue_cost_chart_data} />
}
