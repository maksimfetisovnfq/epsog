import { Table } from "@/ui/tables";
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts";

const useFcrBalancingCapacityTable = () => {
    const data = useSummaryP2h();

    if (!data) return null;

    const head = ["", "FCR", "Matavimo vnt."];
    const body = [
        [
            "Nupirktas balansavimo pajėgumo kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.volume_of_procured_reserves.unit,
        ],
        [
            "Pateiktų pasiūlymų kiekis",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.bids_selected.unit,
        ],
        [
            "Pajamų srautas",
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.value,
            data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR.potential_revenue.unit,
        ],
    ];

    return {
        columns: head.map((title, index) => ({
            title,
            dataIndex: `col${index}`,
            key: `col${index}`,
        })),
        dataSource: body.map((row, rowIndex) => {
            const rowData: { [key: string]: string | number } = { key: rowIndex.toString() };
            row.forEach((cell, cellIndex) => {
                rowData[`col${cellIndex}`] = cell;
            });
            return rowData;
        }),
        title: "FCR balansavimo pajėgumų rinka",
    };
};

export const FcrBalancingCapacityTable = () => {
    const tableData = useFcrBalancingCapacityTable();

    if (!tableData) return null;

    return <Table {...tableData} />;
};
