import { useSummaryBeks } from "../use-summary-beks"

export const useRevenueTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Pajamos už produktus"

    const columns = [
        { title: "Rinkos produktas", dataIndex: "Product" },
        { title: "Suma (tūkst. Eur)", dataIndex: "Value (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.revenue_table

    return { title, columns, dataSource }
}

