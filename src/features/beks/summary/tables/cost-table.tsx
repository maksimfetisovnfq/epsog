import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"
import { useCostTable } from "../hooks/use-cost-table"

export const CostTable = () => {
    const tableData = useCostTable()

    if (!tableData) return null

    return (
        <Stack spacing={2}>
            <div>{tableData.title}</div>
            <Table
                dataSource={tableData.dataSource}
                columns={tableData.columns}
            />
        </Stack>
    )
}
