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
import { useWatch } from "react-hook-form"
import { Stack } from "@mui/material"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { Accordion } from "@/ui/accordion"

const TechnicalParametersFormContent = () => {
    const serviceType = useWatch({ name: "service_type" })

    return (
        <>
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Techniniai parametrai</Title>

            <FormInput
                name="Q_max_HP"
                title="Šilumos siurblio maksimali elektrinė galia (MW)"
                placeholder="2"
                description="Įvedami tik teigiami skaičiai, maksimali reikšmė 1 000 000 MW (1 TW)"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="Q_yearly"
                title="Metinis šilumos energijos poreikis (MWh)"
                placeholder="13000000.00"
                description="Įvedami tik teigiami skaičiai, maksimali reikšmė 1 000 000 MW (1 TW)"
                tooltip="TODO"
                isRequired
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="T_HP"
                title="Aplinkos temperatūra nuo kurios išjungiamas šilumos siurblys (°C)"
                placeholder="-10"
                type="number"
                tooltip="TODO"
                isRequired
                description="TODO"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormLabel style={{ color: "black", padding: 0, marginBottom: "12px", fontSize: "14px" }}>
                {"Pasirinkite galimą teikti reguliavimo paslaugą".split("*").map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < "Pasirinkite galimą teikti reguliavimo paslaugą".split("*").length - 1 && (
                            <span style={{ color: "red" }}>*</span>
                        )}
                    </span>
                ))}
            </FormLabel>

            <Stack spacing={1}>
                <ServiceTypeSelect />

                {(serviceType === "down" || serviceType === "both") && (
                    <ReactionTimeSlider
                        field="reaction_time_d"
                        label="Reakcijos laikas įjungiant šilumos siurblį (reguliavimas žemyn)"
                    />
                )}
                {(serviceType === "up" || serviceType === "both") && (
                    <ReactionTimeSlider
                        field="reaction_time_u"
                        label="Reakcijos laikas išjungiant šilumos siurblį (reguliavimas aukštyn)"
                    />
                )}
            </Stack>

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <Accordion
                title="Išplėstiniai techniniai parametrai"
                titleDescription={
                    <InfoBanner
                        title=""
                        subtitle="TODO"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                }
            >
                <Title sx={{ marginBottom: "16px", fontSize: "22px" }}>Šilumos kaupiklio (talpyklos) parametrai</Title>
                <FormInput
                    name="d_HS"
                    title="Diametras (m)"
                    placeholder="10"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="H_HS"
                    title="Šilumos kaupiklio aukštis (m)"
                    placeholder="20"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="lambda_HS"
                    title="Izoliacinės medžiagos šiluminis laidumas (W/(m°C))"
                    placeholder="0.032"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="dx_HS"
                    title="Izoliacinės medžiagos storis (m)"
                    placeholder="0.3"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Title sx={{ marginBottom: "16px", fontSize: "22px" }}>Šilumos katilo (boilerio) parametrai</Title>

                <FormInput
                    name="Q_max_BOILER"
                    title="Šilumos katilo maksimali šiluminė galia (MW)"
                    placeholder="4.5"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="P_FUEL"
                    title="Deginamo kuro kaina (EUR/m³)"
                    placeholder="0.44"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="q_FUEL"
                    title="Deginamo kuro kaloringumas (Wh/m³)"
                    placeholder="9550"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="eta_BOILER"
                    title="Šilumos katilo naudingumo koeficientas (%)"
                    placeholder="98"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="T_max_HS"
                    title="Maksimali vandens temperatūra (°C)"
                    placeholder="-10"
                    type="number"
                    tooltip="TODO"
                    isRequired
                    description="TODO"
                />
            </Accordion>
        </>
    )
}

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
            // @ts-expect-error Zod schema inference
            validationSchema={technicalParametersSchema}
            defaultValues={location.state?.technicalParameters?.p2h || defaultTechnicalP2hParams}
        >
            <TechnicalParametersFormContent />
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
