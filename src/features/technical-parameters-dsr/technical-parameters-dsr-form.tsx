import {Form, FormInput} from "../../components/form";
import {type TechnicalDsrParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";

export const TechnicalParametersDsrForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = (data: TechnicalDsrParametersSchema) => {
        
        navigate({
            to: "/economic-parameters-dsr",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { dsr: data },
            },
        })
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={{
            network: "",
        }}>
            <button type="submit">forward</button> TECHNICAL DATA FORM
            <FormInput name="network"/>
            <FormInput name="maximumPower" defaultValue="1000 MW" description="Tik teigiami skaičiai, max reikšmė 1000 MW" title="Elektros energijos kaupiklio maksimali galia"/>
            <FormInput name="accumulatorCapacity" defaultValue="2 MWh" description="Tik teigiami skaičiai, max reikšmė 1 000 000 (1 TWh)" title="Elektros energijos kaupiklio talpa *"/>
            <FormInput name="coefficient" defaultValue="88 %" description="Pilno ciklo naudingumo koeficientas" title="Pilno ciklo naudingumo koeficientas"/>
            <FormInput name="minCharge" defaultValue="10 %" description="Skaičius nuo 0 iki 100" title="Elektros energijos kaupiklio minimalus įkrovimo lygis"/>
            <FormInput name="maxCharge" defaultValue="95 %" description="Skaičius nuo 0 iki 100" title="Elektros energijos kaupiklio maksimalus įkrovimo lygis"/>
            <FormInput name="maxStorageCyclesDayAhead" defaultValue="4 kartai/d." description="Sveikas skaičius nuo 0 iki 96 imtinai" title="Maksimalus energijos kaupiklio ciklų skaičius per dieną prekiaujant dieną prieš"/>
            <FormInput name="maxStorageCyclesIntraday" defaultValue="16 kartai/d." description="Sveikas skaičius nuo 0 iki 96 imtinai" title="Maksimalus energijos kaupiklio ciklų skaičius prekiaujant dienos eigos"/>
        </Form>
    )
}