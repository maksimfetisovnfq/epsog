import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"

export const useProjectSummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    const title = "Projekto (viso laikotarpio) suvestinė"
    const dataSource = [
        { 
            Header: "Potencialios pajamos (viso)",
            Value: data.aggregated.summary.project_summary_table[0].Value
        },
        {
            Header: "Potencialios pajamos (viso)",
            Value: data.aggregated.summary.project_summary_table[1].Value
        },
        {
            Header: "Potencialius pelnas/nuostolis (viso)",
            Value: data.aggregated.summary.project_summary_table[2].Value
        }
    ]
    const columns = [
        { title: "Metric", dataIndex: "Header" },
        { title: "Value", dataIndex: "Value" },
    ]
    
    return { title, dataSource, columns, hideHead: true }
}
