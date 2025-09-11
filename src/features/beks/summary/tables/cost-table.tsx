import { useSummaryBeks } from "../use-summary-beks.ts"
import { Table } from "@/ui/tables"

export const CostTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    return (
        <Table
            dataSource={data.aggregated.economic_results.cost_table}
            columns={[
                { title: "Product", dataIndex: "Product" },
                { title: "Value (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
            ]}
        />
    )
}
