import { Table } from "@/ui/tables"
import { Stack } from "@mui/material"
import { useRevenueTable } from "../hooks/use-revenue-table"

export const RevenueTable = () => {
    const tableData = useRevenueTable()

    if (!tableData) return null

    return (
        <Stack spacing={2}>
            <div>{tableData.title}</div>
            <Table
                dataSource={tableData.dataSource}
                columns={tableData.columns}
                boldHeaders={true}
            />
        </Stack>
    )
}
