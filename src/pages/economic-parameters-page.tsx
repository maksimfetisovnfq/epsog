import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersForm} from "../features/economical-parameters";
import {Layout} from "../components/layout/layout.tsx";

export const EconomicParametersPage = () => {
    const location = useLocation();

    const technicalParameters = location.state.technicalParameters;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersForm/>    
        </Layout>
    )
}