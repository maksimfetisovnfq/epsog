import { TableCell, TableHead as MuiTableHead, TableRow } from "@mui/material"
import type { Column } from "../types"

interface TableHeadProps {
    columns: Column[]
    boldHeaders?: boolean
    headerBackgroundColor?: { left?: string; right?: string }
    textAlign?: "left" | "center" | "right" 
}

export const TableHead = ({ columns, boldHeaders, headerBackgroundColor, textAlign = "center" } : TableHeadProps) => (
    <MuiTableHead>
        <TableRow>
            {columns.map((column, colIdx) => {
                if (column.colSpan === 0) return null

                const isLast = colIdx === columns.length - 1
                const isLeft = colIdx === 0
                const isRight = isLast

                return (
                    <TableCell
                        key={column.key || column.title || colIdx}
                        colSpan={column.colSpan || 1}
                        rowSpan={column.rowSpan || 1}
                        sx={{
                            backgroundColor: isLeft
                                ? headerBackgroundColor?.left || "#E7EAED"
                                : isRight
                                ? headerBackgroundColor?.right || "#E7EAED"
                                : "#E7EAED",
                            width: column.colSpan ? 384 * (column.colSpan || 1) : 384,
                            textAlign: textAlign,
                            fontWeight: boldHeaders ? 700 : undefined,
                            borderRight: isLast ? "none" : "1px solid #CFD5DA",
                        }}
                    >
                        {column.title}
                    </TableCell>
                )
            })}
        </TableRow>
    </MuiTableHead>
)
