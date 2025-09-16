import { Table } from "@/ui/tables"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const ProjectSummaryTable = () => {
    const data = useSummaryDsr()

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
