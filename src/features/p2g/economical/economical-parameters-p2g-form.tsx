import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { defaultEconomicalParametersP2gSchema, economicalParametersP2gSchema } from "./economical-parameters-p2g-schema"
import { useSubmitP2g } from "./use-submit-p2g"
import { Stack } from "@mui/material"
import { Title } from "@/ui/title"

export const EconomicalParametersP2gForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitP2g()

    const handleBackward = () => {
        navigate({
            to: "/p2g/technical-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        })
    }

    return (
        <Form
            onSubmit={submit}
            validationSchema={economicalParametersP2gSchema}
            defaultValues={location.state?.economicParameters?.p2g || defaultEconomicalParametersP2gSchema}
        >
            <Stack spacing={2}>
                <Title style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}} >Ekonominiai parametrai</Title>
                <FormInput name="CAPEX" title="CAPEX" type="number" />
                <FormInput name="OPEX" title="OPEX" type="number" />
                <FormInput name="P_H2" title="P_H2" type="number" />
                <FormInput name="number_of_years" title="number_of_years" type="number" />
                <FormInput name="discount_rate" title="discount_rate" type="number" />

                <BspFields />
            </Stack>
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
