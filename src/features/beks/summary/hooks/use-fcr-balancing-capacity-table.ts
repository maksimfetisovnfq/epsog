import { useSummaryBeks } from "../use-summary-beks"
import { formatNumber } from "@/ui/tables/TableBody/TableBody.tsx"

export const useFcrBalancingCapacityTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const dataSource = [
        {
            Header: "Įsigytų pajėgumų apimtys",
            Value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.unit}`,
        },
        {
            Header: "Dalyvavimas paslaugoje",
            Value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.utilisation.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.utilisation.unit}`,
        },
        {
            Header: "Potencialios pajamos/sąnaudos",
            Value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.unit}`,
        },
        {
            Header: "Priimtų kainos pasiūlymų dalis, proc.",
            Value: `${formatNumber(+data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.value)} ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.unit}`,
        },
    ]

    const title = "FCR"
    const description = "Dažnio išlaikymo rezervas (angl. Frequency containment reserve)"

    const columns = [
        { title: "Header", dataIndex: "Header" },
        { title: "Value", dataIndex: "Value" },
    ]

    return { dataSource, title, description, columns, hideHead: true }
}
