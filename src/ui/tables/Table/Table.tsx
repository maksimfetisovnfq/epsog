import React from "react"
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
}

export const Table: React.FC<TableProps> = ({ columns, dataSource, boldHeaders, title }) => (
    <Stack spacing={6}>
        {title && <Title variant="h4">{title}</Title>}

        <MuiTable sx={{ border: "1px solid #CFD5DA", width: "768px" }} aria-label="simple table">
            <TableHead columns={columns} boldHeaders={boldHeaders} />
            <TableBody columns={columns} dataSource={dataSource} />
        </MuiTable>
    </Stack>
)
