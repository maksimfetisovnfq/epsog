import { Navigate, useLocation } from "@tanstack/react-router"
import { TechnicalParametersDsrForm } from "./technical-parameters-dsr-form"
import { Layout } from "@/components/layout"

export const TechnicalParametersDsrPage = () => {
    const location = useLocation()

    const generalData = location.state.generalData

    if (!generalData) {
        return <Navigate to="/general-data" state={location.state} />
    }

    return (
        <Layout>
            <TechnicalParametersDsrForm />
        </Layout>
    )
}
