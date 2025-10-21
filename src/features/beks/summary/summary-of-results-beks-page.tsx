import { useIsMutating, useMutationState } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsBeksView } from "./summary-of-results-beks-view"
import { useSummaryBeks } from "./use-summary-beks"

export const SummaryOfResultsBeksPage = () => {
    const location = useLocation()
    const beksEconomicalParameters = location?.state.economicParameters?.beks
    const isMutating = useIsMutating({ mutationKey: ["beks"] })
    const beksData = useSummaryBeks()
    
    // Access the mutation error
    const mutationError = useMutationState({
        filters: { mutationKey: ["beks"] },
        select: (mutation) => mutation.state.error,
    })?.[0]
    
    if (!beksEconomicalParameters) {
        return <Navigate to="/beks/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    // Handle error from mutation
    if (mutationError) {
        throw mutationError
    }

    if (!beksData) {
        throw new Error("Beks summary data is not available")
    }
    
    return <Layout>
        <SummaryOfResultsBeksView />
    </Layout>
}
