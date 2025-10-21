import { Form, ServiceTypeSelect, FormInput } from "@/components/form"
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
import { HourlyTable } from "@/ui/tables/HourlyTable/hourlyTable"
import { Title } from "@/ui/title"

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
                <Title style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}} >Techniniai parametrai</Title>
                <FormInput name="Q_avg" title="Vidutinė įrenginio galia (MW)" type="number" />
                <FormInput name="Q_min" title="Minimali įrenginio galia (MW)" type="number" />
                <FormInput name="Q_max" title="Maksimali įrenginio galia (MW)" type="number" />
                <FormInput name="T_shift" title="Laiko poslinkis (15 min. intervalais) energijos atstatymui" type="number" />

                <Divider />
                
                <div>
                    <h6 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 400 }}>
                        Pasirenkami valandiniai galios profiliai
                    </h6>
                    <HourlyTable inputWidth="186px" />
                </div>

                <ServiceTypeSelect />

                <ReactionTimeSlider field={"reaction_time"} label={"Reakcijos laikas (s), per kurį įrenginys pasiekia nurodytą (minimalią/maksimalią) galią"} />
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}