import {createFileRoute} from '@tanstack/react-router'
import {SummaryOfResultsDsrPage} from "../pages/summary-of-results-dsr-page";

export const Route = createFileRoute('/summary-of-results-dsr')({
    component: SummaryOfResultsDsrPage,
})
