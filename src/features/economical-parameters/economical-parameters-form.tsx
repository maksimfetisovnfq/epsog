import {Form, FormInput} from "../../components/form";
import {economicalParametersSchema, type GeneralDataSchema} from "./economical-parameters-schema.ts";
import {useLocation} from "@tanstack/react-router";

export const EconomicalParametersForm = () => {
    const location = useLocation();
    const handleSubmit = (data: GeneralDataSchema) => {
        console.log(location.state.generalData, location.state.technicalParameters, data)
    }
    

    return (
        <Form onSubmit={handleSubmit} validationSchema={economicalParametersSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>

            <FormInput name="fewfewfewe"/>

            <button type="submit">Toliau</button>
        </Form>
    )
}