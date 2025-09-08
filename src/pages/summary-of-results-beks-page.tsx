import {useIsMutating} from '@tanstack/react-query'
import {Navigate, useLocation} from "@tanstack/react-router";
import {SummaryOfResultsBeksForm} from "../features/summary-of-results-beks/summary-of-results-beks-form";
import {Layout} from "../components/layout/layout.tsx";
import {Loader} from "../ui/loader";

export const SummaryOfResultsBeksPage = () => {
    const location = useLocation();
    const beksEconomicalParameters = location?.state.economicParameters?.beks;
    const isMutating = useIsMutating({mutationKey: ['beks']});


    if (!beksEconomicalParameters) {
        return <Navigate to="/economic-parameters-beks" state={location.state}/>
    }

    if (isMutating) return <Loader />

    return (
        <Layout>
            <SummaryOfResultsBeksForm/>
        </Layout>
    )
}