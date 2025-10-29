import { useSummaryBeks } from "../use-summary-beks"

export const useCostTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Produktų sąnaudos"

    const columns = [
        { title: "Rinkos produktas", dataIndex: "Product" },
        { title: "Suma (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.cost_table

    return { title, columns, dataSource }
}
