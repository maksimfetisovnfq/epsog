import { CombinedTable } from "@/ui/tables/combinedTable"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"
import { Box } from "@mui/material"

export const AfrrBalancingCapacityTable = () => {
    const data = useSummaryP2g();

    if (!data) return null;

    const tables = [
        {
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
    ];

    return (
        <>
            <Box sx={{ fontSize: '18px', marginBottom: '16px' }}>
                <Box sx={{ marginBottom: 4 }}>aFRR</Box>
                <Box sx={{ fontSize: '14px', color: '#6F8190', width: {sm: 768} }}>
                    Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)
                </Box>
            </Box>
            {tables.map((table, index) => (
                <CombinedTable
                    key={index}
                    dataSource={table.dataSource}
                    source={
                        index === 0
                            ? "Užsakytų balansavimo pajėgumų kiekis"
                            : index === 1
                            ? "Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                            : index === 2
                            ? "Tikėtinos pajamos"
                            : "Užsakytų pasiūlymų kiekis (%)"
                    }
                />
            ))}
        </>
    );
};
