import { Table } from "@/ui/tables"
import { useYearlySummaryTable } from "../hooks/use-yearly-summary-table"

export const YearlySummaryTable = () => {
    const tableData = useYearlySummaryTable()

    if (!tableData) return null

    return <Table {...tableData} hideHead={true} />
}
