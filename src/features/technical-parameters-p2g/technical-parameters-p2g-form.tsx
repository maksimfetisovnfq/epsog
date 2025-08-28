import {Form, FormInput} from "../../components/form";
import {type TechnicalP2gParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {GlobalStyles} from "@mui/material";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const TechnicalParametersP2gForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = (data: TechnicalP2gParametersSchema) => {
        navigate({
            to: "/economic-parameters-p2g",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { p2g: data },
            },
        })
    }

    const handleBackward = () => {
        navigate({ to: "/general-data" }); 
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={location.state?.technicalParameters?.p2g || {}}>
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
            <FormInput name="electrolyzer_electrical_power" title="Elektrolizerio elektrinė galia (MW)" defaultValue="1"/>
            <FormInput name="compressor_efficiency" title="Kompresoriaus naudingumo koeficientas (%)" defaultValue="80"/>
            <FormInput name="P_H2" title="P_H2 (EUR/kg)" defaultValue="3.50"/>
            <FormInput name="CAPEX" title="CAPEX (tūkst. EUR/MW)" defaultValue="2000"/>
            <FormInput name="OPEX" title="OPEX (tūkst. EUR/MW/m)" defaultValue="16"/>
            <FormInput name="discount_rate" title="discount_rate (%)" defaultValue="5"/>
            <FormInput name="number_of_years" title="number_of_years" defaultValue="10"/>
            <FormInput name="electrolyzer_efficiency" title="Elektrolizerio (elektra → vandenilis) naudingumo koeficientas (%)" defaultValue="50"/>
            <FormInput name="hydrogen_temperature" title="Pagamintų vandenilio dujų temperatūra (°C)" defaultValue="80"/>
            <FormInput name="hydrogen_pressure" title="Pagamintų vandenilio dujų slėgis (bar)" defaultValue="30"/>

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