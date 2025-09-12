import { useSummaryBeks } from "../use-summary-beks.ts"
import { Table } from "@/ui/tables"

export const RevenueTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    return (
        <Table
            dataSource={data.aggregated.economic_results.revenue_table}
            columns={[
                { title: "Rinkos produktas", dataIndex: 'Product', key: 'Product' },
                { title: "Suma (tūkst. Eur)", dataIndex: 'Value (tūkst. EUR)', key: 'Value (tūkst. EUR)' },
            ]}
            boldHeaders={true}
        />
    )
}
