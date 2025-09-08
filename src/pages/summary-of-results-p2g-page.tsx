import {useIsMutating} from '@tanstack/react-query'
import {Navigate, useLocation} from "@tanstack/react-router";
import {Layout} from "../components/layout/layout.tsx";
import {SummaryOfResultsBeksForm} from "../features/summary-of-results-beks";
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
            <SummaryOfResultsBeksForm/>
        </Layout>
    )
}