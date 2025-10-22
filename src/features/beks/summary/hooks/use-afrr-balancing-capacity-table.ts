import { useSummaryBeks } from "../use-summary-beks"

export const useAfrrBalancingCapacityTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "aFRR"
    const description = "Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)"

    const tables = [
        {
            source: "Užsakytų balansavimo pajėgumų kiekis",
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "Aukštyn (angl. Upward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.upward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.upward.unit}`,
                },
                {
                    key: "downward_volume",
                    parameter: "Žemyn (angl. Downward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.downward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.volume_of_procured_reserves.downward.unit}`,
                },
            ],
        },
        {
            source: "Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)",
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Upward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.utilisation.upward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.utilisation.upward.unit}`,
                },
                {
                    key: "downward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Downward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.utilisation.downward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.utilisation.downward.unit}`,
                },
            ],
        },
        {
            source: "Tikėtinos pajamos",
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Upward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.upward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.upward.unit}`,
                },
                {
                    key: "downward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Downward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.downward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.potential_revenue.downward.unit}`,
                },
            ],
        },
        {
            source: "Užsakytų pasiūlymų kiekis (%)",
            dataSource: [
                {
                    key: "upward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Upward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.upward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.upward.unit}`,
                },
                {
                    key: "downward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Downward)",
                    value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.downward.value} 
                    ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR.bids_selected.downward.unit}`,
                },
            ],
        },
    ]

    return { title, description, tables }
}
