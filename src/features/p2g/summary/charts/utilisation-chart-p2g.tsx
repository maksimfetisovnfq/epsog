import { UtilisationChart } from "@/features/charts/utilisation-chart.tsx"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const UtilisationChartP2g = () => {
    const data = useSummaryP2g()

    if (!data) return null

    return <UtilisationChart data={data.aggregated.summary.utilisation_chart_data} />
}
