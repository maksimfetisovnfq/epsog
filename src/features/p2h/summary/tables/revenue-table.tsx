import { useSummaryP2h } from "../use-summary-p2h.ts"
import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"

export const RevenueTable = () => {
    const data = useSummaryP2h()

    if (!data) return

    return (
        <Stack spacing={2}>
            <div>Pajamos už produktus</div>
            <Table
                dataSource={data.aggregated.economic_results.revenue_table}
                columns={[
                    { title: "Rinkos produktas", dataIndex: "Product", key: "Product" },
                    { title: "Suma (tūkst. Eur)", dataIndex: "Value (tūkst. EUR)", key: "Value (tūkst. EUR)" },
                ]}
                boldHeaders={true}
            />
        </Stack>
    )
}
