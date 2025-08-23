import React from 'react';

// Types for table components
export interface Column {
    title: string;
    dataIndex?: string;
    key?: string;
    colSpan?: number;
    rowSpan?: number;
    render?: string | ((row: Record<string, unknown>, rowIndex: number, colIndex: number) => React.ReactNode);
}

export interface TableProps {
    columns: Column[];
    dataSource: Record<string, unknown>[];
}

export interface NoHeaderTableProps {
    dataSource: Array<Record<string, unknown>> | Array<Array<unknown>>;
}
