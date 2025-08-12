import {createFileRoute} from '@tanstack/react-router'
import {EconomicParametersDsrPage} from "../pages/economic-parameters-dsr-page";

export const Route = createFileRoute('/economic-parameters-dsr')({
    component: EconomicParametersDsrPage,
})
