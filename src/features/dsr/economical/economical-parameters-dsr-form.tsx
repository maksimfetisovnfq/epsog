import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { defaultEconomicalParametersDsrSchema, economicalParametersDsrSchema } from "./economical-parameters-dsr-schema"
import { useSubmitDsr } from "./use-submit-dsr"
import { Stack } from "@mui/material"
import { Title } from "@/ui/title"
import Divider from "@mui/material/Divider"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { Accordion } from "@/ui/accordion"
import { useFormState } from "react-hook-form"
import { useEffect, useMemo, useState } from "react"

const FormContent = ({ handleBackward }: { handleBackward: () => void }) => {
    const { errors } = useFormState()
    const [accordionExpanded, setAccordionExpanded] = useState(false)

    // List of field names inside the accordion (discount_rate + BspFields)
    const accordionFieldNames = useMemo(
        () => [
            "discount_rate",
            "P_FCR_CAP_BSP",
            "P_aFRRu_CAP_BSP",
            "P_aFRRd_CAP_BSP",
            "P_mFRRu_CAP_BSP",
            "P_mFRRd_CAP_BSP",
            "P_aFRRu_BSP",
            "P_aFRRd_BSP",
            "P_mFRRu_BSP",
            "P_mFRRd_BSP",
        ],
        []
    )

    // Check if any accordion fields have errors
    useEffect(() => {
        const hasAccordionErrors = accordionFieldNames.some((fieldName) => errors[fieldName])
        if (hasAccordionErrors && !accordionExpanded) {
            setAccordionExpanded(true)
        }
    }, [errors, accordionFieldNames, accordionExpanded])

    return (
        <Stack spacing={2}>
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Ekonominiai parametrai</Title>
            <FormInput
                name="CAPEX"
                title="Investicijos, CAPEX (tūkst. EUR/MW)"
                type="number"
                description="Įvedami teigiami tikslūs (po kablelio) skaičiai."
                placeholder="15000"
                isRequired
            />
            <Divider />
            <FormInput
                name="OPEX"
                title="Veiklos sąnaudos, OPEX (tūkst. EUR/MW per metus)"
                type="number"
                description="Įvedami teigiami tikslūs (po kablelio) skaičiai."
                placeholder="1000"
                isRequired
            />
            <Divider />
            <FormInput
                name="number_of_years"
                title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"
                type="number"
                description="Įvedami tik teigiami sveiki skaičiai."
                placeholder="10"
                isRequired
            />
            <Divider />

            <Accordion
                title="Išplėstiniai ekonominiai parametrai"
                expanded={accordionExpanded}
                onExpandedChange={setAccordionExpanded}
                titleDescription={
                    <InfoBanner
                        title=""
                        subtitle="Norėdami tiksliau įvertinti potencialius pinigus srautus, įveskite papildomus ekonominius parametrus, tokius kaip:"
                        description="Taikoma diskonto norma, įprastai vertinama 5 proc.; Siūlomos kainos už produktus balansavimo pajėgumų ar balansavimo energijos rinkose. Skaičiuoklėje įrašytos kainos lygios 0 reiškia, kad kainų ribojimai nebus taikomi ir visų jūsų pasiūlymai bus priimami maksimalia apimtimi."
                    />
                }
            >
                <FormInput
                    name="discount_rate"
                    title="Taikoma diskonto norma (%)"
                    type="number"
                    description="TODO"
                    placeholder="TODO"
                    tooltip="TODO"
                    isRequired
                />
                <Divider style={{ marginBottom: "24px" }} />

                <BspFields />
            </Accordion>
            <FormNavigation handleBackward={handleBackward} />
        </Stack>
    )
}

export const EconomicalParametersDsrForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitDsr()

    const handleBackward = () => {
        navigate({
            to: "/dsr/technical-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        })
    }

    return (
        <Form
            onSubmit={submit}
            // @ts-expect-error Zod schema inference
            validationSchema={economicalParametersDsrSchema}
            defaultValues={location.state?.economicParameters?.dsr || defaultEconomicalParametersDsrSchema}
        >
            <FormContent handleBackward={handleBackward} />
        </Form>
    )
}
