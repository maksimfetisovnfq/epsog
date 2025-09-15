import { RevenueProductsChart } from "@/ui/charts/revenueProductsChart"

type Props = {
    data: {
        Product: string
        "Value (tūkst. EUR)": number
    }[]
}

export const RevenueChart = ({ data }: Props) => {

    if (!data) return null;

    const revenueChartData = data;
    const labels = revenueChartData.map((item: { Product: string }) => item.Product);
    const values = revenueChartData.map((item: { "Value (tūkst. EUR)": number }) => item["Value (tūkst. EUR)"]);

    return (
        <div style={{border: '1px solid #CFD5DA', maxWidth: '768px'}}>
            <div style={{width: '768px'}}>
                <RevenueProductsChart
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
