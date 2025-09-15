import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { RevenueChart } from "@/features/charts/revenue-chart.tsx"

export const RevenueChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <RevenueChart data={data.aggregated.economic_results.revenue_table} />
}
