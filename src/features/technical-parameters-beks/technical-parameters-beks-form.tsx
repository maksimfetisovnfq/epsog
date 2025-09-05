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
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {GlobalStyles, styled} from '@mui/material';
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tooltip, {tooltipClasses, type TooltipProps} from "@mui/material/Tooltip";

export const TechnicalParametersBeksForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const defaultValues: Partial<TechnicalBeksParametersSchema> = location.state?.technicalParameters?.beks || {};

    const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'transparent',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
        },
    }));

    const reactionTimeReverseMap: Record<number, number> = {
        30: 0,
        300: 30,
        750: 60,
        1000: 90,
    };

    const [reaction_time, setReaction_time] = useState<number>(() => {
        const rt = (defaultValues as any)?.reaction_time;
        if (typeof rt === 'number') {
            if (reactionTimeReverseMap[rt] !== undefined) {
                return reactionTimeReverseMap[rt];
            }
            if ([0, 30, 60, 90].includes(rt)) {
                return rt;
            }
        }
        return 30;
    });

    const reactionTimeMap: Record<number, number> = {
        0: 30,
        30: 300,
        60: 750,
        90: 1000,
    };

    const handleReactionTimeChange = (_event: Event, value: number | number[]) => {
        const sliderValue = Array.isArray(value) ? value[0] : value;
        setReaction_time(sliderValue);
    };

    const handleSubmit = (data: TechnicalBeksParametersSchema) => {
        const mappedReactionTime = reactionTimeMap[reaction_time as 0 | 30 | 60 | 90] ?? reaction_time;
        const submitData = {...data, reaction_time: mappedReactionTime};
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
            state: {
                generalData: location.state.generalData,
            },
        });
    }

    const [expanded, setExpanded] = useState(false);

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

            <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema}
                  defaultValues={{...defaultValues, reaction_time}}>
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
                    <div style={{display: 'flex'}}>
                        <div style={{verticalAlign: 'baseline', marginRight: '4px'}}>
                            Kaip greitai įrenginys gali pasiekti maksimalią galią? *
                        </div>
                        <HtmlTooltip title={
                            <div style={{
                                fontWeight: 400,
                                width: '250px',
                                fontSize: '14px',
                                color: '#000000',
                                backgroundColor: 'white',
                                padding: '8px',
                                borderRadius: '4px',
                                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                                lineHeight: '1.4'
                            }}>
                                <ul style={{paddingLeft: '20px', margin: '0 0 8px 0'}}>
                                    <li>FCR paslaugai maksimali galia turi būti pasiekta neilgiau negu 30 s</li>
                                    <li>aFRR – 5 min</li>
                                    <li>mFRR – 12,5 min</li>
                                </ul>
                                <div>
                                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu
                                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                                </div>
                            </div>}>
                            <InfoOutlineIcon style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                        </HtmlTooltip>
                    </div>

                    <Slider
                        name="reaction_time"
                        value={reaction_time}
                        onChange={handleReactionTimeChange}
                        aria-label="Temperature"
                        step={30}
                        marks
                        max={90}
                    />

                    <div style={{
                        color: 'black',
                        fontSize: '12px',
                        fontWeight: 400,
                        marginBottom: '12px',
                        width: '430px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <div>&lt; 30 s</div>
                        <div>&lt; 5 min</div>
                        <div>&lt; 12.5 min</div>
                        <div>&gt; 12.5 min</div>
                    </div>
                </div>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
                
                <Accordion sx={{boxShadow: 'none', border: 'none', width: '768px'}} expanded={expanded}
                           onChange={(_, isExpanded) => setExpanded(isExpanded)}>
                    <AccordionSummary
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={expanded ? <HorizontalRuleIcon/> : <AddIcon/>}
                        sx={{
                            padding: 0,
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                fontSize: '32px',
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            Išplėstiniai techniniai parametrai
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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