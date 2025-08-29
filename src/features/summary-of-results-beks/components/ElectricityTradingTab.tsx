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

export const ElectricityTradingTab: React.FC<ElectricityTradingTabProps> = () => {
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
        DayAheadMarketTable1,
        DayAheadMarketTable2,
        DayAheadMarketTable3,
        IntradayMarketTable1,
        IntradayMarketTable2,
        IntradayMarketTable3,
    } = useSummaryData();

    const mapTableRows = (rows: { name: string; value: string | number; unit?: string }[]) =>
        rows.map((row, idx) => ({
            key: row.name + idx,
            parameter: row.name,
            value: row.value + (row.unit ? ` ${row.unit}` : '')
        }));

    return (
        <div>
            {/*<Table columns={columns} dataSource={dataSource}/>*/}

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
                marginBottom: '16px',
            }}>
                Diena prieš (angl. Day-Ahead) rinka
            </div>

            <CalcDataTable
                source="Energijos prekybos apimtys"
                dataSource={mapTableRows(DayAheadMarketTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(DayAheadMarketTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={mapTableRows(DayAheadMarketTable3)}
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
                dataSource={mapTableRows(IntradayMarketTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas energijos rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(IntradayMarketTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos / sąnaudos"
                dataSource={mapTableRows(IntradayMarketTable3)}
            />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </div>
    );
};
