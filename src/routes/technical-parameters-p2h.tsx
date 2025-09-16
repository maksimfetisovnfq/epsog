import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersP2hPage } from "@/features/p2h/technical"

export const Route = createFileRoute("/technical-parameters-p2h")({
    component: TechnicalParametersP2hPage,
})