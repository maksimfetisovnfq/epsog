import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"
import { useSummaryDsr } from "../use-summary-dsr.ts"

export const RevenueTable = () => {
    const data = useSummaryDsr()

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
