import { Button } from "@/ui/button"
import { useYearlySummaryTable } from "./hooks/use-yearly-summary-table"
import { exportToExcel } from "@/utils/excel"

export const ExportToExcelBeks = () => {
    const yeaarlySummary = useYearlySummaryTable()

    const exportBeks = () => {
        const filename = "Beks"

        const sheet1Tabels = [yeaarlySummary!]

        const sheets = [{ name: "Apžvalga", tables: sheet1Tabels.filter(Boolean) }]

        exportToExcel({ filename, sheets })
    }

    console.log("efefefe")

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Export
        </Button>
    )
}
