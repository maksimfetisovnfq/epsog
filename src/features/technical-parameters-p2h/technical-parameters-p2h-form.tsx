import {Form, FormInput} from "../../components/form";
import {type TechnicalP2hParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {GlobalStyles} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormLabel from "@mui/material/FormLabel";
import {useFormContext, useWatch} from "react-hook-form";
import {FormSlider} from "../../components/form/FormSlider.tsx";
import {ServiceTypeSelect} from "../../components/form/ServiceTypeSelect.tsx";


const FormContent = () => {
    const {control, setValue} = useFormContext();
    
    const reaction_time_d = useWatch({control, name: 'reaction_time_d'});
    const reaction_time_u = useWatch({control, name: 'reaction_time_u',});

    const handleReactionTimeChange = (field: string, value: number | number[]) => {
        const sliderValue = Array.isArray(value) ? value[0] : value;
        setValue(field, sliderValue, {shouldValidate: true});
    };
    
    return (
        <>
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

            <ServiceTypeSelect />
            
            <FormInput name="Q_max_HP" title='Q_max_HP (MW)' placeholder="2"/>
            <FormInput name="Q_yearly" title='Metinis šilumos energijos poreikis (MWh)' placeholder="13000000.00"/>

            <FormLabel style={{color: "black", padding: 0, marginBottom: '12px', fontSize: '14px'}}>
                Pasirinkite galimą teikti reguliavimo paslaugą *
            </FormLabel>

           
            <Divider style={{marginTop: '48px', marginBottom: '48px'}}/>

            <FormInput name="H_HS" title='H_HS (m)' placeholder="12" type="number"/>

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

            <FormInput name="Q_yearly" title='Metinis šilumos energijos poreikis (MWh)' placeholder="13000000.00" type="number"/>
            
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

            <FormInput name="d_HS" title='d_HS' placeholder="10" type="number"/>
            <FormInput name="H_HS" title='H_HS' placeholder="20" type="number"/>
            <FormInput name="lambda_HS" title='lambda_HS' placeholder="0.032" type="number"/>
            <FormInput name="dx_HS" title='dx_HS' placeholder="0.3" type="number"/>
            
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

            <FormInput name="Q_max_BOILER" title='Q_max_BOILER' placeholder="4.5" type="number"/>
            <FormInput name="P_FUEL" title='Q_max_BOILER' placeholder="0.44" type="number"/>
            <FormInput name="q_FUEL" title='q_FUEL' placeholder="9550" type="number"/>
            <FormInput name="eta_BOILER" title='eta_BOILER' placeholder="98" type="number"/>
            
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

            <FormInput name="T_HP" title='T_HP' placeholder="-10" type="number"/>
            <FormInput name="T_max_HS" title='T_max_HS' placeholder="-10" type="number"/>
        </>
    );
}

export const TechnicalParametersP2hForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (data: TechnicalP2hParametersSchema) => {
        navigate({
            to: "/economic-parameters-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: {p2h: data},
            },
        })
    }

    const handleBackward = () => navigate({to: "/general-data"});

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema}
              defaultValues={location.state?.technicalParameters?.p2h || {}}>
            <FormContent/>

            <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>
            <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outlined" startIcon={<ArrowBackIcon/>} onClick={handleBackward}>
                    Atgal
                </Button>
                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                    Toliau
                </Button>
            </div>
        </Form>
    )
}