import { GlobalStyles } from "@mui/material"

export const Loader = () => {
    return (
        <div style={{ fontWeight: 400, fontFamily: "Arial", width: "768px" }}>
            <GlobalStyles
                styles={{
                    ".MuiContainer-root": {
                        padding: "0px !important",
                    },
                }}
            />
            <div
                style={{
                    fontSize: "32px",
                    marginTop: "40px",
                    marginBottom: "48px",
                }}
            >
                Rezultatai
            </div>
            <div
                style={{
                    backgroundColor: "#F5F7F8",
                    display: "flex",
                    height: "90px",
                    color: "#3F576B",
                    width: "768px",
                }}
            >
                <div style={{ marginTop: "20px", fontSize: "24px", marginLeft: "16px" }}>
                    <div style={{ marginBottom: "8px", color: "black" }}>Palaukite, vykdomas skaičiavimas...</div>

                    <div style={{ fontSize: "16px", width: "696px" }}>
                        Energetikos ateitis – tai lankstumo, inovacijų ir duomenimis grįstų sprendimų sintezė.
                    </div>
                </div>
            </div>
        </div>
    )
}