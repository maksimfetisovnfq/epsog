import { Form, FormInput } from "../../../components/form"
import {
    defaultTechnicalBeksParams,
    type TechnicalBeksParametersSchema,
    technicalParametersSchema,
} from "./technical-parameters-schema.ts"
import { useLocation, useNavigate } from "@tanstack/react-router"
import Divider from "@mui/material/Divider"
import { ReactionTimeSlider } from "@/components/reaction-time-slider"
import { Accordion } from "@/ui/accordion/accordion.tsx"
import { FormNavigation } from "@/components/navigation/form-navigation.tsx"
import { Title } from "@/ui/title/index.ts"
import { Box } from "@mui/material"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"

const FormContent = () => {
    return (
        <>
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Techniniai parametrai</Title>

            <FormInput
                name="q_max"
                placeholder="1000 MW"
                description="Įvedami tik teigiami skaičiai, maksimali reikšmė 1 000 000 MW (1 TW)"
                title="Elektros energijos kaupiklio maksimali galia (MW)"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="q_total"
                placeholder="2 MWh"
                description="Įvedami tik teigiami skaičiai, maksimali reikšmė 1 000 000 MWh (1 TWh)"
                title="Elektros energijos kaupiklio talpa (MWh)"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <Box
                sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    marginBottom: "12px",
                    width: { sm: "400px" },
                }}
            >
                <ReactionTimeSlider
                    field="reaction_time"
                    label="Kaip greitai įrenginys gali pasiekti maksimalią galią? *"
                />
            </Box>

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

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
                <FormInput
                    name="RTE"
                    placeholder="88 %"
                    description="Skaičius nuo 0 iki 100"
                    title="Pilno ciklo naudingumo koeficientas (%)"
                    tooltip="Šis koeficientas parodo kiek per vieną ciklą (iškrovimą ir įkrovimą) į tinklą yra sugrąžinima elektros energijos"
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="SOC_min"
                    placeholder="10 %"
                    description="Skaičius nuo 0 iki 100"
                    title="Elektros energijos kaupiklio minimalus įkrovimo lygis (%)"
                    tooltip="Mažiausia riba iki kurios galima iškrauti kaupiklį."
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="SOC_max"
                    placeholder="95 %"
                    description="Skaičius nuo 0 iki 100"
                    title="Elektros energijos kaupiklio maksimalus įkrovimo lygis"
                    tooltip="Didžiausia riba iki kurios galima įkrauti kaupiklį."
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="N_cycles_DA"
                    placeholder="4 kartai/d."
                    description="Sveikas skaičius nuo 0 iki 96 imtinai"
                    title="Maksimalus energijos kaupiklio ciklų skaičius per dieną prekiaujant dieną prieš"
                    tooltip="Kiek kartų per vieną parą leidžiama pilnai įkrauti/iškrauti kaupiklį."
                />

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormInput
                    name="N_cycles_ID"
                    placeholder="16 kartai/d."
                    description="Sveikas skaičius nuo 0 iki 96 imtinai"
                    title="Maksimalus energijos kaupiklio ciklų skaičius prekiaujant dienos eigos"
                    tooltip="Dienos eigos rinka skirta išlaikyti kaupiklio talpą leistinose ribose teikiant balansavimo paslaugas."
                />
            </Accordion>
        </>
    )
}

export const TechnicalParametersBeksForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (data: TechnicalBeksParametersSchema) => {
        const reactionTime = data.reaction_time
        const submitData = { ...data, reaction_time: reactionTime }

        navigate({
            to: "/beks/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { beks: submitData },
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/general-data",
            state: { generalData: location.state.generalData },
        })
    }

    return (
        <Form
            defaultValues={location.state?.technicalParameters?.beks || defaultTechnicalBeksParams}
            onSubmit={handleSubmit}
            validationSchema={technicalParametersSchema}
        >
            <FormContent />
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
