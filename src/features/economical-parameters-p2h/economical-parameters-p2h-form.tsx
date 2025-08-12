import {Form, FormInput} from "../../components/form";
import {type EconomicalP2hParametersSchema, economicalParametersSchema, } from "./economical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";

export const EconomicalParametersP2hForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = (data: EconomicalP2hParametersSchema) => {
        navigate({
            to: "/summary-of-results",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2h: data }, //?
            },
        })
    }
    
    return (
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>
            <button type="submit">Forward</button> ECO DATA FORM
            
            <FormInput name="investmentsPower" defaultValue="Eur/MW" description="Tik teigiami skaičiai" title="Investicijos (CAPEX) į galią"/>
            
            <FormInput name="investmentsCapacity" defaultValue="Eur/MWh" description="Tik teigiami skaičiai" title="Investicijos (CAPEX) į talpą"/>
           
            <FormInput name="fixCosts" defaultValue="Eur/MW per metus" description="Tik teigiami skaičiai" title="Fiksuotos veiklos sąnaudos (OPEX)"/>
           
            <FormInput name="variableCosts" defaultValue="Eur/MWh" description="Tik teigiami skaičiai" title="Kintamos veiklos sąnaudos (OPEX)"/>
           
            <FormInput name="calcPeriod" defaultValue="10" description="Tik sveikas skaičius nuo 1 iki 50" title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"/>
           
            <FormInput name="discount" defaultValue="5 %" description="Skaičius nuo 0 iki 100" title="Diskonto norma"/> 
           
            <FormInput name="FCR" defaultValue="0 Eur/MW" title="FCR"/>
           
            <FormInput name="aFRR-up" defaultValue="0 Eur/MW" title="aFRR aukštyn"/>
           
            <FormInput name="aFRR-down" defaultValue="0 Eur/MW" title="aFRR žemyn"/>
           
            <FormInput name="mFRR-up" defaultValue="0 Eur/MW" title="mFRR aukštyn"/>
           
            <FormInput name="mFRR-down" defaultValue="0 Eur/MW" title="mFRR žemyn"/>
           
            <FormInput name="aFRR-up-" defaultValue="Eur/MWh" title="aFRR aukštyn"/>
           
            <FormInput name="aFRR-down-" defaultValue="Eur/MWh" title="aFRR žemyn"/>

            <FormInput name="aFRR-up--" defaultValue="Eur/MWh" title="aFRR aukštyn"/>

            <FormInput name="mFRR-down--" defaultValue="Eur/MWh" title="mFRR žemyn"/>

        </Form>
    )
}