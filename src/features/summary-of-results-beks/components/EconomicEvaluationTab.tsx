import React from 'react';
import { Table } from "../../../ui/tables";
import type { Column } from "../../../ui/tables";
import Divider from "@mui/material/Divider";
import { NavigationButtons } from "./NavigationButtons";
import { useSummaryData } from "../../summary-of-results-beks/hooks/useSummaryData";
import {RevenueProducts} from "./RevenueProducts.tsx";
import {IncomeDataExpenses} from "./IncomeDataExpenses.tsx";
import {DetailedAnualResults} from "./DetailedAnualResults.tsx";
import {useLocation, useNavigate} from "@tanstack/react-router";

interface EconomicEvaluationTabProps {
    columns: Column[];
    secondBarChartLabels: string[];
    secondBarChartDataset: Array<{
        label: string;
        data: number[];
        backgroundColor: string[];
    }>;
}

export const EconomicEvaluationTab: React.FC<EconomicEvaluationTabProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { revenueTable, cost_table } = useSummaryData();

    const revenueTableColumns = [
        { title: 'Rinkos produktas', dataIndex: 'Product', key: 'Product' },
        { title: 'Suma (tūkst. Eur)', dataIndex: 'Value (tūkst. EUR)', key: 'Value (tūkst. EUR)' },
    ];

    const costTableColumns = [
        { title: 'Produktas', dataIndex: 'Product', key: 'Product' },
        { title: 'Sąnaudos (tūkst. Eur)', dataIndex: 'Value (tūkst. EUR)', key: 'Value (tūkst. EUR)' },
    ];

    const productKeyMap: { [display: string]: string } = {
        'Parduota elektros energija "Diena prieš" rinkoje': 'parduodama DA',
        'aFRR Aukštyn pajėgumas': 'aFRRu CAP',
        'aFRR Žemyn pajėgumas': 'aFRRd CAP',
        'mFRR Žemyn pajėgumas': 'mFRRd CAP',
        'aFRR Aukštyn energija': 'aFRRu',
        'aFRR Žemyn energija': 'aFRRd',
        'mFRR Aukštyn energija': 'mFRRu',
    };

    const displayProductNames = [
        'Parduota elektros energija "Diena prieš" rinkoje',
        'aFRR Aukštyn pajėgumas',
        'aFRR Žemyn pajėgumas',
        'aFRR Aukštyn pajėgumas',
        'mFRR Žemyn pajėgumas',
        'aFRR Aukštyn energija',
        'aFRR Žemyn energija',
        'mFRR Aukštyn energija',
    ];

    const filteredRevenueTable = displayProductNames.map((displayName, idx) => {
        const key = productKeyMap[displayName];
        const found = revenueTable.find(row => row.Product === key);
        return {
            key: String(idx),
            Product: displayName,
            'Value (tūkst. EUR)': found ? found['Value (tūkst. EUR)'] : 0,
        };
    });

    const mappedRevenueProducts = filteredRevenueTable.map((row, idx) => ({
        key: String(idx),
        name: row.Product,
        value: typeof row["Value (tūkst. EUR)"] === 'number' ? row["Value (tūkst. EUR)"] : 0
    }));

    const handleForward = () => {
        navigate({
            to: "/summary-of-results-beks", // changed to a valid route
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

    const extraRows = revenueTable.filter(row => row.Product === "mFRRd" || row.Product === "parduodama DA");
    const mergedCostTable = [...cost_table, ...extraRows];

    const incomeDataExpensesData = mergedCostTable.map((row, idx) => ({
        key: String(idx),
        name: row.Product,
        value: row["Value (tūkst. EUR)"]
    }));

    return (
        <>
            <div style={{
                fontSize: '24px',
                marginBottom: '24px',
            }}>
                Rinkų produktų ekonominiai rezultatai
            </div>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '32px',
            }}>
                Pajamos už produktus
            </div>

            <Table columns={revenueTableColumns} dataSource={filteredRevenueTable} />

            <RevenueProducts revenueProductsDataSource={mappedRevenueProducts} />

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
            }}>
                Pajamos / sąnaudos
            </div>

            <Table columns={costTableColumns} dataSource={mergedCostTable}/>

            <IncomeDataExpenses incomeDataSource={incomeDataExpensesData} />

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{marginBottom: '32px'}}>
                <div style={{
                    fontSize: '18px',
                    marginBottom: '4px',
                    color: '#6F8190'
                }}>
                    Viso potencialaus pelno / nuostolių
                </div>
                <div style={{
                    fontSize: '32px',
                }}>
                    32.20 tūkst. EUR
                </div>
            </div>

            <DetailedAnualResults />

            <Divider style={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </>
    );
};
