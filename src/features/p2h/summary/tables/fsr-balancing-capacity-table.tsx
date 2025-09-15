import { Table } from "@/ui/tables";
import { useSummaryP2h } from "../use-summary-p2h.ts";

export const FcrBalancingCapacityTable = () => {
    const data = useSummaryP2h();

    if (!data) return null;

    const translatedData = [
        {
            Header: "Įsigytų pajėgumų apimtys",
            Value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.value} 
            ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.unit}`,
        },
        {
            Header: "Dalyvavimas paslaugoje",
            Value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.utilisation.value} 
            ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.utilisation.unit}`,
        },
        {
            Header: "Potencialios pajamos/sąnaudos",
            Value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.value} 
            ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.unit}`,
        },
        {
            Header: "Priimtų kainos pasiūlymų dalis, proc.",
            Value: `${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.value} 
            ${data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.unit}`,
        },
    ];

    return (
        <Table
            title="FCR"
            description="Dažnio išlaikymo rezervas (angl. Frequency containment reserve)"
            hideHead={true}
            dataSource={translatedData}
            columns={[
                { title: "Header", dataIndex: "Header" },
                { title: "Value", dataIndex: "Value" },
            ]}
        />
    );
};
