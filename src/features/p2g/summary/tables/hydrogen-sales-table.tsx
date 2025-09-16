import { CombinedTable } from "@/ui/tables/combinedTable"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const HydrogenSalesTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const tables = [
        {
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "VOLUME SOLD",
                    value: `${data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.volume_of_h2_sold.value}
                    ${data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.volume_of_h2_sold.unit}`,
                },
            ],
        },
        {
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "REVENUE",
                    value: `${data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.potential_cost_revenue.revenue.value}
                    ${data.aggregated.markets.VANDENILIO_PREKYBA.Hydrogen_Sales.potential_cost_revenue.revenue.unit}`,
                },
            ],
        },
    ]

    return (
        <>
            <div style={{ marginBottom: 16 }}>Hydrogen Sales</div>
            {tables.map((table, index) => (
                <CombinedTable
                    key={index}
                    dataSource={table.dataSource}
                    source={
                        index === 0
                            ? "Energijos prekybos apimtys"
                            : "Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                    }
                />
            ))}
        </>
    )
}
