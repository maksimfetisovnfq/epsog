import React from 'react';
import { Table, type Column } from "../../../ui/tables";

interface BalancingEnergyMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: Column[];
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
