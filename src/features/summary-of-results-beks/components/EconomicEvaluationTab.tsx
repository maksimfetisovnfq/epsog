import React from 'react';
import { Table } from "../../../ui/tables";
import { VerticalBarChart } from "../../../ui/charts/verticalBarChart";
import Divider from "@mui/material/Divider";
import { NavigationButtons } from "./NavigationButtons";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface EconomicEvaluationTabProps {
    columns: TableColumn[];
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    secondBarChartLabels: string[];
    secondBarChartDataset: Array<{
        label: string;
        data: number[];
        backgroundColor: string[];
    }>;
}

export const EconomicEvaluationTab: React.FC<EconomicEvaluationTabProps> = ({
    columns,
    dataSource,
    secondBarChartLabels,
    secondBarChartDataset
}) => {
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

            <Table columns={columns} dataSource={dataSource}/>

            <div style={{width: '768px'}}>
                <VerticalBarChart
                    labels={secondBarChartLabels}
                    datasets={secondBarChartDataset}
                />
            </div>

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginBottom: '16px',
                marginTop: '65px',
            }}>
                Pajamos / sąnaudos
            </div>

            <NavigationButtons />
        </>
    );
};
