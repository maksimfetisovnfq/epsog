import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { defaultEconomicalParametersDsrSchema, economicalParametersDsrSchema } from "./economical-parameters-dsr-schema"
import { useSubmitDsr } from "./use-submit-dsr"
import { Stack } from "@mui/material"
import { Title } from "@/ui/title"

export const EconomicalParametersDsrForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitDsr()

    const handleBackward = () => {
        navigate({
            to: "/dsr/technical-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        })
    }

    return (
        <Form
            onSubmit={submit}
            validationSchema={economicalParametersDsrSchema}
            defaultValues={location.state?.economicParameters?.dsr || defaultEconomicalParametersDsrSchema}
        >
            <Stack spacing={2}>
                <Title style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}} >Ekonominiai parametrai</Title>
                <FormInput name="CAPEX" title="Investicijos, CAPEX (tūkst. EUR/MW)" type="number" />
                <FormInput name="OPEX" title="Veiklos sąnaudos, OPEX (tūkst. EUR/MW per metus)" type="number" />
                <FormInput name="number_of_years" title="Projekto gyvavimo laikotarpis (metais)" type="number" />
                <FormInput name="discount_rate" title="Taikoma diskonto norma (%)" type="number" />

                <BspFields />
            </Stack>
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
