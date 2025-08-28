import {Form, FormInput} from "../../components/form";
import {type TechnicalBeksParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import {CalculatorType} from "../../types.ts";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import {GlobalStyles} from '@mui/material';
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tooltip from "@mui/material/Tooltip";

function valuetext(value: number) {
    return `${value}°C`;
}

//const handleRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {

//};

const radioStyles = {
    '&.Mui-checked': {
        color: '#00EB8C',
    },
    '&:not(.Mui-checked)': {
        color: '#00EB8C',
    },
};

export const TechnicalParametersBeksForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const defaultValues = location.state?.technicalParameters?.beks || {};

    const handleSubmit = (data: TechnicalBeksParametersSchema) => {
        navigate({
            to: "/economic-parameters-beks",
            state: {
                generalData: location.state.generalData,
                technicalParameters: {beks: data},
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/general-data",
            state: {
                generalData: location.state.generalData,
            },
        });
    }

    return (
        <div style={{fontFamily: 'Arial', width: '760px'}}>
            <GlobalStyles styles={{
                'body, *': {
                    fontWeight: 400,
                },
                '.MuiContainer-root': {
                    padding: '0px !important',
                },
                '.MuiPaper-root.MuiAccordion-root::before': {
                    backgroundColor: 'transparent',
                },
                '.MuiAccordionDetails-root': {
                    padding: '0 !important',
                },

            }}/>

            <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={defaultValues}>

                <FormInput name="q_max" defaultValue="1000 MW"
                           description="Tik teigiami skaičiai, max reikšmė 1000 MW"
                           title="Elektros energijos kaupiklio maksimali galia"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="q_total" defaultValue="2 MWh"
                           description="Tik teigiami skaičiai, max reikšmė 1 000 000 (1 TWh)"
                           title="Elektros energijos kaupiklio talpa *"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <div style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    marginBottom: '12px',
                    width: '400px',
                }}>
                    <div style={{display: 'flex'}}>
                        <div style={{verticalAlign: 'baseline', marginRight: '4px'}}>
                            Kaip greitai įrenginys gali pasiekti maksimalią galią? *
                        </div>
                        <Tooltip title="Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią 
                        galią negu paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.">
                            <InfoOutlineIcon/>
                        </Tooltip>
                    </div>

                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        color="primary"
                    />

                    <div style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        marginBottom: '12px',
                        width: '400px',
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'space-between',
                    }}>
                        <div>&lt; 30 s</div>
                        <div>&lt; 5 min</div>
                        <div>&lt; 12.5 min</div>
                        <div>&lt; 12.5 min</div>
                    </div>
                </div>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormLabel id="demo-radio-buttons-group-label"
                           style={{color: "black", padding: 0, marginBottom: '12px', fontSize: '14px'}}>
                    Pasirinkite galimą teikti reguliavimo paslaugą *
                </FormLabel>

                <RadioGroup
                    defaultValue={CalculatorType.BEKS}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    //onChange={handleRadioGroupChange}
                    style={{columnGap: '32px'}}
                >

                    <div>
                        <FormControlLabel
                            value="first"
                            control={<Radio sx={radioStyles}/>}
                            label="Aukštyn"
                            sx={{verticalAlign: 'baseline', marginRight: '4px'}}
                        />

                        <Tooltip title="Gamybos didinimas arba vartojimo mažinimas">
                            <InfoOutlineIcon/>
                        </Tooltip>
                    </div>

                    <div>
                        <FormControlLabel
                            value="second"
                            control={<Radio sx={radioStyles}/>}
                            label="Žemyn"
                            sx={{verticalAlign: 'baseline', marginRight: '4px'}}
                        />

                        <Tooltip title="Gamybos mažinimas arba vartojimo didinimas">
                            <InfoOutlineIcon/>
                        </Tooltip>
                    </div>

                    <FormControlLabel value="third" control={<Radio sx={radioStyles}/>} label="Į abi psues"/>
                </RadioGroup>

                <Divider style={{marginTop: '48px', marginBottom: '48px'}}/>

                <Accordion sx={{boxShadow: 'none', border: 'none', width: '768px'}}>
                    <AccordionSummary
                        aria-controls="panel2-content"
                        id="panel2-header"
                        sx={{
                            padding: 0,
                        }}
                    >
                        <div>
                            <Typography component="span" style={{fontSize: '32px', display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{marginBottom: '24px'}}>
                                    Išplėstiniai techniniai parametrai
                                </div>
                                <div>
                                    <AddIcon/>
                                </div>
                            </Typography>

                            <div style={{
                                backgroundColor: '#F5F7F8',
                                display: 'flex',
                                height: '122px',
                                color: '#3F576B'
                            }}>

                                <div style={{margin: '16px 16px 0 16px',}}>
                                    <InfoOutlineIcon/>
                                </div>

                                <div style={{marginTop: '20px', fontSize: '14px'}}>
                                    <div style={{marginBottom: '12px'}}>
                                        Patikslinkite savo įrenginio technines charakteristikas, kad skaičiavimai būtų
                                        kuo tikslesni.
                                    </div>

                                    <div style={{width: '736px'}}>
                                        Atkreipiame dėmesį, kad šios informacijos pateikimui, geriausia pasitelkti
                                        įrenginio technines specifikacijas. Jei kažkurių verčių nežinote,
                                        nesijaudinkite,
                                        parinkome numatytasias reikšmes, kurios atspindi rinkoje esančių įrenginių
                                        galimybes.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <FormInput name="RTE" defaultValue="88 %"
                                   description="Pilno ciklo naudingumo koeficientas"
                                   title="Pilno ciklo naudingumo koeficientas"
                                   tooltip="Šis koeficientas parodo kiek per vieną ciklą (iškrovimą ir įkrovimą) į tinklą yra sugrąžinima elektros energijos"/>

                        <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                        <FormInput name="SOC_min" defaultValue="10 %" description="Skaičius nuo 0 iki 100"
                                   title="Elektros energijos kaupiklio minimalus įkrovimo lygis"
                                   tooltip="Mažiausia riba iki kurios galima iškrauti kaupiklį."/>

                        <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                        <FormInput name="SOC_max" defaultValue="95 %" description="Skaičius nuo 0 iki 100"
                                   title="Elektros energijos kaupiklio maksimalus įkrovimo lygis"
                                   tooltip="Didžiausia riba iki kurios galima įkrauti kaupiklį."/>

                        <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                        <FormInput name="N_cycles_DA" defaultValue="4 kartai/d."
                                   description="Sveikas skaičius nuo 0 iki 96 imtinai"
                                   title="Maksimalus energijos kaupiklio ciklų skaičius per dieną prekiaujant dieną prieš"
                                   tooltip="Kiek per vieną parą leidžiama pilnai įkrauti/iškrauti kaupiklį."/>

                        <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                        <FormInput name="N_cycles_ID" defaultValue="16 kartai/d."
                                   description="Sveikas skaičius nuo 0 iki 96 imtinai"
                                   title="Maksimalus energijos kaupiklio ciklų skaičius prekiaujant dienos eigos"
                                   tooltip="Dienos eigos rinka skirta išlaikyti kaupiklio talpą leistinose ribose teikiant balansavimo paslaugas."/>
                        
                    </AccordionDetails>
                </Accordion>

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
        </div>
    )
}