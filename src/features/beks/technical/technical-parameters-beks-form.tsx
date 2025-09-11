import {Form, FormInput} from "../../../components/form";
import {type TechnicalBeksParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {useMemo} from "react";
import { ReactionTimeSlider } from "@/components/reaction-time-slider"
import { Accordion } from "@/ui/accordion/accordion.tsx"
import { FormNavigation } from "@/components/navigation/form-navigation.tsx"

const FormContent = () => {
    return (
        <>
            <div style={{fontSize: '32px', marginBottom: '48px', fontWeight: 400}}>
                Techniniai parametrai
            </div>

            <FormInput name="q_max" placeholder="1000 MW"
                       description="Tik teigiami skaičiai, max reikšmė 1000 MW"
                       title="Elektros energijos kaupiklio maksimali galia"/>

            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

            <FormInput name="q_total" placeholder="2 MWh"
                       description="Tik teigiami skaičiai, max reikšmė 1 000 000 (1 TWh)"
                       title="Elektros energijos kaupiklio talpa *"/>

            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

            <div style={{
                fontSize: '14px',
                fontWeight: 400,
                marginBottom: '12px',
                width: '400px',
            }}>
                
                <ReactionTimeSlider
                    field="reaction_time"
                    label="Kaip greitai įrenginys gali pasiekti maksimalią galią? *"
                />
            </div>

            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
            
            <Accordion title="Išplėstiniai techniniai parametrai">
                <FormInput name="RTE" placeholder="88 %"
                           description="Pilno ciklo naudingumo koeficientas"
                           title="Pilno ciklo naudingumo koeficientas"
                           tooltip="Šis koeficientas parodo kiek per vieną ciklą (iškrovimą ir įkrovimą) į tinklą yra sugrąžinima elektros energijos"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="SOC_min" placeholder="10 %" description="Skaičius nuo 0 iki 100"
                           title="Elektros energijos kaupiklio minimalus įkrovimo lygis"
                           tooltip="Mažiausia riba iki kurios galima iškrauti kaupiklį."/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="SOC_max" placeholder="95 %" description="Skaičius nuo 0 iki 100"
                           title="Elektros energijos kaupiklio maksimalus įkrovimo lygis"
                           tooltip="Didžiausia riba iki kurios galima įkrauti kaupiklį."/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="N_cycles_DA" placeholder="4 kartai/d."
                           description="Sveikas skaičius nuo 0 iki 96 imtinai"
                           title="Maksimalus energijos kaupiklio ciklų skaičius per dieną prekiaujant dieną prieš"
                           tooltip="Kiek per vieną parą leidžiama pilnai įkrauti/iškrauti kaupiklį."/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="N_cycles_ID" placeholder="16 kartai/d."
                           description="Sveikas skaičius nuo 0 iki 96 imtinai"
                           title="Maksimalus energijos kaupiklio ciklų skaičius prekiaujant dienos eigos"
                           tooltip="Dienos eigos rinka skirta išlaikyti kaupiklio talpą leistinose ribose teikiant balansavimo paslaugas."/>
            </Accordion>
        </>
    );
}

export const TechnicalParametersBeksForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const formDefaultValues = useMemo(() => {
        const persistedValues: Partial<TechnicalBeksParametersSchema> = location.state?.technicalParameters?.beks || {};
        const reactionTimeSliderValue = 30;

        return {...persistedValues, reaction_time: reactionTimeSliderValue};
    }, [location.state?.technicalParameters?.beks]);

    const handleSubmit = (data: TechnicalBeksParametersSchema) => {
        const reactionTime = data.reaction_time;
        const submitData = {...data, reaction_time: reactionTime};

        navigate({
            to: "/economic-parameters-beks",
            state: {
                generalData: location.state.generalData,
                technicalParameters: {beks: submitData},
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/general-data",
            state: {generalData: location.state.generalData},
        });
    }

    return (
        <div style={{fontFamily: 'Arial', width: '760px'}}>

            <Form
                onSubmit={handleSubmit}
                validationSchema={technicalParametersSchema}
                defaultValues={formDefaultValues} 
            >
                <FormContent/>
                <FormNavigation handleBackward={handleBackward} />
            </Form>
        </div>
    )
}