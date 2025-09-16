import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersP2hPage } from "@/features/p2h/economical"

export const Route = createFileRoute("/p2h/economic-parameters")({
    component: EconomicParametersP2hPage,
})
