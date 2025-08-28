import React from 'react';
import { IncomeChart } from "../../../ui/charts/incomeChart/income-chart";

interface IncomeComparisonProps {
    incomeDataSource: Array<{
        key: string;
        name: string;
        valueA?: number;
        valueB?: number;
    }>;
}

export const IncomeComparison: React.FC<IncomeComparisonProps> = ({ incomeDataSource }) => {
    return (
        <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>
            <div style={{
                fontSize: '16px',
                marginTop: '16px',
                fontWeight: 700,
                textAlign: 'center',
            }}>
                Rinkose sugeneruotų pajamų bei sąnaudų palyginimas per produktus
            </div>

            <div style={{width: '768px'}}>
                <IncomeChart
                    labels={incomeDataSource.map(item => item.name)}
                    datasets={[
                        {
                            label: 'Bottom',
                            data: incomeDataSource.map(item => item.valueB ?? 0),
                        },
                        {
                            label: 'Top',
                            data: incomeDataSource.map(item => item.valueA ?? 0),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
