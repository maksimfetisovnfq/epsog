import { CostProductsChart } from "@/features/charts/cost-products-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const CostProductsChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <CostProductsChart data={data.aggregated.summary.revenue_cost_chart_data} />
}
