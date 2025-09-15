import { VerticalBarChart } from "@/ui/charts/verticalBarChart/vertical-chart.tsx";
import { Stack } from "@mui/material"

type Props = {
    data: {
        Metric: string
        Value: string
    }[]
}


export const YearlySummaryChart = ({data}: Props) => {
    const yearlySummaryTable = data.map((item) => {
        if (item.Metric === "POTENTIAL REVENUE PER YEAR (average)") {
            return { ...item, Metric: "Vidutinės metinės išlados" };
        }
        if (item.Metric === "POTENTIAL COST PER YEAR (average)") {
            return { ...item, Metric: "Vidutinės metinis pelnas/nuostolis" };
        }
        if (item.Metric === "POTENTIAL PROFIT PER YEAR (average)") {
            return { ...item, Metric: "Vidutinės metinės įplaukos" };
        }
        return item;
    });

    const revenue = yearlySummaryTable.find((item) => item.Metric === "Vidutinės metinės išlados");
    const cost = yearlySummaryTable.find((item) => item.Metric === "Vidutinės metinis pelnas/nuostolis");
    const profit = yearlySummaryTable.find((item) => item.Metric === "Vidutinės metinės įplaukos");

    const revenueValue = revenue ? parseFloat(revenue.Value.replace(/[^0-9.-]+/g, "")) : 0;
    const costValue = cost ? Math.abs(parseFloat(cost.Value.replace(/[^0-9.-]+/g, ""))) : 0;
    const profitValue = profit ? parseFloat(profit.Value.replace(/[^0-9.-]+/g, "")) : 0;

    const floatingBarDataset = [
        {
            label: "Yearly Summary",
            data: [
                [0, revenueValue],
                [revenueValue - costValue, revenueValue],
                [0, profitValue],
            ] as [number, number][],
            backgroundColor: ["#FF7070", "#87E6B9", "#B9D7E1"],
        },
    ];

    const floatingBarLabels = [
        revenue?.Metric || "Revenue",
        cost?.Metric || "Cost",
        profit?.Metric || "Profit",
    ];

    return (
        <Stack spacing={1} style={{width: '768px', border: '1px solid #CFD5DA'}}>
            <VerticalBarChart
                datasets={floatingBarDataset}
                labels={floatingBarLabels}
            />
        </Stack>
        
    );
};