import { createFileRoute } from "@tanstack/react-router"
import { SummaryOfResultsBeksPage } from "@/features/beks/summary/summary-of-results-beks-page.tsx"

export const Route = createFileRoute("/summary-of-results-beks")({
    component: SummaryOfResultsBeksPage,
})
