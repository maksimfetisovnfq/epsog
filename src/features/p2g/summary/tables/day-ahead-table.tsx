import { CombinedTable } from "@/ui/tables/combinedTable"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const DayAheadTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const tables = [
        {
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "VOLUME",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.value}
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.unit}`,
                },
            ],
        },
        {
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "% OF TIME",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.purchase.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.purchase.unit}`,
                },
            ],
        },
        {
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "COST",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.unit}`,
                },
            ],
        },
    ]

    return (
        <>
            <div style={{ marginBottom: 16 }}>Diena prieš (angl. Day-Ahead) rinka</div>
            {tables.map((table, index) => (
                <CombinedTable
                    key={index}
                    dataSource={table.dataSource}
                    source={
                        index === 0
                            ? "Energijos prekybos apimtys"
                            : index === 1
                              ? "Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                              : "Tikėtinos pajamos / sąnaudos"
                    }
                />
            ))}
        </>
    )
}
