import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsP2gPage } from "@/features/p2g/summary"
import { ErrorPage } from "@/pages/error"

export const Route = createFileRoute("/summary-of-results-p2g")({
    component: SummaryOfResultsP2gPage,
    errorComponent: ErrorPage,
})
