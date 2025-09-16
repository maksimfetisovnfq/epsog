import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersP2hPage } from "@/features/p2h/technical"

export const Route = createFileRoute("/p2h/technical-parameters")({
    component: TechnicalParametersP2hPage,
})