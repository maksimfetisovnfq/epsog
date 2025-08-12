import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersBeksForm} from "../features/economical-parameters-beks/economical-parameters-beks-form";
import {Layout} from "../components/layout/layout.tsx";

export const EconomicParametersBeksPage = () => {
    const location = useLocation();

    const technicalParameters = location?.state.technicalParameters?.beks;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters-beks" state={location.state} />
    }

    return (
        <Layout>
            <EconomicalParametersBeksForm/>    
        </Layout>
    )
}