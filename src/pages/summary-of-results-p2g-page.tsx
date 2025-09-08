import {useIsMutating} from '@tanstack/react-query'
import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "../components/layout/layout.tsx";
import {SummaryOfResultsP2g} from "../features/summary-of-results-p2g";
import {Loader} from "../ui/loader";

export const SummaryOfResultsP2gPage = () => {
    const location = useLocation();
    const p2gEconomicalParameters = location?.state.economicParameters?.p2g;
    const isMutating = useIsMutating({mutationKey: ['p2g']});
    
    if (!p2gEconomicalParameters) {
        return <Navigate to="/economic-parameters-p2g" state={location.state}/>
    }

    if (isMutating) return <Loader />;
    
    return (
        <Layout>
            <SummaryOfResultsP2g/>
        </Layout>
    )
}