import React from 'react';
import { Table } from '../Table';

interface CalcDataTableProps {
    title?: string;
    subtitle?: string;
    dataSource?: Array<{
        key: string;
        parameter: string;
        value: string;
    }>;
}

export const CalcDataTable: React.FC<CalcDataTableProps> = ({
    title,
    subtitle,
    dataSource = []
}) => {
    const calcDataTableColumns = [
        {
            title: 'Calculation Data - Combined Header',
            dataIndex: 'parameter',
            key: 'combined-header',
            colSpan: 2,
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            colSpan: 0,
        }
    ];

    return (
        <div>
            <Table columns={calcDataTableColumns} dataSource={dataSource}/>
        </div>
    );
};
