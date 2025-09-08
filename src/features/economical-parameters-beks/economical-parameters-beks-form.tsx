import {Form, FormInput} from "../../components/form";
import {type EconomicalBeksParametersSchema, economicalParametersSchema,} from "./economical-parameters-schema";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {GlobalStyles, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useMutation} from "@tanstack/react-query";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useFormContext, useWatch } from "react-hook-form";

type EconomicalFormValues = EconomicalBeksParametersSchema & {
    isAccordionExpanded: boolean;
};

const FormContent = () => {
    const { control, setValue } = useFormContext<EconomicalFormValues>(); 

    const expanded = useWatch({
        control,
        name: 'isAccordionExpanded',
    });

    return (
        <div style={{fontFamily: 'Arial', width: '760px'}}>
            <div style={{fontSize: '32px', marginBottom: '48px'}}>
                Ekonominiai parametrai
            </div>
            <FormInput name="CAPEX_P" placeholder="Eur/MW" description="Tik teigiami skaičiai" title="Investicijos (CAPEX) į galią"/>
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
            <FormInput name="CAPEX_C" placeholder="Eur/MWh" description="Tik teigiami skaičiai" title="Investicijos (CAPEX) į talpą"/>
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
            <FormInput name="OPEX_P" placeholder="Eur/MW per metus" description="Tik teigiami skaičiai" title="Fiksuotos veiklos sąnaudos (OPEX)"/>
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
            <FormInput name="OPEX_C" placeholder="Eur/MWh" description="Tik teigiami skaičiai" title="Kintamos veiklos sąnaudos (OPEX)"/>
            <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
            <FormInput name="number_of_years" placeholder="10" description="Tik sveikas skaičius nuo 1 iki 50" title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"/>
            <Divider style={{marginTop: '48px', marginBottom: '48px'}}/>
            <Accordion
                sx={{boxShadow: 'none', border: 'none', width: '768px'}}
                expanded={expanded}
                onChange={(_, isExpanded) => setValue('isAccordionExpanded', isExpanded)}
            >
                <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                    expandIcon={expanded ? <HorizontalRuleIcon/> : <AddIcon/>}
                    sx={{padding: 0}}
                >
                    <Typography component="span" style={{display: 'flex', width: '744px', fontSize: '32px', justifyContent: 'space-between'}}>
                        <div>Išplėstiniai ekonominiai parametrai</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormInput name="discount_rate" placeholder="5 %" description="Skaičius nuo 0 iki 100" title="Diskonto norma"/>
                    <Divider style={{marginTop: '32px', marginBottom: '32px'}}/>
                    <div style={{fontSize: '18px'}}>Minimali siūloma kainą už balansavimo pajėgumus:</div>
                    <FormInput name="P_FCR_CAP_BSP" placeholder="0 Eur/MW" title="FCR"/>
                    <FormInput name="P_aFRRu_CAP_BSP" placeholder="0 Eur/MW" title="aFRR aukštyn"/>
                    <FormInput name="P_aFRRd_CAP_BSP" placeholder="0 Eur/MW" title="aFRR žemyn"/>
                    <FormInput name="P_mFRRu_CAP_BSP" placeholder="0 Eur/MW" title="mFRR aukštyn"/>
                    <FormInput name="P_mFRRd_CAP_BSP" placeholder="0 Eur/MW" title="mFRR žemyn"/>
                    <Divider style={{marginTop: '32px', marginBottom: '32px'}}/>
                    <div style={{fontSize: '18px'}}>Minimali siūloma kainą už balansavimo energiją:</div>
                    <FormInput name="P_aFRRu_BSP" placeholder="Eur/MWh" title="aFRR aukštyn"/>
                    <FormInput name="P_aFRRd_BSP" placeholder="Eur/MWh" title="aFRR žemyn"/>
                    <FormInput name="P_mFRRu_BSP" placeholder="Eur/MWh" title="aFRR aukštyn"/>
                    <FormInput name="P_mFRRd_BSP" placeholder="Eur/MWh" title="mFRR žemyn"/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export const EconomicalParametersBeksForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {mutate} = useMutation({
        mutationKey: ['beks'],
        mutationFn: async ({parameters}: { parameters: string }) => {
            const formData = new FormData();
            formData.append('parameters', parameters);
            const response = await fetch('https://p2x-container-app.wonderfulpebble-6684d847.westeurope.azurecontainerapps.io/beks', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        },
    });

    const handleSubmit = (data: EconomicalFormValues) => {
        const {...submissionData } = data;

        const generalParams = location.state?.generalData;
        const technicalParams = location.state?.technicalParameters?.beks;

        // Log all relevant state and request data for debugging
        console.log('Form submission state:', {
            generalData: location.state?.generalData,
            technicalParameters: location.state?.technicalParameters,
            economicParameters: {beks: submissionData}
        });

        const parameters = {
            RTE: technicalParams?.RTE ?? 0,
            Q_max: technicalParams?.q_max ?? 0,
            Q_total: technicalParams?.q_total ?? 0,
            SOC_min: technicalParams?.SOC_min ?? 0,
            SOC_max: technicalParams?.SOC_max ?? 0,
            N_cycles_DA: technicalParams?.N_cycles_DA ?? 0,
            N_cycles_ID: technicalParams?.N_cycles_ID ?? 0,
            reaction_time: technicalParams?.reaction_time ?? 0,
            CAPEX_P: submissionData.CAPEX_P,
            CAPEX_C: submissionData.CAPEX_C,
            OPEX_P: submissionData.OPEX_P,
            OPEX_C: submissionData.OPEX_C,
            discount_rate: submissionData.discount_rate,
            number_of_years: submissionData.number_of_years,
            provider: generalParams?.provider ?? "ESO",
            P_FCR_CAP_BSP: submissionData.P_FCR_CAP_BSP,
            P_aFRRu_CAP_BSP: submissionData.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: submissionData.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: submissionData.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: submissionData.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: submissionData.P_aFRRu_BSP,
            P_aFRRd_BSP: submissionData.P_aFRRd_BSP,
            P_mFRRu_BSP: submissionData.P_mFRRu_BSP,
            P_mFRRd_BSP: submissionData.P_mFRRd_BSP,
            Sector: generalParams?.sector ?? "Pramonė",
        };

        console.log('API request payload:', parameters);

        mutate({ parameters: JSON.stringify(parameters) }, {
            onSuccess: (apiResponseData) => {
                console.log('API response:', apiResponseData);
                navigate({
                    to: "/summary-of-results-beks",
                    state: {
                        generalData: location.state.generalData,
                        technicalParameters: location.state.technicalParameters,
                        economicParameters: {beks: submissionData},
                        apiResponseData: apiResponseData,
                    } as any,
                });
            },
            onError: (error) => console.error("API call failed:", error)
        });
    }

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-beks",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        });
    };

    const defaultValues = {
        ...(location.state?.economicParameters?.beks || {}),
        isAccordionExpanded: false,
    };

    return (
        <div style={{fontFamily: 'Arial', width: '768px'}}>
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
            <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={defaultValues}>
                <FormContent />
                <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>
                <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>} onClick={handleBackward}>Atgal</Button>
                    <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>Toliau</Button>
                </div>
            </Form>
        </div>
    )
}