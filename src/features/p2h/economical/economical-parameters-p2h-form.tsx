import { Form, FormInput } from "@/components/form"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { useSubmitP2h } from "./use-submit-p2h"
import { defaultEconomicalP2hParameters, economicalParametersP2hSchema } from "./economical-parameters-p2h-schema"
import { BspFields } from "@/components/bsp"

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
            <div
                style={{
                    fontSize: "32px",
                    marginTop: "48px",
                }}
            >
                Minimali siūloma kaina už balansavimo pajėgumus:
            </div>

            <FormInput name="CAPEX_HP" title="CAPEX_HP" defaultValue="0" />
            <FormInput name="OPEX_HP" title="OPEX_HP" defaultValue="0" />
            <FormInput name="CAPEX_HS" title="CAPEX_HS" defaultValue="0" />
            <FormInput name="OPEX_HS" title="OPEX_HS" defaultValue="0" />
            <FormInput name="discount_rate" title="discount_rate" defaultValue="0" />
            <FormInput name="number_of_years" title="number_of_years" defaultValue="0" />

            <FormInput name="CAPEX_P" title="CAPEX_P" defaultValue="0" />

            <BspFields />

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
