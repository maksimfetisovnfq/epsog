import { StackedBarChart } from "@/ui/charts/stackedBarChart"
import InfoOutlineIcon from "@mui/icons-material/InfoOutline"
import { Stack } from "@mui/material"

type Props = {
    data: {
        years: number[]
        npv: number[]
        dcfs: number[]
        annual_cf: number[]
        break_even_point: number | null
    }
}

export const NpvAnalysisChart = ({ data }: Props) => {
    const stackedBarDataSource = data.years.map((year, index) => ({
        key: `year-${year}`,
        name: `Year ${year}`,
        valueA: data.dcfs[index],
        valueB: data.npv[index],
    }))

    return (
        <Stack spacing={0} style={{ border: "1px solid #CFD5DA", width: "768px", marginBottom: 16 }}>
            <div
                style={{
                    fontSize: "16px",
                    marginBottom: "16px",
                    marginTop: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                }}
            >
                Dabartinės grynosios vertės analizė rezultatai
            </div>

            <div style={{ width: "768px" }}>
                <StackedBarChart
                    labels={stackedBarDataSource.map((item) => item.name)}
                    datasets={[
                        {
                            label: "Bottom",
                            data: stackedBarDataSource.map((item) => item.valueB ?? 0),
                        },
                    ]}
                />

                <div
                    style={{
                        backgroundColor: "#F5F7F8",
                        display: "flex",
                        color: "#3F576B",
                        width: "736px",
                        margin: "16px",
                    }}
                >
                    <div style={{ margin: "16px 16px 0 16px" }}>
                        <InfoOutlineIcon />
                    </div>

                    <div style={{ marginTop: "20px", fontSize: "14px" }}>
                        <div style={{ marginBottom: "12.5px", width: "668px" }}>
                            <strong style={{ fontWeight: "700" }}>Grynosios dabartinės vertės analizė</strong>
                            (angl. Net Present Value analysis, trump.
                            <strong style={{ fontWeight: "700" }}> NPV</strong>) - tai finansinis vertinimo metodas,
                            kuris leidžia įvertinti investicijos vertę per visą jos gyvavimo laikotarpį, atsižvelgiant į
                            pinigų vertės kitimą laikui bėgant.
                        </div>

                        <ul style={{ paddingLeft: 0 }}>
                            Ką rodo analizė:
                            <li style={{ marginLeft: 27, marginTop: 8 }}>
                                <strong style={{ fontWeight: "700" }}> Teigiama NPV reikšmė </strong>- projektas turėtų
                                būti finansiškai naudingas.
                            </li>
                            <li style={{ marginLeft: 27, marginTop: 8 }}>
                                <strong style={{ fontWeight: "700" }}>Neigiama NPV reikšmė </strong>- projektas gali
                                būti nuostolingas arba neefektyvus.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Stack>
    )
}