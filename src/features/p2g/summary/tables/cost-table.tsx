import { Table } from "@/ui/tables"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

const useCostTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const head = ["Pajamos / sąnaudos", "Suma (tūkst. Eur)"]
    const body = data.aggregated.economic_results.cost_table.map((row) => [
        row.Product,
        row["Value (tūkst. EUR)"],
    ])

    return {
        columns: head.map((title, index) => ({
            title,
            dataIndex: `col${index}`,
            key: `col${index}`,
        })),
        dataSource: body.map((row, rowIndex) => {
            const rowData: { [key: string]: string | number } = { key: rowIndex.toString() }
            row.forEach((cell, cellIndex) => {
                rowData[`col${cellIndex}`] = cell
            })
            return rowData
        }),
        title: "Sąnaudos",
    }
}

export const CostTable = () => {
    const tableData = useCostTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
