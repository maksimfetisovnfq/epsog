import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsDsrPage } from "@/features/dsr/summary/summary-of-results-dsr-page.tsx"

export const Route = createFileRoute("/dsr/summary-of-results")({
    component: SummaryOfResultsDsrPage,
})