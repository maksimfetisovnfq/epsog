import { CombinedTable } from "@/ui/tables/combinedTable"
import { useDayAheadTable } from "../hooks/use-day-ahead-table"

export const DayAheadTable = () => {
    const tableData = useDayAheadTable()

    if (!tableData) return null

    return (
        <>
            <div style={{ marginBottom: 16 }}>{tableData.title}</div>
            {tableData.tables.map((table, index) => (
                <CombinedTable
                    key={index}
                    dataSource={table.dataSource}
                    source={table.source}
                />
            ))}
        </>
    )
}
