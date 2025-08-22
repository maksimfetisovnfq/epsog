import React from 'react';
import { StackedBarChart } from "../../../ui/charts/stackedBarChart";

interface MarketProductsProps {
    stackedBarDataSource: Array<{
        key: string;
        name: string;
        valueA?: number;
        valueB?: number;
    }>;
}

export const MarketProducts: React.FC<MarketProductsProps> = ({ stackedBarDataSource }) => {
    return (
        <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>
            <div style={{
                fontSize: '16px',
                marginBottom: '16px',
                marginTop: '16px',
                fontWeight: 700,
                textAlign: 'center',
            }}>
                Rinkų produktai
            </div>

            <div style={{width: '768px'}}>
                <StackedBarChart
                    labels={stackedBarDataSource.map(item => item.name)}
                    datasets={[
                        {
                            label: 'Bottom',
                            data: stackedBarDataSource.map(item => item.valueB ?? 0),
                        },
                        {
                            label: 'Top',
                            data: stackedBarDataSource.map(item => item.valueA ?? 0),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
