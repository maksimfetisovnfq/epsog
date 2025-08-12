import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersDsrForm} from "../features/economical-parameters-dsr/economical-parameters-dsr-form.tsx";
import {Layout} from "../components/layout/layout.tsx";

export const EconomicParametersDsrPage = () => {
    const location = useLocation();

    const technicalParameters = location?.state.technicalParameters?.dsr;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters-dsr" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersDsrForm/>    
        </Layout>
    )
}