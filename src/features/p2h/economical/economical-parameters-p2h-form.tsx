import { Form, FormInput } from "@/components/form"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { useSubmitP2h } from "./use-submit-p2h"
import { defaultEconomicalP2hParameters, economicalParametersP2hSchema } from "./economical-parameters-p2h-schema"
import { BspFields } from "@/components/bsp"
import { Title } from "@/ui/title"
import { Accordion } from "@/ui/accordion"

export const EconomicalParametersP2hForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { submit } = useSubmitP2h()

    const handleBackward = () => {
        navigate({
            to: "/p2h/technical-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        })
    }

    return (
        <Form
            onSubmit={submit}
            validationSchema={economicalParametersP2hSchema}
            defaultValues={location.state?.economicParameters?.p2h ?? defaultEconomicalP2hParameters}
        >
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Ekonominiai parametrai</Title>

            <FormInput name="CAPEX_HP" title="Investicijos į šilumos siurblį, CAPEX (tūkst. EUR/MW)" defaultValue="0" />
            <FormInput name="OPEX_HP" title="OPEX_HP (tūkst. EUR/MW/m)" defaultValue="0" />
            <FormInput name="CAPEX_HS" title="Investicijos į talpyklą CAPEX (tūkst. EUR/m³)" defaultValue="0" />
            <FormInput
                name="OPEX_HS"
                title="Šilumos siurblio aptarnavimo ir priežiūros kaštai, OPEX (tūkst. Eur/MW per metus)"
                defaultValue="0"
            />
            <FormInput name="discount_rate" title="Taikoma diskonto norma (%)" defaultValue="0" />
            <FormInput name="number_of_years" title="Projekto gyvavimo laikotarpis (metais)" defaultValue="0" />

            <FormInput name="CAPEX_P" title="CAPEX_P" defaultValue="0" />

            <Accordion title="Išplėstiniai ekonominiai parametrai">
                <BspFields />
            </Accordion>

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
