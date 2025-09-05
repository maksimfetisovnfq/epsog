import {Form, FormInput} from "../../components/form";
import {type TechnicalP2hParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {GlobalStyles, styled} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Tooltip, {tooltipClasses, type TooltipProps} from "@mui/material/Tooltip";
import React from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const radioStyles = {
    '&.Mui-checked': {
        color: '#00EB8C',
    },
    '&:not(.Mui-checked)': {
        color: '#00EB8C',
    },
};

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

    const handleBackward = () => {
        navigate({ to: "/general-data" }); 
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={location.state?.technicalParameters?.p2h || {}}>
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
            
            <FormInput name="Q_max_HP" title='Q_max_HP (MW)' placeholder="2"/>
            <FormInput name="Q_yearly" title='Metinis šilumos energijos poreikis (MWh)' placeholder="13000000.00"/>
            
            <FormLabel id="demo-radio-buttons-group-label"
                       style={{color: "black", padding: 0, marginBottom: '12px', fontSize: '14px'}}>
                Pasirinkite galimą teikti reguliavimo paslaugą *
            </FormLabel>

            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{columnGap: '32px'}}
            >

                <div>
                    <FormControlLabel
                        value="first"
                        control={<Radio sx={radioStyles}/>}
                        label="Aukštyn"
                        sx={{verticalAlign: 'baseline', marginRight: '4px'}}
                    />

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
                            <div>
                                Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu
                                paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                            </div>
                        </div>}>
                        <InfoOutlineIcon style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                    </HtmlTooltip>
                </div>

                <div>
                    <FormControlLabel
                        value="second"
                        control={<Radio sx={radioStyles}/>}
                        label="Žemyn"
                        sx={{verticalAlign: 'baseline', marginRight: '4px'}}
                    />

                    <Tooltip title={
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
                            <div>
                                Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu
                                paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                            </div>
                        </div>}>
                        <InfoOutlineIcon style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                    </Tooltip>
                </div>

                <FormControlLabel value="third" control={<Radio sx={radioStyles}/>} label="Į abi psues"/>
            </RadioGroup>

            <Divider style={{marginTop: '48px', marginBottom: '48px'}}/>
            
            
            <FormInput name="H_HS" title='H_HS (m)' placeholder="12"/>
            <FormInput name="T_max_HS" title='T_max_HS (°C)' placeholder="85"/>
            <FormInput name="lambda_HS" title='lambda_HS (W/m·K)' placeholder="0.032"/>
            <FormInput name="dx_HS" title='dx_HS (m)' placeholder="0.25"/>
            <FormInput name="CAPEX_HP" title='CAPEX_HP (tūkst. EUR/MW)' placeholder="6000"/>
            <FormInput name="CAPEX_HS" title='CAPEX_HS (tūkst. EUR/m³)' placeholder="0.10"/>
            <FormInput name="OPEX_HP" title='OPEX_HP (tūkst. EUR/MW/m)' placeholder="300"/>
            <FormInput name="OPEX_HS" title='OPEX_HS (tūkst. EUR/m³/m)' placeholder="0.005"/>
            <FormInput name="T_HP" title='T_HP (°C)' placeholder="-10"/>
            <FormInput name="Q_max_BOILER" title='Q_max_BOILER (MW)' placeholder="3"/>
            <FormInput name="P_FUEL" title='P_FUEL (EUR/nm³)' placeholder="0.75"/>
            <FormInput name="q_FUEL" title='q_FUEL (kWh/nm³)' placeholder="9550"/>
            <FormInput name="eta_BOILER" title='eta_BOILER (%)' placeholder="98"/>
            <FormInput name="d_HS" title='d_HS (m)' placeholder="5"/>
            <FormInput name="discount_rate" title='discount_rate (%)' defaultValue="5"/>
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