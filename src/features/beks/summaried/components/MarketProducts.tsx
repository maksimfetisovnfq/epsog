import { MarketProductsChart } from "@/ui/charts/marketProductsChart"


interface MarketProductsProps {
    marketProductsDataSource: Array<{
        key: string;
        name: string;
        value: number;
    }>;
}

export const MarketProducts: React.FC<MarketProductsProps> = ({ marketProductsDataSource }) => {
    if (!marketProductsDataSource || marketProductsDataSource.length === 0) {
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
                <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                    Duomenys kraunami...
                </div>
            </div>
        );
    }

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
                <MarketProductsChart
                    labels={marketProductsDataSource.map(item => item.name)}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: marketProductsDataSource.map(item => item.value),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
