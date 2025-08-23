import React from 'react';
import { Table } from "../../../ui/table/table";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface BalancingEnergyMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: TableColumn[];
}

export const BalancingEnergyMarketTab: React.FC<BalancingEnergyMarketTabProps> = ({
    dataSource,
    columns
}) => {
    return (
        <div>
            {/* Balancing energy market content */}
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    );
};
