import {Form, FormInput} from "../../components/form";
import {type TechnicalParametersSchema, technicalParametersSchema} from "./technical-parameters-schema.ts";
import {useLocation, useNavigate} from "@tanstack/react-router";

export const TechnicalParametersForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    
    const handleSubmit = (data: TechnicalParametersSchema) => {
        navigate({
            to: "/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: data,
            },
        })
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={technicalParametersSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>

            <FormInput name="adfklajf"/>

            <button type="submit">sasamba</button>
        </Form>
    )
}