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
            <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Ekonominiai parametrai</Title>
            <FormInput name="CAPEX" title="CAPEX" type="number" description="TODO" tooltip="TODO" isRequired />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput name="OPEX" title="OPEX" type="number" description="TODO" tooltip="TODO" isRequired />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput name="P_H2" title="P_H2" type="number" description="TODO" tooltip="TODO" isRequired />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                name="number_of_years"
                title="number_of_years"
                type="number"
                description="TODO"
                tooltip="TODO"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <Accordion
                title="Išplėstiniai ekonominiai parametrai"
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
        </Form>
    )
}
