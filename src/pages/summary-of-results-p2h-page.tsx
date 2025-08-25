import {useIsMutating} from '@tanstack/react-query'
import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "../components/layout/layout.tsx";
import {SummaryOfResultsBeksForm} from "../features/summary-of-results-beks";

export const SummaryOfResultsP2hPage = () => {
    const location = useLocation();
    const p2hEconomicalParameters = location?.state.economicParameters?.p2h;
    const isMutating = useIsMutating({mutationKey: ['p2h']});


    if (!p2hEconomicalParameters) {
        return <Navigate to="/economic-parameters-p2h" state={location.state}/>
    }

    if (isMutating) return "Loading...";

    return (
        <Layout>
            <SummaryOfResultsBeksForm/>
        </Layout>
    )
}