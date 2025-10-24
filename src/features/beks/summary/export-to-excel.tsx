import { Button } from "@/ui/button"
import { useYearlySummaryTable } from "./hooks/use-yearly-summary-table"
import { exportToExcel } from "@/utils/excel"
import { useFcrBalancingCapacityTable } from "./hooks/use-fcr-balancing-capacity-table"
import { useAfrrBalancingCapacityTable } from "./hooks/use-afrr-balancing-capacity-table"
import { useMfrrBalancingCapacityTable } from "./hooks/use-mfrr-balancing-capacity-table"
import { useDayAheadTable } from "./hooks/use-day-ahead-table"
import { useIntradayTable } from "./hooks/use-intraday-table"
import { useRevenueTable } from "./hooks/use-revenue-table"
import { useCostTable } from "./hooks/use-cost-table"
import { useProjectSummaryTable } from "./hooks/use-project-summary-table"
import { useYearlyTable } from "./hooks/use-yearly-table"

export const ExportToExcelBeks = () => {
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

        const sheets = [
            { name: "Apžvalga", tables: [yearlySummary!, projectSummary!].filter(Boolean) },
            {
                name: "Balansavimo pajėgumų rinka",
                tables: [fcrBalancingCapacity!, mfrrBalancingCapacity!, afrrBalancingCapacity!].filter(Boolean),
            },
            { 
                name: "Balansavimo energijos rinka", 
                tables: [afrrBalancingCapacity!, mfrrBalancingCapacity!].filter(Boolean) 
            },
            { 
                name: "Elektros energijos prekyba", 
                tables: [dayAhead!, intraday!].filter(Boolean) 
            },
            { 
                name: "Ekonominis vertinimas", 
                tables: [revenue!, cost!, yearly!].filter(Boolean) 
            },
        ]

        exportToExcel({ filename, sheets })
    }

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Eksportuoti kaip XLSX
        </Button>
    )
}
