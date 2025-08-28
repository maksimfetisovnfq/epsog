import React from 'react';
import { Table as MuiTable } from '@mui/material';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import type { Column } from '../types';

export interface TableProps {
    columns: Column[];
    dataSource: Record<string, unknown>[];
    boldHeaders?: boolean;
}

export const Table: React.FC<TableProps> = ({ columns, dataSource, boldHeaders }) => (
    <MuiTable sx={{ border: '1px solid #CFD5DA', width: '768px' }} aria-label="simple table">
        <TableHead columns={columns} boldHeaders={boldHeaders} />
        <TableBody columns={columns} dataSource={dataSource} />
    </MuiTable>
);
