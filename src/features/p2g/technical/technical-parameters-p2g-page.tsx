import { Navigate, useLocation } from "@tanstack/react-router"
import { TechnicalParametersP2gForm } from "./technical-parameters-p2g-form"
import { Layout } from "@/components/layout"

export const TechnicalParametersP2gPage = () => {
    const location = useLocation()

    const generalData = location.state.generalData

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersP2gForm />
        </Layout>
    )
}
