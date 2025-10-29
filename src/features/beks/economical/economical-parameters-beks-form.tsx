import { useLocation, useNavigate } from "@tanstack/react-router"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { BspFields } from "@/components/bsp"
import { Form, FormInput } from "@/components/form"
import { economicalParametersDefaultValues, economicalParametersSchema } from "./economical-parameters-schema"
import { useSubmitBeks } from "./use-submit-beks"
import Divider from "@mui/material/Divider"
import { Accordion } from "@/ui/accordion"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"

const FormContent = () => {
    return (
        <>
            <div style={{ fontSize: "32px", marginBottom: "48px" }}>Ekonominiai parametrai</div>
            <FormInput
                type="number"
                name="CAPEX_P"
                placeholder="Eur/MW"
                description="Įvedami tik teigiami skaičiai"
                title="Investicijos į kaupiklio galią, CAPEX (tūkst. EUR/MW)"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                type="number"
                name="CAPEX_C"
                placeholder="Eur/MWh"
                description="Įvedami tik teigiami skaičiai"
                title="Investicijos į kaupiklio talpą, CAPEX (tūkst. EUR/MWh)"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                type="number"
                name="OPEX_P"
                placeholder="Eur/MW per metus"
                description="Įvedami tik teigiami skaičiai"
                title="Fiksuotos veiklos sąnaudos, OPEX (tūkst. EUR/MW per metus)"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                type="number"
                name="OPEX_C"
                placeholder="Eur/MWh"
                description="Įvedami tik teigiami skaičiai"
                title="Kintamos veiklos sąnaudos, OPEX (tūkst. EUR/MWh)"
                isRequired
            />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />
            <FormInput
                type="number"
                name="number_of_years"
                placeholder="10"
                description="Skaičius nuo 1 iki 50"
                title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"
                isRequired
            />
            <Divider style={{ marginTop: "48px", marginBottom: "48px" }} />

            <Accordion
                title="Išplėstiniai ekonominiai parametrai"
                titleDescription={
                    <InfoBanner
                        title=""
                        subtitle="Norėdami tiksliau įvertinti potencialius pinigus srautus, įveskite papildomus ekonominius parametrus, tokius kaip"
                        description="Taikoma diskonto norma, įprastai vertinama 5 proc.; Siūlomos kainos už produktus balansavimo pajėgumų ar balansavimo energijos rinkose. Įprastai, skaičiuoklė vertina, kad jūsų balansavimo pasiūlymai yra lygūs 0."
                    />
                }
            >
                <FormInput
                    type="number"
                    name="discount_rate"
                    placeholder="5 %"
                    description="Skaičius nuo 0 iki 100"
                    title="Taikoma diskonto norma (%):"
                    isRequired
                />
                <Divider style={{ marginTop: "32px", marginBottom: "32px" }} />
                <BspFields />
            </Accordion>
        </>
    )
}

export const EconomicalParametersBeksForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { submit } = useSubmitBeks()

    const handleBackward = () => {
        navigate({
            to: "/beks/technical-parameters",
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
            validationSchema={economicalParametersSchema}
            defaultValues={location.state?.economicParameters?.beks ?? economicalParametersDefaultValues}
        >
            <FormContent />
            <FormNavigation handleBackward={handleBackward} />
        </Form>
    )
}
