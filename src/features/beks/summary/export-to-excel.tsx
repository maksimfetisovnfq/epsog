import { Button } from "@/ui/button"
import { useYearlySummaryTable } from "./hooks/use-yearly-summary-table"
import { exportToExcel } from "@/utils/excel"
import { useFcrBalancingCapacityTable } from "./hooks/use-fcr-balancing-capacity-table"

export const ExportToExcelBeks = () => {
    const yearlySummary = useYearlySummaryTable()

    const fcrBalancingCapacity = useFcrBalancingCapacityTable()

    const exportBeks = () => {
        const filename = "Beks"

        const sheets = [
            { name: "Apžvalga", tables: [yearlySummary!].filter(Boolean) },
            { name: "Balansavimo pajėgumų rinka", tables: [fcrBalancingCapacity!].filter(Boolean) },
            { name: "Balansavimo energijos rinka", tables: [] },
            { name: "Elektros energijos prekyba", tables: [] },
            { name: "Ekonominis vertinimas", tables: [] },
        ]

        exportToExcel({ filename, sheets })
    }

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Export
        </Button>
    )
}
