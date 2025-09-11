import { IncomeChart } from "@/ui/charts/incomeChart"
import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts";
import { Stack } from "@mui/material"


export const CostProductsChart = () => {
    const data = useSummaryBeks();

    if (!data) return null;

    const revenueCostChartData = data.aggregated.summary.revenue_cost_chart_data;

    const incomeDataSource = revenueCostChartData.products.map((product: string, index: number) => ({
        key: `item-${index}`,
        name: product,
        valueA: revenueCostChartData.values[index] ?? 0,
        valueB: 0,
    }));

    return (
        <Stack spacing={0} style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: 16}}>
            <div style={{
                fontSize: '16px',
                marginTop: '16px',
                fontWeight: 700,
                textAlign: 'center',
            }}>
                Rinkose sugeneruotų pajamų bei sąnaudų palyginimas per produktus
            </div>

            <div style={{width: '768px'}}>
                <IncomeChart
                    labels={incomeDataSource.map((item: { name: string }) => item.name)}
                    datasets={[
                        {
                            label: 'Bottom',
                            data: incomeDataSource.map((item: { valueB: number }) => item.valueB),
                        },
                        {
                            label: 'Top',
                            data: incomeDataSource.map((item: { valueA: number }) => item.valueA),
                        },
                    ]}
                />
            </div>
        </Stack>
    );
};
