import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsP2hPage } from "@/features/p2h/summary"

export const Route = createFileRoute("/summary-of-results-p2h")({
    component: SummaryOfResultsP2hPage,
})
