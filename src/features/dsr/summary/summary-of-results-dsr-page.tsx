import { useIsMutating } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsDsrView } from "./summary-of-results-dsr-view"

export const SummaryOfResultsDsrPage = () => {
    const location = useLocation()
    const dsrEconomicalParameters = location?.state.economicParameters?.dsr
    const isMutating = useIsMutating({ mutationKey: ["dsr"] })

    if (!dsrEconomicalParameters) {
        return <Navigate to="/dsr/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    return (
        <Layout>
            <SummaryOfResultsDsrView />
        </Layout>
    )
}
