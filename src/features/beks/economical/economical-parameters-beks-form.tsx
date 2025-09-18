import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { economicalParametersDefaultValues, economicalParametersSchema } from "./economical-parameters-schema"
import { useSubmitBeks } from "./use-submit-beks"
import Divider from "@mui/material/Divider"
import { Accordion } from "@/ui/accordion"

const FormContent = () => {
    return (
        <>
            <div style={{ fontSize: "32px", marginBottom: "48px" }}>Ekonominiai parametrai</div>
            <FormInput
                name="CAPEX_P"
                placeholder="Eur/MW"
                description="Tik teigiami skaičiai"
                title="Investicijos (CAPEX) į galią"
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="CAPEX_C"
                placeholder="Eur/MWh"
                description="Tik teigiami skaičiai"
                title="Investicijos (CAPEX) į talpą"
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="OPEX_P"
                placeholder="Eur/MW per metus"
                description="Tik teigiami skaičiai"
                title="Fiksuotos veiklos sąnaudos (OPEX)"
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="OPEX_C"
                placeholder="Eur/MWh"
                description="Tik teigiami skaičiai"
                title="Kintamos veiklos sąnaudos (OPEX)"
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="number_of_years"
                placeholder="10"
                description="Tik sveikas skaičius nuo 1 iki 50"
                title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"
            />
            <Divider style={{ marginTop: "48px", marginBottom: "48px" }} />

            <Accordion title="Išplėstiniai ekonominiai parametrai">
                <FormInput
                    name="discount_rate"
                    placeholder="5 %"
                    description="Skaičius nuo 0 iki 100"
                    title="Diskonto norma"
                />
                <Divider style={{ marginTop: "32px", marginBottom: "32px" }} />
                <BspFields />
            </Accordion>
        </>
    )
}

export const EconomicalParametersBeksForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitBeks()

    const handleBackward = () => {
        navigate({
            to: "/beks/technical-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        })
    }

    return (
        <Form
            onSubmit={submit}
            validationSchema={economicalParametersSchema}
            defaultValues={location.state?.economicParameters?.beks ?? economicalParametersDefaultValues}
        >
            <FormContent />
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
