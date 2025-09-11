import React from 'react';
import { Tabs } from "@mui/material";
import Tab from '@mui/material/Tab';
import { CustomTabPanel } from "./CustomTabPanel";
import { a11yProps } from "../utils/tabUtils";
import { OverviewTab } from "./OverviewTab";
import { MarketDataTab } from "./MarketDataTab";
import { EconomicEvaluationTab } from "./EconomicEvaluationTab";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface MainTabsProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    innerTabValue: number;
    handleInnerTabChange: (event: React.SyntheticEvent, newValue: number) => void;
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
    marketProductsDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
}

export const MainTabs: React.FC<MainTabsProps> = ({
    value,
    handleChange,
    innerTabValue,
    handleInnerTabChange,
    dataSource,
    columns,
    secondBarChartLabels,
    secondBarChartDataset,
}) => {
    const economicEvaluationColumns = [
        { title: "Rinkos produktas", dataIndex: "name", key: "name" },
        { title: "Suma (tūkst. Eur)", dataIndex: "value", key: "value" }
    ];

    return (
        <div style={{
            borderRadius: '100px',
            border: '1px solid #CFD5DA',
            width: '467px',
            height: '56px',
            fontSize: '16px',
            paddingTop: '8px',
            marginBottom: '48px',
        }}>
            <Tabs 
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    '& .MuiTab-root': {
                        textTransform: 'none',
                        marginLeft: '8px',
                        padding: '10px 20px',
                        color: '#0F2D46',
                        backgroundColor: 'white',
                        borderRadius: '100px',
                        transition: 'all 0.2s',
                    },
                    '& .Mui-selected': {
                        color: 'white !important',
                        backgroundColor: '#0F2D46',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Tab label="Apžvalga" {...a11yProps(0)} />
                <Tab label="Rinkų duomenys" {...a11yProps(1)} />
                <Tab label="Ekonominis vertinimas" {...a11yProps(2)} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
                <OverviewTab/>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <MarketDataTab
                    innerTabValue={innerTabValue}
                    handleInnerTabChange={handleInnerTabChange}
                    dataSource={dataSource}
                    columns={columns}
                />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <EconomicEvaluationTab
                    columns={economicEvaluationColumns}
                    secondBarChartLabels={secondBarChartLabels}
                    secondBarChartDataset={secondBarChartDataset}
                />
            </CustomTabPanel>
        </div>
    );
};
