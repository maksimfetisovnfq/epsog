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

export const EconomicEvaluationTab: React.FC<EconomicEvaluationTabProps> = ({
    columns,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { economicEvaluationDataSource, incomeDataSource2 } = useSummaryData();

    const handleForward = () => {
        navigate({
            to: "/finish-page",
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
                Rinkų produktų ekonominiai rezultatai
            </div>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '32px',
            }}>
                Pajamos už produktus
            </div>

            <Table columns={columns} dataSource={economicEvaluationDataSource}/>

            <RevenueProducts revenueProductsDataSource={economicEvaluationDataSource} />

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
            }}>
                Pajamos / sąnaudos
            </div>

            <Table columns={columns} dataSource={incomeDataSource2}/>

            <IncomeDataExpenses incomeDataSource={incomeDataSource2} />

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

            <DetailedAnualResults incomeDataSource={incomeDataSource2} />

            <Divider style={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>
            
            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </>
    );
};
