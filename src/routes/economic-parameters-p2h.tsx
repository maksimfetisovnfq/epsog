import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersP2hPage } from "@/features/p2h/economical"

export const Route = createFileRoute("/economic-parameters-p2h")({
    component: EconomicParametersP2hPage,
})
