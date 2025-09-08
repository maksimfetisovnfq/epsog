import React from 'react';
import {CalcDataTable, Table} from "../../../ui/tables";
import Divider from "@mui/material/Divider";
import {NavigationButtons} from "./NavigationButtons.tsx";
import {useSummaryData} from "../hooks/useSummaryData";

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
    const {
        electricityTradeDataSource1,
        electricityTradeDataSource2,
        electricityTradeDataSource3,
        electricityTradeDataSource4,
        electricityTradeDataSource5,
        electricityTradeDataSource6,
    } = useSummaryData();

    return (
        <div>
            {/* Electricity trading content */}
            <Table columns={columns} dataSource={dataSource}/>

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
                marginBottom: '16px',
            }}>
                Diena prieš (angl. Day-Ahead) rinka
            </div>

            <CalcDataTable
                source="Energijos prekybos apimtys"
                dataSource={electricityTradeDataSource1}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={electricityTradeDataSource2}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={electricityTradeDataSource3}
            />

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
                marginBottom: '16px',
            }}>
                Dienos eigos (angl. Intraday) rinka
            </div>

            <CalcDataTable
                source="Energijos prekybos apimtys"
                dataSource={electricityTradeDataSource4}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={electricityTradeDataSource5}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={electricityTradeDataSource6}
            />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons/>
        </div>
    );
};
