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
import { useProjectSummaryTable } from "./hooks/use-project-summary-table"
import { useYearlyTable } from "./hooks/use-yearly-table.ts"
import type { RefObject } from "react"

type Props = {
    refs: RefObject<HTMLDivElement | null>[]
}

export const ExportToPdfBeks = ({refs}: Props) => {
    const yearlySummary = useYearlySummaryTable()
    const projectSummary = useProjectSummaryTable()
    const fcrBalancingCapacity = useFcrBalancingCapacityTable()
    const afrrBalancingCapacity = useAfrrBalancingCapacityTable()
    const mfrrBalancingCapacity = useMfrrBalancingCapacityTable()
    const dayAhead = useDayAheadTable()
    const intraday = useIntradayTable()
    const revenue = useRevenueTable()
    const cost = useCostTable()
    const yearly = useYearlyTable()

    const exportBeks = () => {
        const filename = "Beks"

        const tables = [
            yearlySummary,
            projectSummary,
            fcrBalancingCapacity,
            mfrrBalancingCapacity,
            afrrBalancingCapacity,
            dayAhead,
            intraday,
            revenue,
            cost,
            yearly,
        ].filter(Boolean) as Array<StandardTable | CombinedTable>

        exportToPdf({ filename, tables, refs })
    }

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Eksportuoti kaip PDF
        </Button>
    )
}

