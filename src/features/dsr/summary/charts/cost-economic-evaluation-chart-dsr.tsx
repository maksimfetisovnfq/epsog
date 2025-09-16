import { CostChart } from "@/features/charts/cost-economic-evaluation-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr"

export const CostChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <CostChart data={data.aggregated.economic_results.cost_table} />
}
