import { Table } from "@/ui/tables"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

const useHydrogenSalesTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const head = ["", "Vandenilio pardavimai", "Matavimo vnt."]
    const body = [
        [
            "Parduoto vandenilio kiekis",
            data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.volume_of_h2_sold.value,
            data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.volume_of_h2_sold.unit,
        ],
        [
            "Pajamos",
            data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.potential_cost_revenue.revenue.value,
            data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.potential_cost_revenue.revenue.unit,
        ],
    ]

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
        title: "Vandenilio pardavimai",
    }
}

export const HydrogenSalesTable = () => {
    const tableData = useHydrogenSalesTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
