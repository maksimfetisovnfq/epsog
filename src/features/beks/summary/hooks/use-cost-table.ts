import { useSummaryBeks } from "../use-summary-beks"

export const useCostTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Pajamos / sąnaudos"

    const columns = [
        { title: "Product", dataIndex: "Product" },
        { title: "Value (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.cost_table

    return { title, columns, dataSource }
}
