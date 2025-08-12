import {createFileRoute} from '@tanstack/react-router'
import {EconomicParametersP2gPage} from "../pages/economic-parameters-p2g-page";

export const Route = createFileRoute('/economic-parameters-p2g')({
    component: EconomicParametersP2gPage,
})
