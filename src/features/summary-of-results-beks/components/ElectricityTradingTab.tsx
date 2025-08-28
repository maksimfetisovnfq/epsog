import React from 'react';
import {CalcDataTable, Table} from "../../../ui/tables";
import Divider from "@mui/material/Divider";
import {NavigationButtons} from "./NavigationButtons.tsx";
import {useSummaryData} from "../hooks/useSummaryData";
import {useLocation, useNavigate} from "@tanstack/react-router";

interface TableColumn {
    title: string;
    dataIndex?: string;
    key?: string;
    colSpan?: number;
    rowSpan?: number;
    render?: string | ((row: Record<string, unknown>, rowIndex: number, colIndex: number) => React.ReactNode);
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
    const navigate = useNavigate();
    const location = useLocation();

    const handleForward = () => {
        navigate({
            to: "/summary-of-results-beks",
            state: {
                generalData: location.state?.generalData,
                technicalParameters: location.state?.technicalParameters,
                economicParameters: location.state?.economicParameters,
            },
        });
    };

    const handleBackward = () => {
        navigate({
            to: "/economic-parameters-beks",
            state: {
                generalData: location.state?.generalData,
                technicalParameters: location.state?.technicalParameters,
                economicParameters: location.state?.economicParameters,
            },
        });
    };

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
                dataSource={electricityTradeDataSource1.map(row => ({...row, value: String(row.value)}))}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={electricityTradeDataSource2.map(row => ({...row, value: String(row.value)}))}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={electricityTradeDataSource3.map(row => ({...row, value: String(row.value)}))}
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
                dataSource={electricityTradeDataSource4.map(row => ({...row, value: String(row.value)}))}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={electricityTradeDataSource5.map(row => ({...row, value: String(row.value)}))}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={electricityTradeDataSource6.map(row => ({...row, value: String(row.value)}))}
            />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </div>
    );
};
