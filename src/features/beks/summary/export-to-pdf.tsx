import { Button } from "@/ui/button"
import { useYearlySummaryTable } from "./hooks/use-yearly-summary-table"
import { exportToPdf, type StandardTable, type CombinedTable } from "@/utils/pdf"
import { useFcrBalancingCapacityTable } from "./hooks/use-fcr-balancing-capacity-table"
import { useAfrrBalancingCapacityTable } from "./hooks/use-afrr-balancing-capacity-table"
import { useMfrrBalancingCapacityTable } from "./hooks/use-mfrr-balancing-capacity-table"
import { useDayAheadTable } from "./hooks/use-day-ahead-table"
import { useIntradayTable } from "./hooks/use-intraday-table"
import { useRevenueTable } from "./hooks/use-revenue-table"
import { useCostTable } from "./hooks/use-cost-table"

export const ExportToPdfBeks = () => {
    const yearlySummary = useYearlySummaryTable()
    const fcrBalancingCapacity = useFcrBalancingCapacityTable()
    const afrrBalancingCapacity = useAfrrBalancingCapacityTable()
    const mfrrBalancingCapacity = useMfrrBalancingCapacityTable()
    const dayAhead = useDayAheadTable()
    const intraday = useIntradayTable()
    const revenue = useRevenueTable()
    const cost = useCostTable()

    const exportBeks = () => {
        const filename = "Beks"

        const tables = [
            yearlySummary,
            fcrBalancingCapacity,
            mfrrBalancingCapacity,
            afrrBalancingCapacity,
            dayAhead,
            intraday,
            revenue,
            cost,
        ].filter(Boolean) as Array<StandardTable | CombinedTable>

        exportToPdf({ filename, tables })
    }

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Export to PDF
        </Button>
    )
}

