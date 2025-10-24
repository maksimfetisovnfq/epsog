import { useSummaryP2g } from "./use-summary-p2g"

export const useYearlyTable = () => {
    const data = useSummaryP2g()

    if (!data) return null

    const title = "Detalūs metiniai rezultatai"

    const columns = [
        { title: "Metai", dataIndex: "YEAR" },
        { title: "CAPEX (tūkst. EUR)", dataIndex: "CAPEX (tūkst. EUR)" },
        { title: "OPEX (tūkst. EUR)", dataIndex: "OPEX (tūkst. EUR)" },
        { title: "CF (tūkst. EUR)", dataIndex: "CF (tūkst. EUR)" },
        { title: "NPV (tūkst. EUR)", dataIndex: "NPV (tūkst. EUR)" },
    ]

    const dataSource = data.aggregated.economic_results.yearly_table

    return { title, columns, dataSource }
}

