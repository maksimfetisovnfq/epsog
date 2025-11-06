import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { defaultEconomicalParametersP2gSchema, economicalParametersP2gSchema } from "./economical-parameters-p2g-schema"
import { useSubmitP2g } from "./use-submit-p2g"
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
    const accordionFieldNames = useMemo(() => [
        "discount_rate",
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
                name="CAPEX"
                title="Projekto investicijos: CAPEX (tūkst. eur per mw)"
                type="number"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="OPEX"
                title="Projekto investicijos: OPEX (tūkst mw per metus)"
                type="number"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="P_H2"
                title="Price of Hydrogen"
                type="number"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="number_of_years"
                title="Projekto metai"
                type="number"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

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
                <FormInput
                    name="discount_rate"
                    title="discount_rate"
                    type="number"
                    description="TODO"
                    tooltip="TODO"
                    isRequired
                />

                <BspFields />
            </Accordion>
            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}

export const EconomicalParametersP2gForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitP2g()

    const handleBackward = () => {
        navigate({
            to: "/p2g/technical-parameters",
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
            validationSchema={economicalParametersP2gSchema}
            defaultValues={location.state?.economicParameters?.p2g || defaultEconomicalParametersP2gSchema}
        >
            <FormContent handleBackward={handleBackward} />
        </Form>
    )
}
