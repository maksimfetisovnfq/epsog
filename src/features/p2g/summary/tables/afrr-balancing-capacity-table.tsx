import { Table } from "@/ui/tables"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

const useAfrrBalancingCapacityTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const head = ["", "aFRR", "Matavimo vnt."]
    const body = [
        [
            "Nupirktas balansavimo pajėgumo kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.upward.unit,
        ],
        [
            "Pateiktų pasiūlymų kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.upward.unit,
        ],
        [
            "Pajamų srautas",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.upward.unit,
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
        title: "aFRR balansavimo pajėgumų rinka",
    }
}

export const AfrrBalancingCapacityTable = () => {
    const tableData = useAfrrBalancingCapacityTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
