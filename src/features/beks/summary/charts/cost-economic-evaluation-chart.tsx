import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts";
import { IncomeChart } from "@/ui/charts/incomeDataExpensesChart"

export const CostChart = () => {
    const data = useSummaryBeks();

    if (!data) return null;

    const costChartData = data.aggregated.economic_results.cost_table;
    const labels = costChartData.map((item: { Product: string }) => item.Product);
    const values = costChartData.map((item: { "Value (tūkst. EUR)": number }) => item["Value (tūkst. EUR)"]);

    return (
        <div style={{border: '1px solid #CFD5DA', maxWidth: '768px'}}>
            <div style={{width: '768px'}}>
                <IncomeChart
                    labels={labels}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: values,
                        },
                    ]}
                />
            </div>
        </div>
    );
};
