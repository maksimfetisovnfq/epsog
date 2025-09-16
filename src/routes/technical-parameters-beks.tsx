import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersBeksPage } from "../features/beks/technical/technical-parameters-beks-page"

export const Route = createFileRoute("/technical-parameters-beks")({
    component: TechnicalParametersBeksPage,
})
