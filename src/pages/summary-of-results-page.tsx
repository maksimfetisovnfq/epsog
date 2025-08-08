import {Navigate, useLocation} from "@tanstack/react-router";
import {SummaryOfResultsForm} from "../features/summary-of-results";
import {Layout} from "../components/layout/layout.tsx";

export const SummaryOfResultsPage = () => {
    const location = useLocation();

    const economicalParameters = location.state.economicParameters;

    if (!economicalParameters) {
        return <Navigate to="/economic-parameters" state={location.state} />
    }

    return (
        <Layout>
            <SummaryOfResultsForm/>
        </Layout>
    )
}