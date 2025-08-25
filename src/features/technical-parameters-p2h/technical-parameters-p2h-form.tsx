import {Form, FormInput} from "../../components/form";
import {type TechnicalP2hParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {GlobalStyles} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const TechnicalParametersP2hForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = (data: TechnicalP2hParametersSchema) => {
        navigate({
            to: "/economic-parameters-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { p2h: data },
            },
        })
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={{
        }}>
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
            <FormInput name="heatload" title='Metinis šilumos energijos poreikis (MWh)' defaultValue="13000000.00"/>
            <FormInput name="Q_max_HP" title='Q_max_HP (MW)' defaultValue="2"/>
            <FormInput name="H_HS" title='H_HS (m)' defaultValue="12"/>
            <FormInput name="T_max_HS" title='T_max_HS (°C)' defaultValue="85"/>
            <FormInput name="lambda_HS" title='lambda_HS (W/m·K)' defaultValue="0.032"/>
            <FormInput name="dx_HS" title='dx_HS (m)' defaultValue="0.25"/>
            <FormInput name="CAPEX_HP" title='CAPEX_HP (tūkst. EUR/MW)' defaultValue="6000"/>
            <FormInput name="CAPEX_HS" title='CAPEX_HS (tūkst. EUR/m³)' defaultValue="0.10"/>
            <FormInput name="OPEX_HP" title='OPEX_HP (tūkst. EUR/MW/m)' defaultValue="300"/>
            <FormInput name="OPEX_HS" title='OPEX_HS (tūkst. EUR/m³/m)' defaultValue="0.005"/>
            <FormInput name="T_HP" title='T_HP (°C)' defaultValue="-10"/>
            <FormInput name="Q_max_BOILER" title='Q_max_BOILER (MW)' defaultValue="3"/>
            <FormInput name="P_FUEL" title='P_FUEL (EUR/nm³)' defaultValue="0.75"/>
            <FormInput name="q_FUEL" title='q_FUEL (kWh/nm³)' defaultValue="9550"/>
            <FormInput name="eta_BOILER" title='eta_BOILER (%)' defaultValue="98"/>
            <FormInput name="d_HS" title='d_HS (m)' defaultValue="5"/>
            <FormInput name="discount_rate" title='discount_rate (%)' defaultValue="5"/>
            <FormInput name="number_of_years" title='number_of_years' defaultValue="10"/>

            <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>

            <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                <Button type="submit" startIcon={<ArrowBackIcon/>}>
                    Atgal
                </Button>
                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                    Toliau
                </Button>
            </div>
        </Form>
    )
}