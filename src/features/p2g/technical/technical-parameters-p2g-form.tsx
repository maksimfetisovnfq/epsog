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
import { useWatch } from "react-hook-form"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { Accordion } from "@/ui/accordion"

const FormContent = ({ handleBackward }: { handleBackward: () => void }) => {
    const serviceType = useWatch({ name: "service_type" })

    return (
        <>
            <Stack spacing={3}>
                <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Techniniai parametrai</Title>

                <FormInput
                    name="Q_max"
                    title="Maksimali įrenginio galia (MW)"
                    type="number"
                    description="Įvedami tik teigiami skaičiai, maksimali reikšmė 1 000 000 MW (1 TW)"
                />

                <Divider />

                <ServiceTypeSelect />

                {(serviceType === "down" || serviceType === "both") && (
                    <ReactionTimeSlider
                        field={"reaction_time_d"}
                        label={"Reakcijos laikas įjungiant elektrolizerį (reguliavimas žemyn) "}
                    />
                )}
                {(serviceType === "up" || serviceType === "both") && (
                    <ReactionTimeSlider
                        field={"reaction_time_u"}
                        label={"Reakcijos laikas išjungiant elektrolizerį (reguliavimas aukštyn)"}
                    />
                )}
            </Stack>

            <Stack spacing={2}>
                <FormInput name="eta_H2" title="Vandenilio kaina (EUR/kg)" type="number" />
                <FormInput
                    name="electrolyzer_tech"
                    title="Elektrolizerio (elektra → vandenilis) naudingumo koeficientas (%)"
                />

                <Accordion
                    title="Išplėstiniai techniniai parametrai"
                    titleDescription={
                        <InfoBanner
                            title=""
                            subtitle="Patikslinkite savo įrenginio technines charakteristikas, 
                        kad skaičiavimai būtų kuo tikslesni."
                            description="Atkreipiame dėmesį, kad šios informacijos pateikimui, 
                        geriausia pasitelkti įrenginio technines specifikacijas. Jei kažkurių 
                        verčių nežinote, nesijaudinkite, parinkome numatytąsias reikšmes, kurios atspindi 
                        rinkoje esančių įrenginių galimybes."
                        />
                    }
                >
                    <FormInput name="T0" title="T0" type="number" />
                    <FormInput name="p0" title="p0" type="number" />
                    <FormInput name="eta_C" title="eta_C" type="number" />
                </Accordion>
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}

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
            <FormContent handleBackward={handleBackward} />
        </Form>
    )
}
