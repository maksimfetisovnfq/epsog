import {Table as MuiTable, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

export interface TableProps {
    columns: Column[],
    dataSource: Record<string, any>[],
    nameColumnKey?: string,
}

export const Table: React.FC<TableProps> = ({columns, dataSource, nameColumnKey}) => (
    <MuiTable sx={{border: '1px solid #CFD5DA', width: '768px'}} aria-label="simple table">
        <TableHead>
            <TableRow>
                {columns.map((column, colIdx) => (
                    <TableCell
                        key={column.key}
                        sx={{
                            ...(colIdx === 0 ? {backgroundColor: '#F5F7F8'} : {}),
                            width: 384
                        }}
                    >
                        {column.title}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {dataSource.map((row) => (
                <TableRow key={row.key} sx={{height: 'auto'}}>
                    {columns.map((column, colIdx) => (
                        <TableCell
                            key={column.key}
                            sx={{
                                ...(colIdx === 0 ? {backgroundColor: '#F5F7F8'} : {}),
                                width: 384
                            }}
                        >
                            {row[column.dataIndex]}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    </MuiTable>
);
