import { Table } from "@/ui/tables"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

const useDayAheadTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const head = ["", "Diena prieš (angl. Day-Ahead) rinka", "Matavimo vnt."]
    const body = [
        [
            "Nupirktas energijos kiekis",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.unit,
        ],
        [
            "Sąnaudos",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.unit,
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
        title: "Elektros energijos suvartojimas",
    }
}

export const DayAheadTable = () => {
    const tableData = useDayAheadTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
