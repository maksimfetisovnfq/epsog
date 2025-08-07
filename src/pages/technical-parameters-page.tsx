import {Navigate, useLocation} from "@tanstack/react-router";
import {TechnicalParametersForm} from "../features/technical-parameters";

export const TechnicalParametersPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data"/>
    }

    return (
        <TechnicalParametersForm />
    )
}