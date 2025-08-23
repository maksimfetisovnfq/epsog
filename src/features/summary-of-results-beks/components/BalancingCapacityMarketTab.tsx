import React from 'react';
import { Table } from "../../../ui/table/table";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface BalancingCapacityMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: TableColumn[];
}

export const BalancingCapacityMarketTab: React.FC<BalancingCapacityMarketTabProps> = ({
    dataSource,
    columns
}) => {
    return (
        <div>
            <Table columns={columns} dataSource={dataSource}/>

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
            }}>
                FCR
                
                <div style={{
                    fontSize: '14px',
                    color: '#6F8190'
                }}>
                    Dažnio išlaikymo rezervas (angl. Frequency containment reserve)
                </div>
            </div>
        </div>
    );
};
