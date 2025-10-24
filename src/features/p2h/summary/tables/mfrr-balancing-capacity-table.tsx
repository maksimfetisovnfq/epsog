import { Table } from "@/ui/tables"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

const useMfrrBalancingCapacityTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const head = ["", "mFRR", "Matavimo vnt."]
    const body = [
        [
            "Nupirktas balansavimo pajėgumo kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.volume_of_procured_reserves.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.volume_of_procured_reserves.upward.unit,
        ],
        [
            "Pateiktų pasiūlymų kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.upward.unit,
        ],
        [
            "Pajamų srautas",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.potential_revenue.upward.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.potential_revenue.upward.unit,
        ],
    ]

    return {
        columns: head.map((title, index) => ({
            title,
            dataIndex: `col${index}`,
            key: `col${index}`,
        })),
        dataSource: body.map((row, rowIndex) => {
            const rowData: { [key: string]: string | number } = { key: rowIndex }
            row.forEach((cell, cellIndex) => {
                rowData[`col${cellIndex}`] = cell
            })
            return rowData
        }),
        title: "mFRR balansavimo pajėgumų rinka",
    }
}

export const MfrrBalancingCapacityTable = () => {
    const tableData = useMfrrBalancingCapacityTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
