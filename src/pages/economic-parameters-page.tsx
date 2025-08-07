import {Navigate, useLocation} from "@tanstack/react-router";
import {EconomicalParametersForm} from "../features/economical-parameters";

export const EconomicParametersPage = () => {
    const location = useLocation();

    const technicalParameters = location.state.technicalParameters;
    const generalData = location.state.generalData;
    
    if (!technicalParameters || !generalData) {
        return <Navigate to="/technical-parameters"/>
    }

    return (
        <EconomicalParametersForm/>
    )
}