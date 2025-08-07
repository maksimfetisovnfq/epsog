import {createFileRoute} from '@tanstack/react-router'
import {SummaryOfResultsPage} from "../pages/summary-of-results-page";

export const Route = createFileRoute('/summary-of-results')({
    component: SummaryOfResultsPage,
})

