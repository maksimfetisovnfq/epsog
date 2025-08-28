import React from 'react';
import { NoHeaderTable } from "../../../ui/tables";
import { VerticalBarChart } from "../../../ui/charts/verticalBarChart";
import Divider from "@mui/material/Divider";
import { NavigationButtons } from "./NavigationButtons";
import {useLocation, useNavigate} from "@tanstack/react-router";
import { useSummaryData } from '../hooks/useSummaryData';
import { NPVAnalysis } from "./NPVAnalysis";
import { IncomeComparison } from "./IncomeComparison";
import { MarketProducts } from "./MarketProducts";

export const OverviewTab: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { yearlySummaryMetrics, npvChartData, incomeDataSource, marketProductsDataSource } = useSummaryData();

    const yearlySummaryDataSource = yearlySummaryMetrics.map((row, idx) => ({
        key: String(idx),
        name: row.label,
        value: row.rawValue
    }));

    const revenue = yearlySummaryMetrics.find(m => m.key === 'revenue');
    const cost = yearlySummaryMetrics.find(m => m.key === 'cost');
    const profit = yearlySummaryMetrics.find(m => m.key === 'profit');
    const floatingBarLabels = [revenue, cost, profit].map(m => m?.label ?? "");
    const revenueValue = revenue?.value ?? 0;
    const costValue = Math.abs(cost?.value ?? 0);
    const profitValue = profit?.value ?? 0;
    const floatingBarDataset = [{
        label: "Metiniai rezultatai",
        data: [revenueValue, [revenueValue - costValue, revenueValue], profitValue],
        backgroundColor: [
            '#FF7070',
            '#87E6B9',
            '#B9D7E1',
        ]
    }];

    const stackedBarDataSource = npvChartData.years.map((year, idx) => {
        const value = npvChartData.npv[idx];
        return {
            key: String(idx),
            name: String(year),
            valueA: value > 0 ? value : undefined,
            valueB: value <= 0 ? value : undefined,
        };
    });

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

    return (
        <>
            <div style={{
                fontSize: '24px',
                marginBottom: '24px',
            }}>
                Summary
            </div>

            {/*<Table columns={columns} dataSource={dataSource}/> ? */} 

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '32px',
            }}>
                Metiniai rezultatai
            </div>

            <NoHeaderTable dataSource={yearlySummaryDataSource}/>

            <div style={{width: '768px', border: '1px solid #CFD5DA', marginTop: 16}}>
                <VerticalBarChart labels={floatingBarLabels as string[]} datasets={floatingBarDataset}/>
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
            <MarketProducts marketProductsDataSource={marketProductsDataSource} /> 
            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>
            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </>
    );
};
