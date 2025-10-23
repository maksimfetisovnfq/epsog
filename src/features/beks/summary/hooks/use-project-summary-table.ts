import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"

export const useProjectSummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    const title = "PROJECT (LIFETIME) SUMMARY"
    const dataSource = data.aggregated.summary.project_summary_table
    const columns = [
        { title: "Metric", dataIndex: "Metric" },
        { title: "Value", dataIndex: "Value" },
    ]
    
    return { title, dataSource, columns }
}
