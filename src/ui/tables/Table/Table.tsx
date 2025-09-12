import { Stack, Table as MuiTable } from "@mui/material"
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
}

export const Table = ({ columns, dataSource, boldHeaders, title, description, hideHead } : TableProps & { hideHead?: boolean }) => (
    <Stack spacing={1}>
        {title && <Title variant="h6">{title}</Title>}
        {description && <Title variant="subtitle2" sx={{ color: "#6F8190" }}>{description}</Title>}

        <MuiTable sx={{ border: "1px solid #CFD5DA", width: "768px"}} aria-label="simple table">
            {!hideHead && <TableHead columns={columns} boldHeaders={boldHeaders} />}
            <TableBody columns={columns} dataSource={dataSource} />
        </MuiTable>
    </Stack>
)
