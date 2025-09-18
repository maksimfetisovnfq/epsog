import { IncomeChart } from "@/ui/charts/incomeDataExpensesChart"
import { Box } from "@mui/material"

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
        <Box sx={{border: '1px solid #CFD5DA', maxWidth: '768px'}}>
            <Box sx={{width: {sm: '768px'}}}>
                <IncomeChart
                    labels={labels}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: values,
                        },
                    ]}
                />
            </Box>
        </Box>
    );
};
