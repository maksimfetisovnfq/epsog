import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersP2gForm} from "../features/economical-parameters-p2g/economical-parameters-p2g-form.tsx";
import {Layout} from "../components/layout/layout.tsx";

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