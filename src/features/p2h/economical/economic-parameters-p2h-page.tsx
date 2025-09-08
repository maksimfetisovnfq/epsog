import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "@/components/layout";
import {EconomicalParametersP2hForm} from "./economical-parameters-p2h-form";

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