import { MarketProductsChart } from "@/ui/charts/marketProductsChart"
import { useSummaryBeks } from "@/features/beks/summary/use-summary-beks.ts";

export const UtilisationChart = () => {
    const data = useSummaryBeks();

    if (!data) return (
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

    const utilisationChartData = data.aggregated.summary.utilisation_chart_data;

    if (!utilisationChartData.products || utilisationChartData.products.length === 0) {
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
                    labels={utilisationChartData.products.map((product: string) => product)}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: utilisationChartData.values.map((value: number) => value),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
