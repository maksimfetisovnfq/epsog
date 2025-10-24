import { Table } from "@/ui/tables"
import { useSummaryP2g } from "../use-summary-p2g"

const useRevenueTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const head = ["Rinkos produktas", "Suma (tūkst. Eur)"]
    const body = data.aggregated.economic_results.revenue_table.map((row) => [
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
        title: "Pajamos už produktus",
    }
}

export const RevenueTable = () => {
    const tableData = useRevenueTable()

    if (!tableData) return null

    return <Table {...tableData} boldHeaders={true} />
}
