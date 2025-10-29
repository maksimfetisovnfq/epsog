import { useSummaryBeks } from "../use-summary-beks"

export const useRevenueTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Produktų pajamos"

    const columns = [
        { title: "Rinkos produktas", dataIndex: "Product" },
        { title: "Suma (tūkst. EUR)", dataIndex: "Value (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.revenue_table

    return { title, columns, dataSource }
}

