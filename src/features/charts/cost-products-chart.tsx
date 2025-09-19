import { IncomeChart } from "@/ui/charts/incomeChart"
import { Box, Stack } from "@mui/material"

type Props = {
    data: {
        products: string[]
        values: number[]
    }
}

export const CostProductsChart = ({ data }: Props) => {
    if (!data) return null

    const revenueCostChartData = data

    const incomeDataSource = revenueCostChartData.products.map((product: string, index: number) => ({
        key: `item-${index}`,
        name: product,
        valueA: revenueCostChartData.values[index] ?? 0,
        valueB: 0,
    }))

    return (
        <Stack spacing={0} sx={{ border: "1px solid #CFD5DA", width: { sm: "768px" }}}>
            <div
                style={{
                    fontSize: "16px",
                    marginTop: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                }}
            >
                Rinkose sugeneruotų pajamų bei sąnaudų palyginimas per produktus
            </div>

            <Box sx={{ width: { sm: "768px" } }}>
                <IncomeChart
                    labels={incomeDataSource.map((item: { name: string }) => item.name)}
                    datasets={[
                        {
                            label: "Bottom",
                            data: incomeDataSource.map((item: { valueB: number }) => item.valueB),
                        },
                        {
                            label: "Top",
                            data: incomeDataSource.map((item: { valueA: number }) => item.valueA),
                        },
                    ]}
                />
            </Box>
        </Stack>
    )
}
