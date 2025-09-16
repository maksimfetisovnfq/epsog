import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsP2gPage } from "@/features/p2g/summary"
import { ErrorPage } from "@/pages/error"

export const Route = createFileRoute("/p2g/summary-of-results")({
    component: SummaryOfResultsP2gPage,
    errorComponent: ErrorPage,
})
