import React from 'react';
import {Table, CalcDataTable, type Column, NoHeaderTable} from "../../../ui/tables";
import {useSummaryData} from "../hooks/useSummaryData";
import Divider from "@mui/material/Divider";
import {NavigationButtons} from "./NavigationButtons.tsx";

interface BalancingCapacityMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: Column[];
}

export const BalancingCapacityMarketTab: React.FC<BalancingCapacityMarketTabProps> =
    ({
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
            FCR,
        } = useSummaryData();

        return (
            <div>
                <Table columns={columns} dataSource={dataSource}/>

                <div style={{
                    fontSize: '18px',
                    marginTop: '32px',
                    marginBottom: '16px',
                }}>
                    <div style={{marginBottom: 4}}>
                        FCR
                    </div>

                    <div style={{
                        fontSize: '14px',
                        color: '#6F8190'
                    }}>
                        Dažnio išlaikymo rezervas (angl. Frequency containment reserve)
                    </div>
                </div>

                <NoHeaderTable dataSource={FCR}/>

                <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

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
