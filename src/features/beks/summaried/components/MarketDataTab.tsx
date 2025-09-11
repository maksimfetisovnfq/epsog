import React from 'react';
import { Tabs } from "@mui/material";
import Tab from '@mui/material/Tab';
import { CustomTabPanel } from "./CustomTabPanel";
import { a11yProps } from "../utils/tabUtils";
import { BalancingCapacityMarketTab } from "./BalancingCapacityMarketTab";
import { BalancingEnergyMarketTab } from "./BalancingEnergyMarketTab";
import { ElectricityTradingTab } from "./ElectricityTradingTab";

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

interface MarketDataTabProps {
    innerTabValue: number;
    handleInnerTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: TableColumn[];
}

export const MarketDataTab: React.FC<MarketDataTabProps> = ({
    innerTabValue,
    handleInnerTabChange,
    dataSource,
    columns
}) => {
    return (
        <>
            <div style={{
                fontSize: '24px',
                marginBottom: '24px',
            }}>
                Rinkos duomenys
            </div>

            <Tabs
                value={innerTabValue}
                onChange={handleInnerTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    marginBottom: '24px',
                    width: '768px',
                    height: '48px',
                    '& .MuiTab-root': {
                        textTransform: 'none',
                        marginLeft: '8px',
                        padding: '10px 20px',
                        color: '#0F2D46',
                        backgroundColor: 'white',
                        borderRadius: '100px',
                        transition: 'all 0.2s',
                        border: '1px solid #CFD5DA',
                    },
                    '& .Mui-selected': {
                        color: 'white !important',
                        backgroundColor: '#0F2D46',
                        border: 'none',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Tab label="Balansavimo pajėgumų rinka" {...a11yProps(0)} />
                <Tab label="Balansavimo energijos rinka" {...a11yProps(1)} />
                <Tab label="Elektros energijos prekyba" {...a11yProps(2)} />
            </Tabs>

            <CustomTabPanel value={innerTabValue} index={0}>
                <BalancingCapacityMarketTab 
                    dataSource={dataSource}
                    columns={columns}
                />
            </CustomTabPanel>

            <CustomTabPanel value={innerTabValue} index={1}>
                <BalancingEnergyMarketTab 
                    dataSource={dataSource}
                    columns={columns}
                />
            </CustomTabPanel>

            <CustomTabPanel value={innerTabValue} index={2}>
                <ElectricityTradingTab 
                    dataSource={dataSource}
                    columns={columns}
                />
            </CustomTabPanel>
        </>
    );
};
