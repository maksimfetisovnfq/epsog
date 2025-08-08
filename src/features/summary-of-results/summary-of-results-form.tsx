import {Form, FormInput} from "../../components/form";
import {type SummaryOfResultsSchema, summaryOfResultsSchema} from "./summary-of-results-schema.ts";
import {useLocation} from "@tanstack/react-router";

export const SummaryOfResultsForm = () => {
    const location = useLocation();

    const handleSubmit = (data: SummaryOfResultsSchema) => {
        console.log(data, location.state.generalData, location.state.technicalParameters, location.state.economicParameters);
    }
    
    return (
        <Form onSubmit={handleSubmit} validationSchema={summaryOfResultsSchema} defaultValues={{
            network: "",
        }}>
            <FormInput name="network"/>
            <button type="submit">Forward</button> summary DATA FORM
            
        </Form>
    )
}