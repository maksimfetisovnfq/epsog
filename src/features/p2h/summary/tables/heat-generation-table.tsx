import { Table } from "@/ui/tables"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

const useHitGenerationTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const head = ["", "Šilumos gamyba", "Matavimo vnt."]
    const body = [
        [
            "Pagamintas šilumos kiekis",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.volume_of_energy_exchange.purchase
                .value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.volume_of_energy_exchange.purchase
                .unit,
        ],
        [
            "Pajamos",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.potential_cost_revenue.cost.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.potential_cost_revenue.cost.unit,
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
        title: "Šilumos gamyba",
    }
}

export const HitGenerationTable = () => {
    const tableData = useHitGenerationTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
