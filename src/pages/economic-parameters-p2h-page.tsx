import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersP2hForm} from "../features/economical-parameters-p2h/economical-parameters-p2h-form";
import {Layout} from "../components/layout/layout.tsx";

export const EconomicParametersP2hPage = () => {
    const location = useLocation();

    const technicalParameters = location?.state.technicalParameters?.p2h;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters-p2h" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersP2hForm/>    
        </Layout>
    )
}