import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "@/components/layout";
import {EconomicalParametersDsrForm} from "./economical-parameters-dsr-form.tsx";

export const EconomicParametersDsrPage = () => {
    const location = useLocation();

    const technicalParameters = location?.state.technicalParameters?.dsr;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/dsr/technical-parameters" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersDsrForm/>    
        </Layout>
    )
}