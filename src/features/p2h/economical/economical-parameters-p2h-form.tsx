import { Form, FormInput } from "@/components/form"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { useSubmitP2h } from "./use-submit-p2h"
import { defaultEconomicalP2hParameters, economicalParametersP2hSchema } from "./economical-parameters-p2h-schema"
import { BspFields } from "@/components/bsp"
import { Title } from "@/ui/title"
import { Accordion } from "@/ui/accordion"
import Divider from "@mui/material/Divider"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { useFormState } from "react-hook-form"
import { useEffect, useMemo, useState } from "react"

const FormContent = ({ handleBackward }: { handleBackward: () => void }) => {
    const { errors } = useFormState()
    const [accordionExpanded, setAccordionExpanded] = useState(false)

    // List of field names inside the accordion (BspFields)
    const accordionFieldNames = useMemo(() => [
        "P_FCR_CAP_BSP",
        "P_aFRRu_CAP_BSP",
        "P_aFRRd_CAP_BSP",
        "P_mFRRu_CAP_BSP",
        "P_mFRRd_CAP_BSP",
        "P_aFRRu_BSP",
        "P_aFRRd_BSP",
        "P_mFRRu_BSP",
        "P_mFRRd_BSP"
    ], [])

    // Check if any accordion fields have errors
    useEffect(() => {
        const hasAccordionErrors = accordionFieldNames.some(fieldName => errors[fieldName])
        if (hasAccordionErrors && !accordionExpanded) {
            setAccordionExpanded(true)
        }
    }, [errors, accordionFieldNames, accordionExpanded])

    return (
        <>
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Ekonominiai parametrai</Title>

            <FormInput
                name="CAPEX_HP"
                title="Investicijos į šilumos siurblį, CAPEX (tūkst. EUR/MW)"
                type="number"
                isRequired
                description="TODO"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput name="OPEX_HP" title="OPEX_HP (tūkst. EUR/MW/m)" description="TODO" />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="CAPEX_HS"
                title="Investicijos į talpyklą CAPEX (tūkst. EUR/m³)"
                type="number"
                isRequired
                description="TODO"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="OPEX_HS"
                title="Šilumos siurblio aptarnavimo ir priežiūros kaštai, OPEX (tūkst. Eur/MW per metus)"
                type="number"
                isRequired
                description="TODO"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="discount_rate"
                title="Taikoma diskonto norma (%)"
                type="number"
                isRequired
                description="TODO"
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormInput
                name="number_of_years"
                title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"
                type="number"
                isRequired
                description="TODO"
            />

            
            <Accordion
                title="Išplėstiniai ekonominiai parametrai"
                expanded={accordionExpanded}
                onExpandedChange={setAccordionExpanded}
                titleDescription={
                    <InfoBanner
                        title=""
                        subtitle="TODO"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                }
            >
                <BspFields />
            </Accordion>

            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}

export const EconomicalParametersP2hForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { submit } = useSubmitP2h()

    const handleBackward = () => {
        navigate({
            to: "/p2h/technical-parameters",
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
            validationSchema={economicalParametersP2hSchema}
            defaultValues={location.state?.economicParameters?.p2h ?? defaultEconomicalP2hParameters}
        >
            <FormContent handleBackward={handleBackward} />
        </Form>
    )
}
