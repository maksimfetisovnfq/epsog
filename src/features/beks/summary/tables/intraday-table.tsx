import { CombinedTable } from "@/ui/tables/combinedTable"
import { useIntradayTable } from "../hooks/use-intraday-table"

export const IntradayTable = () => {
    const tableData = useIntradayTable()

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
