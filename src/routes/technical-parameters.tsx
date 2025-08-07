import {createFileRoute} from '@tanstack/react-router'
import {TechnicalParametersPage} from "../pages/technical-parameters-page";

export const Route = createFileRoute('/technical-parameters')({
    component: TechnicalParametersPage,
})