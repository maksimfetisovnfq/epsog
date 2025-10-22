import { CombinedTable } from "@/ui/tables/combinedTable"
import { Box } from "@mui/material"
import { useAfrrBalancingCapacityTable } from "../hooks/use-afrr-balancing-capacity-table"

export const AfrrBalancingCapacityTable = () => {
    const tableData = useAfrrBalancingCapacityTable()

    if (!tableData) return null

    return (
        <>
            <div style={{ fontSize: "18px", marginBottom: "16px" }}>
                <div style={{ marginBottom: 4 }}>{tableData.title}</div>
                <Box sx={{ fontSize: "14px", color: "#6F8190", width: { sm: 768 } }}>
                    {tableData.description}
                </Box>
            </div>
            {tableData.tables.map((table, index) => (
                <CombinedTable
                    key={index}
                    dataSource={table.dataSource}
                    source={table.source}
                />
            ))}
        </>
    )
}
