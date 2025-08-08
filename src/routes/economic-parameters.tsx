import {createFileRoute} from '@tanstack/react-router'
import {EconomicParametersPage} from "../pages/economic-parameters-page";

export const Route = createFileRoute('/economic-parameters')({
    component: EconomicParametersPage,
})
