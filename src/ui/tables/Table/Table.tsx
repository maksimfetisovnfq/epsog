import { Table as MuiTable } from "@mui/material"
import { TableHead } from "../TableHead"
import { TableBody } from "../TableBody"
import type { Column } from "../types"
import { Title } from "@/ui/title"

export interface TableProps {
    columns: Column[]
    dataSource: Record<string, unknown>[]
    boldHeaders?: boolean
    title?: string
    description?: string
    headerBackgroundColor?: { left?: string; right?: string }
    textAlign?: "left" | "center" | "right"
}

export const Table = ({
    columns,
    dataSource,
    boldHeaders,
    title,
    description,
    hideHead,
    headerBackgroundColor,
    textAlign = "center", 
}: TableProps & { hideHead?: boolean }) => (
    <>
        {title && <Title variant="h6">{title}</Title>}
        {description && (
            <Title variant="subtitle2" style={{ color: "#6F8190"}}>
                {description}
            </Title>
        )}

        <MuiTable sx={{ border: "1px solid #CFD5DA", width: { sm: "768px" } }} aria-label="simple table">
            {!hideHead && (
                <TableHead
                    columns={columns}
                    boldHeaders={boldHeaders}
                    headerBackgroundColor={headerBackgroundColor}
                    textAlign={textAlign}
                />
            )}
            <TableBody columns={columns} dataSource={dataSource} />
        </MuiTable>
    </>
)
