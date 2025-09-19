import { RevenueProductsChart } from "@/ui/charts/revenueProductsChart"
import { Box } from "@mui/material"

type Props = {
    data: {
        Product: string
        "Value (tūkst. EUR)": number
    }[]
}

export const RevenueChart = ({ data }: Props) => {
    if (!data) return null

    const revenueChartData = data
    const labels = revenueChartData.map((item: { Product: string }) => item.Product)
    const values = revenueChartData.map((item: { "Value (tūkst. EUR)": number }) => item["Value (tūkst. EUR)"])

    return (
        <Box sx={{ border: "1px solid #CFD5DA", maxWidth: {sm: "768px"} }}>
            <Box sx={{ width: { sm: "768px" } }}>
                <RevenueProductsChart
                    labels={labels}
                    datasets={[
                        {
                            label: "Rinkos produktai",
                            data: values,
                        },
                    ]}
                />
            </Box>
        </Box>
    )
}
