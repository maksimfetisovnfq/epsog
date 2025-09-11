import { useSummaryBeks } from "../use-summary-beks.ts"
import { Table } from "@/ui/tables"

export const ProjectSummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    return (
        <Table
            title="PROJECT (LIFETIME) SUMMARY"
            dataSource={data.aggregated.summary.project_summary_table}
            columns={[
                { title: "Metric", dataIndex: "Metric" },
                { title: "Value", dataIndex: "Value" },
            ]}
        />
    )
}
