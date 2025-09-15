import { Table } from "@/ui/tables"
import { useSummaryP2h } from "@/features/p2h/summary/use-summary-p2h.ts"

export const ProjectSummaryTable = () => {
    const data = useSummaryP2h()

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
