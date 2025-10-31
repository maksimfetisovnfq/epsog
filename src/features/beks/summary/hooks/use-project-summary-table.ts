import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"
import { formatNumber } from "@/ui/tables/TableBody/TableBody.tsx"

export const useProjectSummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    const title = "Projekto (viso laikotarpio) suvestinė"
    const dataSource = [
        { 
            Header: "Potencialios pajamos (viso)",
            Value: `${formatNumber(+data.aggregated.summary.project_summary_table[0].Value)} tūkst. EUR`
        },
        {
            Header: "Potencialios pajamos (viso)",
            Value: `${formatNumber(+data.aggregated.summary.project_summary_table[1].Value)} tūkst. EUR`
        },
        {
            Header: "Potencialius pelnas/nuostolis (viso)",
            Value: `${formatNumber(+data.aggregated.summary.project_summary_table[2].Value)} tūkst. EUR`
        }
    ]
    const columns = [
        { title: "Metric", dataIndex: "Header" },
        { title: "Value", dataIndex: "Value" },
    ]
    
    return { title, dataSource, columns, hideHead: true }
}
