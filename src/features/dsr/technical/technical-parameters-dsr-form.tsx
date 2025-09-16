import { Form, FormInput, ServiceTypeSelect } from "@/components/form"
import {
    defaultTechnicalParametersDsr,
    type TechnicalDsrParametersSchema,
    technicalParametersDsrSchema,
} from "./technical-parameters-dsr-schema.ts"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { Stack } from "@mui/material"
import { FormNavigation } from "@/components/navigation/form-navigation"
import Divider from "@mui/material/Divider"
import { ReactionTimeSlider } from "@/components/reaction-time-slider"

export const TechnicalParametersDsrForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (data: TechnicalDsrParametersSchema) => {
        navigate({
            to: "/dsr/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { dsr: data },
            },
        })
    }

    const handleBackward = () => {
        navigate({ to: "/general-data" })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            validationSchema={technicalParametersDsrSchema}
            defaultValues={location.state?.technicalParameters?.dsr || defaultTechnicalParametersDsr}
        >
            <Stack spacing={3}>
                <FormInput name="Q_avg" title="Q_avg" description="Q_avg" type="number" />
                <FormInput name="Q_min" title="Q_min" description="Q_min" type="number" />
                <FormInput name="Q_max" title="Q_max" description="Q_max" type="number" />
                <FormInput name="T_shift" title="T_shift" description="T_shift" type="number" />

                <Divider />
                {Array.from({ length: 24 }).map((_, i) => (
                    <FormInput name={`hourly_power_${i}`} title={`hourly_power ${i}`} type="number" />
                ))}

                <ServiceTypeSelect />

                <ReactionTimeSlider field={"reaction_time"} label={"reaction_time"} />
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}