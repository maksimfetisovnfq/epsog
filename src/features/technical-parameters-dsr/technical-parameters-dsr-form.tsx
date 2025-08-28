import {Form, FormInput} from "../../components/form";
import {type TechnicalDsrParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {GlobalStyles} from "@mui/material";

export const TechnicalParametersDsrForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (data: TechnicalDsrParametersSchema) => {

        navigate({
            to: "/economic-parameters-dsr",
            state: {
                generalData: location.state.generalData,
                technicalParameters: {dsr: data},
            },
        })
    }

    const handleBackward = () => {
        navigate({ to: "/general-data" }); 
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={location.state?.technicalParameters?.dsr || {}}>
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
            <FormInput name="q_avg" title='Q_avg - Average power (MW)' defaultValue='10.00 MW'/>
            <FormInput name="q_min" title='Q_min - Minimum power (MW)' defaultValue="5.00 MW"/>
            <FormInput name="q_max" title='Q_max - Maximum power (MW)' defaultValue="15.00 MWh"/>
            <FormInput name="CAPEX" title='CAPEX (tūkst. EUR/MW)' defaultValue="150.00 EUR/MW"/>
            <FormInput name="OPEX" title='OPEX (tūkst. EUR/MW/year)' defaultValue="10.00 EUR/MW/year"/>
            <FormInput name="discount_rate" title='discount_rate (%)' defaultValue="5.00 %"/>
            <FormInput name="number_of_years" title='number_of_years' defaultValue="10"/>

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