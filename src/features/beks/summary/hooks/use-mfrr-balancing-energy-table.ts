import { useSummaryBeks } from "../use-summary-beks"
import { formatNumber } from "@/ui/tables/TableBody/TableBody.tsx"

export const useMfrrBalancingEnergyTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "mFRR"
    const description = "Rankinis dažnio atkūrimo rezervas (angl. Manual frequency restoration reserve)"

    const tables = [
        {
            source: "Užsakytos balansavimo energijos kiekis",
            dataSource: [
                {
                    key: "upward_volume",
                    parameter: "Aukštyn (angl. Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.volume_of_procured_energy.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.volume_of_procured_energy.upward.unit}`,
                },
                {
                    key: "downward_volume",
                    parameter: "Žemyn (angl. Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.volume_of_procured_energy.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.volume_of_procured_energy.downward.unit}`,
                },
            ],
        },
        {
            source: "Įrenginio dalyvavimas balansavimo energijos rinkoje (% nuo viso laiko)",
            dataSource: [
                {
                    key: "upward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.utilisation.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.utilisation.upward.unit}`,
                },
                {
                    key: "downward_utilisation",
                    parameter: "Dalyvavimas paslaugoje (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.utilisation.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.utilisation.downward.unit}`,
                },
            ],
        },
        {
            source: "Tikėtinos pajamos",
            dataSource: [
                {
                    key: "upward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.potential_revenue.upward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.potential_revenue.upward.unit}`,
                },
                {
                    key: "downward_revenue",
                    parameter: "Potencialios pajamos/sąnaudos (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.potential_revenue.downward.value)} ${data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR.potential_revenue.downward.unit}`,
                },
            ],
        },
        {
            source: "Užsakytų pasiūlymų kiekis (%)",
            dataSource: [
                {
                    key: "upward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Upward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.upward.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.upward.unit}`,
                },
                {
                    key: "downward_bids",
                    parameter: "Priimtų kainos pasiūlymų dalis, proc. (Downward)",
                    value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.downward.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR.bids_selected.downward.unit}`,
                },
            ],
        },
    ]

    return { title, description, tables, hideHead: true }
}

