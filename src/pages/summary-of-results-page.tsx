import {Navigate, useLocation} from "@tanstack/react-router";
import {SummaryOfResultsForm} from "../features/summary-of-results";
import {Layout} from "../components/layout/layout.tsx";

export const SummaryOfResultsPage = () => {
    const location = useLocation();

    const dsrEconomicalParameters = location?.state.economicParameters?.dsr;

    if (!dsrEconomicalParameters) {
        return <Navigate to="/economic-parameters-dsr" state={location.state} />
    }

    return (
        <Layout>
            <SummaryOfResultsForm/>
        </Layout>
    )
}