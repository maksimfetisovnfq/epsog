import {useSummaryP2g} from "./../use-summary-p2g.ts";
import {Table} from "../../../ui/tables";

export const YearlySummaryTable = () => {
    const data = useSummaryP2g()

    if (!data) return

    return <Table
        dataSource={data.aggregated.summary.yearly_summary_table}
        columns={[
            {title: "Metric", dataIndex: "Metric"},
            {title: "Value", dataIndex: "Value"},
        ]}
    />
} 