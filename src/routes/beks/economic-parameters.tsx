import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersBeksPage } from "@/features/beks/economical/economic-parameters-beks-page.tsx"

export const Route = createFileRoute("/beks/economic-parameters")({
    component: EconomicParametersBeksPage,
})
