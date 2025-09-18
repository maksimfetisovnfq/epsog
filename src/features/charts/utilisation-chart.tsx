import { MarketProductsChart } from "@/ui/charts/marketProductsChart"
import { Box } from "@mui/material"

type Props = {
    data: {
        products: string[]
        values: number[]
    }
}

export const UtilisationChart = ({ data }: Props) => {

    if (!data) return (
        <Box sx={{border: '1px solid #CFD5DA', width: {sm: '768px'}, marginBottom: '16px'}}>
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
        </Box>
    );

    const utilisationChartData = data;

    if (!utilisationChartData.products || utilisationChartData.products.length === 0) {
        return (
            <Box sx={{border: '1px solid #CFD5DA', width: {sm: '768px'}, marginBottom: '16px'}}>
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
            </Box>
        );
    }

    return (
        <Box sx={{border: '1px solid #CFD5DA', width: {sm: '768px'}, marginBottom: '16px'}}>
            <div style={{
                fontSize: '16px',
                marginBottom: '16px',
                marginTop: '16px',
                fontWeight: 700,
                textAlign: 'center',
            }}>
                Rinkų produktai
            </div>

            <Box sx={{width: {sm: '768px'}}}>
                <MarketProductsChart
                    labels={utilisationChartData.products.map((product: string) => product)}
                    datasets={[
                        {
                            label: 'Rinkos produktai',
                            data: utilisationChartData.values.map((value: number) => value),
                        },
                    ]}
                />
            </Box>
        </Box>
    );
};
