import InfoOutlineIcon from "@mui/icons-material/InfoOutline"

export const InfoBanner = () => {
    return (
        <>
            <div
                style={{
                    fontSize: "32px",
                    marginBottom: "24px",
                }}
            >
                Rezultatai
            </div>

            <div
                style={{
                    backgroundColor: "#F5F7F8",
                    display: "flex",
                    height: "148px",
                    color: "#3F576B",
                    width: "768px",
                    marginBottom: "24px",
                }}
            >
                <div style={{ margin: "16px 16px 0 16px" }}>
                    <InfoOutlineIcon />
                </div>

                <div style={{ marginTop: "20px", fontSize: "14px" }}>
                    <div style={{ marginBottom: "12px" }}>Skaičiavimas vykdomas dviem optimizaciniais etapais.</div>

                    <div style={{ marginBottom: "12.5px", width: "696px" }}>
                        Pirmuoju etapu, atsižvelgiant į techninius apribojimus, įvertinamas įrenginio dalyvavimas dienos
                        prieš rinkoje bei balansavimo pajėgumų aukcione.
                    </div>
                </div>
            </div>
        </>
    )
}
