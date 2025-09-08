import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersP2gPage } from "@/features/p2g/technical"

export const Route = createFileRoute("/technical-parameters-p2g")({
    component: TechnicalParametersP2gPage,
})
