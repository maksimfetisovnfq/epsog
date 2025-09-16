import { RevenueChart } from "@/features/charts/revenue-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const RevenueChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <RevenueChart data={data.aggregated.economic_results.revenue_table} />
}
