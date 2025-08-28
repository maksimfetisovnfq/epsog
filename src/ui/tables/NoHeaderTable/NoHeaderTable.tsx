import React from 'react';
import { Table as MuiTable, TableBody as MuiTableBody, TableRow, TableCell } from '@mui/material';
import type { NoHeaderTableProps } from '../types';

export const NoHeaderTable: React.FC<NoHeaderTableProps> = ({ dataSource }) => {
    if (!dataSource || dataSource.length === 0) return null;
    
    const isArrayOfArrays = Array.isArray(dataSource[0]);
    
    return (
        <MuiTable sx={{border: '1px solid #CFD5DA', width: '768px'}} aria-label="table without header">
            <MuiTableBody>
                {dataSource.map((row: Record<string, unknown> | Array<unknown>, rowIdx: number) => (
                    <TableRow key={rowIdx} sx={{height: 'auto'}}>
                        {isArrayOfArrays
                            ? (row as Array<unknown>).map((cell, colIdx) => (
                                <TableCell key={colIdx} sx={{ width: 384, ...(colIdx === 0 && { background: '#F5F7F8' }) }}>
                                    {cell as React.ReactNode}
                                </TableCell>
                            ))
                            : Object.entries(row as Record<string, unknown>)
                                .filter(([key]) => key !== 'key')
                                .map(([, cell], colIdx) => (
                                    <TableCell key={colIdx} sx={{ width: 384, ...(colIdx === 0 && { background: '#F5F7F8' }) }}>
                                        {cell as React.ReactNode}
                                    </TableCell>
                                ))}
                    </TableRow>
                ))}
            </MuiTableBody>
        </MuiTable>
    );
};
