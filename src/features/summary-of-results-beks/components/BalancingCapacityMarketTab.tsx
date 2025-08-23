import React from 'react';
import { Table, CalcDataTable, type Column } from "../../../ui/tables";
import { useSummaryData } from "../hooks/useSummaryData";

interface BalancingCapacityMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: Column[];
}

export const BalancingCapacityMarketTab: React.FC<BalancingCapacityMarketTabProps> = ({
    dataSource,
    columns
}) => {
    const { calcDataTableDataSource } = useSummaryData();

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

            <div style={{ marginTop: '32px' }}>
                <CalcDataTable 
                    title="Calculation Results"
                    subtitle="Economic parameters and financial metrics"
                    dataSource={calcDataTableDataSource}
                />
            </div>
            <div style={{ marginTop: '32px' }}>
                <CalcDataTable
                    title="Calculation Results"
                    subtitle="Economic parameters and financial metrics"
                    dataSource={calcDataTableDataSource}
                />
            </div>
            <div style={{ marginTop: '32px' }}>
                <CalcDataTable
                    title="Calculation Results"
                    subtitle="Economic parameters and financial metrics"
                    dataSource={calcDataTableDataSource}
                />
            </div>
        </div>
        
        
    );
};
