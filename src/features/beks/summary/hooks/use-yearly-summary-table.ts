import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts"

export const useYearlySummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    const dataSource = data.aggregated.summary.yearly_summary_table.map((item: { Metric: string }) => {
        if (item.Metric === "POTENTIAL REVENUE PER YEAR (average)") {
            return { ...item, Metric: "Potencialios sąnaudos per metus (vidurkis)" }
        }
        if (item.Metric === "POTENTIAL COST PER YEAR (average)") {
            return { ...item, Metric: "Potencialios pajamos per metus (vidurkis)" }
        }
        if (item.Metric === "POTENTIAL PROFIT PER YEAR (average)") {
            return { ...item, Metric: "Potencialus pelnas/nuostolis per metus (vidurkis)" }
        }
        return item
    })

    const columns = [
        { title: "Metric", dataIndex: "Metric" },
        { title: "Value", dataIndex: "Value" },
    ]
    
    const title = "Metiniai rezultatai"
    
    return { dataSource, columns, title, hideHead: true }
}
