import {
    defaultTechnicalP2hParams,
    type TechnicalP2hParametersSchema,
    technicalParametersSchema,
} from "./technical-parameters-schema.ts"
import { useLocation, useNavigate } from "@tanstack/react-router"
import Divider from "@mui/material/Divider"
import FormLabel from "@mui/material/FormLabel"
import { Form, FormInput, ServiceTypeSelect } from "@/components/form"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { ReactionTimeSlider } from "@/components/reaction-time-slider"

export const TechnicalParametersP2hForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (data: TechnicalP2hParametersSchema) => {
        navigate({
            to: "/p2h/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { p2h: data },
            },
        })
    }

    const handleBackward = () => navigate({ to: "/general-data" })

    return (
        <Form
            onSubmit={handleSubmit}
            validationSchema={technicalParametersSchema}
            defaultValues={location.state?.technicalParameters?.p2h || defaultTechnicalP2hParams}
        >
            <ServiceTypeSelect />

            <FormInput name="Q_max_HP" title="Q_max_HP (MW)" placeholder="2" />
            <FormInput name="Q_yearly" title="Metinis šilumos energijos poreikis (MWh)" placeholder="13000000.00" />

            <FormLabel style={{ color: "black", padding: 0, marginBottom: "12px", fontSize: "14px" }}>
                Pasirinkite galimą teikti reguliavimo paslaugą *
            </FormLabel>

            <Divider style={{ marginTop: "48px", marginBottom: "48px" }} />

            <FormInput name="H_HS" title="H_HS (m)" placeholder="12" type="number" />

            <ReactionTimeSlider field="reaction_time_d" label="reaction_time_d" />
            <ReactionTimeSlider field="reaction_time_u" label="reaction_time_u" />

            <FormInput
                name="Q_yearly"
                title="Metinis šilumos energijos poreikis (MWh)"
                placeholder="13000000.00"
                type="number"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="d_HS" title="d_HS" placeholder="10" type="number" />
            <FormInput name="H_HS" title="H_HS" placeholder="20" type="number" />
            <FormInput name="lambda_HS" title="lambda_HS" placeholder="0.032" type="number" />
            <FormInput name="dx_HS" title="dx_HS" placeholder="0.3" type="number" />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="Q_max_BOILER" title="Q_max_BOILER" placeholder="4.5" type="number" />
            <FormInput name="P_FUEL" title="Q_max_BOILER" placeholder="0.44" type="number" />
            <FormInput name="q_FUEL" title="q_FUEL" placeholder="9550" type="number" />
            <FormInput name="eta_BOILER" title="eta_BOILER" placeholder="98" type="number" />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="T_HP" title="T_HP" placeholder="-10" type="number" />
            <FormInput name="T_max_HS" title="T_max_HS" placeholder="-10" type="number" />

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
