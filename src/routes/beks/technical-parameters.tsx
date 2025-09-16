import { createFileRoute } from "@tanstack/react-router"
import { TechnicalParametersBeksPage } from "@/features/beks/technical/technical-parameters-beks-page.tsx"

export const Route = createFileRoute("/beks/technical-parameters")({
    component: TechnicalParametersBeksPage,
})
