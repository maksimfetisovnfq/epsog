import { useSummaryBeks } from "../use-summary-beks"

export const useDayAheadTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Diena prieš (angl. Day-Ahead) rinka"

    const tables = [
        {
            source: "Energijos prekybos apimtys",
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "Nupirkta",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.purchase.unit}`,
                },
                {
                    key: "downward_volume",
                    parameter: "Parduota",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.sale.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.volume_of_energy_exchange.sale.unit}`,
                },
            ],
        },
        {
            source: "Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)",
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "Nupirkta",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.purchase.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.purchase.unit}`,
                },
                {
                    key: "downward_utilisation",
                    parameter: "Parduota",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.sale.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.percentage_of_time.sale.unit}`,
                },
            ],
        },
        {
            source: "Tikėtinos pajamos / sąnaudos",
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "Sąnaudos",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.cost.unit}`,
                },
                {
                    key: "downward_revenue",
                    parameter: "Pajamos",
                    value: `${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.revenue.value} 
                    ${data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead.potential_cost_revenue.revenue.unit}`,
                },
            ],
        },
    ]

    return { title, tables }
}

