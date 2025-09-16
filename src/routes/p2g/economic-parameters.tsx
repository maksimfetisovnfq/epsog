import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersP2gPage } from "@/features/p2g/economical"

export const Route = createFileRoute("/p2g/economic-parameters")({
    component: EconomicParametersP2gPage,
})
