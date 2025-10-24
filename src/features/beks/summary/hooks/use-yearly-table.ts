import { useSummaryBeks } from "../use-summary-beks"

export const useYearlyTable = () => {
    const data = useSummaryBeks()

    if (!data) return null

    const title = "Detalūs metiniai rezultatai"

    const columns = [
        { title: "Metai", dataIndex: "YEAR" },
        { title: "Ciklai", dataIndex: "CYCLES" },
        { title: "SOH (%)", dataIndex: "SOH (%)" },
        { title: "CAPEX (tūkst. EUR)", dataIndex: "CAPEX (tūkst. EUR)" },
        { title: "OPEX (tūkst. EUR)", dataIndex: "OPEX (tūkst. EUR)" },
        { title: "CF (tūkst. EUR)", dataIndex: "CF (tūkst. EUR)" },
        { title: "NPV (tūkst. EUR)", dataIndex: "NPV (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.yearly_table

    return { title, columns, dataSource }
}

