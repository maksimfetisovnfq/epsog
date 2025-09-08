import {Form, FormInput, FormSlider, ServiceTypeSelect} from "../../components/form";
import {type TechnicalP2gParametersSchema, technicalParametersP2gSchema} from "./technical-parameters-p2g-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {GlobalStyles} from "@mui/material";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useFormContext, useWatch} from "react-hook-form";

export const TechnicalParametersP2gFormContent = () => {
    const {control, setValue} = useFormContext()
    
    const reaction_time_d = useWatch({control, name: 'reaction_time_d'});
    const reaction_time_u = useWatch({control, name: 'reaction_time_u',});

    const handleReactionTimeChange = (field: string, value: number | number[]) => {
        const sliderValue = Array.isArray(value) ? value[0] : value;
        setValue(field, sliderValue, {shouldValidate: true});
    };
    
    return (
        <>
            <FormInput name="Q_max" title="Q_max" type="number"/>

            <ServiceTypeSelect />
            
            <FormSlider label={"reaction_time_d"} tooltipContent={<>
                <ul style={{paddingLeft: '20px', margin: '0 0 8px 0'}}>
                    <li>FCR paslaugai maksimali galia turi būti pasiekta neilgiau negu 30 s</li>
                    <li>aFRR – 5 min</li>
                    <li>mFRR – 12,5 min</li>
                </ul>
                <div>
                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu
                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                </div>
            </>} fieldName={"reaction_time_d"} fieldValue={reaction_time_d} onChange={handleReactionTimeChange}/>

            <FormSlider label={"reaction_time_u"} tooltipContent={<>
                <ul style={{paddingLeft: '20px', margin: '0 0 8px 0'}}>
                    <li>FCR paslaugai maksimali galia turi būti pasiekta neilgiau negu 30 s</li>
                    <li>aFRR – 5 min</li>
                    <li>mFRR – 12,5 min</li>
                </ul>
                <div>
                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu
                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                </div>
            </>} fieldName={"reaction_time_u"} fieldValue={reaction_time_u} onChange={handleReactionTimeChange}/>
            
            <FormInput name="eta_H2" title="eta_H2" type="number"/>
    
            <FormInput name="T0" title="T0" type="number"/>
            <FormInput name="p0" title="p0" type="number"/>
            <FormInput name="eta_C" title="eta_C" type="number"/>
        </>
    )
}


export const TechnicalParametersP2gForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (data: TechnicalP2gParametersSchema) => {
        navigate({
            to: "/economic-parameters-p2g",
            state: {
                generalData: location.state.generalData,
                technicalParameters: {p2g: data},
            },
        })
    }

    const handleBackward = () => {
        navigate({to: "/general-data"});
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersP2gSchema}
              defaultValues={location.state?.technicalParameters?.p2g || {}}>
            <GlobalStyles styles={{
                '.MuiPaper-root.MuiAccordion-root::before': {
                    backgroundColor: 'transparent',
                },
                '.MuiContainer-root': {
                    padding: '0px !important',
                },
                'body, *': {
                    fontWeight: 400,
                },
            }}/>

            <TechnicalParametersP2gFormContent/>

            <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>

            <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon/>}
                    onClick={handleBackward}
                >
                    Atgal
                </Button>
                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                    Toliau
                </Button>
            </div>
        </Form>
    )
}