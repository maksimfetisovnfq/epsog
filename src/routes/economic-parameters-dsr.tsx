import {createFileRoute} from '@tanstack/react-router'
import { EconomicParametersDsrPage } from "@/features/dsr/economical"

export const Route = createFileRoute('/economic-parameters-dsr')({
    component: EconomicParametersDsrPage,
})
