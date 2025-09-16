import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsDsrPage } from "@/features/dsr/summary/summary-of-results-dsr-page.tsx"

export const Route = createFileRoute("/summary-of-results-dsr")({
    component: SummaryOfResultsDsrPage,
})