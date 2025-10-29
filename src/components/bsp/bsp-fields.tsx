import { FormInput } from "@/components/form"
import Divider from "@mui/material/Divider"

export const BspFields = () => {
    return (
        <>
            <div style={{ fontSize: "18px", marginBottom: "24px" }}>
                Minimali siūloma kaina už balansavimo pajėgumus (EUR/MW):
            </div>
            <FormInput
                name="P_FCR_CAP_BSP"
                placeholder="0 Eur/MW"
                title="FCR:"
                description="Galimos reikšmės nuo 0 iki 4 000 EUR/MW."
                tooltip="Dažnio išlaikymo rezervas (angl. Frequency containment reserve)"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRu_CAP_BSP"
                placeholder="0 Eur/MW"
                title="aFRR aukštyn:"
                description="Galimos reikšmės nuo 0 iki 4 000 EUR/MW."
                tooltip="Automatinis dažnio atkūrimo rezervas (angl. automatic Frequency Restoration Reserve), naudojamas didinant generaciją/mažinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRd_CAP_BSP"
                placeholder="0 Eur/MW"
                title="aFRR žemyn:"
                description="Galimos reikšmės nuo 0 iki 4 000 EUR/MW."
                tooltip="Automatinis dažnio atkūrimo rezervas (angl. automatic Frequency Restoration Reserve), naudojamas mažinant generaciją/didinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRu_CAP_BSP"
                placeholder="0 Eur/MW"
                title="mFRR aukštyn:"
                description="Galimos reikšmės nuo 0 iki 4 000 EUR/MW."
                tooltip="Rankinis dažnio atkūrimo rezervas (angl. manual Frequency Restoration Reserve) naudojamas didinant generaciją/mažinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRd_CAP_BSP"
                placeholder="0 Eur/MW"
                title="mFRR žemyn:"
                description="Galimos reikšmės nuo 0 iki 4 000 EUR/MW."
                tooltip="Rankinis dažnio atkūrimo rezervas (angl. manual Frequency Restoration Reserve), naudojamas mažinant generaciją/didinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "32px", marginBottom: "32px" }} />

            <div style={{ fontSize: "18px", marginBottom: "24px" }}>
                Minimali siūloma kaina už balansavimo energiją (EUR/MWh):
            </div>
            <FormInput
                name="P_aFRRu_BSP"
                placeholder="Eur/MWh"
                title="aFRR aukštyn:"
                description="Galimos reikšmės nuo – 15 000 iki 15 000 EUR/MWh."
                tooltip="Automatinis dažnio atkūrimo rezervas (angl. automatic Frequency Restoration Reserve), naudojamas didinant generaciją/mažinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRd_BSP"
                placeholder="Eur/MWh"
                title="aFRR žemyn:"
                description="Galimos reikšmės nuo – 15 000 iki 15 000 EUR/MWh."
                tooltip="Automatinis dažnio atkūrimo rezervas (angl. automatic Frequency Restoration Reserve), naudojamas mažinant generaciją/didinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRu_BSP"
                placeholder="Eur/MWh"
                title="mFRR aukštyn:"
                description="Galimos reikšmės nuo – 15 000 iki 15 000 EUR/MWh."
                tooltip="Rankinis dažnio atkūrimo rezervas (angl. manual Frequency Restoration Reserve) naudojamas didinant generaciją/mažinant vartojimą"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRd_BSP"
                placeholder="Eur/MWh"
                title="mFRR žemyn:"
                description="Galimos reikšmės nuo – 15 000 iki 15 000 EUR/MWh."
                tooltip="Rankinis dažnio atkūrimo rezervas (angl. manual Frequency Restoration Reserve), naudojamas mažinant generaciją/didinant vartojimą"
                isRequired
            />
        </>
    )
}
