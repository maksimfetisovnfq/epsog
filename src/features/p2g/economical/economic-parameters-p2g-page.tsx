import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "@/components/layout";
import {EconomicalParametersP2gForm} from "./economical-parameters-p2g-form";

export const EconomicParametersP2gPage = () => {
    const location = useLocation();

    const technicalParameters = location?.state.technicalParameters?.p2g;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters-p2g" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersP2gForm/>    
        </Layout>
    )
}