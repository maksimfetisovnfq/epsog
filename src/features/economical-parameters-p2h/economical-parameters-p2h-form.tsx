import {Form, FormInput} from "../../components/form";
import {type EconomicalP2hParametersSchema, economicalParametersSchema, } from "./economical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {GlobalStyles} from "@mui/material";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useMutation} from "@tanstack/react-query";

export const EconomicalParametersP2hForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {mutate} = useMutation({
        mutationKey: ['p2h'],
        mutationFn: async ({parameters}: { parameters: string }) => {
            const formData = new FormData();
            formData.append('parameters', parameters);

            const response = await fetch('https://p2x-container-app.wonderfulpebble-6684d847.westeurope.azurecontainerapps.io/p2h', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            console.log('P2H API response:', json);
            return json;
        },
        onSuccess: (apiResponseData) => {
            navigate({
                to: "/summary-of-results-p2h",
                state: {
                    generalData: location.state.generalData,
                    technicalParameters: location.state.technicalParameters,
                    economicParameters: location.state.economicParameters,
                    apiResponseData: apiResponseData,
                },
            });
        }
    });
    
    const handleSubmit = (data: EconomicalP2hParametersSchema) => {
        console.log('location.state:', location.state);

        const generalParams = location.state?.generalData;
        const technicalParams = location.state?.technicalParameters?.p2h;

        const parameters = {
            // RTE: technicalParams?.RTE ?? 0,
            // Q_max: technicalParams?.q_max ?? 0,
            // Q_total: technicalParams?.q_total ?? 0,
            // SOC_min: technicalParams?.SOC_min ?? 0,
            // SOC_max: technicalParams?.SOC_max ?? 0,
            // N_cycles_DA: technicalParams?.N_cycles_DA ?? 0,
            // N_cycles_ID: technicalParams?.N_cycles_ID ?? 0,
            // reaction_time: technicalParams?.reaction_time ?? 0,
            //
            // // Economic parameters from form
            // CAPEX_P: data.CAPEX_P,
            // CAPEX_C: data.CAPEX_C,
            // OPEX_P: data.OPEX_P,
            // OPEX_C: data.OPEX_C,
            // discount_rate: data.discount_rate,
            // number_of_years: data.number_of_years,
            //
            // // Provider from general data (default from curl example)
            // provider: generalParams?.provider ?? "ESO",
            //
            // // BSP parameters
            // P_FCR_CAP_BSP: data.P_FCR_CAP_BSP,
            // P_aFRRu_CAP_BSP: data.P_aFRRu_CAP_BSP,
            // P_aFRRd_CAP_BSP: data.P_aFRRd_CAP_BSP,
            // P_mFRRu_CAP_BSP: data.P_mFRRu_CAP_BSP,
            // P_mFRRd_CAP_BSP: data.P_mFRRd_CAP_BSP,
            // P_aFRRu_BSP: data.P_aFRRu_BSP,
            // P_aFRRd_BSP: data.P_aFRRd_BSP,
            // P_mFRRu_BSP: data.P_mFRRu_BSP,
            // P_mFRRd_BSP: data.P_mFRRd_BSP,
            // Sector: generalParams?.sector ?? "Pramonė",
        };

        // Store the economic parameters in location state before mutation
        location.state.economicParameters = {p2h: data};

        // {
        //     "Q_yearly": 50000.0,
        //     "Q_max_HP": 5.0,
        //     "reaction_time_d": 30,
        //     "reaction_time_u": 30,
        //     "T_HP": -5.0,
        //     "Q_max_BOILER": 10.0,
        //     "P_FUEL": 0.5,
        //     "q_FUEL": 10000.0,
        //     "eta_BOILER": 85.0,
        //     "d_HS": 10.0,
        //     "H_HS": 15.0,
        //     "T_max_HS": 95.0,
        //     "lambda_HS": 0.04,
        //     "dx_HS": 0.3,
        //     "CAPEX_HP": 500.0,
        //     "CAPEX_HS": 100.0,
        //     "OPEX_HP": 10.0,
        //     "OPEX_HS": 2.0,
        //     "discount_rate": 5.0,
        //     "number_of_years": 20,
        //     "provider": "Litgrid",
        //     "P_FCR_CAP_BSP": 0,
        //     "P_aFRRu_CAP_BSP": 0,
        //     "P_aFRRd_CAP_BSP": 0,
        //     "P_mFRRu_CAP_BSP": 0,
        //     "P_mFRRd_CAP_BSP": 0,
        //     "P_aFRRu_BSP": 0,
        //     "P_aFRRd_BSP": 0,
        //     "P_mFRRu_BSP": 0,
        //     "P_mFRRd_BSP": 0,
        //     "Sector": "Centralizuota šiluma",
        //     "County": "vilnius",
        //     "produktai": {
        //     "FCR": true,
        //         "aFRRu": true,
        //         "aFRRd": true,
        //         "mFRRu": true,
        //         "mFRRd": true
        // }
        // }

        mutate({
            parameters: JSON.stringify(parameters)
        });
        
        navigate({
            to: "/summary-of-results-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2h: data },
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        });
    }
    
    return (
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={location.state?.economicParameters?.p2h || {}}>
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

            <div style={{
                fontSize: '32px',
                marginTop: '48px',
            }}>
                Minimali siūloma kaina už balansavimo pajėgumus:
            </div>

            <FormInput name="FCR" title='FCR' defaultValue="0"/>
            <FormInput name="aFRRu1" title='aFRRu' defaultValue="0"/>
            <FormInput name="aFRRd1" title='aFRRd' defaultValue="0"/>
            <FormInput name="mFRRu1" title='mFRRu' defaultValue="0"/>
            <FormInput name="mFRRd1" title='mFRRd' defaultValue="0"/>

            <div style={{
                fontSize: '32px',
                marginTop: '48px',
            }}>
                Minimali siūloma kaina už balansavimo energiją:
            </div>

            <FormInput name="aFRRu2" title='aFRRu' defaultValue="0"/>
            <FormInput name="aFRRd2" title='aFRRd' defaultValue="0"/>
            <FormInput name="mFRRu2" title='mFRRu' defaultValue="0"/>
            <FormInput name="mFRRd2" title='mFRRd' defaultValue="0"/>

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