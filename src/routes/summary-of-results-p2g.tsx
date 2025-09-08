import {createFileRoute} from '@tanstack/react-router'
import {SummaryOfResultsP2gPage} from "../pages/summary-of-results-p2g-page";
import {ErrorPage} from "../pages/error";

export const Route = createFileRoute('/summary-of-results-p2g')({
    component: SummaryOfResultsP2gPage,
    errorComponent: ErrorPage,
})
