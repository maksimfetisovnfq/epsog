import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { defaultEconomicalParametersDsrSchema, economicalParametersDsrSchema } from "./economical-parameters-dsr-schema"
import { useSubmitDsr } from "./use-submit-dsr"
import { Stack } from "@mui/material"

export const EconomicalParametersDsrForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitDsr()

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-dsr",
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
                <FormInput name="CAPEX" title="CAPEX" type="number" />
                <FormInput name="OPEX" title="OPEX" type="number" />
                <FormInput name="number_of_years" title="number_of_years" type="number" />
                <FormInput name="discount_rate" title="discount_rate" type="number" />

                <BspFields />
            </Stack>
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
