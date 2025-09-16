import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersP2gPage } from "@/features/p2g/technical"

export const Route = createFileRoute("/p2g/technical-parameters")({
    component: TechnicalParametersP2gPage,
})
