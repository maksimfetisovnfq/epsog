import React from 'react';
import {NoHeaderTable, CalcDataTable} from '../../../ui/tables';
import {useSummaryData} from '../hooks/useSummaryData';
import Divider from '@mui/material/Divider';
import {NavigationButtons} from './NavigationButtons.tsx';
import {useLocation, useNavigate} from '@tanstack/react-router';
import type { NavigateOptions } from '@tanstack/react-router';

export const BalancingCapacityMarketTab: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

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

    const {
        balancingCapacityFCRTable,
        balancingCapacityAFRRTable1,
        balancingCapacityAFRRTable2,
        balancingCapacityAFRRTable3,
        balancingCapacityAFRRTable4,
        balancingCapacityMFRRTable1,
        balancingCapacityMFRRTable2,
        balancingCapacityMFRRTable3,
        balancingCapacityMFRRTable4
    } = useSummaryData();

    const mapTableRows = (rows: { name: string; value: string | number; unit?: string }[]) =>
        rows.map((row, idx) => ({
            key: row.name + idx,
            parameter: row.name,
            value: row.value + (row.unit ? ` ${row.unit}` : '')
        }));

    return (
        <div>
            <div style={{ fontSize: '18px', marginTop: '32px', marginBottom: '16px' }}>
                <div style={{ marginBottom: 4 }}>FCR</div>
                <div style={{ fontSize: '14px', color: '#6F8190' }}>
                    Dažnio išlaikymo rezervas (angl. Frequency containment reserve)
                </div>
            </div>
            <NoHeaderTable dataSource={mapTableRows(balancingCapacityFCRTable)} />
            <Divider style={{ marginTop: '32px', marginBottom: '32px', width: '768px' }} />
            <div style={{ fontSize: '18px', marginTop: '32px', marginBottom: '16px' }}>
                <div style={{ marginBottom: 4 }}>aFRR</div>
                <div style={{ fontSize: '14px', color: '#6F8190', width: 768 }}>
                    Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)
                </div>
            </div>
            <CalcDataTable
                source="Užsakytų balansavimo pajėgumų kiekis"
                dataSource={mapTableRows(balancingCapacityAFRRTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(balancingCapacityAFRRTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={mapTableRows(balancingCapacityAFRRTable3)}
            />
            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={mapTableRows(balancingCapacityAFRRTable4)}
            />
            <Divider style={{ marginTop: '32px', marginBottom: '32px', width: '768px' }} />
            <div style={{ fontSize: '18px', marginTop: '32px', marginBottom: '16px' }}>
                <div style={{ marginBottom: 4 }}>mFRR</div>
                <div style={{ fontSize: '14px', color: '#6F8190', width: 768 }}>
                    Rankinis dažnio atkūrimo rezervas (angl. Manual frequency restoration reserve)
                </div>
            </div>
            <CalcDataTable
                source="Užsakytų balansavimo pajėgumų kiekis"
                dataSource={mapTableRows(balancingCapacityMFRRTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(balancingCapacityMFRRTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={mapTableRows(balancingCapacityMFRRTable3)}
            />
            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={mapTableRows(balancingCapacityMFRRTable4)}
            />
            <Divider sx={{ marginTop: '64px', marginBottom: '24px', width: '768px' }} />
            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </div>
    );
};
