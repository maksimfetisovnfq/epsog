import React from 'react';
import { IncomeChart } from "../../../ui/charts/incomeDataExpensesChart/income-expenses-data-chart";

interface IncomeDataProps {
    incomeDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
}

export const DetailedAnualResults: React.FC<IncomeDataProps> = ({ incomeDataSource }) => {
    return (
        <div style={{width: '768px', marginTop: '24px'}}>

            <div>
                <div style={{
                    fontSize: '18px',
                }}>
                    Detalūs metiniai rezultatai
                </div>
                <div style={{fontSize: '14px', color: '#6F8190'}}>
                    Galite pasirinkti analizuojamus stulpelius
                </div>
            </div>
            
            <div style={{width: '768px'}}>
                <IncomeChart
                    labels={incomeDataSource.map(item => item.name)}
                    datasets={[
                        {
                            label: '',
                            data: incomeDataSource.map(item => item.value),
                        },
                    ]}
                />
            </div>
        </div>
    );
};