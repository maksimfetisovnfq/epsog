import { Table } from "@/ui/tables"
import { useSummaryP2g } from "../use-summary-p2g"

export const YearlySummaryTable = () => {
    const data = useSummaryP2g()

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