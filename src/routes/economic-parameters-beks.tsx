import {createFileRoute} from '@tanstack/react-router'
import {EconomicParametersBeksPage} from "../pages/economic-parameters-beks-page.tsx";

export const Route = createFileRoute('/economic-parameters-beks')({
    component: EconomicParametersBeksPage,
})
