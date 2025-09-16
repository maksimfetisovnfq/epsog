import { UtilisationChart } from "@/features/charts/utilisation-chart"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const UtilisationChartDsr = () => {
    const data = useSummaryDsr()

    if (!data) return null

    return <UtilisationChart data={data.aggregated.summary.utilisation_chart_data} />
}
