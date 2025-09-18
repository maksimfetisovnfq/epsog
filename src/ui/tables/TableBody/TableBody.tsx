import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material"
import type { Column } from "../types"

interface TableBodyProps {
    columns: Column[]
    dataSource: Record<string, unknown>[]
}

export const TableBody = ({ columns, dataSource }: TableBodyProps) => (
    <MuiTableBody>
        {dataSource.map((row, rowIdx) => (
            <TableRow key={(row.key as string) || String(rowIdx)} sx={{ height: "auto" }}>
                {columns.map((column, colIdx) => {
                    let cellContent: React.ReactNode = null
                    if (typeof column.render === "function") {
                        cellContent = column.render(row, rowIdx, colIdx)
                    } else if (typeof column.render === "string") {
                        cellContent = row[column.render] as React.ReactNode
                    } else if (column.dataIndex) {
                        cellContent = row[column.dataIndex] as React.ReactNode
                    }
                    const isLast = colIdx === columns.length - 1
                    return (
                        <TableCell
                            key={column.key || column.title || colIdx}
                            sx={{
                                ...(colIdx === 0 ? { backgroundColor: "#F5F7F8" } : {}),
                                width: {sm: 384},
                                borderRight: isLast ? "none" : "1px solid #CFD5DA",
                            }}
                        >
                            {cellContent}
                        </TableCell>
                    )
                })}
            </TableRow>
        ))}
    </MuiTableBody>
)
