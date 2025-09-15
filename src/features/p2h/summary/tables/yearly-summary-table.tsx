import { Table } from "@/ui/tables"
import { useSummaryP2h } from "../use-summary-p2h.ts"

export const YearlySummaryTable = () => {
    const data = useSummaryP2h()

    if (!data) return

    return <Table
        title="YEARLY SUMMARY"
        dataSource={data.aggregated.summary.yearly_summary_table}
        columns={[
            {title: "Metric", dataIndex: "Metric"},
            {title: "Value", dataIndex: "Value"},
        ]}
    />
} 