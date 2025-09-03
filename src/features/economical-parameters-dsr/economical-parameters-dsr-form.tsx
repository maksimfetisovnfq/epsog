import {Form, FormInput} from "../../components/form";
import {type EconomicalDsrParametersSchema, economicalParametersSchema,} from "./economical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {GlobalStyles} from "@mui/material";
import {useMutation} from "@tanstack/react-query";

export const EconomicalParametersDsrForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {mutate} = useMutation({
        mutationKey: ['dsr'],
        mutationFn: async ({parameters}: { parameters: string }) => {
            const formData = new FormData();
            formData.append('parameters', parameters);

            const response = await fetch('https://p2x-container-app.wonderfulpebble-6684d847.westeurope.azurecontainerapps.io/dsr', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            console.log('DSR API response:', json);
            return json;
        },
        onSuccess: (apiResponseData) => {
            navigate({
                to: "/summary-of-results-dsr",
                state: {
                    generalData: location.state.generalData,
                    technicalParameters: location.state.technicalParameters,
                    economicParameters: location.state.economicParameters,
                    apiResponseData: apiResponseData,
                },
            });
        }
    });

    const handleSubmit = (data: EconomicalDsrParametersSchema) => {
        console.log('location.state:', location.state);

        const generalParams = location.state?.generalData;
        const technicalParams = location.state?.technicalParameters?.dsr;

        const parameters = {
        //     RTE: technicalParams?.RTE ?? 0,
        //     Q_max: technicalParams?.q_max ?? 0,
        //     Q_total: technicalParams?.q_total ?? 0,
        //     SOC_min: technicalParams?.SOC_min ?? 0,
        //     SOC_max: technicalParams?.SOC_max ?? 0,
        //     N_cycles_DA: technicalParams?.N_cycles_DA ?? 0,
        //     N_cycles_ID: technicalParams?.N_cycles_ID ?? 0,
        //     reaction_time: technicalParams?.reaction_time ?? 0,
        //
        //     // Economic parameters from form
        //     CAPEX_P: data.CAPEX_P,
        //     CAPEX_C: data.CAPEX_C,
        //     OPEX_P: data.OPEX_P,
        //     OPEX_C: data.OPEX_C,
        //     discount_rate: data.discount_rate,
        //     number_of_years: data.number_of_years,
        //
        //     // Provider from general data (default from curl example)
        //     provider: generalParams?.provider ?? "ESO",
        //
        //     // BSP parameters
        //     P_FCR_CAP_BSP: data.P_FCR_CAP_BSP,
        //     P_aFRRu_CAP_BSP: data.P_aFRRu_CAP_BSP,
        //     P_aFRRd_CAP_BSP: data.P_aFRRd_CAP_BSP,
        //     P_mFRRu_CAP_BSP: data.P_mFRRu_CAP_BSP,
        //     P_mFRRd_CAP_BSP: data.P_mFRRd_CAP_BSP,
        //     P_aFRRu_BSP: data.P_aFRRu_BSP,
        //     P_aFRRd_BSP: data.P_aFRRd_BSP,
        //     P_mFRRu_BSP: data.P_mFRRu_BSP,
        //     P_mFRRd_BSP: data.P_mFRRd_BSP,
        //     Sector: generalParams?.sector ?? "Pramonė",
        };

        // Store the economic parameters in location state before mutation
        location.state.economicParameters = {dsr: data};

        // {
        //     "Q_avg": 5.0,+
        //     "Q_min": 2.0,+
        //     "Q_max": 8.0,+
        //     "T_shift": 1,
        //     "reaction_time": 30,
        //     "CAPEX": 150.0,+
        //     "OPEX": 10.0,+
        //     "restoration_investment_needed": false,
        //     "restoration_investment_percentage": 0,
        //     "restoration_working_hours": 0,
        //     "hourly_power": {
        //     "0": 3.0, "1": 3.0, "2": 3.0, "3": 3.0,
        //         "4": 3.5, "5": 4.0, "6": 5.0, "7": 6.0,
        //         "8": 7.0, "9": 7.5, "10": 7.5, "11": 7.0,
        //         "12": 6.5, "13": 6.5, "14": 7.0, "15": 7.5,
        //         "16": 7.0, "17": 6.5, "18": 6.0, "19": 5.5,
        //         "20": 5.0, "21": 4.5, "22": 4.0, "23": 3.5
        // },
        //     "discount_rate": 0,+
        //     "number_of_years": 10,+
        //     "provider": "Litgrid",+
        //     "P_aFRRu_CAP_BSP": 0,
        //     "P_aFRRd_CAP_BSP": 0,
        //     "P_mFRRu_CAP_BSP": 0,
        //     "P_mFRRd_CAP_BSP": 0,
        //     "P_aFRRu_BSP": 0,
        //     "P_aFRRd_BSP": 0,
        //     "P_mFRRu_BSP": 0,
        //     "P_mFRRd_BSP": 0,
        //     "Sector": "Pramonė",+
        //     "produktai": {
        //     "aFRRu": true,
        //         "aFRRd": true,
        //         "mFRRu": true,
        //         "mFRRd": true
        // }
        // }

        mutate({
            parameters: JSON.stringify(parameters)
        });

        navigate({
            to: "/summary-of-results-dsr",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: {dsr: data},
            },
        })
    }

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-dsr",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        });
    }
    

    return (
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={{}}>
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

            <FormInput name="aFRRu1" title='aFRRu' defaultValue='0'/>
            <FormInput name="aFRRd1" title='aFRRd' defaultValue="0"/>
            <FormInput name="mFRRu1" title='mFRRu' defaultValue="0"/>
            <FormInput name="mFRRd1" title='mFRRd' defaultValue="0"/>

            <div style={{
                fontSize: '32px',
                marginTop: '48px',
            }}>
                Minimali siūloma kaina už balansavimo energiją:
            </div>

            <FormInput name="aFRRu2" title='aFRRu' defaultValue='0'/>
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