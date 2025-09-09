import { useSummaryP2g } from "../use-summary-p2g.ts"
import { Table } from "@/ui/tables"

export const YearlyTable = () => {
    const data = useSummaryP2g()

    if (!data) return

    return (
        <Table
            dataSource={data.aggregated.economic_results.yearly_table}
            columns={[
                { title: "YEAR", dataIndex: "YEAR" },
                { title: "SOH (%)", dataIndex: "SOH (%)" },
                { title: "CAPEX (tūkst. EUR)", dataIndex: "CAPEX (tūkst. EUR)" },
                { title: "OPEX (tūkst. EUR)", dataIndex: "OPEX (tūkst. EUR)" },
                { title: "CF (tūkst. EUR)", dataIndex: "CF (tūkst. EUR)" },
                { title: "NPV (tūkst. EUR)", dataIndex: "NPV (tūkst. EUR)" },
            ]}
        />
    )
}
