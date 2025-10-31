import { useSummaryBeks } from "../use-summary-beks"
import { formatNumber } from "@/ui/tables/TableBody/TableBody.tsx"

export const useAfrrBalancingEnergyTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "aFRR"
    const description = "Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)"

    const tables = [
        {
            source: "Užsakytos balansavimo energijos kiekis",
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "Aukštyn (angl. Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.volume_of_procured_energy.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.volume_of_procured_energy.upward.unit}`,
                },
                {
                    key: "downward_volume",
                    parameter: "Žemyn (angl. Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.volume_of_procured_energy.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.volume_of_procured_energy.downward.unit}`,
                },
            ],
        },
        {
            source:
                "Įrenginio dalyvavimas balansavimo energijos rinkoje (% nuo viso laiko)",
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.utilisation.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.utilisation.upward.unit}`,
                },
                {
                    key: "downward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.utilisation.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.utilisation.downward.unit}`,
                },
            ],
        },
        {
            source: "Tikėtinos pajamos",
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.potential_revenue.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.potential_revenue.upward.unit}`,
                },
                {
                    key: "downward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.potential_revenue.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.potential_revenue.downward.unit}`,
                },
            ],
        },
        {
            source: "Užsakytų pasiūlymų kiekis (%)",
            dataSource: [
                {
                    key: "upward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.bids_selected.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.bids_selected.upward.unit}`,
                },
                {
                    key: "downward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.bids_selected.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR.bids_selected.downward.unit}`,
                },
            ],
        },
    ]

    return { title, description, tables, hideHead: true }
}
