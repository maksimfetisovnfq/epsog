import InfoOutlineIcon from "@mui/icons-material/InfoOutline"
import { Box } from "@mui/material"

type InfoBannerProps = {
    title?: string
    subtitle?: string
    description?: string
}

export const InfoBanner = ({
    title = "Rezultatai",
    subtitle = "Skaičiavimas vykdomas dviem optimizaciniais etapais.",
    description = "Pirmuoju etapu, atsižvelgiant į techninius apribojimus, įvertinamas įrenginio dalyvavimas dienos prieš rinkoje bei balansavimo pajėgumų aukcione.",
}: InfoBannerProps) => {
    return (
        <>
            {title && (
                <div
                    style={{
                        fontSize: "32px",
                        marginBottom: "24px",
                    }}
                >
                    {title}
                </div>
            )}

            <Box
                sx={{
                    backgroundColor: "#F5F7F8",
                    display: "flex",
                    height: { sm: "118px" },
                    color: "#3F576B",
                    width: { sm: "768px" },
                    marginBottom: "24px",
                }}
            >
                <div style={{ margin: "16px 16px 0 16px" }}>
                    <InfoOutlineIcon />
                </div>

                <Box style={{ marginTop: "20px", fontSize: "14px" }}>
                    <div style={{ marginBottom: "12px" }}>{subtitle}</div>

                    <Box sx={{ marginBottom: "12.5px", width: { sm: "696px" } }}>{description}</Box>
                </Box>
            </Box>
        </>
    )
}
