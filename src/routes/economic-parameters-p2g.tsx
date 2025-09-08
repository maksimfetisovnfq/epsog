import {createFileRoute} from '@tanstack/react-router'
import { EconomicParametersP2gPage } from "@/features/p2g/economical"

export const Route = createFileRoute('/economic-parameters-p2g')({
    component: EconomicParametersP2gPage,
})
