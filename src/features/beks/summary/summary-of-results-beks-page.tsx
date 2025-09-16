import { useIsMutating } from "@tanstack/react-query"
import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { Loader } from "@/ui/loader"
import { SummaryOfResultsBeksView } from "./summary-of-results-beks-view.tsx"

export const SummaryOfResultsBeksPage = () => {
    const location = useLocation()
    const beksEconomicalParameters = location?.state.economicParameters?.beks
    const isMutating = useIsMutating({ mutationKey: ["beks"] })

    if (!beksEconomicalParameters) {
        return <Navigate to="/beks/economic-parameters" state={location.state} />
    }

    if (isMutating) return <Loader />

    return <Layout>
        <SummaryOfResultsBeksView />
    </Layout>
}
