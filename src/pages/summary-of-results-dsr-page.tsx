import {useIsMutating} from '@tanstack/react-query'
import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "../components/layout/layout.tsx";
import {SummaryOfResultsBeksForm} from "../features/summary-of-results-beks";

export const SummaryOfResultsDsrPage = () => {
    const location = useLocation();
    const dsrEconomicalParameters = location?.state.economicParameters?.dsr;
    const isMutating = useIsMutating({mutationKey: ['dsr']});


    if (!dsrEconomicalParameters) {
        return <Navigate to="/economic-parameters-dsr" state={location.state}/>
    }

    if (isMutating) return "Loading...";

    return (
        <Layout>
            <SummaryOfResultsBeksForm/>
        </Layout>
    )
}