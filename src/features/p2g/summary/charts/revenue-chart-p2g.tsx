import { RevenueChart } from "@/features/charts/revenue-chart.tsx"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const RevenueChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <RevenueChart data={data.aggregated.economic_results.revenue_table} />
}
