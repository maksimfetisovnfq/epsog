import { createFileRoute } from "@tanstack/react-router"
import { EconomicParametersDsrPage } from "@/features/dsr/economical"

export const Route = createFileRoute("/dsr/economic-parameters")({
    component: EconomicParametersDsrPage,
})
