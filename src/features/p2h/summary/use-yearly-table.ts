import { useSummaryP2h } from "./use-summary-p2h"

export const useYearlyTable = () => {
    const data = useSummaryP2h()

    if (!data) return null

    const title = "Detalūs metiniai rezultatai"

    const columns = [
        { title: "Metai", dataIndex: "YEAR" },
        { title: "CAPEX (tūkst. EUR)", dataIndex: "CAPEX" },
        { title: "OPEX (tūkst. EUR)", dataIndex: "OPEX" },
        { title: "CF (tūkst. EUR)", dataIndex: "CF" },
        { title: "NPV (tūkst. EUR)", dataIndex: "NPV" },
    ]

    const dataSource = data.aggregated.economic_results.yearly_table

    return { title, columns, dataSource }
}

