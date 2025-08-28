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

export const EconomicalParametersBeksForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {mutate} = useMutation({
        mutationKey: ['beks'],
        mutationFn: async ({parameters}: { parameters: string }) => {
            return new Promise(resolve => setTimeout(resolve, 1000));

            // const response = await fetch(
            //     '/beks',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({ parameters: strongParameters }),
            //     }
            // );
            // return response.json();
        },
    });

    const handleSubmit = (data: EconomicalBeksParametersSchema) => {
        mutate("ok")
        navigate({
            to: "/summary-of-results-beks",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: {beks: data},
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-beks",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
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

            <div style={{
                fontSize: '32px',
                marginBottom: '48px',
            }}>
                Ekonominiai parametrai
            </div>

            <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={location.state?.economicParameters?.beks || {}}>

                <FormInput name="CAPEX_P" defaultValue="Eur/MW" description="Tik teigiami skaičiai"
                           title="Investicijos (CAPEX) į galią"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="CAPEX_C" defaultValue="Eur/MWh" description="Tik teigiami skaičiai"
                           title="Investicijos (CAPEX) į talpą"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="OPEX_P" defaultValue="Eur/MW per metus" description="Tik teigiami skaičiai"
                           title="Fiksuotos veiklos sąnaudos (OPEX)"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="OPEX_C" defaultValue="Eur/MWh" description="Tik teigiami skaičiai"
                           title="Kintamos veiklos sąnaudos (OPEX)"/>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormInput name="number_of_years" defaultValue="10" description="Tik sveikas skaičius nuo 1 iki 50"
                           title="Kokiam laikotarpiui (metais) norite skaičiuoti projekto atsipirkimą?"/>

                <Divider style={{marginTop: '48px', marginBottom: '48px'}}/>

                <Accordion sx={{boxShadow: 'none', border: 'none', width: '768px'}}>
                    <AccordionSummary
                        aria-controls="panel2-content"
                        id="panel2-header"
                        sx={{
                            padding: 0,
                        }}
                    >

                        <Typography component="span" style={{display: 'flex', width: '744px', fontSize: '32px', justifyContent: 'space-between'}}>
                            <div>
                                Išplėstiniai ekonominiai parametrai
                            </div>
                            <div>
                                <AddIcon/>
                            </div>
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <FormInput name="discount_rate" defaultValue="5 %" description="Skaičius nuo 0 iki 100"
                                   title="Diskonto norma"/>

                        <Divider style={{marginTop: '32px', marginBottom: '32px'}}/>

                        <div style={{fontSize: '18px'}}>
                            Minimali siūloma kainą už balansavimo pajėgumus:
                        </div>

                        <FormInput name="P_FCR_CAP_BSP" defaultValue="0 Eur/MW" title="FCR"/>
                        <FormInput name="P_aFRRu_CAP_BSP" defaultValue="0 Eur/MW" title="aFRR aukštyn"/>
                        <FormInput name="P_aFRRd_CAP_BSP" defaultValue="0 Eur/MW" title="aFRR žemyn"/>
                        <FormInput name="P_mFRRu_CAP_BSP" defaultValue="0 Eur/MW" title="mFRR aukštyn"/>
                        <FormInput name="P_mFRRd_CAP_BSP" defaultValue="0 Eur/MW" title="mFRR žemyn"/>

                        <Divider style={{marginTop: '32px', marginBottom: '32px'}}/>

                        <div style={{fontSize: '18px'}}>
                            Minimali siūloma kainą už balansavimo energiją:
                        </div>

                        <FormInput name="P_aFRRu_BSP" defaultValue="Eur/MWh" title="aFRR aukštyn"/>
                        <FormInput name="P_aFRRd_BSP" defaultValue="Eur/MWh" title="aFRR žemyn"/>
                        <FormInput name="P_mFRRu_BSP" defaultValue="Eur/MWh" title="aFRR aukštyn"/>
                        <FormInput name="P_mFRRd_BSP" defaultValue="Eur/MWh" title="mFRR žemyn"/>

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