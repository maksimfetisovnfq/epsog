import {Form, FormInput} from "../../components/form";
import {type EconomicalP2hParametersSchema, economicalParametersSchema, } from "./economical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";
import Divider from "@mui/material/Divider";
import {GlobalStyles} from "@mui/material";
import {Button} from "../../ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const EconomicalParametersP2hForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = (data: EconomicalP2hParametersSchema) => {
        navigate({
            to: "/summary-of-results-p2h",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2h: data },
            },
        })
    }
    
    return (
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={{
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