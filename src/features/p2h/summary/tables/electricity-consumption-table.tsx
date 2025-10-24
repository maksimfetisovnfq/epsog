import { Table } from "@/ui/tables"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

const useElectricityConsumptionTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const head = ["", "Diena prieš (angl. Day-Ahead) rinka", "Matavimo vnt."]
    const body = [
        [
            "Nupirktas energijos kiekis",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Electricity_Consumption.volume_of_energy_exchange
                .purchase.value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Electricity_Consumption.volume_of_energy_exchange
                .purchase.unit,
        ],
        [
            "Sąnaudos",
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Electricity_Consumption.potential_cost_revenue.cost
                .value,
            data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Electricity_Consumption.potential_cost_revenue.cost
                .unit,
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
        title: "Elektros energijos suvartojimas",
    }
}

export const ElectricityConsumptionTable = () => {
    const tableData = useElectricityConsumptionTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
