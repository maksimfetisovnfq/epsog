import { useIsMutating } from "@tanstack/react-query"
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
    
    if (!beksEconomicalParameters) {
        return <Navigate to="/beks/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    if (!beksData) {
        throw new Error("Beks summary data is not available")
    }
    
    return <Layout>
        <SummaryOfResultsBeksView />
    </Layout>
}
