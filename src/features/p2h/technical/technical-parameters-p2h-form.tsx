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
import { Title } from "@/ui/title"

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
            <Title style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}} >Techniniai parametrai</Title>

            <FormInput name="Q_max_HP" title="Šilumos siurblio maksimali elektrinė galia (MW)" placeholder="2" />
            <FormInput name="Q_yearly" title="Metinis šilumos energijos poreikis (MWh)" placeholder="13000000.00" />

            <FormLabel style={{ color: "black", padding: 0, marginBottom: "12px", fontSize: "14px" }}>
                {"Pasirinkite galimą teikti reguliavimo paslaugą".split('*').map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < "Pasirinkite galimą teikti reguliavimo paslaugą".split('*').length - 1 && (
                            <span style={{ color: 'red' }}>*</span>
                        )}
                    </span>
                ))}
            </FormLabel>

            <ServiceTypeSelect />

            <Divider style={{ marginTop: "48px", marginBottom: "48px" }} />

            <FormInput name="H_HS" title="Šilumos kaupiklio aukštis (m)" placeholder="12" type="number" />

            <ReactionTimeSlider field="reaction_time_d" label="Reakcijos laikas įjungiant šilumos siurblį (reguliavimas žemyn)" />
            <ReactionTimeSlider field="reaction_time_u" label="Reakcijos laikas išjungiant šilumos siurblį (reguliavimas aukštyn)" />

            <FormInput
                name="Q_yearly"
                title="Metinis šilumos energijos poreikis (MWh)"
                placeholder="13000000.00"
                type="number"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="d_HS" title="Diametras (m)" placeholder="10" type="number" />
            <FormInput name="H_HS" title="Šilumos kaupiklio aukštis (m)" placeholder="20" type="number" />
            <FormInput name="lambda_HS" title="Izoliacinės medžiagos šiluminis laidumas" placeholder="0.032" type="number" />
            <FormInput name="dx_HS" title="Izoliacinės medžiagos storis" placeholder="0.3" type="number" />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="Q_max_BOILER" title="Šilumos katilo maksimali šiluminė galia (MW)" placeholder="4.5" type="number" />
            <FormInput name="P_FUEL" title="Deginamo kuro kaina (EUR/m³)" placeholder="0.44" type="number" />
            <FormInput name="q_FUEL" title="Deginamo kuro kaloringumas (Wh/m³)" placeholder="9550" type="number" />
            <FormInput name="eta_BOILER" title="Šilumos katilo naudingumo koeficientas (%)" placeholder="98" type="number" />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="T_HP" title="Aplinkos temperatūra nuo kurios išjungiamas šilumos siurblys (°C)" placeholder="-10" type="number" />
            <FormInput name="T_max_HS" title="Maksimali vandens temperatūra (°C)" placeholder="-10" type="number" />

            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
