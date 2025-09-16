import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsP2hPage } from "@/features/p2h/summary"

export const Route = createFileRoute("/p2h/summary-of-results")({
    component: SummaryOfResultsP2hPage,
})
