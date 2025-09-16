import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { GlobalStyles } from "@mui/material"
import Divider from "@mui/material/Divider"
import { Button } from "../ui/button"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useState } from "react"
import { CheckBox } from "../ui/checkBox/checkBox"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()

    function canNavigate(path: string) {
        switch (path) {
            case "/general-data":
                return true
            default:
                return false
        }
    }

    return (
        <div
            style={{
                fontFamily: "Arial",
                width: "760px",
                color: "#FFFFFF",
            }}
        >
            <GlobalStyles
                styles={{
                    "body, *": {
                        fontWeight: 400,
                    },
                    ".MuiAccordionDetails-root": {
                        padding: "0 !important",
                    },
                    ".MuiButtonBase-root": {
                        padding: "0 !important",
                    },
                    ".MuiDivider-root": {
                        borderColor: "white !important",
                    },
                }}
            />

            <div style={{ marginTop: "64px", marginBottom: "48px" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>Simuliuokite savo uždarbį</div>
                <div style={{ fontSize: "20px" }}>Sužinokite lanksčių produktų galimybes</div>
            </div>

            <div style={{ fontSize: "16px", marginBottom: "24px" }}>
                <div style={{ marginBottom: "8px", fontWeight: 700 }}>Numatomas laikas:</div>
                <div>Užtruksite apie 2 minutes.</div>
            </div>

            <div style={{ fontSize: "16px", marginBottom: "24px" }}>
                <div style={{ marginBottom: "8px", fontWeight: 700 }}>Klausimai:</div>
                <div>
                    Jūsų patogumui dauguma klausimų jau užpildyti numatytomis vertėmis, kurias galite lengvai koreguoti
                </div>
            </div>

            <div style={{ fontSize: "16px", marginBottom: "48px" }}>
                <div style={{ marginBottom: "8px", fontWeight: 700 }}>Rezultatai:</div>
                <div>
                    Rezultatuose matysite apskaičiuotą potencialų uždarbį ir sąnaudas pagal Jūsų įvestus duomenis.
                    Kiekvienas rezultatas – individualus ir pritaikytas tik Jūsų situacijai.
                </div>
            </div>

            <div style={{ fontSize: "16px", marginBottom: "48px" }}>
                <div style={{ marginBottom: "8px", fontWeight: 700 }}>Pagalbos ikonėlė</div>
                <div>
                    Spustelėkite, kad gautumėte daugiau informacijos apie kiekvieną klausimą ir suprastumėte, kaip jie
                    daro įtaką galimam uždarbiui.
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <div>
                    <CheckBox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                </div>

                <div style={{ width: "768px", marginLeft: 6, fontSize: "16px" }}>
                    Patvirtinu, kad su skaičiuoklės naudojimosi taisyklėmis susipažinau ir sutinku
                </div>
            </div>

            <div style={{ width: "736px", marginLeft: "32px", fontSize: "14px" }}>
                Tai nėra investicinis patarimas ar garantija dėl būsimų pajamų. Ši skaičiuoklė skirta padėti įvertinti
                lankstumo technologijų potencialą, remiantis pastarųjų 12 mėn. istoriniais rinkos duomenimis. Prieš
                priimant sprendimus dėl investicijų ar įgyvendinimo, rekomenduojama atlikti išsamią kaštų ir naudos
                analizę arba pasikonsultuoti su specialistais.
            </div>

            <Divider variant="fullWidth" sx={{ marginTop: "147px", width: "760px" }} />

            <div style={{ marginTop: "24px", display: "flex", justifyContent: "end" }}>
                <Button
                    variant="contained"
                    type="button"
                    disabled={!checked}
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                        if (canNavigate("/general-data")) {
                            navigate({ to: "/general-data" })
                        }
                    }}
                >
                    Toliau
                </Button>
            </div>
        </div>
    )
}
