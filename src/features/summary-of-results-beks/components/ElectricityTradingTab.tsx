import React from 'react';
import { Table } from "../../../ui/table/table";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface ElectricityTradingTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: TableColumn[];
}

export const ElectricityTradingTab: React.FC<ElectricityTradingTabProps> = ({
    dataSource,
    columns
}) => {
    return (
        <div>
            {/* Electricity trading content */}
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    );
};
