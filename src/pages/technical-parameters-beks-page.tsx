import {Navigate, useLocation} from "@tanstack/react-router";
import {TechnicalParametersBeksForm} from "../features/technical-parameters-beks/technical-parameters-beks-form";
import {Layout} from "../components/layout/layout.tsx";

export const TechnicalParametersBeksPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersBeksForm />
        </Layout>
        
    )
}