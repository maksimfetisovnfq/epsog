import { useSummaryP2h } from "../use-summary-p2h.ts"
import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"

export const CostTable = () => {
    const data = useSummaryP2h()

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
