import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { CostProductsChart } from "@/features/charts/cost-products-chart.tsx"

export const CostProductsChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <CostProductsChart data={data.aggregated.summary.revenue_cost_chart_data} />
}
