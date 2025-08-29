import React from 'react';
import { TableHead as MuiTableHead, TableRow, TableCell } from '@mui/material';
import type { Column } from '../types';

interface TableHeadProps {
    columns: Column[];
    boldHeaders?: boolean;
}

export const TableHead: React.FC<TableHeadProps> = ({ columns, boldHeaders }) => (
    <MuiTableHead>
        <TableRow>
            {columns.map((column, colIdx) => {
                if (column.colSpan === 0) return null;

                return (
                    <TableCell
                        key={column.key || column.title || colIdx}
                        colSpan={column.colSpan || 1}
                        rowSpan={column.rowSpan || 1}
                        sx={{
                            backgroundColor: '#E7EAED',
                            width: column.colSpan ? 384 * (column.colSpan || 1) : 384,
                            textAlign: 'center',
                            fontWeight: boldHeaders ? 700 : undefined
                        }}
                    >
                        {column.title}
                    </TableCell>
                );
            })}
        </TableRow>
    </MuiTableHead>
);
