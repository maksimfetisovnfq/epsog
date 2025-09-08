import {GlobalStyles} from "@mui/material";
import {useLocation, useNavigate} from "@tanstack/react-router";
import {Form} from "../../components/form";
import {FormNavigation} from "../../components/navigation/form-navigation";
import {defaultEconomicalParametersP2gSchema, economicalParametersP2gSchema,} from "./economical-parameters-p2g-schema";
import {useSubmitP2g} from "./use-submit-p2g";
import {EconomicalParametersP2gFields} from "./economical-parameters-p2g-fields";


export const EconomicalParametersP2gForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {submit} = useSubmitP2g()

    const handleBackward = () => {
        navigate({
            to: "/technical-parameters-p2g",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
            },
        });
    }

    return (
        <Form
            onSubmit={submit}
            validationSchema={economicalParametersP2gSchema}
            defaultValues={location.state?.economicParameters?.p2g || defaultEconomicalParametersP2gSchema}
        >
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

            <EconomicalParametersP2gFields/>

            <FormNavigation handleBackward={handleBackward}/>
        </Form>
    )
}