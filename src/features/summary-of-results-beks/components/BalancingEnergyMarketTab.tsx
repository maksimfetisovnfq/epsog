import React from 'react';
import {type Column, CalcDataTable} from "../../../ui/tables";
import Divider from "@mui/material/Divider";
import {NavigationButtons} from "./NavigationButtons.tsx";
import {useSummaryData} from "../hooks/useSummaryData";
import {useLocation, useNavigate} from "@tanstack/react-router";

interface BalancingEnergyMarketTabProps {
    dataSource: Array<{
        key: string;
        name: string;
        technology: string;
    }>;
    columns: Column[];
}

export const BalancingEnergyMarketTab: React.FC<BalancingEnergyMarketTabProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();

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

    const {
        balancingEnergyAFRRTable1,
        balancingEnergyAFRRTable2,
        balancingEnergyAFRRTable3,
        balancingEnergyAFRRTable4,
        balancingEnergyMFRRTable1,
        balancingEnergyMFRRTable2,
        balancingEnergyMFRRTable3,
        balancingEnergyMFRRTable4
    } = useSummaryData();

    const mapTableRows = (rows: { name: string; value: string | number; unit?: string }[]) =>
        rows.map((row, idx) => ({
            key: row.name + idx,
            parameter: row.name,
            value: row.value + (row.unit ? ` ${row.unit}` : '')
        }));

    return (
        <div>
            {/*<Table columns={columns} dataSource={dataSource}/>*/}

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
                dataSource={mapTableRows(balancingEnergyAFRRTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(balancingEnergyAFRRTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={mapTableRows(balancingEnergyAFRRTable3)}
            />
            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={mapTableRows(balancingEnergyAFRRTable4)}
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
                dataSource={mapTableRows(balancingEnergyMFRRTable1)}
            />
            <CalcDataTable
                source="Įrenginio dalyvavimas balansavimo pajėgumų rinkoje (% nuo viso laiko)"
                dataSource={mapTableRows(balancingEnergyMFRRTable2)}
            />
            <CalcDataTable
                source="Tikėtinos pajamos"
                dataSource={mapTableRows(balancingEnergyMFRRTable3)}
            />

            <CalcDataTable
                source="Užsakytų pasiūlymų kiekis (%)"
                dataSource={mapTableRows(balancingEnergyMFRRTable4)}
            />

            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

            <NavigationButtons onBackward={handleBackward} onForward={handleForward} />
        </div>
        
    );
};
