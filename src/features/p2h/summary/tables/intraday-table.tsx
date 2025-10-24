import { Table } from "@/ui/tables"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

const useIntradayTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const head = ["", "Dienos eigos (angl. Intraday) rinka", "Matavimo vnt."]
    const body = [
        [
            "Nupirktas energijos kiekis",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.volume_of_energy_exchange.purchase.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.volume_of_energy_exchange.purchase.unit,
        ],
        [
            "Parduotas energijos kiekis",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.volume_of_energy_exchange.sale.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.volume_of_energy_exchange.sale.unit,
        ],
        [
            "Sąnaudos",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.potential_cost_revenue.cost.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.potential_cost_revenue.cost.unit,
        ],
        [
            "Pajamos",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.potential_cost_revenue.revenue.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday.potential_cost_revenue.revenue.unit,
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
        title: "Dienos eigos (angl. Intraday) rinka",
    }
}

export const IntradayTable = () => {
    const tableData = useIntradayTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
