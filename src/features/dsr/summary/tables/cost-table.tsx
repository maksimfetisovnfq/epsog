import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr"

export const CostTable = () => {
    const data = useSummaryDsr()

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
