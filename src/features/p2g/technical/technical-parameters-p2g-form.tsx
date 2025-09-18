import { Form, FormInput, ServiceTypeSelect } from "@/components/form"
import {
    defaultTechnicalParametersP2g,
    type TechnicalP2gParametersSchema,
    technicalParametersP2gSchema,
} from "./technical-parameters-p2g-schema.ts"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { Stack } from "@mui/material"
import { FormNavigation } from "@/components/navigation/form-navigation"
import Divider from "@mui/material/Divider"
import { ReactionTimeSlider } from "@/components/reaction-time-slider"
import { Title } from "@/ui/title"

export const TechnicalParametersP2gForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (data: TechnicalP2gParametersSchema) => {
        navigate({
            to: "/p2g/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { p2g: data },
            },
        })
    }

    const handleBackward = () => {
        navigate({ to: "/general-data" })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            validationSchema={technicalParametersP2gSchema}
            defaultValues={location.state?.technicalParameters?.p2g || defaultTechnicalParametersP2g}
        >
            <Stack spacing={3}>
                <Title style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}} >Techniniai parametrai</Title>
                
                <FormInput name="Q_max" title="Maksimali įrenginio galia (MW)" type="number" />

                <Divider />

                <ServiceTypeSelect />

                <ReactionTimeSlider field={"reaction_time_d"} label={"Reakcijos laikas įjungiant elektrolizerį (reguliavimas žemyn) "} />

                <ReactionTimeSlider field={"reaction_time_u"} label={"Reakcijos laikas išjungiant elektrolizerį (reguliavimas aukštyn)"} />
            </Stack>

            <Stack spacing={2}>
                <FormInput name="eta_H2" title="eta_H2" type="number" />
                <FormInput name="electrolyzer_tech" title="electrolyzer_tech" />

                <FormInput name="T0" title="T0" type="number" />
                <FormInput name="p0" title="p0" type="number" />
                <FormInput name="eta_C" title="eta_C" type="number" />
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
