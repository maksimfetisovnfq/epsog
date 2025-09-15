import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"
import { useSummaryP2g } from "@/features/p2g/summary/use-summary-p2g.ts"

export const CostTable = () => {
    const data = useSummaryP2g()

    if (!data) return

    return (
        <Stack spacing={2}>
            <div>Pajamos / sąnaudos</div>
            <Table
                dataSource={data.aggregated.economic_results.cost_table}
                columns={[
                    { title: "Product", dataIndex: "Product" },
                    { title: "Value (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
                ]}
            />
        </Stack>
    )
}
