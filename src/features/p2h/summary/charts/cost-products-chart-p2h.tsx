import { CostProductsChart } from "@/features/charts/cost-products-chart.tsx"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const CostProductsChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <CostProductsChart data={data.aggregated.summary.revenue_cost_chart_data} />
}
