import {Form, FormInput} from "../../components/form";
import {type GeneralDataSchema, generalDataSchema} from "./general-data-schema";
import {useNavigate} from "@tanstack/react-router";

export const GeneralDataForm = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (data: GeneralDataSchema) => {
        navigate({
            to: "/technical-parameters",
            state: {
                generalData: data,
            },
        })
    }

    return (
        <Form onSubmit={handleSubmit} validationSchema={generalDataSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>

            <FormInput name="fewfewfewe"/>

            <button type="submit">Toliau</button>
        </Form>
    )
}