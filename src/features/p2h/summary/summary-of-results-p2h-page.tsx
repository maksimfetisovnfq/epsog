import { useIsMutating, useMutationState } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsP2hView } from "./summary-of-results-p2h-view"
import { useSummaryP2h } from "./use-summary-p2h"

export const SummaryOfResultsP2hPage = () => {
    const location = useLocation()
    const p2hEconomicalParameters = location?.state.economicParameters?.p2h
    const isMutating = useIsMutating({ mutationKey: ["p2h"] })
    const p2hData = useSummaryP2h()

    const mutationError = useMutationState({
        filters: { mutationKey: ["p2h"] },
        select: (mutation) => mutation.state.error,
    })?.[0]

    if (!p2hEconomicalParameters) {
        return <Navigate to="/p2h/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    if (mutationError) {
        throw mutationError
    }

    if (!p2hData) {
        throw new Error("P2H summary data is not available")
    }

    return (
        <Layout>
            <SummaryOfResultsP2hView />
        </Layout>
    )
}
