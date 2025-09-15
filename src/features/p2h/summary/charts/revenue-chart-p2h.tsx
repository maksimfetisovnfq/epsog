import { RevenueChart } from "@/features/charts/revenue-chart.tsx"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const RevenueChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <RevenueChart data={data.aggregated.economic_results.revenue_table} />
}
