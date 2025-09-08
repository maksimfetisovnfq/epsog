import {Form, FormInput} from "../../components/form";
import {
    type EconomicalP2hParametersSchema,
    economicalParametersP2hSchema,
} from "./economical-parameters-p2h-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {GlobalStyles} from "@mui/material";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useMutation} from "@tanstack/react-query";

const EconomicalParametersP2hFormContent = () => {
    return (
        <>
            <FormInput name="CAPEX_HP" title='CAPEX_HP' defaultValue="0"/>
            <FormInput name="OPEX_HP" title='OPEX_HP' defaultValue="0"/>
            <FormInput name="CAPEX_HS" title='CAPEX_HS' defaultValue="0"/>
            <FormInput name="OPEX_HS" title='OPEX_HS' defaultValue="0"/>
            <FormInput name="discount_rate" title='discount_rate' defaultValue="0"/>
            <FormInput name="number_of_years" title='number_of_years' defaultValue="0"/>

            <FormInput name="CAPEX_P" title='CAPEX_P' defaultValue="0"/>

            <FormInput name="P_FCR_CAP_BSP" title='P_FCR_CAP_BSP' defaultValue="0"/>
            <FormInput name="P_aFRRu_CAP_BSP" title='P_aFRRu_CAP_BSP' defaultValue="0"/>
            <FormInput name="P_aFRRd_CAP_BSP" title='P_aFRRd_CAP_BSP' defaultValue="0"/>
            <FormInput name="P_mFRRu_CAP_BSP" title='P_mFRRu_CAP_BSP' defaultValue="0"/>
            <FormInput name="P_mFRRd_CAP_BSP" title='P_mFRRd_CAP_BSP' defaultValue="0"/>

            <FormInput name="P_aFRRu_BSP" title='P_aFRRu_BSP' defaultValue="0"/>
            <FormInput name="P_aFRRd_BSP" title='P_aFRRd_BSP' defaultValue="0"/>
            <FormInput name="P_mFRRu_BSP" title='P_mFRRu_BSP' defaultValue="0"/>
            <FormInput name="P_mFRRd_BSP" title='P_mFRRd_BSP' defaultValue="0"/>
        </>
    )
}

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
    });

    const handleSubmit = (data: EconomicalP2hParametersSchema) => {
        const generalParams = location.state?.generalData;
        const technicalParams = location.state?.technicalParameters?.p2h;

        if (!generalParams || !technicalParams) return
        
        const payload = {
            "Q_yearly": technicalParams.Q_yearly,
            "Q_max_HP": technicalParams.Q_max_HP,
            "reaction_time_d": technicalParams.reaction_time_d,
            "reaction_time_u": technicalParams.reaction_time_u,
            "T_HP": technicalParams.T_HP,
            "Q_max_BOILER": technicalParams.Q_max_BOILER,
            "P_FUEL": technicalParams.P_FUEL,
            "q_FUEL": technicalParams.q_FUEL,
            "eta_BOILER": technicalParams.eta_BOILER,
            "d_HS": technicalParams.d_HS,
            "H_HS": technicalParams.H_HS,
            "T_max_HS": technicalParams.T_max_HS,
            "lambda_HS": technicalParams.lambda_HS,
            "dx_HS": technicalParams.dx_HS,
            "CAPEX_HP": data.CAPEX_HP,
            "CAPEX_HS": data.CAPEX_HS,
            "OPEX_HP": data.OPEX_HP,
            "OPEX_HS": data.OPEX_HS,
            "discount_rate": data.discount_rate, 
            "number_of_years": data.number_of_years,
            "provider": generalParams.provider,
            "P_FCR_CAP_BSP": data.P_FCR_CAP_BSP,
            "P_aFRRu_CAP_BSP": data.P_aFRRu_CAP_BSP,
            "P_aFRRd_CAP_BSP": data.P_aFRRd_CAP_BSP,
            "P_mFRRu_CAP_BSP": data.P_mFRRu_CAP_BSP,
            "P_mFRRd_CAP_BSP": data.P_mFRRd_CAP_BSP,
            "P_aFRRu_BSP": data.P_aFRRu_BSP,
            "P_aFRRd_BSP": data.P_aFRRd_BSP,
            "P_mFRRu_BSP": data.P_mFRRu_BSP,
            "P_mFRRd_BSP": data.P_mFRRd_BSP,
            "Sector": generalParams.sector,
            "County": generalParams.country,
            "produktai": technicalParams.produktai,
        }

        mutate({
            parameters: JSON.stringify(payload)
        });

        navigate({
            to: "/summary-of-results-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: {p2h: data},
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
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersP2hSchema}
              defaultValues={location.state?.economicParameters?.p2h || {}}>
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

            <EconomicalParametersP2hFormContent/>

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