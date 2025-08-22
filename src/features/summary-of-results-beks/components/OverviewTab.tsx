import React from 'react';
import { Table, NoHeaderTable } from "../../../ui/table/table";
import { VerticalBarChart } from "../../../ui/charts/verticalBarChart";
import Divider from "@mui/material/Divider";
import { NPVAnalysis } from "./NPVAnalysis";
import { IncomeComparison } from "./IncomeComparison";
import { MarketProducts } from "./MarketProducts";
import { NavigationButtons } from "./NavigationButtons";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface OverviewTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: TableColumn[];
    secondDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
    secondBarChartLabels: string[];
    secondBarChartDataset: Array<{
        label: string;
        data: number[];
        backgroundColor: string[];
    }>;
    stackedBarDataSource: Array<{
        key: string;
        name: string;
        valueA?: number;
        valueB?: number;
    }>;
    incomeDataSource: Array<{
        key: string;
        name: string;
        valueA?: number;
        valueB?: number;
    }>;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
    dataSource,
    columns,
    secondDataSource,
    secondBarChartLabels,
    secondBarChartDataset,
    stackedBarDataSource,
    incomeDataSource
}) => {
    return (
        <>
            <div style={{
                fontSize: '24px',
                marginBottom: '24px',
            }}>
                Summary
            </div>

            <Table columns={columns} dataSource={dataSource}/>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '32px',
            }}>
                Metiniai rezultatai
            </div>

            <NoHeaderTable dataSource={secondDataSource}/>

            <div style={{width: '768px', border: '1px solid #CFD5DA'}}>
                <VerticalBarChart labels={secondBarChartLabels} datasets={secondBarChartDataset}/>
            </div>

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '65px',
            }}>
                Supplemented with graphs
            </div>

            <NPVAnalysis stackedBarDataSource={stackedBarDataSource} />
            
            <IncomeComparison incomeDataSource={incomeDataSource} />
            
            <MarketProducts stackedBarDataSource={stackedBarDataSource} />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons />
        </>
    );
};
