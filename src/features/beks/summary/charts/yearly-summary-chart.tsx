import { VerticalBarChart } from "@/ui/charts/verticalBarChart/vertical-chart.tsx";
import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts";

export const YearlySummaryChart = () => {
    const data = useSummaryBeks();

    if (!data) return null;

    const yearlySummaryTable = data.aggregated.summary.yearly_summary_table.map((item) => {
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
        <div style={{width: '768px', border: '1px solid #CFD5DA', marginTop: 16}}>
            <VerticalBarChart
                datasets={floatingBarDataset}
                labels={floatingBarLabels}
            />
        </div>
        
    );
};