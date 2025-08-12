import {Navigate, useLocation} from "@tanstack/react-router";
import {TechnicalParametersDsrForm} from "../features/technical-parameters-dsr/technical-parameters-dsr-form";
import {Layout} from "../components/layout/layout.tsx";

export const TechnicalParametersDsrPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersDsrForm />
        </Layout>
        
    )
}