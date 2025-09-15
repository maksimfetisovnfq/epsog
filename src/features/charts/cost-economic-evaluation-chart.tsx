import { IncomeChart } from "@/ui/charts/incomeDataExpensesChart"

type Props = {
    data: {
        Product: string
        "Value (tūkst. EUR)": number
    }[]
}

export const CostChart = ({ data }: Props) => {

    if (!data) return null;

    const costChartData = data;
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
