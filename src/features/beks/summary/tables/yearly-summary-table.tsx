import { Table } from "@/ui/tables"
import { useSummaryBeks } from "../use-summary-beks.ts"

export const YearlySummaryTable = () => {
    const data = useSummaryBeks()

    if (!data) return

    const translatedData = data.aggregated.summary.yearly_summary_table.map((item) => {
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

    return (
            <Table
                title="Metiniai rezultatai"
                hideHead={true}
                dataSource={translatedData}
                columns={[
                    { title: "Metric", dataIndex: "Metric" },
                    { title: "Value", dataIndex: "Value" },
                ]}
            />
        
    )
}
