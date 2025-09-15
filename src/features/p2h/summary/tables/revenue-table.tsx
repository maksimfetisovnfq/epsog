import { useSummaryP2h } from "../use-summary-p2h.ts"
import { Table } from "@/ui/tables"

export const RevenueTable = () => {
    const data = useSummaryP2h()

    if (!data) return

    return (
        <Table
            dataSource={data.aggregated.economic_results.revenue_table}
            columns={[
                { title: "Product", dataIndex: "Product" },
                { title: "Value (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
            ]}
        />
    )
}
