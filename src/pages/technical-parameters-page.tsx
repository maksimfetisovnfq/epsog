import {Navigate, useLocation} from "@tanstack/react-router";
import {TechnicalParametersForm} from "../features/technical-parameters";
import {Layout} from "../components/layout/layout.tsx";

export const TechnicalParametersPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersForm />
        </Layout>
        
    )
}