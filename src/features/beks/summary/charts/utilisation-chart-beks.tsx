import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { UtilisationChart } from "@/features/charts/utilisation-chart.tsx"

export const UtilisationChartBeks = () => {
    const data = useSummaryBeks()

    if (!data) return null

    return <UtilisationChart data={data.aggregated.summary.utilisation_chart_data} />
}
