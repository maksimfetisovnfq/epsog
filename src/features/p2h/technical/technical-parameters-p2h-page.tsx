import { Navigate, useLocation } from "@tanstack/react-router"
import { Layout } from "@/components/layout"
import { TechnicalParametersP2hForm } from "./technical-parameters-p2h-form"

export const TechnicalParametersP2hPage = () => {
    const location = useLocation()

    const generalData = location.state.generalData

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersP2hForm />
        </Layout>
    )
}
