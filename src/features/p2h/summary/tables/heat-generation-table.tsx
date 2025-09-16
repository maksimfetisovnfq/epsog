import { CombinedTable } from "@/ui/tables/combinedTable"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const HitGenerationTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const tables = [
        {
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "Nupirkta",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.volume_of_energy_exchange.purchase.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.volume_of_energy_exchange.purchase.unit}`,
                },
            ],
        },
        {
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "Nupirkta",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.percentage_of_time.purchase.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.percentage_of_time.purchase.unit}`,
                },
            ],
        },
        {
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "Sąnaudos",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.potential_cost_revenue.cost.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Heat_Generation.potential_cost_revenue.cost.unit}`,
                },
            ],
        },
    ]

    return (
        <>
            <div style={{ marginBottom: 16 }}>Heat_Generation</div>
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
