import React from 'react';
import {RevenueProductsChart} from "../../../ui/charts/revenueProductsChart";

interface RevenueProductsProps {
    revenueProductsDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
}

export const RevenueProducts: React.FC<RevenueProductsProps> = ({ revenueProductsDataSource }) => {
    const labelMap = [
        'parduodama DA',
        'aFRRu CAP',
        'aFRRd CAP',
        'mFRRu CAP',
        'mFRRd CAP',
        'aFRRu',
        'aFRRd',
        'mFRRd',
    ];

    return (
        <div style={{border: '1px solid #CFD5DA', width: '768px', marginTop: '24px'}}>
            <div style={{width: '768px'}}>
                <RevenueProductsChart
                    labels={revenueProductsDataSource.map((_, idx) => labelMap[idx] || '')}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: revenueProductsDataSource.map(item => item.value),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
