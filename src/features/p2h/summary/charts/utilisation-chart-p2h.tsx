import { UtilisationChart } from "@/features/charts/utilisation-chart.tsx"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const UtilisationChartP2h = () => {
    const data = useSummaryP2h()

    if (!data) return null

    return <UtilisationChart data={data.aggregated.summary.utilisation_chart_data} />
}
