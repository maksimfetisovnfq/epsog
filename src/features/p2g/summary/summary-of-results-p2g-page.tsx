import { useIsMutating, useMutationState } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsP2gView } from "./summary-of-results-p2g-view.tsx"
import { useSummaryP2g } from "./use-summary-p2g"

export const SummaryOfResultsP2gPage = () => {
    const location = useLocation()
    const p2gEconomicalParameters = location?.state.economicParameters?.p2g
    const isMutating = useIsMutating({ mutationKey: ["p2g"] })
    const p2gData = useSummaryP2g()
    
    const mutationError = useMutationState({
        filters: { mutationKey: ["p2g"] },
        select: (mutation) => mutation.state.error,
    })?.[0]
    
    if (!p2gEconomicalParameters) {
        return <Navigate to="/p2g/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    if (mutationError) {
        throw mutationError
    }

    if (!p2gData) {
        throw new Error("P2G summary data is not available")
    }
    
    return <Layout>
        <SummaryOfResultsP2gView />
    </Layout>   
}
