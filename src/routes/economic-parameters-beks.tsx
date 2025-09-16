import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersBeksPage } from "../features/beks/economical/economic-parameters-beks-page"

export const Route = createFileRoute("/economic-parameters-beks")({
    component: EconomicParametersBeksPage,
})
