import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { StackedBarChart } from '../../ui/charts/stackedBarChart';
import { Box } from "@mui/material"

type NpvAnalysisChartProps = {
    data: {
        years: number[];
        npv: number[];
        dcfs: number[]
    }
}

export const NpvAnalysisChart = ({ data }: NpvAnalysisChartProps) => {
    const dataSource = data.years.map((year, idx) => {
        const value = data.dcfs[idx];
        return {
            key: String(idx),
            name: String(year),
            valueA: value > 0 ? value : undefined,
            valueB: value <= 0 ? value : undefined,
        };
    });
    
    return (
        <Box sx={{border: '1px solid #CFD5DA', width: {sm: '768px'}}}>
            <div style={{
                fontSize: '16px',
                marginBottom: '16px',
                marginTop: '16px',
                fontWeight: 700,
                textAlign: 'center',
            }}>
                Dabartinės grynosios vertės analizė rezultatai
            </div>

            <Box sx={{width: {sm: '768px'}}}>
                <StackedBarChart
                    labels={dataSource.map(item => item.name)}
                    datasets={[
                        {
                            label: 'Bottom',
                            data: dataSource.map(item => item.valueB ?? 0),
                        },
                        {
                            label: 'Top',
                            data: dataSource.map(item => item.valueA ?? 0),
                        },
                    ]}
                    lineDatasets={[
                        {
                            label: 'Cumulative NPV',
                            data: data.npv,
                            borderColor: '#4A90E2',
                            backgroundColor: '#4A90E2',
                        },
                    ]}
                />

                <Box sx={{
                    backgroundColor: '#F5F7F8',
                    display: 'flex',
                    color: '#3F576B',
                    width: {sm: '736px'},
                    margin: '16px',
                }}>
                    <div style={{margin: '16px 16px 0 16px',}}>
                        <InfoOutlineIcon/>
                    </div>

                    <div style={{marginTop: '20px', fontSize: '14px'}}>
                        <Box sx={{marginBottom: '12.5px', width: {sm: '668px'}}}>
                            <strong style={{fontWeight: '700'}}>
                                Grynosios dabartinės vertės analizė
                            </strong>
                            (angl. Net Present Value analysis, trump.
                            <strong style={{fontWeight: '700'}}> NPV</strong>) - tai finansinis vertinimo
                            metodas, kuris leidžia įvertinti investicijos
                            vertę per visą jos gyvavimo laikotarpį, atsižvelgiant
                            į pinigų vertės kitimą laikui bėgant.
                        </Box>

                        <ul style={{paddingLeft: 0}}>
                            Ką rodo analizė:
                            <li style={{marginLeft: 27, marginTop: 8}}>
                                <strong style={{fontWeight: '700'}}> Teigiama NPV reikšmė </strong>
                                - projektas turėtų būti finansiškai naudingas.
                            </li>
                            <li style={{marginLeft: 27, marginTop: 8}}>
                                <strong style={{fontWeight: '700'}}>Neigiama NPV reikšmė </strong>
                                - projektas gali būti nuostolingas arba neefektyvus.
                            </li>
                        </ul>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};
