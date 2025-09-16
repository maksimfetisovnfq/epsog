import { useIsMutating } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsP2hView } from "./summary-of-results-p2h-view.tsx"

export const SummaryOfResultsP2hPage = () => {
    const location = useLocation()
    const p2hEconomicalParameters = location?.state.economicParameters?.p2h
    const isMutating = useIsMutating({ mutationKey: ["p2h"] })

    if (!p2hEconomicalParameters) {
        return <Navigate to="/p2h/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    return <Layout>
        <SummaryOfResultsP2hView />
    </Layout>
}
