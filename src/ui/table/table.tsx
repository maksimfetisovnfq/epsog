import {Table as MuiTable, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

export interface Column {
    title: string;
    dataIndex?: string;
    key?: string;
    render?: string | ((row: Record<string, unknown>, rowIndex: number, colIndex: number) => React.ReactNode);
}

export interface TableProps {
    columns: Column[];
    dataSource: Record<string, unknown>[];
}

export const Table: React.FC<TableProps> = ({columns, dataSource}) => (
    <MuiTable sx={{border: '1px solid #CFD5DA', width: '768px'}} aria-label="simple table">
        <TableHead>
            <TableRow>
                {columns.map((column, colIdx) => (
                    <TableCell
                        key={column.key || column.title || colIdx}
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
            {dataSource.map((row, rowIdx) => (
                <TableRow key={row.key || rowIdx} sx={{height: 'auto'}}>
                    {columns.map((column, colIdx) => {
                        let cellContent: React.ReactNode = null;
                        if (typeof column.render === 'function') {
                            cellContent = column.render(row, rowIdx, colIdx);
                        } else if (typeof column.render === 'string') {
                            cellContent = row[column.render];
                        } else if (column.dataIndex) {
                            cellContent = row[column.dataIndex];
                        }
                        return (
                            <TableCell
                                key={column.key || column.title || colIdx}
                                sx={{
                                    ...(colIdx === 0 ? {backgroundColor: '#F5F7F8'} : {}),
                                    width: 384
                                }}
                            >
                                {cellContent}
                            </TableCell>
                        );
                    })}
                </TableRow>
            ))}
        </TableBody>
    </MuiTable>
);

interface TableNoHeaderProps {
    dataSource: Array<Record<string, unknown>> | Array<Array<unknown>>;
}

export const NoHeaderTable: React.FC<TableNoHeaderProps> = ({ dataSource }) => {
    if (!dataSource || dataSource.length === 0) return null;
    const isArrayOfArrays = Array.isArray(dataSource[0]);
    return (
        <MuiTable sx={{border: '1px solid #CFD5DA', width: '768px'}} aria-label="table without header">
            <TableBody>
                {dataSource.map((row, rowIdx) => (
                    <TableRow key={rowIdx} sx={{height: 'auto'}}>
                        {isArrayOfArrays
                            ? (row as Array<unknown>).map((cell, colIdx) => (
                                <TableCell key={colIdx} sx={{ width: 384 }}>
                                    {cell as React.ReactNode}
                                </TableCell>
                            ))
                            : Object.entries(row as Record<string, unknown>)
                                .filter(([key]) => key !== 'key')
                                .map(([, cell], colIdx) => (
                                    <TableCell key={colIdx} sx={{ width: 384 }}>
                                        {cell as React.ReactNode}
                                    </TableCell>
                                ))}
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    );
};
