import { useIsMutating, useMutationState } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsDsrView } from "./summary-of-results-dsr-view"
import { useSummaryDsr } from "@/features/dsr/summary/use-summary-dsr.ts"

export const SummaryOfResultsDsrPage = () => {
    const location = useLocation()
    const dsrEconomicalParameters = location?.state.economicParameters?.dsr
    const isMutating = useIsMutating({ mutationKey: ["dsr"] })
    const dsrData = useSummaryDsr()
    
    const mutationError = useMutationState({
        filters: { mutationKey: ["dsr"] },
        select: (mutation) => mutation.state.error,
    })?.[0]
    
    if (!dsrEconomicalParameters) {
        return <Navigate to="/dsr/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    if (mutationError) {
        throw mutationError
    }

    if (!dsrData) {
        throw new Error("DSR summary data is not available")
    }
    
    return (
        <Layout>
            <SummaryOfResultsDsrView />
        </Layout>
    )
}
