import {createFileRoute} from '@tanstack/react-router'
import {EconomicParametersP2hPage} from "../pages/economic-parameters-p2h-page";

export const Route = createFileRoute('/economic-parameters-p2h')({
    component: EconomicParametersP2hPage,
})
