import React from 'react';
import { IncomeChart } from "@/ui/charts/incomeDataExpensesChart"

interface IncomeDataProps {
    incomeDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
}

export const IncomeDataExpenses: React.FC<IncomeDataProps> = ({ incomeDataSource }) => {
    return (
        <div style={{border: '1px solid #CFD5DA', width: '768px', marginTop: '24px'}}>
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
