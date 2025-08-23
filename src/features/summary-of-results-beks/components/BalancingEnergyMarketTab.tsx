import React from 'react';
import {Table, type Column, CalcDataTable} from "../../../ui/tables";
import Divider from "@mui/material/Divider";
import {NavigationButtons} from "./NavigationButtons.tsx";
import {useSummaryData} from "../hooks/useSummaryData";

interface BalancingEnergyMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: Column[];
}

export const BalancingEnergyMarketTab: React.FC<BalancingEnergyMarketTabProps> = ({
    dataSource,
    columns
}) => {
    const {
        calcDataTableDataSource1,
        calcDataTableDataSource2,
        calcDataTableDataSource3,
        calcDataTableDataSource4,
        calcDataTableDataSource5,
        calcDataTableDataSource6,
        calcDataTableDataSource7,
        calcDataTableDataSource8,
    } = useSummaryData();

    return (
        <div>
            {/* Balancing energy market content */}
            <Table columns={columns} dataSource={dataSource}/>

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
                marginBottom: '16px',
            }}>
                <div style={{marginBottom: 4}}>
                    aFRR
                </div>

                <div style={{
                    fontSize: '14px',
                    color: '#6F8190',
                    width: 768,
                }}>
                    Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)
                </div>
            </div>

            <CalcDataTable
                source="Užsakytų balansavimo pajėgumų kiekis"
                dataSource={calcDataTableDataSource1}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={calcDataTableDataSource2}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={calcDataTableDataSource3}
            />
            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={calcDataTableDataSource4}
            />

            <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

            <div style={{
                fontSize: '18px',
                marginTop: '32px',
                marginBottom: '16px',
            }}>
                <div style={{marginBottom: 4}}>
                    mFRR
                </div>

                <div style={{
                    fontSize: '14px',
                    color: '#6F8190',
                    width: 768,
                }}>
                    Rankinis dažnio atkūrimo rezervas (angl. Manual frequency restoration reserve)
                </div>
            </div>

            <CalcDataTable
                source="Užsakytų balansavimo pajėgumų kiekis"
                dataSource={calcDataTableDataSource5}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={calcDataTableDataSource6}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={calcDataTableDataSource7}
            />

            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={calcDataTableDataSource8}
            />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons/>
        </div>
    );
};
