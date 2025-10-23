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
                title="FCR"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRu_CAP_BSP"
                placeholder="0 Eur/MW"
                title="aFRR aukštyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRd_CAP_BSP"
                placeholder="0 Eur/MW"
                title="aFRR žemyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRu_CAP_BSP"
                placeholder="0 Eur/MW"
                title="mFRR aukštyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRd_CAP_BSP"
                placeholder="0 Eur/MW"
                title="mFRR žemyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "32px", marginBottom: "32px" }} />

            <div style={{ fontSize: "18px", marginBottom: "24px" }}>
                Minimali siūloma kaina už balansavimo energiją (EUR/MWh):
            </div>
            <FormInput
                name="P_aFRRu_BSP"
                placeholder="Eur/MWh"
                title="aFRR aukštyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_aFRRd_BSP"
                placeholder="Eur/MWh"
                title="aFRR žemyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRu_BSP"
                placeholder="Eur/MWh"
                title="aFRR aukštyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="P_mFRRd_BSP"
                placeholder="Eur/MWh"
                title="mFRR žemyn"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
        </>
    )
}
